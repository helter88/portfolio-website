import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const DisplayCV = () => {
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer fileUrl='./../example.pdf'/>;
       </Worker>
    </>
  )
}

export default DisplayCV
