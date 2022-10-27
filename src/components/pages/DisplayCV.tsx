
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import useScaleValue from '../../hooks/useScaleValue';



const DisplayCV = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const scaleValue = useScaleValue();

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl='./example.pdf' defaultScale={scaleValue}/>;
       </Worker>
    </>
  )
}

export default DisplayCV
