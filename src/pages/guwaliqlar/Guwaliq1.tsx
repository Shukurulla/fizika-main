import { FaFileDownload } from "react-icons/fa";

export const Guwaliq1 = () => {
    const fileURL = 'https://drive.google.com/file/d/1pnj2_QplGeviImwlPXyVcGbxZSnM6_Te'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=1pnj2_QplGeviImwlPXyVcGbxZSnM6_Te&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Fizika fanidan raqamli mobil glossariy</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}