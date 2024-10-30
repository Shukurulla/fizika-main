import { FaFileDownload } from "react-icons/fa";

export const Tema50 = () => {
    const fileURL = 'https://docs.google.com/document/d/1nvd36Od6JQUP6mwQ_0mEkiCbWlqWh_8-'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>50-tema. Máseleler sheshiw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}