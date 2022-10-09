import React from 'react';
import * as S from './style.js';

export default function Header() {
  return (
    <S.Header>
        <S.Title>Isa's Portfólio</S.Title>
        <S.UL>
            <S.LI><S.LINK to='/'>About</S.LINK></S.LI>
            <S.LI><S.LINK to='./contact'>Contact</S.LINK></S.LI>
            <S.LI><S.LINK to='./projects'>Projects</S.LINK></S.LI>
        </S.UL>
    </S.Header>
  )
}
