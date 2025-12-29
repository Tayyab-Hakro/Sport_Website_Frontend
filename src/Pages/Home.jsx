import React from 'react'
import Navbar from '../Component/Navbar'
import Heropage from '../Component/Heropage'
import TrendingSchool from '../Component/TrendingSchool'
import Category from '../Component/Category'
import Banner from '../Component/Banner'
import SportArticles from '../Component/SportArticles'
import Footer from '../Component/Footer'
import Recentnews from '../Component/Recentnews'

function Home() {
  return (
    <div>
      <Navbar/>
      <Heropage/>
      <Category/>
      <TrendingSchool/>
      <Banner/>
      <Recentnews/>
        <SportArticles/>
        <Footer/>
    </div>
  )
}

export default Home
