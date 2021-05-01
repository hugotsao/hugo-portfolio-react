import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  enum ActivateStatus {
    home, work, education
  }
  const [active, setActive] = useState(ActivateStatus.home)
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
    </header>
  )
}

export default Navbar
