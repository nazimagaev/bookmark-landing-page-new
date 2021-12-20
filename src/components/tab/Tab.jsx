import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Container } from "../ui/style";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

const TabStyled = styled.div`
  margin-top: 72px;
`;

function Tab() {
  const [content, setContent] = useState("simple");

  return (
    <TabStyled>
      <Container>
        <TabButton setContent={setContent} />
        <TabContent content={content} />
      </Container>
    </TabStyled>
  );
}

export default Tab;
