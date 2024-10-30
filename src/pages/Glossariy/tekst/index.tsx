import { FaFileDownload } from "react-icons/fa";
import './style.css'

export const GlossariyTekst = () => {
    const fileURL = 'https://docs.google.com/document/d/1BMjQV-Amkg9t8Ee1J2UBkONgPX1Jmqiv'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Glossariy</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}