import React from 'react';
import IconOne from '../../images/prot3.png';
import IconTwo from '../../images/yogaC3.png';
import IconThree from '../../images/gym.png';

//import shopTwo from '../../images/shop2.jpg';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    LinkP
} from './ServicesElements';


const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={IconOne} />
                        <ServicesH2>Protein Powder</ServicesH2>
                        <ServicesP>Different types of protein powder!</ServicesP>
                        <LinkP to="/shop">Read More</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconTwo} />
                        <ServicesH2>Yoga Mats</ServicesH2>
                        <ServicesP>The best yoga mats of 2022!</ServicesP>
                        <LinkP to="/shop">Read More</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconThree} />
                        <ServicesH2>Gym Equipment</ServicesH2>
                        <ServicesP>The newest pieces of workout equipment for your home or gym!</ServicesP>
                        <LinkP to="/shop">Read More</LinkP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;
