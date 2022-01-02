import shopOne from '../../images/shop1.jpg';
import shopThree from '../../images/shop3.jpg';
import shopFour from '../../images/shop4.jpg';

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

const Proteins = () => {
    return (
        <>
            <ServicesContainer id="protein">
                <ServicesH1>Protein Powder Collection</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={shopOne} />
                        <ServicesH2>Whey Pure Fusion</ServicesH2>
                        <ServicesP>102 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={shopThree} />
                        <ServicesH2>Whey Gold Standard</ServicesH2>
                        <ServicesP>157 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={shopFour} />
                        <ServicesH2>Animal Whey</ServicesH2>
                        <ServicesP>128 BGN!</ServicesP>
                        <LinkP to="#">Buy</LinkP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Proteins;