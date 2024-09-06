import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

function App() {
  const [count, setCount] = useState(0);
  // htmlToImage.toBlob(document.getElementById('my-node'))
  // .then(function (blob) {
  //   if (window.saveAs) {
  //     window.saveAs(blob, 'my-node.png');
  //   } else {
  //    FileSaver.saveAs(blob, 'my-node.png');
  //  }
  // });
  const func = () =>
    htmlToImage
      .toJpeg(document.getElementById("my-node"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.png";
        // link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  return (
    <div id="my-node">
      <button onClick={func}>Download</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <img
        src={`https://demos-reel.s3.amazonaws.com/6591709d12b5aa8f0a75d28e.png`}
        className="logo"
        alt="Vite logo"
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
