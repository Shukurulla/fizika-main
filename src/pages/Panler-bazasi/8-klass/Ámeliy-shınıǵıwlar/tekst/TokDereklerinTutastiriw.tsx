import { FaFileDownload } from "react-icons/fa";

export const TokDereklerinTutastiriw = () => {
    const fileURL = 'https://docs.google.com/document/d/1iHjU_klU11vy5SugygBOtoBImhNUafZZ'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Tok dereklerin tutastırıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}