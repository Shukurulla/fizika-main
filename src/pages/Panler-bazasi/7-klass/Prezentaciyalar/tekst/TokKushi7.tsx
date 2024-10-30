import { FaFileDownload } from "react-icons/fa";

export const TokKushi7 = () => {
    const fileURL = 'https://drive.google.com/file/d/13OeSHprzceqhF3Ojb1kRGrTpcnat8rmQ'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=13OeSHprzceqhF3Ojb1kRGrTpcnat8rmQ&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Tok kúshi</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}