import React, { useState } from 'react'
import SearchIcon from "../images/searchIcon.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

// import { Link } from 'react-router-dom'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const navOptions = [
        "Categories",
        "Web Builders",
        "Today's Deal"
    ]

    return (
        <nav className=' bg-[#212731] p-2 '>
            <div className="flex justify-center items-center">
                <div className={`${showMenu === true ? "flex flex-col w-full absolute top-9 bg-[#212731]" : "hidden"} md:flex items-center space-x-20 `}>
                    <div className="searchBox flex border space-x-1 items-center p-2 bg-white rounded-[8px]">
                        <img src={SearchIcon} alt="" />
                        <input type="text" className="outline-none border-none " placeholder='search' />
                    </div>
                    <ul className='flex flex-col justify-center md:justify-normal md:flex-row text-[#D1D6DA] md:space-x-20 '>
                        {
                            navOptions.map((option, index) => (
                                // <Link to={option} key={index} className="cursor-pointer ">
                                <li className='cursor-pointer' key={index}>{option}</li>
                                // </Link>
                            ))
                        }
                    </ul>
                </div>

                {
                    showMenu ?
                        <IoMdClose className={`text-white text-2xl font-bold md:hidden`} onClick={() => setShowMenu(!showMenu)} />
                        :
                        <RxHamburgerMenu className={`text-white text-2xl font-bold md:hidden`} onClick={() => setShowMenu(!showMenu)} />
                }
            </div>
        </nav>
    )
}
