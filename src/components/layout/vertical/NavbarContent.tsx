'use client'

// Next Imports
import { usePathname } from 'next/navigation'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import { Typography } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import UserDropdown from '@components/layout/shared/UserDropdown'

// import NavSearch from '../shared/search'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  const pathname = usePathname()

  // Get the last segment after the last '/'
  const lastSegment = pathname?.split('/').filter(Boolean).pop() || 'Home'

  // Capitalize the first letter
  const title = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1).replace(/-/g, ' ')

  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-2 sm:gap-4'>
        <NavToggle />
        <Typography variant='h3' fontWeight={600} sx={{ color: 'text.primary' }}>
          {title}
        </Typography>

        {/* <NavSearch /> */}
      </div>
      <div className='flex items-center'>
        {/* <ModeDropdown /> */}
        <IconButton className='text-textPrimary'>
          <i className='ri-notification-2-line' />
        </IconButton>
        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
