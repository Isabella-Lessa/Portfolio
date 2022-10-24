import React from "react";
import * as S from "./style.js";
import Footer from "../../services/Footer/index";
import Insta from "../../assets/insta.png";
import Whats from "../../assets/whats.png";
import Gmail from "../../assets/gmail.png";

export default function Contact() {
  return (
    <S.ContactContainer>
      <S.Container>
        <S.ContactText>Entre em contato comigo nas redes!</S.ContactText>
        <S.BoxSocial>
          <a href="https://www.instagram.com/bella.lessa" target="_blank">
            <S.ImgSocial src={Insta} alt="instagram" />
          </a>
          <a href="https://contate.me/isalessa" target="_blank">
            <S.ImgSocial src={Whats} alt="whatsapp" />
          </a>
          <a href="" target="_blank">
            <S.ImgSocial src={Gmail} alt="gmail" />
          </a>
        </S.BoxSocial>
      </S.Container>
      <Footer />
    </S.ContactContainer>
  );
}
