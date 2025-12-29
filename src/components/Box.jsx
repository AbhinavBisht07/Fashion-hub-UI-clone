import React from 'react'

const Box = (props) => {
    return (
        <div className='bg-[#1E1E1E] p-10 rounded-xl
        sm:w-1/2
        '>
            <div className='flex flex-col gap-3'>
                <h1 className='text-sm'>{props.text1}</h1>
                <p className='text-[#b7b7b7] text-xs'>{props.text2}</p>
            </div>
            
            <p className='mt-8 text-xs text-[#b7b7b7]'>
                <i className="ri-arrow-right-up-long-line text-sm bg-[#7676767f] px-1.75 py-1 rounded-full border border-[#acacac] mr-2 inline-block active:scale-[0.9] transition-transform duration-300 ease-out cursor-pointer"></i>
                LEARN MORE
            </p>
        </div>
    )
}

export default Box
