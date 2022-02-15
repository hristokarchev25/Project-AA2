import React from 'react';
import { db } from '../../utils/firebase';
import { useEffect, useState } from 'react';

import {
    Column2,
    Img,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    BtnHref,
    BtnLink
} from './detailsElements';

function GymDetails() {
    let [gym, setGym] = useState({});

    useEffect(() => {
        let path = window.location.pathname;
        let splited = path.split("/");
        let id = splited[4];
        db.collection("gym")
            .doc(id)
            .get()
            .then(res => setGym(res.data()))
            .catch(err => console.log(err));
    }, []);


    return (
        <>
            <InfoContainer lightBg={false}>
                <InfoWrapper>
                    <InfoRow imgStart={false}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Product Details</TopLine>
                                <Heading lightText={true}>{gym.name}</Heading>
                                <Subtitle darkText={false}>{gym.description}</Subtitle>
                                <BtnWrap>
                                    <BtnHref
                                        href={gym.link}
                                        smooth="true"
                                        duration={500}
                                        spy="true"
                                        exact="true"
                                        offset={-80}
                                        primary="true"
                                        dark="true"
                                        dark2="true"
                                        target="_blank"
                                    >
                                        Buy for {gym.price}
                                    </BtnHref>
                                </BtnWrap>
                                <BtnWrap>
                                    <BtnLink
                                        to="/shop"
                                        smooth="true"
                                        duration={500}
                                        spy="true"
                                        exact="true"
                                        offset={-80}
                                        primary="true"
                                        dark="true"
                                        dark2="true"
                                    >
                                        Back
                                    </BtnLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={gym.image} alt="Details photo" />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default GymDetails;