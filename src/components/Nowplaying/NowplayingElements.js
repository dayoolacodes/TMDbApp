import styled from 'styled-components'

export const Container =  styled.div`
padding: 25px;
margin: 5%;
border: 0 solid rgba(0,0,0, 0.5);
border-radius: 20px;
box-shadow: 3px 2px 6px #cecece;
background: whitesmoke;
transition: 0.9s ease;

:hover{
    transform: scale(1.05);
    transition: 0.5s ease;
}
` 

export const Select = styled.select`
outline: none !important;
padding: 5px;
border: 0.5px solid #cecece;
border-radius: 10px;
cursor: pointer;
`
export const SelectWrapper = styled.div`
display: flex;
justify-content: flex-end;
`