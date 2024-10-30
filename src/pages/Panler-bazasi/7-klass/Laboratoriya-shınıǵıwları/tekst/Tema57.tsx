import { FaFileDownload } from "react-icons/fa";

export const Tema57 = () => {
    const fileURL = 'https://drive.google.com/file/d/1aQ1pakku9YNBF6xx6qtv97VkD1DRFPbP'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=1aQ1pakku9YNBF6xx6qtv97VkD1DRFPbP&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}