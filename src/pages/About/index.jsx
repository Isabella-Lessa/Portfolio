import React from 'react';
import * as S from './style.js';
import ProfileImg from '../../assets/newimg.jpg';

export default function About() {
    return(
        <S.AboutContainer>
            <S.Container>
                <S.Box>
                    <S.Fig>
                        <S.PersonalImg src={ ProfileImg } alt='imagem de isabella'/>
                    </S.Fig>
                    <S.BoxTxt>
                        <S.Dev>Hi there! I'm a Front-End Developer</S.Dev>
                        <S.P></S.P>
                    </S.BoxTxt>
                </S.Box>
            </S.Container>
        </S.AboutContainer>
    )
}
