import styled from 'styled-components';

export const SubmitButton = styled.button `
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
`;

export const StyledForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
`;

export const ErrorMessage = styled.span `
  color: red;
`;

export const Accept = styled.span `
  margin: 5px;
`;

export const TextInput = styled.input `
  padding: 5px;
  --webkit-appearance: none;
`;

export const Label = styled.label `
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const A = styled.a `
  color: blue;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: black;
  }

  &:visited {
    color: purple;
  }
`;
