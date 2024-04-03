import React, { useEffect, useRef } from 'react'
import CloudPdfViewer from "@cloudpdf/viewer";

export const AmeliyTekst8 = () => {
  const viewer = useRef<any>(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "ae9f569a-6727-422b-ac12-007dc2c66a5c",
        darkMode: false
      },
      viewer.current
    ).then((instance) => { });
  }, []);

  return (
    <div className="viewer" ref={viewer}></div>
  )
}