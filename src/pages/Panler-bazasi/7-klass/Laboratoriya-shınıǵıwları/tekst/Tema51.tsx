import { FaFileDownload } from "react-icons/fa";

export const Tema51 = () => {
    const fileURL = 'https://drive.google.com/file/d/10123fAwN0F8mx0-efXBNjAAezhlTuCIw'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=10123fAwN0F8mx0-efXBNjAAezhlTuCIw&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}