/* import shopTwo from '../../images/shop2.jpg';
import matOne from '../../images/mat1.png'
import matTwo from '../../images/mat2.png' */
import React, { Component } from 'react';
import MatsCard from './ServiceCard/matsCard';
import { db } from '../../utils/firebase';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper
} from './ServicesElements';

class Mats extends Component {
    state = {
        mats: null
    }

    componentDidMount() {
        db.collection('mats')
            .get()
            .then(snapshot => {
                const mats = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    mats.push({ ...data, id: doc.id });
                })
                this.setState({ mats: mats });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <ServicesContainer id="mats">
                    <ServicesH1>Yoga Mats</ServicesH1>
                    <ServicesWrapper>
                        {
                            this.state.mats && this.state.mats.map((mat, index) => {
                                return (
                                    <MatsCard key={index} {...mat} />
                                )
                            })
                        }

                        {/*  <ServicesCard>
                        <ServicesIcon src={shopTwo} />
                        <ServicesH2>Purple Yoga Mat</ServicesH2>
                        <ServicesP>29.99 BGN!</ServicesP>
                        <LinkP to="/#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={matOne} />
                        <ServicesH2>PYRUS YOGA MAT</ServicesH2>
                        <ServicesP>155.64 BGN!</ServicesP>
                        <LinkP to="/#">Buy</LinkP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={matTwo} />
                        <ServicesH2>BAOBAB YOGA MAT</ServicesH2>
                        <ServicesP>160 BGN!</ServicesP>
                        <LinkP to="/#">Buy</LinkP>
                    </ServicesCard> */}
                    </ServicesWrapper>
                </ServicesContainer>
            </>
        )
    }
}

export default Mats;