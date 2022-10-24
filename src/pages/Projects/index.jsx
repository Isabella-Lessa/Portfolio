import React from "react";
import * as S from "./style.js";
import HP from "../../assets/hp-img.png";
import DOG from "../../assets/adoption-img.png";
import TRACKER from "../../assets/tracker-img.png";
import TODO from "../../assets/todo-img.png";
import Footer from './../../services/Footer/index';

export default function Projects() {
  return (
    <S.ProjectsContainer>
      <S.Container>
      <S.Box>
        <S.CardHP>
          <S.ImgWorks src={HP} alt="harry potter project" />
          <S.BoxBtns>
            <S.BTN>
              <S.A
                href="https://github.com/Isabella-Lessa/Hogwarts-World"
                target="_blank"
              >
                GitHub
              </S.A>
            </S.BTN>
            <S.BTN>Online</S.BTN>
          </S.BoxBtns>
        </S.CardHP>
        <S.CardDog>
          <S.ImgWorks src={DOG} alt="adoption project" />
          <S.BoxBtns>
            <S.BTN>
            <S.A
              href="https://github.com/Isabella-Lessa/Adopt-me"
              target="_blank"
            >
              GitHub
            </S.A>
            </S.BTN>
            <S.BTN>Online</S.BTN>
          </S.BoxBtns>
        </S.CardDog>
        <S.CardTracker>
          <S.ImgWorks src={TRACKER} alt="alura tracker project" />
          <S.BoxBtns>
          <S.BTN>
            <S.A
              href="https://github.com/Isabella-Lessa/Alura-Tracker"
              target="_blank"
            >
              GitHub
            </S.A>
            </S.BTN>
            <S.BTN>
              <S.A href="https://alura-tracker-six-rust.vercel.app/" target="_blank">
                Online
              </S.A>
            </S.BTN>
          </S.BoxBtns>
        </S.CardTracker>
        <S.CardToDo>
          <S.ImgWorks src={TODO} alt="to do project" />
          <S.BoxBtns>
            <S.BTN>
              <S.A href="https://github.com/Isabella-Lessa/ToDo" target="_blank">
                GitHub
              </S.A>
            </S.BTN>
            <S.BTN>
              <S.A href="" target="_blank">
                Online
              </S.A>
            </S.BTN>
          </S.BoxBtns>
        </S.CardToDo>
        <S.CardOds>
          <S.ImgWorks src="" alt="ods project" />
          <S.BoxBtns>
            <S.BTN>GitHub</S.BTN>
            <S.BTN>Online</S.BTN>
          </S.BoxBtns>
        </S.CardOds>
      </S.Box>
      </S.Container>
      <Footer/>
    </S.ProjectsContainer>
  );
}
