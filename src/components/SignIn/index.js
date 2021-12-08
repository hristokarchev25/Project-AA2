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
    Text
} from './SignInElements';


function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Alpha</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account!</FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot your password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;
