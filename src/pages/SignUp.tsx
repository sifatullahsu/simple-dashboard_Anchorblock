import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import Input from '../components/Input'
import { useUserRegistrationMutation } from '../redux/api/userApi'

const SignUp = () => {
  const [error, setError] = useState('')
  const [userRegistration] = useUserRegistrationMutation()
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const email = form?.email?.value
    const password = form.password.value

    if (email === '') {
      setError('This field is required')
      return
    }

    setError('')

    try {
      const res = await userRegistration({ email, password }).unwrap()
      toast.success('User registration successfull.')
      localStorage.setItem('token', JSON.stringify(res.token))
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
          Sign up to join with Stack
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input label="Email" name="email" error={error} />
          <Input label="Password" name="password" type="password" />
          <button
            type="submit"
            className="w-full px-[18px] py-[10px] rounded-lg bg-[#6941C6] border border-[#6941C6] text-white text-base font-semibold !mt-[30px]"
            style={{ boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)' }}
          >
            Sign Up
          </button>
        </form>

        <p className="text-[#B0B7C3] font-medium mt-[27px] text-base">
          Already have an account?&nbsp;
          <Link to="/signin" className="text-[#377DFF]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
