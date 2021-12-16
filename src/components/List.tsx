import styled, { css } from "styled-components";

interface MyListProps {
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
}

export const List = styled.ul<MyListProps>`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  border-radius: 0.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  max-width: 400px;

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt * 8}px !important;
    `}
  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml * 8}px !important;
    `}
    ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr * 8}px !important;
    `}
    ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb * 8}px !important;
    `}
`;

interface MyOptionProps {
  isActive: boolean;
}

export const Option = styled.li<MyOptionProps>`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);

  &:not(:last-child) {
    border-bottom: none;
  }

  ${(props) =>
    props.isActive &&
    css`
      background: #e9ecef !important;
    `}
`;
