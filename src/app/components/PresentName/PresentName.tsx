import type { ReactNode } from 'react';
import styled from 'styled-components';

type PresentNameProps = {
  children: ReactNode;
};

export default function PresentName({
  children,
}: PresentNameProps): JSX.Element {
  return (
    <>{children ? <Result>{children}</Result> : <NoChildren></NoChildren>}</>
  );
}

const Result = styled.span`
  height: 1em;
  padding: 0.3em 0.5em;
  font-size: 2em;
  text-align: center;
  color: #ff5a36;
  border-radius: 3em;
  margin-top: 1em;
`;

const NoChildren = styled.div`
  background-color: transparent;
  border: none;
`;
