import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    width: 100%;
    height: 100vh;
`

export const Container = styled.div`
    padding: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const CardHP = styled.div`
    background-color: #0C2847;
    width: 28em;
    height: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const CardDog = styled.div`
    background-color: #0C2847;
    width: 28em;
    height: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const CardTracker = styled.div`
    background-color: #0C2847;
    width: 28em;
    height: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const CardToDo = styled.div`
    background-color: #0C2847;
    width: 28em;
    height: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const CardOds = styled.div`
    background-color: #0C2847;
    width: 28em;
    height: 20em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 18px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

export const ImgWorks = styled.img`
    width: 450px;
    height: 230px;
    object-fit: cover;
`

export const BoxBtns = styled.div`
    width: 100%;
    height: 6.5em;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover{
        background-color: white
    }
`

export const BTN = styled.button`
    background-color: white;
    width: 100px;
    height: 2.5em;
    border-radius: 10px;
    border: none;
    box-shadow: -3px 3px 10px 0px rgba(0,0,0,0.82);
    transition: 0.5s all;
    &:hover{
        background-color: #0C2847;
        color: white;
        cursor: pointer
    }
`

export const A = styled.a`
    text-decoration: none;
    font-family: 'Century Gothic', sans-serif;
    font-size: 14px;
    font-weight: 100;
    color: black;

    &:hover{
        color: white;
        cursor: pointer
    }
`