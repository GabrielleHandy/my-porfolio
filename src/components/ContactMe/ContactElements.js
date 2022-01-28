import styled from 'styled-components';

export const ContactContainer = styled.div`

    color: #fff;
    background: linear-gradient(#FFE5D9, #FEC89A, #FFD7BA);
    box-shadow: inset #bf6e6b73 1px 1px 20px 6px;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }


`;
export const ContactImg = styled.img`
    height: 50%;
    justify-self: center;
    margin-top: 58px;


`;


export const ContactWrap = styled.div`

    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;



`;


export const ContactLinksContainer =  styled.div`
    border-bottom: 2px solid black;






`;


export const ContactLink = styled.a`





`;


export const ContactLogo = styled.img`

    height: 144px;
    margin: 25px;




`;


export const ContactHeading = styled.h1`
    
    margin-top: -34px;
    justify-self: center;
    font-size: 50px;
    background: -webkit-linear-gradient(grey, black, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-shadow: #0000003d 2px 13px 11px 0px;
    margin-bottom: 15px;

`;