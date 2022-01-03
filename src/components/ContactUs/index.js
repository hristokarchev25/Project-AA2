import React from 'react';

import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    LotusImg,
    FormTextArea
} from './ContactUsEl';

import white from '../../images/white.png';

function ContactUs() {


    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <LotusImg src={white} />
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Send us a message!</FormH1>
                            <FormLabel htmlFor='name'>Full name</FormLabel>
                            <FormInput type='text' placeholder="Type full name here"  required />
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' placeholder="Type email here" required />
                            <FormLabel htmlFor='message'>Message</FormLabel>
                            <FormTextArea placeholder="Type your message here" required />
                            <FormButton type='button'>SUBMIT</FormButton>
                            <Text>Send us a message and we'll respond within 24 hours.</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ContactUs;