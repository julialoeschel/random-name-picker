import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button.tsx";
import PresentName from "../PresentName/PresentName.tsx";
type GetNameProps = {
  allNames: string[];
  hidden: boolean;
  namesChanged: boolean;
  setNamesChanged: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function GetName({
  allNames,
  hidden,
  namesChanged,
  setNamesChanged,
}: GetNameProps) {
  const [name, setName] = useState("");

  const onClick = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allNames.length);
    const randomPerson = allNames[randomNumber];
    setName(randomPerson);
    setNamesChanged(false);
  };

  return (
    <>
      <GetNameContainer hidden={hidden}>
        <GetNameStyled>
          <StyledButton onClick={onClick}>get me a name</StyledButton>
          <Aquarium></Aquarium>

          {namesChanged ? (
            <PresentName>lets go!!</PresentName>
          ) : (
            <PresentName>{name}</PresentName>
          )}
        </GetNameStyled>
      </GetNameContainer>
    </>
  );
}

const GetNameContainer = styled.div`
  display: ${(props) => (props.hidden ? "block" : "none")};
`;

const GetNameStyled = styled.div`
  margin-left: 4em;
  height: 20em;
  width: 20em;
  display: grid;
  gap: 2em;
  justify-content: center;
  grid-template-rows: 1fr 1fr 1fr;
`;

const StyledButton = styled(Button)`
  width: 13em;
  height: 3em;
`;

const Aquarium = styled.div`
  background-image: url(${"https://media1.giphy.com/media/fayFcp7dEEhG7Tma6i/giphy.gif"});
  background-size: 100%;

  height: 13em;
  border-radius: 1em;
`;
