import { FaFileDownload } from "react-icons/fa";

export const AvtorHaqqindaMagliwmat = () => {
    const fileURL = 'https://drive.google.com/file/d/1-SV2_lto8QNhcuwIPxerZLCbPQ9sBzPu'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=1-SV2_lto8QNhcuwIPxerZLCbPQ9sBzPu&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Avtor haqqında maǵlıwmat</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}