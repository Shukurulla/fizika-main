import { FaFileDownload } from "react-icons/fa";

export const Guwaliq2 = () => {
    const fileURL = 'https://drive.google.com/file/d/1byG7kFTmY_e-b0bShNYNUBtJj3d5NNk8'

    return (
        <div className="pdf-box">
            <a href={"https://drive.usercontent.google.com/u/0/uc?id=1byG7kFTmY_e-b0bShNYNUBtJj3d5NNk8&export=download"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Maktab fizikasining elektr bo'limidan raqamli virtual laboratoriya</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}