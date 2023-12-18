import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/Avatar.png'
import bell from '../assets/bell.svg'
import logo from '../assets/logo-2.png'
import search from '../assets/search.svg'
import settings from '../assets/settings.svg'
import { getToken } from '../utils/token'

const Header = () => {
  const token = getToken()
  const navigation = useNavigate()

  return (
    <div className="bg-[#6941C6]">
      <div className="container px-8 py-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="hidden lg:block">
              <ul className="header-menu flex space-x-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                {!token && (
                  <>
                    <li>
                      <Link to="/signin">SignIn</Link>
                    </li>
                    <li>
                      <Link to="/signup">SignUp</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                  <Link to="/reporting">Reporting</Link>
                </li>
                {token && (
                  <li>
                    <a
                      onClick={() => {
                        localStorage.removeItem('token')
                        navigation('/')
                        toast.success('Logout successfull.')
                      }}
                    >
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {token && (
            <div className="flex">
              <img src={search} alt="" className="p-[10px]" />
              <img src={settings} alt="" className="p-[10px]" />
              <img src={bell} alt="" className="p-[10px]" />
              <img src={avatar} alt="" className="pl-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
