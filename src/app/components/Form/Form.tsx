/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button.tsx";

type FormProps = {
  formIsHidden: boolean;
  setFormIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setAllNames: React.Dispatch<React.SetStateAction<string[]>>;
  setNamesChanged: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({
  formIsHidden,
  setFormIsHidden,
  setAllNames,
  setNamesChanged,
}: FormProps): JSX.Element {
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowWarning(false);
    let namesArray;
    if (event.target.allNames.value !== "") {
      namesArray = event.target.allNames.value
        .split(/[,#.:;]+/)
        .map((name) => name.trim())
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1));
      setFormIsHidden(true);
      setAllNames(namesArray);
    } else setShowWarning(true);
  };

  const showForm = () => {
    setFormIsHidden(false);
  };

  return (
    <>
      <InputForm onSubmit={handleSubmit}>
        <EditContainer onClick={showForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="gray"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.994 12.964l3.106 3.105-4.112.931 1.006-4.036zm9.994-3.764l-5.84 5.921-3.202-3.202 5.841-5.919 3.201 3.2z" />
          </svg>
          <span>Edit names</span>
        </EditContainer>
        <NameInputContainer hidden={formIsHidden}>
          <NameInput>
            <label htmlFor="allNames">Insert names </label>
            <SytledInput
              id="allNames"
              name="allNames"
              onChange={(event) => {
                event?.target.value ? setShowWarning(false) : null;
                setNamesChanged(true);
              }}
              rows={5}
            />
            {showWarning && <Warning>Oooops, please leave names here.</Warning>}

            <FishingButton onClick={() => handleSubmit}>
              lets go fishing!
            </FishingButton>
          </NameInput>
        </NameInputContainer>
      </InputForm>
    </>
  );
}

const InputForm = styled.form`
  width: 20em;
  margin: 5em 4em;
  position: relative;
`;

const SytledInput = styled.textarea`
  width: 100%;
`;

const EditContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 2em 5.5em;
  align-items: center;
  position: absolute;
  right: 1em;
  top: -5em;
  margin-top: 1em;
`;

const NameInputContainer = styled.div`
  display: ${(props) => (props.hidden ? "none" : "block")};
`;

const NameInput = styled.div`
  display: grid;
  margin-top: 1em;
  justify-content: center;
`;

const FishingButton = styled(Button)`
  width: 14em;
  margin-top: 4em;
`;

const Warning = styled.span`
  color: red;
  text-align: center;
`;
