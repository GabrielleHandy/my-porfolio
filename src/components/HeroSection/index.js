import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer id="main">
            <HeroBg>
                <VideoBg autoPlay loop muted src={"../../videos/video.mp4"} type='video/mp4'>

                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Gabrielle Handy's Portfolio</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection