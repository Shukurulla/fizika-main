import { FaFileDownload } from "react-icons/fa";

export const ElektrTogininQuwatliligi = () => {
    const fileURL = 'https://docs.google.com/presentation/d/1R4OUtP4w8R2JpjkB7L0-Dv1fC7yD8OPXZj_VclXkVcE'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Elektr togınıń quwatlılıǵı</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}