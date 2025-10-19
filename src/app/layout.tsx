// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'
import { ClerkProvider } from '@clerk/nextjs'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Skillup AI | Learn Smarter with Artificial Intelligence',
  description:
    'Skillup AI helps you master new skills faster with personalized, AI-powered learning experiences. Explore courses, quizzes, and assignments tailored to your goals.'
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <ClerkProvider>
      <html id='__next' dir={direction}>
        <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
