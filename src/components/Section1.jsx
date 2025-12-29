import React from 'react'
import DarkShade from './DarkShade'
import Box from './Box'

const Section1 = () => {
    return (
        <section className='section-1 '>
            <div className="hero 
            w-full h-[60vh] bg-[url('/Section1-bg-img.webp')] bg-cover bg-top rounded-xl relative
            sm:h-[65vh]
            md:h-[80vh]
            lg:h-[85vh]
            xl:h-[95vh]
            ">
                <DarkShade />

                <div className='absolute bottom-10 left-3
                md:left-10
                '>
                    <h1 className='text-4xl tracking-widest font-light
                    md:text-6xl
                    lg:text-7xl
                    xl:text-8xl
                    '>DESIGN</h1>
                    <div className='ml-12 mr-5
                    md:ml-20
                    lg:ml-24
                    xl:ml-31
                    '>
                        <h1 className='text-4xl tracking-widest font-light
                        md:text-6xl
                        lg:text-7xl
                        xl:text-8xl
                        '>& FREEDOM</h1>
                        <div className='mt-6 flex flex-col justify-between gap-3 
                        w-[75vw]
                        sm:flex-row
                        md:w-[64vw]
                        xl:w-[58vw]
                        '>
                            <p className='text-xs font-medium text-[#b7b7b7]
                            sm:w-[60%]
                            md:text-sm
                            xl:w-[45%]
                            '>Explore Independent Style by Embracing Uniqueness with Our Exclusive Designer Apparel</p>
                            <p className='text-xs text-[#b7b7b7]
                            '>
                                <i className="ri-arrow-down-long-line text-sm bg-[#7676767f] px-1.75 py-1 rounded-full border border-[#acacac] mr-2 inline-block active:scale-[0.9] transition-transform duration-300 ease-out cursor-pointer"></i>
                                LEARN MORE
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="boxesContainer 
            mt-2 flex flex-col gap-2
            lg:flex-row
            ">
                <div className="boxes1 
                flex flex-col gap-2
                sm:flex-row
                ">
                    <Box text1="INDEPENDENCY" text2="Explore the creativity of independent designers from around the globe." />
                    <Box text1="UNIQUITY" text2="Discover the charm of unique pieces that stand out effortlessly." />
                </div>

                <div className="boxes2 
                flex flex-col gap-2
                sm:flex-row
                ">
                    <Box text1="QUALITY" text2="Experience unparalleled craftsmanship and attention to detail." />
                    <Box text1="SUSTAINABILITY" text2="Embrace eco-conscious fashion choices without compromising on style." />
                </div>
            </div>

        </section>
    )
}

export default Section1
