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
    TextLink,
    LotusImg,
} from './SignUpElements';

import white from '../../images/white.png';
import { auth } from '../../utils/firebase';


const SignUp = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                history.push('/signin');
            })
            .catch(err => console.log(err));
    }


    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <LotusImg src={white} />
                    </Icon>
                    <FormContent>
                        <Form onSubmit={onRegisterSubmitHandler}>
                            <FormH1>Join Us!</FormH1>

                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Type your email" required />

                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password must be more than 6 symbols" required />

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
};

export default SignUp;