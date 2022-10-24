import styled from 'styled-components';

export const AboutContainer = styled.section`
    width: 100%;
    height: 100vh;
`

export const ContainerImg = styled.div`
    width: 100%;
    height: 80%;
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`

export const Fig = styled.figure`
    width: 18em;
    height: 15em;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s all;
    cursor: pointer;
    overflow: hidden;
    &:hover{
        transform: scale(1.1)
    }
`

export const PersonalImg = styled.img`
    width: 80%;
    height: 100%;
    border-radius: 90%;
    object-fit: cover;
`

export const BoxTxt = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const DevOne = styled.h2`
    font-family: 'Century Gothic', sans-serif;
    font-size: 150%;

    @media screen and (max-width: 800px){
        font-size: 120%
    }
`

export const DevTwo = styled.h2`
    font-family: 'Century Gothic', sans-serif;
    font-size: 150%;

    @media screen and (max-width: 800px){
        font-size: 120%
    }
`

export const ContainerText = styled.div`
    padding: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 700px){
        flex-direction: column;
        padding: 0;
    }
`

export const BoxResume = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 20em;
`

export const TxtOne = styled.p`
    font-size: 100%;
    font-family: 'Century Gothic', sans-serif;
    text-align: justify;
    text-justify: inter-word;

    @media screen and (max-width: 970px){
        font-size: 80%;
    }
    @media screen and (max-width: 700px){
        font-size: 60%;
    }
    @media screen and (max-width: 460px){
        font-size: 50%;
    }
`

export const TxtTwo = styled.p`
    font-size: 100%;
    font-family: 'Century Gothic', sans-serif;
    text-align: justify;
    text-justify: inter-word;

    @media screen and (max-width: 970px){
        font-size: 80%;
    }
    @media screen and (max-width: 700px){
        font-size: 60%;
    }
    @media screen and (max-width: 460px){
        font-size: 50%;
    }
`

export const FigGif = styled.figure`
    width: 25%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Gif = styled.img`
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
`

export const ContainerTech = styled.div`
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

export const TitleCards = styled.h2`
    font-size: 150%;
`

export const BoxInfo = styled.div`
    width: 70%;
    padding: 10px;
    margin: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap
`

export const CardOne = styled.div`
    background-color: white;
    width: 17em;
    height: 17em;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const CardTwo = styled.div`
    background-color: white;
    width: 17em;
    height: 17em;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const CardThree = styled.div`
    background-color: white;
    width: 17em;
    height: 17em;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const CardFour = styled.div`
    background-color: white;
    width: 17em;
    height: 17em;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const CardFive = styled.div`
    background-color: white;
    width: 17em;
    height: 17em;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const CardSix = styled.div`
    background-color: white;
    width: 17em;
    height: 17em;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const ImgTech = styled.img`
    width: 250px;
    object-fit: cover;
`