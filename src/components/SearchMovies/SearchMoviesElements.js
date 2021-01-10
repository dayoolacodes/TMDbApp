import styled from 'styled-components'

export const Input = styled.input`
border-radius: 15px;
padding: 10px;
outline: none;
margin: 5px;
border: 0.5px solid #cecece;
max-width: 500px;
`

export const Form = styled.form`
display: grid;
align-items: center;
justify-content: center;

/* @media screen and (min-width: 768px){
    grid-template-columns: auto 1fr 1fr;
    grid-gap: 1rem;
} */
`
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
box-shadow: 2px 5px 9px rgba(0,0,0,0.5);
text-decoration: none !important;
:hover{
    background: transparent;
}
`
export const Label = styled.label`
text-transform: uppercase;
font-size: 20px;
text-align: center;
`