import React from 'react'

const Rectangle = (props) => {
    return (
        <div className='rounded-xl bg-[#1E1E1E] p-10 flex flex-col gap-5'>
            <h1 className='text-sm'>{props.text1}</h1>

            <div className='flex flex-col gap-3
            sm:flex-row sm:justify-between sm:items-end
            md:flex-col md:items-start
            lg:flex-row lg:items-end
            '>
                <p className='text-xs text-[#b7b7b7] 
                sm:max-w-[70%]
                md:max-w-full
                lg:max-w-[70%]
                '>{props.text2}</p>
                <p className=' text-xs text-[#b7b7b7]'>
                    <i className="ri-arrow-right-up-long-line text-sm bg-[#7676767f] px-1.75 py-1 rounded-full border border-[#acacac] mr-2 inline-block active:scale-[0.9] transition-transform duration-300 ease-out cursor-pointer"></i>
                    EXPLORE
                </p>
            </div>
        </div>
    )
}
export default Rectangle

