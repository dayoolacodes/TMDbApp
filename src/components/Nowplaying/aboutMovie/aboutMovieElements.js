import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkWrapper = styled.div`
border: 1px solid #cecece; 
width: 150px;
margin: 15px;
padding: 5px;
`
export const LinkR = styled(Link)`
outline: none !important;
text-decoration: none;
color: #000;
background-color: none;
cursor: pointer;
font-weight: bold;
padding: 5px;
`