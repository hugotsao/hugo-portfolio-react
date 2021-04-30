import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react';

const WorkExp = () => {
    const [workExp, setWorkExp] = useState('')
    useEffect(() => {
        const readFile = async () => {
            const data = await fetch('work-experience.md')
            const fileContent = await data.text()
            setWorkExp(fileContent)
        }
        readFile()
    }, [])
    return (
        <div className="markdown-align-left">
            <ReactMarkdown>{workExp}</ReactMarkdown>
        </div>
    )
}

export default WorkExp
