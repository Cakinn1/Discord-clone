import React from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

// import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
      <Link to="/">
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b544a3e3c7c05753bcd_full_logo_white_RGB.png"
          alt=""
          className="w-34 h-12 object-contain"
        />
      </Link>
      <div className="hidden lg:flex space-x-6 text-white">
        <a className="link">Download</a>
        <a className="link">Why Discord?</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
      <div className="flex space-x-4">
        <button
          className="text-black bg-white  p-2 
        rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2x1
        hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap
        font-medium"
        >
          Login
        </button>
        <Bars3Icon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  )
}

export default Header;
