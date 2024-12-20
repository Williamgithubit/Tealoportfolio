import React from 'react'
import Header from "./Header";
import Hero from "./Hero";
import About from './About';
import Services from './Services';
import Counter from './Counter';
import Testimonials from './Testimonials/Testimonials';
import Portfolio from './Portfolio';
import Annoucement from './Annoucement/Annoucement';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
        <Header />
        <Hero /> 
        <About />
        <Services />
        <Counter />
        <Portfolio />
        <Testimonials />
        <Annoucement />
        <Contact />
        <Footer />
    </>
  )
}

export default Home;