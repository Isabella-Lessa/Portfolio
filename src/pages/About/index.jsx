import React, { useRef } from "react";
import * as S from "./style.js";
import ProfileImg from "../../assets/newimg.jpg";
import DevGirl from "../../assets/girl programmer.gif";
import HTML5 from '../../assets/html-5.png';
import CSS3 from '../../assets/css3.png';
import JS from '../../assets/javascript.png';
import TS from '../../assets/ts.png';
import REACT from '../../assets/react.png';
import VUE from '../../assets/vue.png';

export default function About() {
  const refBack = useRef("");

  return (
    <S.AboutContainer ref={refBack}>
      <S.ContainerImg>
        <S.Fig>
          <S.PersonalImg src={ProfileImg} alt="imagem de isabella" />
        </S.Fig>
        <S.BoxTxt>
          <S.DevOne>Hi there!</S.DevOne>
          <S.DevTwo>I'm a Front-End Developer</S.DevTwo>
        </S.BoxTxt>
      </S.ContainerImg>
      <S.ContainerText>
        <S.DevText>
          <S.BoxResume>
            <S.TxtOne>
              Me chamo Isabella Lessa, tenho 19 anos e atualmente moro em Duque
              de Caxias - RJ. Tive meu primeiro contato com a área da
              programação no início de 2022 quando ingressei em um curso para a
              formação de desenvolvedora Front-End pela empresa "Vai na Web".
              Adquiri muito conhecimento ao longo do tempo nesta área, acabei me
              encontrando profissionalmente no âmbito da TI e almejo cursar
              Ciência da Computação. Ao longo da formação segui aplicando as
              tecnologias HTML5, CSS3, JavaScript, React.JS em projetos e sempre
              busco aprender mais.
            </S.TxtOne>
            <S.TxtTwo>
              No momento, ingressei na minha primeira vaga no ramo da
              programação como Desenvolvedora Front-End Júnior no time de Vue.JS
              no Estúdio Vai na Web. Aprender um novo framework é uma tarefa
              desafiadora e ótima ao mesmo tempo pois é sempre bom adquirir
              novos conhecimentos. É muito gratificante trabalhar com uma equipe
              acolhedora e além disso que acompanhou tão de perto a evolução de
              tantos programadores ao redor da mesma. Além disso, trabalho como
              freelancer produzindo sites responsivos para os respectivos
              clientes. Em busca de lançar um site na internet sobre o seu
              negócio para alcançar cada vez mais pessoas? Entre em contato
              comigo!
            </S.TxtTwo>
          </S.BoxResume>
          <S.FigGif>
            <S.Gif src={DevGirl} alt=" imagem de programadora" />
          </S.FigGif>
        </S.DevText>
      </S.ContainerText>
      <S.ContainerTech>
        <S.TitleCards>Tecnologias</S.TitleCards>
        <S.BoxInfo>
          <S.CardOne>
            <S.ImgTech src={ HTML5 } alt='html5 icon'/>
          </S.CardOne>
          <S.CardTwo>
            <S.ImgTech src={ CSS3 } alt='css3 icon'/>
          </S.CardTwo>
          <S.CardThree>
            <S.ImgTech src={ JS } alt='javascript icon'/>
          </S.CardThree>
          <S.CardFour>
            <S.ImgTech src={ TS } alt='typescript icon'/>
          </S.CardFour>
          <S.CardFive>
            <S.ImgTech src={ REACT } alt='react icon'/>
          </S.CardFive>
          <S.CardSix>
            <S.ImgTech src={ VUE } alt='vue icon'/>
          </S.CardSix>
        </S.BoxInfo>
      </S.ContainerTech>
    </S.AboutContainer>
  );
}
