import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
const Educations = () => {

    const [content, setContent] = useState("")
    useEffect(() => {
        const readFile = async () => {
            const data = await fetch("educations.md")
            const text = await data.text()
            setContent(text)
        }
        readFile();
    }, [])
    return (
        <main>
            <ReactMarkdown className="markdown-align-left">
                {content}
            </ReactMarkdown>
        </main>
    )
}

export default Educations
