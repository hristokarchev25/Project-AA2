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

function MatsDetails() {

    let [mat, setMats] = useState({});

    useEffect(() => {
        let path = window.location.pathname;
        let splited = path.split("/");
        let id = splited[4];
        db.collection("mats")
            .doc(id)
            .get()
            .then(res => setMats(res.data()))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <InfoContainer lightBg={false}>
                <InfoWrapper>
                    <InfoRow imgStart={true}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Product Details</TopLine>
                                <Heading lightText={true}>{mat.name}</Heading>
                                <Subtitle darkText={false}>{mat.description}</Subtitle>
                                <BtnWrap>
                                    <BtnHref
                                        href="#"
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
                                        Buy for {mat.price}
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
                                <Img src={mat.image} alt="Details photo" />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default MatsDetails;