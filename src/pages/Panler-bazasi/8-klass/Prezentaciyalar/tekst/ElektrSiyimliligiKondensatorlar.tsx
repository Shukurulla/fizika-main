import { FaFileDownload } from "react-icons/fa";

export const ElektrSiyimliligiKondensatorlar = () => {
    const fileURL = 'https://docs.google.com/presentation/d/1n6D1mq0qdYEhiA4iXWtQHH8dCjpPM6TP'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Elektr sıyımlılıǵı. Kondensatorlar</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}