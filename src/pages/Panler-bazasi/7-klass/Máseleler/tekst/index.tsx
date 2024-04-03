import React, { useEffect, useRef } from 'react'
import CloudPdfViewer from "@cloudpdf/viewer";

export const MaseleTekst7: React.FC = () => {
  const viewer = useRef<any>(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "df4865a1-ea40-4ed7-821b-8c2a5b241108",
        darkMode: false
      },
      viewer.current
    ).then((instance) => { });
  }, []);

  return (
    <div className="viewer" ref={viewer}></div>
  )
}