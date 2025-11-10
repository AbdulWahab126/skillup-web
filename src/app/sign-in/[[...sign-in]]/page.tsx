'use client'

import { SignIn } from '@clerk/nextjs'
import { useTheme } from '@mui/material/styles'

const SigninPage = () => {
  const theme = useTheme()

  console.log('Current theme:', theme)

  return (
    <div className='flex min-h-screen items-center justify-center bg-[#312d4b] px-4'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='flex-1 flex flex-col items-center justify-center text-center text-white p-10 md:p-14'>
          <h1 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
            Courspy <span className='text-[#905eff]'>AI</span>
          </h1>
          <p className='text-base md:text-lg font-medium mt-4 text-blue-100 leading-relaxed'>
            Learn Smarter with Artificial Intelligence
          </p>
        </div>

        <div className='flex-1 flex items-center justify-center p-8 md:p-10 rounded-t-2xl md:rounded-none md:rounded-l-2xl'>
          <SignIn
            signUpUrl='/sign-up'
            appearance={{
              elements: {
                formButtonPrimary: 'bg-[#905eff] text-white font-semibold transition-colors duration-200'
              },
              variables: {
                colorPrimary: '#905eff'
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SigninPage
