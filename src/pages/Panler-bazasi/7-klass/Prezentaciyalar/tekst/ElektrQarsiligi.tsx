import { FaFileDownload } from "react-icons/fa";

export const ElektrQarsiligi = () => {
    const fileURL = 'https://drive.google.com/file/d/1LOpbA0Ak4tUXmn76qh6TgtSZL0Kckyuu'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=1LOpbA0Ak4tUXmn76qh6TgtSZL0Kckyuu&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Elektr qarsılıǵı</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}