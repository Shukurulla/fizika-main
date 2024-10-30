import { FaFileDownload } from "react-icons/fa";

export const KondensatorlardiParallelHamIzbeIzJalgaw = () => {
    const fileURL = 'https://docs.google.com/presentation/d/1wgq0oJTcV6Z192lOoibohEAQ3jvF9slnT_XkKbVW_XQ'

    return (
        <div className="pdf-box">
            <a href={fileURL + "/export?format=pptx"} title="Download this file" className="download-file">
                <FaFileDownload />
            </a>
            <h3>Kondensatorlardı parallel hám izbe-iz jalǵaw</h3>
            <iframe src={fileURL + "/preview"} className='docc' allow="autoplay"></iframe>
        </div>
    )
}