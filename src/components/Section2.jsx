import React from 'react'
import Square from './Square'

const Section2 = () => {
    return (
        <section className="section-2 ">
            <div className="squares flex flex-col gap-3 mt-10 mb-10
        sm:flex-row sm:gap-0
        ">
                <div className="squares1 flex flex-row justify-around w-full">
                    <Square text1="DESIGNERS" text2="150+" />
                    <Square text1="CLIENTS" text2="500+" />
                </div>
                <div className="squares2 flex flex-row justify-around w-full">
                    <Square text1="MASTERPIECES" text2="20K+" />
                    <Square text1="EVENTS" text2="50+" />
                </div>
            </div>

            <div className='flex flex-col gap-2
            md:flex-row
            '>
                <div className="textBox 
                p-10 bg-[#1E1E1E] rounded-xl
                md:w-1/2
                ">
                    <h2 className='text-xs font-medium'>ABOUT</h2>
                    <h1 className='mt-5 text-sm
                    lg:text-4xl lg:mt-10
                    '>WHERE FASHION MEETS FREEDOM</h1>
                    <div className='mt-2 text-[#b7b7b7] text-xs flex flex-col gap-5 leading-4.5
                    lg:flex-row lg:mt-5 
                    '>
                        <p>We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering a community of creativity and innovation,</p>
                        <p>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
                    </div>
                </div>
                <div className="imgBox 
                bg-[url('/Section2-img.jpg')] bg-cover bg-center w-full h-[60vh] rounded-xl
                md:w-1/2 md:h-auto
                "></div>
            </div>
        </section>
    )
}

export default Section2
// md:h-[73vh]
//                 lg:h-[75vh]