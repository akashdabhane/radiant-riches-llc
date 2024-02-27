import React from 'react'
import SearchIcon from "../images/searchIcon.png"

export default function Navbar() {
    const navOptions = [
        "Categories",
        "Web Builders",
        "Today's Deal"
    ]

    return (
        <nav className=' bg-[#212731] p-2 '>
            <div className="flex justify-center ">
                <div className="flex items-center space-x-20">
                    <div className="searchBox flex border space-x-1 items-center p-2 bg-white rounded-[8px]">
                        <img src={SearchIcon} alt="" />
                        <input type="text" className="outline-none border-none " placeholder='search' />
                    </div>
                    <ul className='flex text-[#D1D6DA] space-x-20 '>
                        {
                            navOptions.map((option, index) => (
                                <li className='' key={index}>{option}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
