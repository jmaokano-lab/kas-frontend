import Banner from '@/components/home/Banner'
import Blog from '@/components/home/Blog'
import FeaturedProducts from '@/components/home/FeaturedProduct'
import StatsBar from '@/components/home/StartBar'
import React from 'react'


const Home = () => {
  return (
    <div>
      <Banner/>
      <StatsBar></StatsBar>
      <FeaturedProducts></FeaturedProducts>
      <Blog></Blog>
    </div>
  )
}

export default Home