import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1} from './HeroElements'
import Video from '../../videos/video.mp4'
const HeroSection = () => {
    return (
        <HeroContainer id="main">
            <HeroBg>
                <VideoBg autoPlay loop muted src={require(Video)} type='video/mp4'>

                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Gabrielle Handy's Portfolio</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection