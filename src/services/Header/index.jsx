import React, { useState } from "react";
import * as S from "./style.js";
import Moon from "../../assets/moon white.png";
import Sun from "../../assets/sun.png";
import MenuClose from "../../assets/menu_closed.png";
import MenuOpen from "../../assets/menu_open.png";

export default function Header() {
  const [status, setStatus] = useState(false);
  const [modal, setModal] = useState(false);

  const handleMode = () => {
    setStatus(!status);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleList = () => {
    <S.UL_TWO>
      <S.LI_TWO>
        <S.LINK_TWO to="/">About</S.LINK_TWO>
      </S.LI_TWO>
      <S.LI_TWO>
        <S.LINK_TWO to="projects">Projects</S.LINK_TWO>
      </S.LI_TWO>
      <S.LI_TWO>
        <S.LINK_TWO to="/contact">Contact</S.LINK_TWO>
      </S.LI_TWO>
    </S.UL_TWO>;
  };

  return (
    <S.Header>
      <S.FigModal
        onClick={() => {
          handleModal();
        }}
      >
        <S.ImgModal src={modal === false ? MenuClose : MenuOpen} />
      </S.FigModal>
      { modal && handleList() }
      <S.Title>
        <S.LINK to="/">ISA</S.LINK>
      </S.Title>
      <S.UL>
        <S.LI>
          <S.LINK to="/">About</S.LINK>
          <S.Line></S.Line>
        </S.LI>
        <S.LI>
          <S.LINK to="projects">Projects</S.LINK>
          <S.Line></S.Line>
        </S.LI>
        <S.LI>
          <S.LINK to="/contact">Contact</S.LINK>
          <S.Line></S.Line>
        </S.LI>
      </S.UL>
      <S.Mode
        onClick={() => {
          handleMode();
        }}
      >
        <S.Icon src={status ? Sun : Moon} />
      </S.Mode>
    </S.Header>
  );
}
