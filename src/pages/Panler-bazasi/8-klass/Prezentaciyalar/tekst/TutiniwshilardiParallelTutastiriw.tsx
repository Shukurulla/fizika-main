import { FaFileDownload } from "react-icons/fa";

export const TutiniwshilardiParallelTutastiriw = () => {
    const fileURL = 'https://docs.google.com/presentation/d/13zI3BiU8GOivwhcUHywnB15sM6UnqsO0zibUBOgunYM'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Tutınıwshılardı parallel tutastırıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}