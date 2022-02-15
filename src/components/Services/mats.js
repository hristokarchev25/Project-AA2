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
                    </ServicesWrapper>
                </ServicesContainer>
            </>
        )
    }
}

export default Mats;