import { useState } from "react";
import FileUpload from "react-material-file-upload";

export default function App() {
  const [files, setFiles] = useState([]);

  console.log(files)
  return (
    <div className="App">
      <h1>Documents Test</h1>
      <FileUpload value={files} onChange={setFiles} />
    </div>
  );
}

