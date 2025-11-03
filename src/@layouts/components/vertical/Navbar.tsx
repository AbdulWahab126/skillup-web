'use client'

// Type Imports
import type { ChildrenType } from '@core/types'

// Styled Component Imports
import StyledHeader from '@layouts/styles/vertical/StyledHeader'

import useVerticalNav from '@menu/hooks/useVerticalNav'

type Props = ChildrenType

const Navbar = (props: Props) => {
  // Props
  const { children } = props

  return <StyledHeader>{children}</StyledHeader>
}

export default Navbar
