import styled, { css } from "styled-components";

interface MyProps {
  primary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  dark?: boolean;

  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
}

export const Button = styled.button<MyProps>`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${(props) =>
    props.primary &&
    css`
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
    `}

  ${(props) =>
    props.success &&
    css`
      color: #fff;
      background-color: #198754;
      border-color: #198754;
    `}
    
    ${(props) =>
    props.danger &&
    css`
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    `}
    
    ${(props) =>
    props.warning &&
    css`
      color: #000;
      background-color: #ffc107;
      border-color: #ffc107;
    `} 
    
    ${(props) =>
    props.dark &&
    css`
      color: #fff;
      background-color: #212529;
      border-color: #212529;
    `}
    
    ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt * 8}px;
    `}
    ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml * 8}px;
    `}
    ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr * 8}px;
    `}
    ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb * 8}px;
    `}
`;
