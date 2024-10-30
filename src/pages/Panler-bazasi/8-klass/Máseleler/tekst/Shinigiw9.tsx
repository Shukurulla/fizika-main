import { FaFileDownload } from "react-icons/fa";

export const Shinigiw9 = () => {
    const fileURL = 'https://docs.google.com/document/d/12lrSqTKxg_jEbeNwhuvSceYAZKAnasgk'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=docx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>9-shınıǵıw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}