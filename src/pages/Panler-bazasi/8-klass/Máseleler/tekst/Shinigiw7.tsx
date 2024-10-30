import { FaFileDownload } from "react-icons/fa";

export const Shinigiw7 = () => {
    const fileURL = 'https://docs.google.com/document/d/10iY5J9Jg503dW_HjQ18Iaby9ftF61lAe'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>7-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}