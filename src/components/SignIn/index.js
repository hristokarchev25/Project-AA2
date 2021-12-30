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
    TextLink
} from './SignInElements';


function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Infinity Lotus</Icon>
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
