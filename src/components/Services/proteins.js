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
                    </ServicesWrapper>
                </ServicesContainer>
            </>
        )
    }
}

export default Proteins;