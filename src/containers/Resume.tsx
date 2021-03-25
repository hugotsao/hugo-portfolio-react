

import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
       
            <Document file="HugoResume.pdf" >
                <Page pageNumber={1} renderTextLayer={false} />
            </Document>
       
    )
}

export default Resume
