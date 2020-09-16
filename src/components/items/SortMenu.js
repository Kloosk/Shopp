import React, {useRef} from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {sortDecrease, sortDefault, sortGrow} from "../../redux";

const Select = styled.select`
  width: 100%;
  font-size: 1.1rem;
  padding: 15px 15px;
  border: none;
  border-bottom: 1px solid #8e8e8e;
  margin-top: 10vh;
`;
const SortMenu = () => {
    const selectRef = useRef();
    const dispatch = useDispatch();
    const handleChange =() => {
      let value = selectRef.current.options[selectRef.current.selectedIndex].value;
      switch(value){
          case '1':{
              dispatch(sortDefault());
              break;
          }
          case '2':{
              dispatch(sortGrow());
              break;
          }
          case '3':{
              dispatch(sortDecrease());
              break;
          }
          default:{
              console.log("Error in SortMenu.js");
          }
      }
    };
    return (
            <Select ref={selectRef} onChange={handleChange}>
                <option value="1">Domyślne</option>
                <option value="2">Cena - od najniższej</option>
                <option value="3">Cena - od najwyższej</option>
            </Select>
    );
};

export default SortMenu;