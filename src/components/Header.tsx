import { Link } from 'react-router-dom'
import avatar from '../assets/Avatar.png'
import bell from '../assets/bell.svg'
import logo from '../assets/logo-2.png'
import search from '../assets/search.svg'
import settings from '../assets/settings.svg'

const Header = () => {
  return (
    <div className="bg-[#6941C6]">
      <div className="container px-8 py-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="" />
            <div className="hidden md:block">
              <ul className="header-menu flex space-x-1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/">Projects</Link>
                </li>
                <li>
                  <Link to="/">Tasks</Link>
                </li>
                <li>
                  <Link to="/">Reporting</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <img src={search} alt="" className="p-[10px]" />
            <img src={settings} alt="" className="p-[10px]" />
            <img src={bell} alt="" className="p-[10px]" />
            <img src={avatar} alt="" className="pl-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
