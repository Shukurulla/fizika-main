import { FaFileDownload } from "react-icons/fa";

export const OmNizami = () => {
    const fileURL = 'https://docs.google.com/presentation/d/1sz8lePlT8UQGu69gkYR-lXc9Pbt84WY3BHgnTSroiMU'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Tolıq shınjır ushın Om nızamı</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}