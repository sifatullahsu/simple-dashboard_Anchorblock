import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import Input from '../components/Input'
import { useUserLoginMutation } from '../redux/api/userApi'

const SignIn = () => {
  const [error, setError] = useState('')
  const [userLogin] = useUserLoginMutation()
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const form = event.target
    const email = form?.email?.value
    const password = form.password.value

    if (email === '') {
      setError('This field is required')
      return
    }

    setError('')

    try {
      await userLogin({ email, password }).unwrap()
      toast.success('User login successfull.')
      navigate('/users')
    } catch (error) {
      toast.error('Somthing is wrong. Try again')
    }
  }

  return (
    <div className="container px-3 py-10">
      <div
        className="max-w-[444px] mx-auto rounded-2xl border border-[#eee] bg-white p-10 md:p-[62px]"
        style={{
          boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)'
        }}
      >
        <img src={logo} alt="" />
        <p className="text-[#404040] text-[20px] leading-6 font-semibold mt-5 mb-[52px]">
          Sign In to continue with Stack
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input label="Email" name="email" error={error} />
          <Input label="Password" name="password" type="password" />
          <button
            type="submit"
            className="w-full px-[18px] py-[10px] rounded-lg bg-[#6941C6] border border-[#6941C6] text-white text-base font-semibold !mt-[30px]"
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
          >
            Sign In
          </button>
        </form>

        <p className="text-[#B0B7C3] font-medium mt-[27px] text-base">
          Don't have an account?&nbsp;
          <Link to="/signup" className="text-[#377DFF]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
