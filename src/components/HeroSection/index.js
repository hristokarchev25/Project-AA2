import React from 'react';
import Video from '../../videos/video3.mp4';
import { HeroContainer, HeroBG, VideoBG } from './HeroElements';

function HeroSection() {
    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBG>
          {/*   <HeroContent>
                <HeroH1>Text</HeroH1>
                <HeroP>
                    Sign up for a new acc today and receive ...
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent> */}
        </HeroContainer>
    )
}

export default HeroSection;
