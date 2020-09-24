import React, {useState} from 'react';
import styled from 'styled-components'
import {useCookies} from "react-cookie";

const AddFav = styled.button`
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 15px;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 1px solid #8D8D8D;
  outline: none;
  &:hover{
    border: 1px solid #fff;
    background-color: #E9500E;
  }
  &::after{
    content: 'Dodano do ulubionych';
    position: absolute;
    font-size: 0.7rem;
    bottom: 110%;
    right: 50%;
    min-width: 40vw;
    padding: 7px 17px;
    color: #fff;
    background-color:#E9500E;
    border: none;
    opacity: ${props => props.add ? 1 : 0};
    display: ${props => props.add? "block" : "none"};
    transition: opacity 0.2s ease;
    @media (min-width: 992px){
      min-width: 90px;
      max-width: 100px;
      right: 0;
    }
  }
  &::before{
    content: 'Produkt został już dodany';
    position: absolute;
    border: none;
    font-size: 0.7rem;
    bottom: 110%;
    right: 50%;
    min-width: 40vw;
    padding: 7px 17px;
    color: #fff;
    background-color:#E9500E;
    opacity: ${props => props.warning ? 1 : 0};
    display: ${props => props.warning ? "block" : "none"};
    transition: opacity 0.2s ease;
    @media (min-width: 992px){
      min-width: 90px;
      max-width: 100px;
      right: 0;
    }
  }
`;
const Svg = styled.svg`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
  color: #000;
  width: 30px;
  height: 30px;
  ${AddFav}:hover &{
     color: #fff;
  }
`;
const AddFavBtn = ({item}) => {
    const [cookies, setCookie] = useCookies(['favourite']);
    const [addMsg,setAddMsg] = useState(false);
    const [warningMsg,setWarningMsg] = useState(false);
    const addMessage = () =>{
        if(addMsg === false){
            setAddMsg(true);
            setTimeout(() => {
                setAddMsg(false);
            },1100);
        }
    };
    const warningMessage = () =>{
        if(warningMsg === false) {
            setWarningMsg(true);
            setTimeout(() => {
                setWarningMsg(false);
            }, 1100);
        }
    };
    const addToFav = () => {
        let valueCookie;
        let isAvilable = false;
        if(cookies.favourite) {
            for (let i = 0; i < cookies.favourite.length; i++) {
                if (cookies.favourite[i].id === item._id) {
                    isAvilable = true;
                    break;
                }
            }
        }
        if(isAvilable === false) {
            if (cookies.favourite) {
                valueCookie = [...cookies.favourite];
            } else valueCookie = [];
            valueCookie.push({
                id: item._id,
                name: item.name,
                price: item.price,
                photo: item.photos[0]
            });
            setCookie('favourite',valueCookie);
            addMessage();
        }else{
            warningMessage();
        }
    };
    return (
        <AddFav add={addMsg} warning={warningMsg} onClick={addToFav}><Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></Svg></AddFav>
    );
};

export default AddFavBtn;