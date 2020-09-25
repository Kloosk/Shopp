import React from 'react';
import styled from 'styled-components'
import Step from "./Step";
import {useForm} from "react-hook-form";
import Nav from "../nav/Nav";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";

const Container = styled.div`
  margin-top: 10vh;
  width: 100vw;
  @media (min-width: 992px){
   margin-top: 16vh;
  }
`;
const Section = styled.section`
  padding: 20px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 2px solid #333;
  &:last-child &{
    border-bottom: 2px solid #333;
  }
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const P = styled.p`
  font-size: 1.2rem;
  color: red;
`;
const Submit = styled.input`
  display: block;
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  border: 0; 
  width: 70vw;
  background-color: #E9500E;
  padding: 14px 0;
  margin: 30px auto 0 auto;
  cursor: pointer;
  border-radius: 4px;
`;
const Label = styled.label`
  margin-left: 20px;
  font-size: 1.4rem;
  cursor: pointer;
`;
const H1 = styled.h1`
  margin: 20px 0;
  font-size: 1.6rem;
  letter-spacing: 1px;
  padding-left: 10px;
`;

const Order = () => {
    const history = useHistory();
    const totalCost = useSelector(state => state.cost.totalCost);
    const { register, handleSubmit,errors} = useForm();
    const onSubmit = () => {
        history.push("/laststep");
    };
    return (
        <>
            <Nav/>
            <Container>
                <Step/>
                <H1>Wybierz metodę płatności</H1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Section>
                        <Input type="radio" id="card" name="pay" ref={register({ required: true })}/>
                        <Label htmlFor="card">Płatność kartą płatniczą</Label>
                    </Section>
                    <Section>
                        <Input type="radio" id="blik" name="pay" ref={register({ required: true })}/>
                        <Label htmlFor="blik">Szybka płatność BLIK</Label>
                    </Section>
                    <Section>
                        <Input type="radio" id="cash" name="pay" ref={register({ required: true })}/>
                        <Label htmlFor="cash">Płatne przy odbiorze</Label>
                    </Section>
                    {errors.pay&& <P>Wybierz metodę platności.</P>}
                    <H1>Całkowity koszt {totalCost}zł</H1>
                    <Submit type="submit" value="Zamawiam i płacę"/>
                </Form>
            </Container>
        </>
    );
};

export default Order;