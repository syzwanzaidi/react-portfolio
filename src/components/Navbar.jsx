import React from 'react'
import logo from "../assets/ssLogo2.png";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/syazwanzaidi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>

          <a href="https://github.com/syzwanzaidi" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
          
        </div>
    </nav>
  )
};
