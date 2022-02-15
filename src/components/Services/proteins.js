/* import shopOne from '../../images/shop1.jpg';
import shopThree from '../../images/shop3.jpg';
import shopFour from '../../images/shop4.jpg'; */
import React, { Component } from 'react';
import ServiceCard from './ServiceCard';
import { db } from '../../utils/firebase';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper
} from './ServicesElements';

class Proteins extends Component {
    state = {
        proteins: null
    }

    componentDidMount() {
        db.collection('proteins')
            .get()
            .then(snapshot => {
                const proteins = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    proteins.push({ ...data, id: doc.id });
                })
                this.setState({ proteins: proteins });
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <>
                <ServicesContainer id="protein">
                    <ServicesH1>Protein Collection</ServicesH1>
                    <ServicesWrapper>
                        {
                            this.state.proteins && this.state.proteins.map((protein, index) => {
                                return (
                                    <ServiceCard key={index} {...protein} />
                                )
                            })
                        }

                        {/*  <ServicesCard>
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
                    </ServicesCard> */}
                    </ServicesWrapper>
                </ServicesContainer>
            </>
        )
    }
}

export default Proteins;