import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 24px;
/* 
  opacity: ${props => props.removed ? 0.5 : 1};
  color: ${props => props.removed ? '#f00' : '#fff'}; */

  ${({ removed }) => css`
    opacity: ${() => removed ? 0.5 : 1};
    color: ${() => removed ? '#f00' : '#fff'};
  `}
`