import { FaFileDownload } from "react-icons/fa";

export const Reostat = () => {
    const fileURL = 'https://drive.google.com/file/d/10ZwICEwZmxh-5MF2DmTAwnZtSPvBVfGM'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Reostat járdeminde tok kúshin tártiplestiriw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}