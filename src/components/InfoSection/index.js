import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img} from './InfoElements';

const InfoSect = ({lightBg, id, imgStart, topLine, description, 
    headLine,lightText, darkText, alt, img}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart ={imgStart}>
                        <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText = {lightText}>{headLine}</Heading>
                             <Subtitle darkText = {darkText}>{description}</Subtitle>        
                         </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            
                            <Img src={img.default} alt={alt}/>
                            </ImgWrap> 
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSect

