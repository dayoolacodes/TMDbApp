import styled from 'styled-components'

export const Input = styled.input`
border-radius: 15px;
padding: 10px;
outline: none;
margin: 5px;
border: 0.5px solid #cecece;
`

export const Form = styled.form`
display: grid;

@media screen and (min-width: 768px){
    grid-template-columns: auto 1fr 1fr;
    grid-gap: 1rem;
    align-items: center;
}
`
export const Button = styled.button`
border-radius: 15px;
padding: 10px;
border: none;
cursor: pointer;
outline: none !important;
background: rgba(0,0,0,0.5);
color: #fff;
box-shadow: 2px 5px 9px rgba(0,0,0,0.5);
:hover{
    background: rgba(0,0,0,0.8);
}
`
export const Label = styled.label`
text-transform: uppercase;
font-size: 20px;
text-align: center;
`