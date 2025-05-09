import React from 'react'
import her from  '../../assets/bckimg.jpeg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative'>
      <img 
      src={her} 
      alt='Pace' 
      className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-5 flex items-start justify-start'>
        <div className='text-left text-white p-6'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
            HAPPY <br /> SHOPPING!
          </h1>
          {/* <h2 className='text-lg text-yellow-400 md:text-3xl font-bold tracking-tighter mb-6'>
          Congratulations on your graduation from Pace University 
          </h2> */}
          <p className='text-2xl tracking-tighter md:text-lg mb-6'>
          Discover our premium collection of NPT watches, including fully customizable timepieces that reflect your unique style. From classic analog to smartwatches, each watch is crafted with precision and quality materials. Enjoy durability, free shipping, and a 2-year warranty—perfect for everyday wear or meaningful, personalized gifts.
          </p>
          <Link to='#' className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>
            Shop Now
          </Link>
        </div>
      </div>
    
    
    </section>
  )
}

export default Hero