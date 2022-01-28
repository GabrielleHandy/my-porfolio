import React, {useState} from 'react';
import ContactMe from '../components/ContactMe';
import HeroSection from '../components/HeroSection';
import InfoSect from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';
import TechStack from '../components/Tech-stack';


const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSect {...homeObjOne}/>
            <TechStack />
            <Projects/>
            <ContactMe/>

        </>
    )
}

export default Homepage
