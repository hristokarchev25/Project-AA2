import React, { useState } from 'react';
import Video from '../../videos/video4.mp4';
/* import testImg from '../../images/test.png'; */

import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBG,
    VideoBG,
    /* ImageBG, */
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

function HeroSection({ isAuth, email }) {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted playsInline src={Video} type='video/mp4' />
                {/* <ImageBG  src={testImg}/> */}
            </HeroBG>
            <HeroContent>
                <HeroH1>Tell The Vision</HeroH1>
                
                {isAuth
                    ? (
                        <HeroP>Happy to have you {email}</HeroP>
                    ) : (
                        <>
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
                        </>
                    )}

            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
