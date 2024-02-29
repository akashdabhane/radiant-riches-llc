import React from 'react'
import productImg from '../images/productImg.png'
import { FaChevronDown } from "react-icons/fa";
import Rating from './Rating';


export default function Card() {
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



    return (
        <div className='space-y-8'>
            {
                products.map((product) => (
                    <div className="grid grid-cols-4 w-full bg-white rounded-[12px] px-6 p-3 " key={product.id}>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <img className='w-[140px] h-[100px]' src={product.image} alt="" />
                            <h5>{product.name}</h5>
                        </div>

                        <div className="col-span-2">
                            <p className='headingAnddescription text-[#4B5665]'><b>{product.heading}</b> - {product.headingPara}</p>
                            <div className="">
                                <h3 className='font-semibold text-[16px] '>Main highlights</h3>
                                <p className='description text-[#4B5665] mx-5 font-[16px]'>{product.hightlight}</p>
                                <button className='text-[#1B88F4] flex items-center space-x-2'>
                                    <span>show more</span>
                                    <FaChevronDown className='text-xs ' />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <div className="w-40 bg-[#F3F9FF] rounded-b-[12px] text-center px-6 pb-4 space-y-1">
                                <span className='text-[#074786] text-[32px] font-medium'>{product.rating}</span>
                                <p className=''>
                                    {product.rating > 9.5 ? "Exceptional" : product.rating > 9 ? "Excellent" : "Good"}
                                </p>
                                <Rating rating={product.rating} />
                            </div>

                            <button className='w-full p-2  text-white bg-[#1B88F4] rounded-[12px] '>View</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
