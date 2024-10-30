import { FaFileDownload } from "react-icons/fa";

export const Ommetr = () => {
    const fileURL = 'https://drive.google.com/file/d/1pgsZAQMELYiCatH8PhOEFV6tIEigrPFf'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Ommetr járdeminde rezistordıń qarsılıǵın ólshew</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}