import type { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  onClick: (event) => void;
  className?: string;
};

function Button({ className, children, onClick }: ButtonProps): JSX.Element {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  color: #fefefe;
  background-color: #ff5a36;
  font-size: 1.2em;
  padding: 0.8em 2em;
  border: none;
  border-radius: 0.4em;
  text-transform: uppercase;
  &:hover {
    box-shadow: 0 6px 14px rgba(44, 46, 57, 0.2);
    transition: box-shadow 0.2s ease;
  }
`;
