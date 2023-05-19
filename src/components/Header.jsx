import React from "react";
import { Link } from "react-router-dom";
import "../assets/img.svg";

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black">
      <Link to="/">
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b544a3e3c7c05753bcd_full_logo_white_RGB.png"
          alt=""
          className="w-38 h-12 object-contain"
        />
      </Link>
      <div className="hidden lg:flex space-x-6 text-white">
        <a>Download</a>
        <a>Download</a>
        <a>Download</a>
        <a>Download</a>
        <a>Download</a>
      </div>
    </header>
  );
}

export default Header;
