import { FaFileDownload } from "react-icons/fa";

export const Shinigiw10 = () => {
    const fileURL = 'https://docs.google.com/document/d/1MI52LWaO8eXHkngecz2ui7xJ-0C5p9_W'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>10-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}