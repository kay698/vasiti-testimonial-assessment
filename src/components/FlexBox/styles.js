import styled from "styled-components"

export const FlexibleDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  flex-direction: ${(props) => props.flexDir || "row"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  background: ${(props) => props.bgColor || "z"};
  animation-delay: ${({ delay }) => delay || 0};
`;

export const GridableDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridCol || "1fr"};
  grid-template-rows: ${(props) => props.gridRow || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  & > * {
    min-width: 0
  }
`;
