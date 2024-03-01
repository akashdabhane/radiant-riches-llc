import React from 'react'

export default function Card2({products}) {

    

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 space-y-2 md:space-y-0 justify-between'>
            {

                products.map((product) => (
                    <div className='bg-white flex flex-col justify-center items-center space-y-1 p-4 rounded-[12px] ' key={product.id}>
                        <img className='w-36 h-24 my-10 ' src={product.image} alt="img" />
                        <div className="space-y-1 my-2 ">
                            <div className="text-[14px] text-[#074786] space-x-2">
                                <span className='bg-[#F2F4F7] rounded-[8px] p-1'>{parseInt(((product.mrp - product.price) / product.mrp) * 100) + "% off"}</span>
                                <span className='bg-[#F2F4F7] rounded-[8px] p-1'>Limited time</span>
                            </div>
                            <h6 className='text-center text-[#626E79] text-[16px] font-semibold'>{product.name}</h6>
                            <p className='text-[#626E79] text-[18px]'>{product.description}</p>
                            <div className="space-x-2 ">
                                <span className='text-[#5C6874] text-[20px] font-medium'>${product.price}</span>
                                <span className="text-[#9FA9B3] text-[14px] ">${product.mrp}</span>
                                <span className='text-[#EF4C5D] text-[13px] '>( {parseInt(((product.mrp - product.price) / product.mrp) * 100)}% off )</span>
                            </div>
                            <button className='text-white bg-[#1B88F4] rounded-[12px] p-2 mx-2 w-full'>View Deal</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
