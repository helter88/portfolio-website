import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


const DisplayCV = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl='./example.pdf' defaultScale={1.2}/>;
       </Worker>
    </>
  )
}

export default DisplayCV
