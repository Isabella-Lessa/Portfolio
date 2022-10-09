import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.nav`
    width: 100%;
    height: 6em;
    color: white;
    border: 2px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center
`

export const Title = styled.h1`

`

export const UL = styled.ul`
    width: 60%;
    height: 100%;
    border: 1px solid pink;
    display: flex;
    jusify-content: space-evenly;
    align-items: center;
`

export const LI = styled.li`
    list-style: none;
    display: flex;
    jusify-content: center;
    align-items: center;
`

export const LINK = styled(Link)`
    text-decoration: none
`