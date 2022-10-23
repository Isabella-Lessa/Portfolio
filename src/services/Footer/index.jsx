import React from "react";
import * as S from "./style.js";
import Insta from '../../assets/insta.png';
import Whats from '../../assets/whats.png';
import Gmail from '../../assets/gmail.png';
import Arrow from '../../assets/arrow.png';

export default function Footer() {
  return (
    <S.Footer>
      <S.Social>
        <a href="https://www.instagram.com/bella.lessa" target="_blank">
          <S.Icon src={ Insta } />
        </a>
        <a href="https://contate.me/isalessa" target="_blank">
          <S.Icon src={ Whats } />
        </a>
        <a href="" target="_blank">
          <S.Icon src={ Gmail } />
        </a>
      </S.Social>
      <S.Copy> © Copyright 2022 - Desenvolvido por Isabella Lessa.</S.Copy>
      <S.BTN>
        <a href="#">
          <S.Arrow src={ Arrow } />
        </a>
      </S.BTN>
    </S.Footer>
  );
}
