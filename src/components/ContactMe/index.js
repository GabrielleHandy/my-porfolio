import React from 'react';
import { ContactContainer, ContactHeading, ContactImg, ContactLink, ContactLinksContainer, ContactLogo, ContactWrap } from './ContactElements';

const ContactMe = () => {
    return (
    <ContactContainer id='contact'>
        <ContactHeading>Thanks for coming! Contact Me</ContactHeading>

        <ContactWrap>
        
        <ContactLinksContainer>
            <ContactLink target="_blank" rel="noreferrer" href="https://github.com/GabrielleHandy">
                <ContactLogo src={require("../../images/github-svgrepo-com.svg").default}/>
            </ContactLink>
            <ContactLink target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriellehandyswe/">
                <ContactLogo src={require("../../images/linkedin-svgrepo-com.svg").default} />
            </ContactLink>
            <ContactLink target="_blank" rel="noreferrer" href="mailto:gehandy123@gmail.com?subject=I%20want%20to%20hire%20you!%20 :)">
                <ContactLogo src={require('../../images/gmail-svgrepo-com.svg').default}/>
            </ContactLink>
            <ContactLink target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1aLVOuZKQPUiKOyBCLg137WT180HddUXbJefrqG_x8zM/edit?usp=sharing">
                <ContactLogo  src={require('../../images/resume-svgrepo-com.svg').default}/>
            </ContactLink>
        </ContactLinksContainer>
        <ContactImg src={require('../../images/contact-bg-image.svg').default}/>
        </ContactWrap>
        
    </ContactContainer>);
};

export default ContactMe;
