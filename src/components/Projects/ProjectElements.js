import styled from 'styled-components';

export const ProjectContainer = styled.div`
    color: #fff;
    background: linear-gradient(#FFE5D9, #FEC89A, #FFD7BA);
    box-shadow: inset #b06f6b75 1px 0px 20px 6px;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;
export const ProjectHeading = styled.h1`
    
    margin-top: 20px;
    justify-self: center;
    font-size: 50px;
    background: -webkit-linear-gradient(grey, black, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-shadow: #0000003d 2px 13px 11px 0px;
    margin-bottom: 15px;

`

export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* height: 860px; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const ProjectRow = styled.div`
    margin-top: 14px;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: left;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;

export const Column1 = styled.div`
    margin-top: 25px;
    margin-bottom: 15px;
    padding: 0 15px;
    margin-right: 25px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-top: 25px;
    margin-bottom: 15px;
    /* padding: 0 15px; */
    grid-area: col2;
`;

export const TextWrapper =styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;
export const ProjectLink = styled.a`
    font-size: 25px;
    margin-bottom: 15px;

`;



export const TopLine = styled.p`
    color: #FD745C;
    font-size: 22px;
    /* line-height: 16px; */
    font-weight: 600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 700;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    
   
   @media screen and (max-width: 480px){
       font-size: 32px;
   }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#010606')};

`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    height: 280px;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: #000000d1 1px 3px 7px 1px;
`;