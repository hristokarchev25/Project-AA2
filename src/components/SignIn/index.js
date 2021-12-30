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
    TextLink,
    LotusImg
} from './SignInElements';

import white from '../../images/white.png';

function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <LotusImg src={white} />
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in!</FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot your password?</Text>
                            <TextLink to="/signup">Don't have an account?</TextLink>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
