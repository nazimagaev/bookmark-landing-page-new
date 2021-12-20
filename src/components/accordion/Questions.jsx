import React from "react";
import { useState } from "react";
import styled from "styled-components";
import upArrow from "../../assets/icon-arrow.svg";
import upClose from "../../assets/icon-close.svg";
import { questions } from "../../constant";

const QuestionsStyled = styled.div`
  margin-top: 56px;
  border-top: 1px solid rgba(36, 42, 69, 0.15);
`;
const QuestionsContentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 15px;
  padding-right: 15px;

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    color: #242a45;
  }

  img {
    width: 16px;
    height: 8px;
    cursor: pointer;
  }
`;

const Description = styled.div`
  border-bottom: 1px solid rgba(36, 42, 69, 0.15);
  padding-bottom: 15px;

  h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0.15px;
    color: #242a45;
    mix-blend-mode: normal;
    opacity: 0.75;
  }
`;

function Questions() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <QuestionsStyled>
        {questions.map((question) => (
          <Description>
            <QuestionsContentStyled>
              <h2>{question.title}</h2>
              <img
                // src={showInfo ? "upArrow" : "upClose"}
                src={upArrow}
                alt=""
                onClick={() => setShowInfo(!showInfo)}
              />
            </QuestionsContentStyled>
            {showInfo && <h6>{question.desc}</h6>}
          </Description>
        ))}
      </QuestionsStyled>
    </>
  );
}

export default Questions;
