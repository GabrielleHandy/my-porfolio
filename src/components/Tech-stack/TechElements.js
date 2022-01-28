import styled from 'styled-components';

export const TechContainer = styled.div`
    color: #fff;
    background: ${(lightBg) => (lightBg ? 'linear-gradient(#FFE5D9, #FFD7BA, #FEC89A)' : '#010606')};
    box-shadow: inset #bf6e6b73 1px 1px 20px 6px;
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const TechHeading = styled.h1`
    
    margin-top: -34px;
    justify-self: center;
    font-size: 50px;
    background: -webkit-linear-gradient(grey, black, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-shadow: #0000003d 2px 13px 11px 0px;
    margin-bottom: 15px;

`;


export const TechWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* height: 860px; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    padding: 74px 22px 0px 29px;
    justify-content: flex-start;
    
`;

export const TechRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    /* align-items: left; */
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col5 col4 col3 col2 col1'` : `'col1 col2 col3 col4 col5'`)};

    @media screen and (max-width: 768px){
        /* display: grid; */
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2 col3 col4 col5'` : `'col1 col2' 'col3 col4' 'col5 col5'`)};
    }
`;

export const TechColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
   
`;

export const TechColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`;

export const TechColumn3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
`;

export const TechColumn4 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col4;
`;

export const TechColumn5 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col5;
`;

// export const TextWrapper =styled.div`
//     max-width: 540px;
//     padding-top: 0;
//     padding-bottom: 60px;
// `;

export const TechType = styled.h1`
    color: white;
    font-size: 30px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 29px;
    margin-bottom: 36px;
    
`;

// export const Heading = styled.h1`
//     margin-bottom: 24px;
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: 600;
//     color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    
   
//    @media screen and (max-width: 480px){
//        font-size: 32px;
//    }
// `;

export const TechName = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 25px;
    line-height: 24px;
    
    color: white;
    
    /* ${({darkText}) => (darkText ? '#010606' : '#fff')}; */

`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    width: 100%;
`;

export const TechIcon = styled.img`
    height: 100px;
    /* margin: 0 0 10px 0;*/
    margin: 2px;
    
`;