import { FaFileDownload } from "react-icons/fa";

export const Shinigiw18 = () => {
    const fileURL = 'https://docs.google.com/document/d/1TVxWNj5cvdXHW8Y_JfPDaSLbTiCvoVaW'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>18-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}