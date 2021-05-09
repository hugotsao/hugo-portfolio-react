
import { jsPDF } from "jspdf";
import { Remarkable } from 'remarkable';

export const genPDF = async () => {
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
        y: 10
    });
}