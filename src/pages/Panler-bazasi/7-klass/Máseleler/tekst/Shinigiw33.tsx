import { FaFileDownload } from "react-icons/fa";

export const Shinigiw33 = () => {
    const fileURL = 'https://docs.google.com/document/d/1as70jrsmPu__FJ9ZSRXge4rWWkztcakA'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>33-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}