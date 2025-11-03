// // React Imports
// import type { ReactNode } from 'react'

// // Third-party Imports
// import classnames from 'classnames'

// // Type Imports
// import type { ChildrenType } from '@core/types'

// // Component Imports
// import LayoutContent from './components/vertical/LayoutContent'

// // Util Imports
// import { verticalLayoutClasses } from './utils/layoutClasses'

// type VerticalLayoutProps = ChildrenType & {
//   navigation?: ReactNode
//   navbar?: ReactNode
//   footer?: ReactNode
// }

// const VerticalLayout = (props: VerticalLayoutProps) => {
//   // Props
//   const { navbar, navigation, children } = props // destructure the footer from the props when needed

//   return (
//     <div className={classnames(verticalLayoutClasses.root, 'flex flex-auto')}>
//       {navigation || null}
//       <div className={classnames(verticalLayoutClasses.contentWrapper, 'flex flex-col min-is-0 is-full')}>
//         {navbar || null}
//         {/* Content */}
//         <LayoutContent>{children}</LayoutContent>
//         {/* {footer || null} */}
//       </div>
//     </div>
//   )
// }

// export default VerticalLayout

'use client'

// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import LayoutContent from './components/vertical/LayoutContent'

// Util Imports
import { verticalLayoutClasses } from './utils/layoutClasses'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

type VerticalLayoutProps = ChildrenType & {
  navigation?: ReactNode
  navbar?: ReactNode
  footer?: ReactNode
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  const { navbar, navigation, children } = props
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div className={classnames(verticalLayoutClasses.root, 'flex min-h-screen')}>
      {/* Sidebar */}
      {/* Only render sidebar if breakpoint is not reached */}
      {!isBreakpointReached && (
        <aside className='w-[260px] flex-shrink-0 h-screen sticky top-0 left-0'>{navigation}</aside>
      )}

      {/* Main Content Area */}
      <div className='flex flex-col flex-1 min-w-0'>
        {/* Fixed Header */}
        <header className='sticky top-0 z-30 bg-background w-full'>{navbar}</header>

        {/* Page Content */}
        <main className='flex-1 overflow-y-auto p-4'>
          <LayoutContent>{children}</LayoutContent>
        </main>
      </div>
    </div>
  )
}

export default VerticalLayout
