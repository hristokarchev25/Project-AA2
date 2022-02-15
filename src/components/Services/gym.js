import React, { Component } from 'react';
import GymCard from './ServiceCard/gymCard';
import { db } from '../../utils/firebase';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper
} from './ServicesElements';


class Gym extends Component {
    state = {
        gym: null
    }

    componentDidMount() {
        db.collection('gym')
            .get()
            .then(snapshot => {
                const gym = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    gym.push({ ...data, id: doc.id });
                })
                this.setState({ gym: gym });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <ServicesContainer id="gym">
                    <ServicesH1>Gym Equipment</ServicesH1>
                    <ServicesWrapper>
                        {
                            this.state.gym && this.state.gym.map((gymMachine, index) => {
                                return (
                                    <GymCard key={index} {...gymMachine} />
                                )
                            })
                        }
                    </ServicesWrapper>
                </ServicesContainer>
            </>
        )
    }
}

export default Gym;