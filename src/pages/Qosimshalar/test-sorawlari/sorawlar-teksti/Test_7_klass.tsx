import { FaFileDownload } from "react-icons/fa";

export const Test_7_klass = () => {
    const fileURL = 'https://docs.google.com/document/d/1l424H34brlqDZ915jdXUD3dFrmOtfQaF'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}