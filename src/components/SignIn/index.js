import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
import { auth } from '../../utils/firebase';

function SignIn() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <LotusImg src={white} />
                    </Icon>
                    <FormContent>
                        <Form onSubmit={onLoginFormSubmitHandler}>
                            <FormH1>Sign in!</FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" required />

                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" required />

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
