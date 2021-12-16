import styled, { css } from "styled-components";

interface MyProps {
  size: number;

  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
}

export const Typography = styled.span<MyProps>`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  display: inline-block;

  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}rem;
    `}

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
