import { FaFileDownload } from "react-icons/fa";

export const Test_8_klass = () => {
    const fileURL = 'https://docs.google.com/document/d/1Dqgr4yOassytf7rztbJDxjFS-fsOG4Gh'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}