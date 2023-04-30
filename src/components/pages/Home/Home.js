import React from 'react'
import NavBar from '../../Navbar/Navbar'
import Hero from './Hero'
import Problem from './Problem'
import Solution from './Solution'
import Team from './Team'
import About from './About'
import Contact from './Contact'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <Hero />
        <Problem />
        <Solution />
        <About />
        <Team />
        <Contact />
        </>
    );
}

export default Home;
