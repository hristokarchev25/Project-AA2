import React, { useState } from 'react';
import Video from '../../videos/video2.mp4';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBG,
    VideoBG,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBG>
            <HeroContent>
                <HeroH1>Tell The Vision</HeroH1>
                <HeroP>
                    Sign up for a new account today!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
