import { FaFileDownload } from "react-icons/fa";

export const ElektrTogininJumisi = () => {
    const fileURL = 'https://docs.google.com/presentation/d/19xbca8CpHqWlCYj_cz4vruf8X67MI3f1-h0wzMD1PzI'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Elektr togınıń jumısı</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}