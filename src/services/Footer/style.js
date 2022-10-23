import styled from 'styled-components';

export const Footer = styled.nav`
    height: 6em;
    background-color: #0C2847;
    box-shadow: 0px -13px 20px 4px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 800px){
        height: 10em;
        flex-direction: column
    }
`

export const Social = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Icon = styled.img`
    width: 50px;
    height: 50px;

    @media screen and (max-width: 800px){
        width: 35px;
        height: 35px;
    }
`

export const Copy = styled.p`
    color: white;

    @media screen and (max-width: 800px){
        font-size: 90%;
    }
`

export const BTN = styled.button`
    width: 100px;
    height: 100%;
    border: none;
    background-color: #0C2847;
`

export const Arrow = styled.img`
    width: 50px;
    height: 50px;
    background-color: #0C2847;

    @media screen and (max-width: 800px){
        width: 35px;
        height: 35px;
    }
`