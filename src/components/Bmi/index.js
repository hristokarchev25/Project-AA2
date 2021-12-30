import React from 'react';
import { useState } from 'react';
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
} from './bmiElements';

function Bmi() {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState(0);

    const [status, setStatus] = useState('');

    function calcBmi() {
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);

        let bmiStatus = getStatus(bmi);
        setStatus(bmiStatus);
    }

    function getStatus(bmi) {
        if (bmi < 18.5) return "Underweight";
        else if (bmi >= 18.5 && bmi <= 25) return "Normal";
        else if (bmi > 25 && bmi <= 30) return "Overweight";
        else return "Obese";
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Infinity Lotus</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Body Mass Index Calculator!</FormH1>
                            <FormLabel htmlFor='height'>Height</FormLabel>
                            <FormInput type='number' value={height} onChange={e => setHeight(e.target.value)} placeholder='Height in cm' required />
                            <FormLabel htmlFor='weight'>Weight</FormLabel>
                            <FormInput type='number' value={weight} onChange={e => setWeight(e.target.value)} placeholder='Weight in kg' required />
                            <FormButton type='button' onClick={calcBmi}>Calculate BMI</FormButton>
                            <Text>Your BMI is: {bmiResult}</Text>
                            <Text>You are currently: {status}</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Bmi;
