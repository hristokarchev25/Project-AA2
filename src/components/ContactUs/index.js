import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7y6ptef', 'template_jw07z6h', form.current, 'F6DpDCZFuE7vcLJRP');

        e.target.reset();
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <LotusImg src={white} />
                    </Icon>
                    <FormContent>
                        <Form ref={form} onSubmit={sendEmail}>
                            <FormH1>Send us a message!</FormH1>
                            <FormLabel htmlFor='name'>Full name</FormLabel>
                            <FormInput type='text' name='name' placeholder="Type full name here" required />
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' name='email' placeholder="Type email here" required />
                            <FormLabel htmlFor='message'>Message</FormLabel>
                            <FormTextArea name='message' placeholder="Type your message here" required />
                            <FormButton type='submit'>SUBMIT</FormButton>
                            <Text>Send us a message and we'll respond within 24 hours.</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default ContactUs;