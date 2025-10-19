// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        <MenuSection label='Beta'>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/apps/email`}
            icon={<i className='ri-book-open-line' />} // 📘 All Courses
            // suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />} // Enable this if you want "Pro" tag.
            // target='_blank' // Enable this if you want to open the page in new window
          >
            All Courses
          </MenuItem>

          <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/apps/chat`}
            icon={<i className='ri-graduation-cap-line' />} // 🎓 Enrolled Courses
          >
            Enrolled Courses
          </MenuItem>

          <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/apps/calendar`}
            icon={<i className='ri-task-line' />} // 📝 Assignments
          >
            Assignments
          </MenuItem>

          <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/apps/kanban`}
            icon={<i className='ri-question-answer-line' />} // ❓ Quizzes
          >
            Quizzes
          </MenuItem>

          <MenuItem
            href='/card-basic'
            icon={<i className='ri-information-line' />} // ℹ️ How it works
          >
            How it works?
          </MenuItem>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
