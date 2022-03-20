import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #f0ffff;
  color: #050505;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  margin-bottom: 5px;
  transition: all 0.4s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:hover {
    background-color: #000940;
    color: #fffeee;
  }
`;

const Buttons = ({ text, id, func }) => {
  return <Button onClick={func} id={id}>{text}</Button>;
};

export default Buttons;
