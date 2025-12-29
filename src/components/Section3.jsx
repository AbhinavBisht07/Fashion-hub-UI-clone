import React from 'react'
import Rectangle from './Rectangle'

const Section3 = () => {
    return (
        <section className='mt-12 flex flex-col gap-5'>
            <h1 className='text-2xl
            md:text-3xl
            '>OUR ADVANTAGES</h1>
            <div className='flex flex-col gap-2'>

                <div className="part1 
                flex flex-col gap-2
                md:flex-row-reverse
                ">
                    <div className="rectangles 
                    flex flex-col gap-2 h-auto
                    md:w-1/2
                    ">
                        <Rectangle text1="INDEPENDENT DESIGNERS" text2="Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers." />
                        <Rectangle text1="EXCLUSIVE & UNIQUITY" text2="Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity." />
                    </div>
                    <div className="image 
                    bg-[url('/section3-img1.jpg')] w-full h-[60vh] bg-cover bg-center rounded-xl
                    md:w-1/2 md:h-auto
                    "></div>
                </div>

                <div className="part2 
                flex flex-col gap-2
                md:flex-row
                ">
                    <div className="rectangles 
                    flex flex-col gap-2 
                    md:w-1/2
                    ">
                        <Rectangle text1="HIGH QUALITY" text2="Embrace superior craftsmanship with our meticulously curated. enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style." />
                        <Rectangle text1="ECO-FRIENDLY" text2="Join our commitment to sustainability with eco-friendly fashion options stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices." />
                    </div>
                    <div className="image 
                    bg-[url('/section3-img2.jpg')] w-full h-[60vh] bg-cover bg-center rounded-xl
                    md:w-1/2 md:h-auto
                    "></div>
                </div>
            </div>
        </section>
    )
}

export default Section3
