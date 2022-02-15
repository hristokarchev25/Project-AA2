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

function ProteinDetails() {

    let [protein, setProtein] = useState({});

    useEffect(() => {
        let path = window.location.pathname;
        let splited = path.split("/");
        let id = splited[3];
        db.collection("proteins")
            .doc(id)
            .get()
            .then(res => setProtein(res.data()))
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
                                <Heading lightText={true}>{protein.name}</Heading>
                                <Subtitle darkText={false}>{protein.description}</Subtitle>
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
                                       Buy for {protein.price}
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
                                <Img src={protein.image} alt="Details photo" />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ProteinDetails;