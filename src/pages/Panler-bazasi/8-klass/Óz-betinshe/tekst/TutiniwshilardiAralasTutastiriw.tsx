import { FaFileDownload } from "react-icons/fa";

export const TutiniwshilardiAralasTutastiriw = () => {
    const fileURL = 'https://docs.google.com/document/d/1jld9pTlLN0mxtTghYNCUCLO6jbF2N0qJ'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Tutınıwshılardı aralas tutastırıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}