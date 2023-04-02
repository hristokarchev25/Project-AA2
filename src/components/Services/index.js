import React from 'react';
import IconOne from '../../images/shop.png';
import IconTwo from '../../images/search.png';
import IconThree from '../../images/gym.png';

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
                        <ServicesH2>The Infinity Lotus Shop</ServicesH2>
                        <ServicesP>Different types of protein powder, yoga mats and gym equipment!</ServicesP>
                        <LinkP to="/shop">Read More...</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconTwo} />
                        <ServicesH2>The Exercise Library</ServicesH2>
                        <ServicesP>Search through countless exercises</ServicesP>
                        <LinkP to="/searchWorkout">Read More...</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconThree} />
                        <ServicesH2>Gym Equipment</ServicesH2>
                        <ServicesP>The newest pieces of workout equipment for your home or gym!</ServicesP>
                        <LinkP to="/shop">Read More...</LinkP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;
