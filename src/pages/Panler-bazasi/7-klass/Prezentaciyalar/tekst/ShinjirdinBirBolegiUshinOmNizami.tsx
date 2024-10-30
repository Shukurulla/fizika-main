import { FaFileDownload } from "react-icons/fa";

export const ShinjirdinBirBolegiUshinOmNizami = () => {
    const fileURL = 'https://drive.google.com/file/d/16N9tMRI2TEv3MI6UnE3aEY8knD_aAmiI'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=16N9tMRI2TEv3MI6UnE3aEY8knD_aAmiI&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Shınjırdıń bir bólegi ushın Om nızamı</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}