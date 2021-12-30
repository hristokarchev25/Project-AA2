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
    TextLink,
    LotusImg
} from './SignUpElements';

import white from '../../images/white.png';

function SignUp() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <LotusImg src={white} />
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Join Us!</FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='password'>Repeat Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <TextLink to="/signin">Already have an account?</TextLink>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp;