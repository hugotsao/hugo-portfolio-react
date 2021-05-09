import { useState } from 'react'
import { Link } from 'react-router-dom'
import { jsPDF } from "jspdf";
import { Remarkable } from 'remarkable';

const Navbar = () => {
  enum ActivateStatus {
    home, work, education
  }
  const [active, setActive] = useState(ActivateStatus.home)
  const genPDF = async () => {
    const md = new Remarkable();
    const exp_res = await fetch(`${process.env.PUBLIC_URL}/work-experience.md`)
    const exp_data = await exp_res.text()
    const exp = md.render(exp_data).replaceAll('<hr>', '')

    const edu_res = await fetch(`${process.env.PUBLIC_URL}/educations.md`)
    const edu_data = await edu_res.text()
    const edu = md.render(edu_data).replaceAll('<hr>', '')
    const doc = new jsPDF('p', 'pt', 'letter');
    const html = `<div class='pdf'><h4>Work Experiences</h4>${exp}<hr><h4>Educations</h4>${edu}</div>`
  
    doc.html(html, {
      callback: () => {
        doc.save('HugoResume.pdf')
      },
      x: 10,
      y:10
    });
  }
  return (
    <header className="mb-auto">
      <nav className="nav nav-pills nav-fill float-md-end">
        <Link className={"nav-item nav-masthead nav-link " + (active === ActivateStatus.home ? "active" : "")} to='/home' onClick={() => {
          setActive(ActivateStatus.home)
        }}>Home</Link>
        <Link className={"nav-item nav-masthead nav-link " + (active === ActivateStatus.work ? "active" : "")} to='/work' onClick={() => {
          setActive(ActivateStatus.work)
        }}>Working Experience</Link>
        <Link className={"nav-item nav-masthead nav-link " + (active === ActivateStatus.education ? "active" : "")} to='/educations' onClick={() => {
          setActive(ActivateStatus.education)
        }}>Educational Background</Link>
      </nav>
      <button className="btn" onClick={() => genPDF()}>Download my Resume</button>
    </header>
  )
}

export default Navbar
