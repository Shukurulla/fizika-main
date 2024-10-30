import { FaFileDownload } from "react-icons/fa";

export const Shinigiw13 = () => {
    const fileURL = 'https://docs.google.com/document/d/1UyAvorW9w9nZ3tur7IknKcCAkTcdr4QW'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>13-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}