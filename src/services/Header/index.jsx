import React, { useState } from 'react';
import * as S from './style.js';
import Moon from '../../assets/moon white.png';
import Sun from '../../assets/sun.png'

export default function Header({refBack}) {

  const [status, setStatus] = useState(false)

  const handleMode = () => {
    setStatus(!status)
    if(status === true) {
      refBack.current.style.backgroundColor = '#194569'
    }else {
      refBack.current.style.backgroundColor = '#fff'
    }
  }

  return (
    <S.Header>
        <S.Title>
        <S.LINK to='/'>ISA</S.LINK>
        </S.Title>
        <S.UL>
            <S.LI>
              <S.LINK to='/'>About</S.LINK>
              <S.Line></S.Line>
            </S.LI>
            <S.LI>
              <S.LINK to='projects'>Projects</S.LINK>
              <S.Line></S.Line>
            </S.LI>
            <S.LI>
              <S.LINK to='/contact'>Contact</S.LINK>
              <S.Line></S.Line>
            </S.LI>
        </S.UL>
        <S.Mode onClick={ () => {handleMode()} }>
          <S.Icon src={ status ? Sun : Moon } />
        </S.Mode>
    </S.Header>
  )
}
