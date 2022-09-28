import './Header.css';

import LogoSite from './IMAGE.svg';
import ShopIcon from './shop-icon.svg'

function Header() {
  return (
    <div className='header'>
      <div className='header__container container'>
        <div className='header__inner'>
          <a className='header__logo' href='#'>
            <img className='header__logo-img' src={LogoSite} alt='Site Logo'></img>
          </a>

          <nav className='header__navbar'>
            <ul className='header__navbar-list'>
              <li className='header__navbar-item'><a className='header__navbar-link'>Home</a></li>
              <li className='header__navbar-item'><a className='header__navbar-link'>About</a></li>
              <li className='header__navbar-item'><a className='header__navbar-link'>Team</a></li>
              <li className='header__navbar-item'><a className='header__navbar-link'>Shop</a></li>
              <li className='header__navbar-item'><a className='header__navbar-link'>Pages</a></li>
            </ul>
          </nav>

          <div className='header__connect'>
            <a className='header__connect-link'>
              <img className='header__connect-link-img' src={ShopIcon} alt="Shop icon image"></img>
              
              <sup><button className='header__connect-num'>0</button></sup>
            </a>

            <button className='header__connect-button'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;