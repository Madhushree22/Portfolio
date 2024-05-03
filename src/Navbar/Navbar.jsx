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
                <LiaSuitcaseSolid style={{ color: "#7f5539", marginLeft: 20, fontSize: 20, marginTop: 5 }}  className='suitcase'/>
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
               <div className='open-icon'>
                    <GiHamburgerMenu fontSize={20} style={{ color: "#ffff" }} onClick={() => { setToggleMenu(true) }} className='navbar__open' />
               </div>
                {toggleMenu && (
                    <div className='navbar__smallscreen-overlay slide-bottom'>
                        <IoMdClose fontSize={20} style={{ color: "#ffff" }} onClick={() => setToggleMenu(false)} className='navbar__close' />
                        <ul className='navbar__smallscreen-links'>
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