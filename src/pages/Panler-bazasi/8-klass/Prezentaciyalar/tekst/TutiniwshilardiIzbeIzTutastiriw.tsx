import { FaFileDownload } from "react-icons/fa";

export const TutiniwshilardiIzbeIzTutastiriw = () => {
    const fileURL = 'https://docs.google.com/presentation/d/16p2IuHXR0mPjoaHiZdeJAGZUIbWhYvK85Mgz9Mhiybs'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Tutınıwshılardı izbe-iz tutastırıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}