import { FaFileDownload } from "react-icons/fa";

export const Shinigiw28 = () => {
    const fileURL = 'https://docs.google.com/document/d/1Kk4jKrxIa2DBeXNgoJt20rbhnVAHonm4'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>28-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}