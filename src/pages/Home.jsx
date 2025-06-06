import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from '../components/About';
import Services from '../components/Services';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials/Testimonials';
import Portfolio from '../components/Portfolio';
import Annoucement from '../components/Annoucement/Annoucement';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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