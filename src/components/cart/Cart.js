import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import FullMenu from "./FullMenu";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import auth from "../../auth";
import Step from "./Step";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setTotalCost} from "../../redux";

const Container = styled.div`
  width: 100vw;
  margin-top: 10vh;
   @media (min-width: 992px){
   padding: 0 5vw;
   margin-top: 16vh;
   }
`;
const P = styled.p`
  font-size: 1.1rem;
  color: #000;
`;
const Sum = styled.div`
  margin-top: 30px;
  padding: 10px 30px;
  width: 100%;
`;
const Price = styled.p`
   font-size: 1.2rem;
   color: #000;
`;
const H1 = styled.h1`
  margin-bottom: 25px;
  font-size: 1.5rem;
  color: #000;
`;
const Flex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const FlexDesktop = styled.div`
 @media (min-width: 992px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    }
`;
const Section = styled.section`
  padding: 20px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 2px solid #333;
  &:nth-child(3){
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
const Err = styled.p`
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
   @media (min-width: 992px){
   width: 100%;
   }
`;
const Label = styled.label`
  margin-left: 20px;
  font-size: 1.4rem;
  cursor: pointer;
`;
const Info = styled.p`
  font-size: 0.8rem;
  color: gray;
`;
const Free = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: 5px solid #E9500E;
  font-size: 1.2rem;
  color: #E9500E;
`;
const LeftSide = styled.div`
  @media (min-width: 992px){
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 70%;
  }
`;
const RightSide = styled.div`
  @media (min-width: 992px){
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 30%;
  }
`;
const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit,errors} = useForm();
    const [cookies] = useCookies(['cart']);
    const [sumOfItem,setSumOfItem] = useState(0);
    const [numOfItem,setNumOfItem] = useState(false);
    const [deliveryCost,setDeliveryCost] = useState(0);
    useEffect(() => {
        if(Array.isArray(cookies.cart) && cookies.cart.length > 0){
            setNumOfItem(true);
            //sum all price
            let sum = cookies.cart.reduce((a,b) => ({price: a.price + b.price}));
            setSumOfItem(sum.price);
        }else{
            setNumOfItem(false);
        }
    },[cookies.cart]);
    useEffect(() => {

        dispatch(setTotalCost(deliveryCost+sumOfItem));
    },[deliveryCost]);
    const handleDelivery = (e) => {
        if(sumOfItem < 200) {
            switch (e.target.id) {
                case 'parcel': {
                    setDeliveryCost(5);
                    break;
                }
                case 'courier': {
                    setDeliveryCost(22);
                    break;
                }
                case 'shop': {
                    setDeliveryCost(0);
                    break;
                }
                default:
                    setDeliveryCost(0);
            }
        }else{
            setDeliveryCost(0);
        }

    };
    const onSubmit = () => {
        dispatch(setTotalCost(deliveryCost+sumOfItem));
        auth.login(() => {
            history.push("/order");
        });
    };
return (
    <>
        <Nav/>
        <Container>
            {numOfItem && <Step/>}
            {numOfItem && <Form onSubmit={handleSubmit(onSubmit)}>
            <FlexDesktop>
            <LeftSide>
            {numOfItem ? cookies.cart.map(el =><FullMenu key={el.id} id={el.id} name={el.name} price={el.price} img={el.photo}/>): <P>Nie ma produktów w koszyku.</P>}
            {numOfItem && <H1>Wybierz formę dostawy</H1>}
                <Section>
                    <Input onChange={handleDelivery} type="radio" id="parcel" name="pay" ref={register({ required: true })}/>
                    <Label htmlFor="parcel">Paczkomaty</Label>
                </Section>
                <Section>
                    <Input onChange={handleDelivery} type="radio" id="shop" name="pay" ref={register({ required: true })}/>
                    <Label htmlFor="shop">Rezerwacja w sklepie</Label>
                </Section>
                <Section>
                    <Input onChange={handleDelivery} type="radio" id="courier" name="pay" ref={register({ required: true })}/>
                    <Label htmlFor="courier">Przesyłka kurierska</Label>
                </Section>
                {errors.pay&& <Err>Wybierz formę dostawy.</Err>}
            </LeftSide>
            {numOfItem && <RightSide>
                <Sum>
                    <H1>Podsumowanie</H1>
                    <Flex>
                        <P>Wartość produktów</P>
                        <Price>{sumOfItem.toFixed(2)}zł</Price>
                    </Flex>
                    <Flex>
                        <P>Koszty dostawy</P>
                        <Price>{deliveryCost}zł</Price>
                    </Flex>
                    <Info>Darmowa przesyłka od 200zł</Info>
                    <Flex>
                        <P style={{fontSize: '2rem'}}>Suma</P>
                        <Price style={{fontSize: '2rem'}}>{(deliveryCost+sumOfItem).toFixed(2)}zł</Price>
                    </Flex>
                    {sumOfItem >= 200 && <Free>Masz darmową przesyłkę</Free>}
                    <Submit type="submit" value="Przejdź do podsumowania"/>
                </Sum>
            </RightSide>}
            </FlexDesktop>
            </Form>}
            <Footer/>
        </Container>
    </>
    );
};

export default Cart;