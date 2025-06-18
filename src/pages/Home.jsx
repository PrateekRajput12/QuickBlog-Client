import React from 'react'
import NavBar from '../component/NavBar'
import Header from '../component/Header'
import BlogList from '../component/BlogList'
import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <BlogList />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home