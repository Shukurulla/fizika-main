import { FaFileDownload } from "react-icons/fa";

export const Ampermetr = () => {
    const fileURL = 'https://drive.google.com/file/d/1RpwJyzruIHJix3wUbM65rWxYPBWq3Z_n'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Ampermetr járdeminde tutınıwshıdan ótip atırǵan tok kúshin ólshew</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}