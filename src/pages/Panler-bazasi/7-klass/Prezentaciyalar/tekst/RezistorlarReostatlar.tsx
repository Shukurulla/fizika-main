import { FaFileDownload } from "react-icons/fa";

export const RezistorlarReostatlar = () => {
    const fileURL = 'https://drive.google.com/file/d/1CcfGaFN7PAQ1Wes6aQSWUl0cCzbpySub'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=1CcfGaFN7PAQ1Wes6aQSWUl0cCzbpySub&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Rezistorlar. Reostatlar</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}