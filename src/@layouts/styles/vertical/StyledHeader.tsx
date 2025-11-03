// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

type StyledHeaderProps = {
  overrideStyles?: CSSObject
}

const StyledHeader = styled.header<StyledHeaderProps>`
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  width: calc(100% - 250px);
  height: 64px;
  padding: 0 24px;
  display: flex;
  transition: all 0.3s ease;

  ${({ overrideStyles }) => overrideStyles}
`

export default StyledHeader
