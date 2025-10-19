import { SignIn } from '@clerk/nextjs'

const SigninPage = async () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <SignIn />
    </div>
  )
}

export default SigninPage
