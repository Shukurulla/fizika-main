import { FaFileDownload } from "react-icons/fa";

export const Kalendar_tematikaliqa_joba = () => {
    const fileURL = 'https://docs.google.com/document/d/1vZaMONMYMDVWlOm7GOYKgMv7JbSjbw6o'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}