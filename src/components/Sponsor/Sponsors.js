import './Sponsors.css';

import ImageAmara from './images/IMAGE-amara.png'
import ImageCircle from './images/IMAGE-circle.png'
import ImageIdeaa from './images/IMAGE-ideaa.png'
import ImageLightAI from './images/IMAGE-LightAI.png'
import ImageMuzica from './images/IMAGE-muzica.png'

function Sponsors() {
  return (
    <div className='sponsors'>
      <div className='sponsor__container container'>
        <div className='sponsors__inner'>
          <h3 className='sponsors__title'>Our Sponsors</h3>

          <p className='sponsors__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
          </p>

          <ul className='sponsors__list'>
            <li className='sponsors__item'>
              <a className='sponsor__item-link'>
                <img className='sponsors__item-img' src={ImageIdeaa} alt="Sponsor image Idea"></img>
              </a>
            </li>

            <li className='sponsors__item'>
              <a className='sponsor__item-link'>
                <img className='sponsors__item-img' src={ImageAmara} alt="Sponsor image Amara"></img>
              </a>
            </li>

            <li className='sponsors__item'>
              <a className='sponsor__item-link'>
                <img className='sponsors__item-img' src={ImageLightAI} alt="Sponsor image LightAI"></img>
              </a>
            </li>

            <li className='sponsors__item'>
              <a className='sponsor__item-link'>
                <img className='sponsors__item-img' src={ImageCircle} alt="Sponsor image Circle"></img>
              </a>
            </li>

            <li className='sponsors__item'>
              <a className='sponsor__item-link'>
                <img className='sponsors__item-img' src={ImageMuzica} alt="Sponsor image Muzica"></img>
              </a>
            </li>

            <li className='sponsors__item'>
              <a className='sponsor__item-link'>
                <img className='sponsors__item-img' src={ImageLightAI} alt="Sponsor image LightAI"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sponsors;