import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.fs14 ? "14px" : "13px")};
  line-height: 13px;
  letter-spacing: 1.5px;
  color: #ffffff;

  cursor: pointer;
  border: none;
  text-transform: uppercase;

  background: ${(props) => (props.bgcblue ? "#5267DF;" : "#fa5959")};
  box-shadow: 0px 8px 8px -4px rgba(73, 93, 207, 0.20012);
  border-radius: 5px;

  padding: 10px ${(props) => (props.pad24 ? "24px" : "30px")};

  margin-right: ${(props) => (props.mr16 ? "16px" : "0px")};

  /* border-top: ${(props) => (props.bortop ? "4px dotted blue" : "")}; */

  /* margin-top: ${(props) => (props.padtop ? "24px" : "")}; */
  border: 2px solid ${(props) => (props.borblue ? "#5267DF;" : "#fa5959")};

  &:hover {
    background:  #FFFFFF;
    border: 2px solid ${(props) => (props.borblue ? "#5267DF;" : "#fa5959")};
    color: ${(props) => (props.borblue ? "#5267DF;" : "#fa5959")};
  }
`;
