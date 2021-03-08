import styled from "styled-components"

export const GeneralLayoutWrap = styled("div")`
  background: white;
  width: 100%;
  height: max-content;
  transition: 300ms ease-in-out;
  overflow: hidden;
`

export const LayoutWrapper = styled("div")`
  background: transparent;
  width: 100%;
  min-height: calc(100vh - 80px);
  transition: 300ms ease-in-out;
  margin-top: 80px;
  overflow: hidden;

  & > main {
    scroll-behavior: smooth;
  }
`
