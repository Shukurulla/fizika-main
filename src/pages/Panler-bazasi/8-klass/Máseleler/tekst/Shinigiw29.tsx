import { FaFileDownload } from "react-icons/fa";

export const Shinigiw29 = () => {
    const fileURL = 'https://docs.google.com/document/d/1G2Z7RrTo0zZige9_wbacKpLg7L87aC1I'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>29-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}