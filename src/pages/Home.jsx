import React from 'react'
import Footer from '../components/Footer'
import Card2 from '../components/Card2'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Info from '../images/info.png'
import Update from '../images/update.png'
import { FaChevronDown } from "react-icons/fa";
import productImg from '../images/productImg.png'
import Image from '../images/productImg.png'


export default function Home() {
    const products = [
        {
            id: 1,
            name: 'Builder 1',
            price: 100,
            image: productImg,
            rating: 9.4,
            heading: "WixPro 72-Inch Responsive Website Builder",
            headingPara: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            hightlight: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        },
        {
            id: 2,
            name: 'Builder 1',
            price: 100,
            image: productImg,
            rating: 9.4,
            heading: "WixPro 72-Inch Responsive Website Builder",
            headingPara: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            hightlight: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        },
        {
            id: 3,
            name: 'Builder 1',
            price: 100,
            image: productImg,
            rating: 9.4,
            heading: "WixPro 72-Inch Responsive Website Builder",
            headingPara: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
            hightlight: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
        },
    ]

    const products2 = [
        {
            id: 1,
            name: 'Webbuilder 1',
            description: "Computer  Modern clasic with wix support",
            price: 100,
            mrp: 3838,
            limited: true,
            image: Image,
        },
        {
            id: 2,
            name: 'Webbuilder 1',
            description: "Computer  Modern clasic with wix support",
            price: 100,
            mrp: 3838,
            limited: true,
            image: Image,
        },
        {
            id: 3,
            name: 'Webbuilder 1',
            description: "Computer  Modern clasic with wix support",
            price: 100,
            mrp: 3838,
            limited: true,
            image: Image,
        },

    ]

    const menu = [
        "Tools",
        "AWS Builder",
        "Start Build",
        "Build Supplies",
        "Tooling",
        "BlueHosting",
    ]

    return (
        <div>
            <Navbar />
            <div className="p-2 sm:px-24 md:px-40 xl:px-60 bg-[#FBFCFD] py-6 space-y-3">
                <h1 className='text-3xl mx-4 md:mx-0'>Best Website builders in the US</h1>

                <div className="border-y py-2 flex justify-between space-x-28 md:space-x-0 items-center text-[#4B5665] text-[14px] overflow-x-scroll md:overflow-x-auto">
                    <div className="flex items-center space-x-4 min-w-fit">
                        <p className='flex items-center space-x-1 min-w-fit'>
                            <img className='w-4' src={Update} alt="" />
                            <span>Last Updated - February 22, 2020</span>
                        </p>
                        <p className='flex items-center space-x-1 min-w-fit'>
                            <img className='w-4' src={Info} alt="" />
                            <span>Advertising Disclosure</span>
                        </p>
                    </div>
                    <p className='flex items-center space-x-1 min-w-fit'>
                        <span>Top Relevant</span>
                        <FaChevronDown className='text-xs ' />
                    </p>
                </div>

                <ul className="flex space-x-8 overflow-x-scroll md:overflow-x-auto">
                    {
                        menu.map((item, index) => (
                            <li key={index} className="p-2 rounded-[12px] bg-[#FFFFFF] text-[#4B5665] min-w-fit">{item}</li>
                        ))
                    }
                </ul>

                <Card products={products} />

                <h2 className='my-8 text-[24px] md:text-[32px] text-[#2C384A] mx-4 md:mx-0'>Related deals you might like for</h2>
                <Card2 products={products2} />
                <div className="flex flex-col mx-4 md:mx-0 space-y-2 md:flex-row justify-between py-8">
                    <div className="">
                        <h2 className='text-[24px] md:text-3xl  text-[#5C6874]'>Sign up and get exclusive special deals</h2>
                    </div>
                    <div className="">
                        <div className="flex ">
                            <input className="text rounded-l-[12px] p-2 border border-[#1B88F4] outline-[#1B88F4] w-60 md:w-80" type="text" />
                            <button className='bg-[#1B88F4] text-white rounded-r-[12px] p-2 '>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
