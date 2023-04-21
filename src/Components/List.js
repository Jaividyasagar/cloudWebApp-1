import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import doc from '../images/doc.png'
import '../styles/listdata.css'
const List = () => {
    const [files, setfiles] = useState([])
    const userid = localStorage.getItem("userid");
    const navigation = useNavigate();
    const fetchData = () => {
        fetch(`https://cloudserver-2iuc.onrender.com/documents/${userid}`)
            .then(res => res.json())
            .then(data => { setfiles(data); })
    }
    useEffect(() => {
        fetchData();
    }, [userid, files])
    function DeleteHandle(name, id) {
        fetch("https://cloudserver-2iuc.onrender.com/Delete", {
            method: "DELETE",
            body: JSON.stringify({
                name: name,
                uid: userid
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => { })
        const f = files.filter((item) => item._id !== id && item.name !== name)
        setfiles(f);
    }
    const DownloadHandle = (name) => {
        fetch(`https://cloudserver-2iuc.onrender.com/${name}`).then(res => res.blob()).then(
            blob => {
                const bloburl = window.URL.createObjectURL(new Blob([blob]))
                var atag = document.createElement('a');
                atag.setAttribute("href", bloburl)
                atag.setAttribute("download", name);
                document.body.appendChild(atag);
                atag.click();
                atag.remove()
            }
        )

    }
    const renderItem = (item) => {
        const url = `https://cloudserver-2iuc.onrender.com/${item.fileName}`
        const myArray = item.filetype.split("/");
        var fname;
        const showDocument = (filename) => {
            navigation('/view', {
                state: {
                    url: url,
                    type: myArray[0],
                    filename: filename,
                }
            })
        }
        switch (myArray[0]) {
            case "image": fname = <img className="img" src={url} alt="" />; break;
            case "video": fname = <video className="img" controls muted><source src={url} type={item.filetype} /></video>; break;
            case "application": fname = <img className="imgdoc" src={doc} alt="" />; break;
        }
        return (
            <div key={item._id} className="list" >
                <div onClick={() => showDocument(item.fileName)} className="clickable-container">
                    {fname}
                    <div className="fileNameContainer"><p className="fileName">{item.fileName}</p></div>
                    
                </div>
                <div className="buttonContainer">
                    <button onClick={() => DownloadHandle(item.fileName)} className="download-btn">Download</button>
                    <button onClick={() => { DeleteHandle(item.fileName, item._id) }} className="delete-btn">Delete</button>
                </div>
            </div>
        )

    }
    return (
        <div className="container">
            <div style={{ height: "100px" }}></div>
            <NavBar />
            {/* {files.map(renderItem)} */}
            
            {files.length === 0 ? <><img src='forbidden.png' className="noFiles" /><h1 className="noFilesh1">No Files were uploaded 😶</h1></>: files.map(renderItem)}
        </div>
    )
}
export default List;