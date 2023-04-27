import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css'
import bins from '../images/bin.png'
const NavBar = () => {
    const navigation = useNavigate()
    const logoutHandler = () => {
        localStorage.removeItem("userid");
        navigation("/")
    }
    return (
        <>
            <nav className='nav'>
                <span>Cloud Storage</span>
                <ul>
                    <li><a href="/list#">Home</a></li>
                    <li><a onClick={() => navigation('/list')} className="items">Files</a></li>
                    <li><a onClick={() => navigation('/upload')} className="items">Upload</a></li>
                    <li><a href="/download-apk" className="items">Download App</a></li>
                    <li><a onClick={logoutHandler} className="items">Logout</a></li>
                    <li><a href="/bin" className="items">Bin🗑️</a></li>
                    <li><a className="items" href="/deactivate" id="deact-btn">Deactivate Account</a></li>
                    
                </ul>

                <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </nav>
        </>
    )
}
export default NavBar;