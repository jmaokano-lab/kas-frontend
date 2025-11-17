import Banner from '@/components/home/Banner'
import Blog from '@/components/home/Blog'
import FeaturedProducts from '@/components/home/FeaturedProduct'
import Newsletter from '@/components/home/NewsLetter'
import StatsBar from '@/components/home/StartBar'
import Testimonial from '@/components/home/Testimonial'
import React from 'react'


const Home = () => {
  return (
    <div className='relative'>
      <Banner />
      <StatsBar></StatsBar>
      <FeaturedProducts></FeaturedProducts>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <div className='absolute left-12 -bottom-36 z-10'>
        <Newsletter></Newsletter>
      </div>

    </div>
  )
}

export default Home