import shopOne from '../../images/gym1.jpg';
import shopTwo from '../../images/gym2.jpg';
import shopThree from '../../images/gym3.jpg';

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


const Gym = () => {
    return (
        <>
            <ServicesContainer id="gym">
                <ServicesH1>Gym Equipment Collection</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={shopOne} />
                        <ServicesH2>Schwinn IC8 Indoor Cycle</ServicesH2>
                        <ServicesP>1400 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={shopTwo} />
                        <ServicesH2>SP.IC20 Indoor Studio Cycle</ServicesH2>
                        <ServicesP>750 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={shopThree} />
                        <ServicesH2>Taurus T9.9 Light Treadmill</ServicesH2>
                        <ServicesP>5000 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Gym;