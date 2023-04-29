import React from 'react';
import '../styles/loginPage.css'
import '../styles/Apk.css'
import LoginNavbar from './LoginNavbar';

const Apk = () => {
    return (
        <>
            <LoginNavbar />
            <center>
            <div className='download-container'>
            <h2>Download Our Cloud Mobile Application⬇️</h2>
            <button className='link'><a  href='https://drive.google.com/file/d/15mCa8aSk0dqp9DPjVIjPQcMI0Olm38CH/view' target='_blank'>Download Link</a></button>
            <h3 className='second'>Here's a Demo video for your reference!</h3>
            <div className='iframe'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4ftb69Hf4VQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='divider'>
            </div>
            </div>
            </center>
        </>
    )
}

export default Apk;
