import { FaFileDownload } from "react-icons/fa";

export const TokKushi = () => {
    const fileURL = 'https://docs.google.com/presentation/d/1-IEP4RbgxAueytRrWToWn6n_-qJheHZZODo11aXGmSI'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Tok kúshi hám toktıń tıǵızlıǵı</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}