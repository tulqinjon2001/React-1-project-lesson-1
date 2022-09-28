import './Footer.css';

import LogoSite from './IMAGE.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container container'>
        <div className='footer__inner'>
          <div className='footer__content'>
            <div className='footer__logo-box'>
              <a className='footer__logo-link'>
                <img className='footer__logo-img' src={LogoSite} alt="Footer site logo"></img>
              </a>

              <p className='footer__logo-box-content'>
                Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .
              </p>
            </div>

            <ul className='footer__menu-list'>
              <li className='footer__menu-item'>Menu items</li>
              <li className='footer__menu-item'><a className='footer__menu-item-link'>About</a></li>
              <li className='footer__menu-item'><a className='footer__menu-item-link'>Blog</a></li>
              <li className='footer__menu-item'><a className='footer__menu-item-link'>Shop</a></li>
              <li className='footer__menu-item'><a className='footer__menu-item-link'>Contact Us</a></li>
            </ul>

            <ul className='footer__other-page-list'>
              <li className='footer__menu-item'>Other Pages</li>
              <li className='footer__menu-item'><a className='footer__other-page-item-link'>Styleguide</a></li>
              <li className='footer__menu-item'><a className='footer__other-page-item-link'>Changelog</a></li>
              <li className='footer__menu-item'><a className='footer__other-page-item-link'>licenses</a></li>
              <li className='footer__menu-item'><a className='footer__other-page-item-link'>Team</a></li>
            </ul>

            <div className='footer__icons'>
              <p className='footer__icon-text'>Social Icons</p>

              <ul className='footer__icon-list'>
                <li className='footer__icon-item'><i class="fa-brands fa-facebook"></i></li>
                <li className='footer__icon-item'><i class="fa-brands fa-twitter"></i></li>
                <li className='footer__icon-item'><i class="fa-brands fa-telegram"></i></li>
                <li className='footer__icon-item'><i class="fa-brands fa-instagram"></i></li>
              </ul>
            </div>
          </div>

          <hr className='footer__horizontal-line'></hr>

          <span className='footer__text-content'>Copyright by 2021 Flowzai</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;