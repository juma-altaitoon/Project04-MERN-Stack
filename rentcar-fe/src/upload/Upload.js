import { useState } from "react";
import FileUpload from "react-material-file-upload";
import axios from "axios"

export default function App() {
    // const [file, setFile] = useState();
    // const [fileName, setFileName] = useState("");
 
    // const saveFile = (e) => {
    //     setFile(e.target.files[0]);
    //     setFileName(e.target.files[0].name);
    // };
 
    // const uploadFile = async (e) => {
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("fileName", fileName);
    //     console.log(file)
    //     // console.log(fileName)
    //     console.log(formData)
    //     try {
    //         const res = await axios.post(
    //             "http://localhost:4002/uploads",
    //         formData
    //     );
    //       console.log(res);
    //     } catch (ex) {
    //       console.log(ex);
    //     }
    // };


  // const [file, setFile] = useState([]);
  // const [fileName, setFileName] = useState([]);

  // const uploadFile = async (file) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   console.log(file)
  //   try {
  //     const res = await axios({
  //       method: "POST",
  //       url: "http://localhost:4002/uploads",
  //       data: formData,
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       },
  //       //  proxy: false,
  //         // {
  //         //   host: 'http://localhost:4002/',
  //         //   port: 4002
  //         // }
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const uploadFiles = async () => {
  //   console.log(files)
  //   const urls = [];
  //   for (const file of files) {
  //     console.log(file)
  //     const url = await uploadFile(file);
  //     console.log(url)
  //     urls.push(url);
  //   }
  //   console.log(urls);
  // };

  // const [newUser, setNewUser] = useState([]);
  // const [file, setFile] = useState([]);
  // const [fileName, setFileName] = useState([]);

  // const changeHandler = (e) => {
  //   const user = {...newUser};
  //   user[e.target.name] = e.target.value;
  //   console.log(user);
  //   setNewUser(user);
  //   setFile(e.target.files[0]);
  //   setFileName(e.target.files[0].name);       
  // } 
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(event.target)
  //   //console.log(files);
  //    uploadFile();
  // }
 // console.log(file)

 const [file, setFile] = useState();
 const [fileName, setFileName] = useState("");

 const saveFile = (e) => {
     setFile(e.target.files[0]);
     setFileName(e.target.files[0].name);
 };

 const uploadFile = async (e) => {
     const formData = new FormData();
     formData.append("file", file);
     formData.append("fileName", fileName);
     try {
         const res = await axios.post(
             "http://localhost:4002/uploads",
         formData
     );
       console.log(res);
     } catch (ex) {
       console.log(ex);
     }
 };

  return (
    <div className="App">
      <form>
      <h1>Documents Test</h1>
      <input type="file" name="file" onChange={saveFile} />
      {/* <input type="text" name="name" onChange={changeHandler} />
      <input type="text" name="email" onChange={changeHandler} /> */}

      {/* <FileUpload value={file} onChange={setFile} /> */}
      <button onClick={uploadFile}>Submit</button>
      </form>
    </div>
  );
}

