import shopTwo from '../../images/shop2.jpg';
import matOne from '../../images/mat1.png'
import matTwo from '../../images/mat2.png'

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

const Mats = () => {
    return (
        <>
            <ServicesContainer id="mats">
                <ServicesH1>Yoga Mats Collection</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={shopTwo} />
                        <ServicesH2>Purple Yoga Mat</ServicesH2>
                        <ServicesP>29.99 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={matOne} />
                        <ServicesH2>PYRUS YOGA MAT</ServicesH2>
                        <ServicesP>155.64 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={matTwo} />
                        <ServicesH2>BAOBAB YOGA MAT</ServicesH2>
                        <ServicesP>160 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Mats;