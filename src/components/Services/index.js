import React from 'react';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={IconOne}/>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>loremadawsfdafafafafaffaf</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconTwo}/>
                        <ServicesH2>Head2</ServicesH2>
                        <ServicesP>loremadawsfdafafafafaffaf</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={IconThree}/>
                        <ServicesH2>Head3</ServicesH2>
                        <ServicesP>loremadawsfdafafafafaffaf</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
