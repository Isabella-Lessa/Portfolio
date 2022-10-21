import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.nav`
    width: 100%;
    height: 6em;
    background-color: #0C2847;
    box-shadow: 0px 10px 5px -3px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed
`

export const Title = styled.h1`
    font-family: 'Century Gothic', sans-serif;
    font-weight: 200;
    color: white;
    &:hover{
        cursor: pointer;
    }
`

export const UL = styled.ul`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const LI = styled.li`
    list-style: none;
    font-size: 18px;
    font-family: 'Century Gothic', sans-serif;
    font-weight: 100;
    color: white;
    cursor: pointer;
    width: 10%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    &:hover{
        font-weight: 700;
        color: #194569
    }
`

export const LINK = styled(Link)`
    text-decoration: none;
    color: white;
`

export const Line = styled.span`
    width: 0%;
    height: 0.2rem;
    background-color: white;
`

export const Mode = styled.div`
    width: 8%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
`

export const Icon = styled.img`
    width: 40px;
    cursor: pointer
`