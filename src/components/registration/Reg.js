import React, {useEffect} from 'react';
import styled from 'styled-components'
import {useForm} from "react-hook-form";

const Container = styled.div`
   width: 100%;
   padding: 0 25px;
    @media (min-width: 992px){
      width: 50%;
      margin: 0 auto 0 auto;
    }
`;
const Title = styled.h1`
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;
const Form = styled.form`
  width: 100%;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #333;
  color: #000;
  width: 100%;
  height: 60px;
  padding-left: 10px;
  font-size: 1.1rem;
  &:focus{
    outline: none;
    border-bottom: 1px solid #000;
  }
`;
const PasswordOut = styled.div`
 position: relative;
 width: 100%;
 height: 60px;
`;
const Password = styled(Input)`
  position: absolute;
  top: 0;
  left: 0;
`;
const Submit = styled.input`
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #E9500E;
  font-size: 1.1rem;
  width:100%;
  padding: 12px 0;
  cursor: pointer;
  margin: 20px 0;
`;
const P = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #FF0000;
`;
const ShowPass = styled.div`
 position: absolute;
 right: 5vw;
 top: 50%;
 transform: translateY(-50%);
 cursor: pointer;
 @media (min-width: 992px){
     right: 10px;
  }
`;
const Svg = styled.svg`
  width: 25px;
  height: 25px;
  color: #4f4f4f;
`;
const Phone = styled.div`
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  border: none;
  border-bottom: 1px solid #333;
  color: #000;
  height: 60px;
  margin-right: 10px;
  font-size: 1.1rem;
   &:focus{
    outline: none;
    border-bottom: 1px solid #000;
  }
`;
const Terms = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  @media (min-width: 992px){
     align-items: center;
  }
`;
const Checkbox = styled.input`
  margin-right: 20px;
  cursor: pointer;
  width: 45px;
  height: 45px;
 @media (min-width: 992px){
     width: 25px;
     height: 25px;
     margin-right: 5px;
  }
`;
const Reg = () => {
    let firstPass;
    let confirmPass;
    const { register, handleSubmit,errors,watch } = useForm();
    const onSubmit = data => console.log("Done");
    useEffect(() => {
        firstPass = document.getElementById("firstPass");
        confirmPass = document.getElementById("confirmPass");
    },[]);
    const showPass = () => {
        if (firstPass.type === "password") {
            firstPass.type = "text";
        } else {
            firstPass.type = "password";
        }
    };
    const showPassRep = () => {
        if (confirmPass.type === "password") {
            confirmPass.type = "text";
        } else {
            confirmPass.type = "password";
        }
    };
    return (
        <Container>
            <Title>Załóż konto</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" placeholder="Imię" name="name" ref={register({required: true})} />
                {errors.name && <P>Imię jest wymagane.</P>}
                <Input type="text" placeholder="Nazwisko" name="surname" ref={register({required: true})} />
                {errors.surname && <P>Nazwisko jest wymagane.</P>}
                <Input type="email" placeholder="E-mail" name="email" ref={register({required: true})} />
                {errors.email && <P>Email jest niepoprawny..</P>}
                <Phone>
                    <Select name="prefix" ref={register}>
                        <option value="+48">+48</option>
                        <option value="+43">+43</option>
                        <option value="+420">+420</option>
                    </Select>
                    <Input type="phone" placeholder="Telefon" name="phone" ref={register} />
                </Phone>
                <PasswordOut>
                    <Password id="firstPass" type="password" placeholder="Hasło" name="pass" ref={register({required: true,minLength: 8})} />
                    <ShowPass onClick={showPass}><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></Svg></ShowPass>
                </PasswordOut>
                {errors.pass && <P>Hasło musi zawierać minimum 8 znaków.</P>}
                <PasswordOut>
                    <Password id="confirmPass" type="password" placeholder="Powtórz hasło" name="repeatpass" ref={register({ validate: (value) => value === watch('pass')})} />
                    <ShowPass onClick={showPassRep}><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></Svg></ShowPass>
                </PasswordOut>
                {errors.repeatpass && <P>Podane hasła się różnią</P>}
                <Terms>
                        <Checkbox type="checkbox" name="terms" ref={register({required: true})}/>
                        <p>Akceptuję regulamin serwisu i zapoznałem się z informacjami dotyczącymi moich danych osobowych poniżej.*</p>
                </Terms>
                {errors.terms && <P>Zaakceptuj regulamin</P>}
                <Submit type="submit" value="Załóż konto"/>
            </Form>
        </Container>
    );
};

export default Reg;