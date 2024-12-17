import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import About from './About';
import Services from './Services';
import Counter from './Counter';

const Home = () => {
  return (
    <>
        <Header />
        <Hero />
        <About />
        <Services />
        {/* <Counter /> */}
    </>
  )
}

export default Home;