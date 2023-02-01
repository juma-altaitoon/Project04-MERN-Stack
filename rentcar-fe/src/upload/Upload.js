import { useState } from "react";
import FileUpload from "react-material-file-upload";
import Axios from "axios"
import Button from '@mui/material/Button';

export default function App() {

const [files, setFiles] = useState([]);

  const handelSubmit = event => {
     event.preventDefault();
     const formData = new FormData();
     for (var i = 0; i < files.length; i++) { 
      formData.append("files", files[i]);
     }
     Axios.post("http://localhost:4002/uploads", formData, {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then((res) => {
        console.log("Files Uploaded Successfully");
    })
    .catch((err) => {
        console.log("Error Adding Record");
        console.log(err);
    })

 };
  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
      <h2>Upload Multiple Files</h2>
      <FileUpload value={files} onChange={setFiles} /> 
      <br />
      <input type="submit" name="submit" />
      </form>
      <br />
      <Button variant="outlined" href="http://localhost:4002/files">
      Server List Files
      </Button>    
    </div> 
  );
}
