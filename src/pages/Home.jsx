import React from 'react'
import Footer from '../components/Footer'
import Card2 from '../components/Card2'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home() {
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
            <div className="px-56 bg-[#FBFCFD]">
                <h1 className='text-3xl'>Best Website builders in the US</h1>

                <ul className="flex space-x-8 ">
                    {
                        menu.map((item, index) =>  (
                            <li key={index} className="p-2 rounded-[12px] bg-[#FFFFFF] text-[#4B5665] ">{item}</li>
                        ))
                    }
                </ul>

                <Card />

                <h2 className='my-8 text-[32px] text-[#2C384A] '>Related deals you might like for</h2>
                <Card2 />
                <div className="flex justify-between my-14">
                    <div className="">
                        <h2 className='text-3xl w-[400px] text-[#5C6874]'>Sign up and get exclusive special deals</h2>
                    </div>
                    <div className="">
                        <div className="flex ">
                            <input className="text rounded-l-[12px] p-2 border-[]" type="text" />
                            <button className='bg-[#1B88F4] text-white rounded-r-[12px] p-2 '>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
