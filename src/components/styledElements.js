import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Input = styled.input`
  border-radius: 15px;
  padding: 10px;
  outline: none;
  margin: 10px 0px;
  border: 0.5px solid #cecece;
  max-width: 500px;
`;

export const Form = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;

`;
export const Button = styled.button`
  border-radius: 15px;
  padding: 10px;
  border: none;
  cursor: pointer;
  outline: none !important;
  color: salmon;
  background: #fff;
  border: 1px solid salmon;
  margin: 5px;
  box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.5);
  text-decoration: none !important;
  :hover {
    background: transparent;
  }
`;
export const Label = styled.label`
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
`;

export const SideScrollForMobile = styled.div`
/* @media all and (max-width: 768px){
  display:flex;
  overflow: auto;
} */
` 

export const Container = styled.div`
  padding: 25px;
  margin: 5%;
  border: 0 solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  box-shadow: 3px 2px 6px #cecece;
  background: whitesmoke;
  box-sizing: border-box;
  text-align: center;


  :hover {
    transform: scale(1.01);
    transition: 0.5s ease;
  }
`; 

export const LinkWrapper = styled.div`
  border: 1px solid #cecece;
  width: 150px;
  padding: 5px;
`;
export const LinkR = styled(Link)`
  outline: none !important;
  text-decoration: none;
  color: #000;
  background-color: none;
  cursor: pointer;
  font-weight: bold;
  padding: 5px;
`;