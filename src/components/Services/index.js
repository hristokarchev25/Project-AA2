import React from 'react';
import IconOne from '../../images/App.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';


const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={IconOne} />
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>loremadawsfdafafafafaffaf</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconOne} />
                        <ServicesH2>Head2</ServicesH2>
                        <ServicesP>loremadawsfdafafafafaffaf</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconOne} />
                        <ServicesH2>Head3</ServicesH2>
                        <ServicesP>loremadawsfdafafafafaffaf</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
