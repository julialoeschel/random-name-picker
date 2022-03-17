import { BrowserRouter } from "react-router-dom";

import Form from "./app/components/Form/Form.tsx";
import GetName from "./app/components/GetName/GetName.tsx";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [formIsHidden, setFormIsHidden] = useState(false);
  const [allNames, setAllNames] = useState([]);
  const [namesChanged, setNamesChanged] = useState(false);

  return (
    <BrowserRouter>
      <Title>random name picker</Title>
      <Form
        formIsHidden={formIsHidden}
        setFormIsHidden={setFormIsHidden}
        setAllNames={setAllNames}
        setNamesChanged={setNamesChanged}
      ></Form>
      <GetName
        hidden={formIsHidden}
        allNames={allNames}
        namesChanged={namesChanged}
        setNamesChanged={setNamesChanged}
      ></GetName>
      <Footer>
        <FooterContent>Julia@neuefische</FooterContent>
      </Footer>
    </BrowserRouter>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  position: relative;
  top: 0;
  margin: 0;
  padding: 0.2em;
  text-align: center;
  @media (min-width: 700px) {
    text-align: start;
    padding-left: 4em;
  }
  color: white;
  background-color: #ff5a36;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  margin: 0;
  color: white;
  background-color: #ff5a36;
  width: 100%;
`;

const FooterContent = styled.span`
  padding-left: 1em;
`;
