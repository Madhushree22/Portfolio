import React from 'react'
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi"; //icons
import { IoMdClose } from "react-icons/io";
import { LiaSuitcaseSolid } from "react-icons/lia";
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className='navbar' >
            <div className="navleft">
                <LiaSuitcaseSolid style={{ color: "white", marginLeft: 20, fontSize: 20, marginTop: 5 }} />
                <p className='name'><a href='#'> Madhushree S</a></p>
            </div>
            <ul className='navbar__links'>
                <li><a href='#home'>HOME</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#skills'>SKILLS</a></li>
                <li><a href='#certificate'>CERTIFICATES & PROJECTS</a></li>
                <li><a href='#contact'>CONTACT</a></li>
            </ul>
            <div className='navbar__smallscreen' >
                <GiHamburgerMenu fontSize={20} style={{ color: "white" }} onClick={() => { setToggleMenu(true) }} className='navbar__open' />
                {toggleMenu && (
                    <div className='navbar__smallscreen-overlay slide-bottom' style={{
                        backgroundImage:
                            "url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/N13e7awhgiljgescq/videoblocks-bouncing-arrow-pointing-down-symbol-of-attention-with-copy-space_r59tly9fu_thumbnail-1080_01.png')",
                       
                    }}>
                        <ul className='navbar__smallscreen-links'>
                            <IoMdClose fontSize={20} onClick={() => setToggleMenu(false)} className='navbar__close' />
                            <li><a href='#home' onClick={() => setToggleMenu(false)}>HOME</a></li>
                            <li><a href='#about' onClick={() => setToggleMenu(false)}>ABOUT</a></li>
                            <li><a href='#skills' onClick={() => setToggleMenu(false)}>SKILLS</a></li>
                            <li><a href='#certificate' onClick={() => setToggleMenu(false)}>CERTIFICATES & PROJECTS</a></li>
                            <li><a href='#contact' onClick={() => setToggleMenu(false)}>CONTACT</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>


    )
}

export default Navbar