import './Hero.css';

import ImageFire from './IMAGE-fire.png';
import Image from './IMAGE.png';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__container container'>
        <div className='hero__inner'>
          <div className='hero__content'>
            <a className='hero__content-link'>
              <img className='hero__content-link-img' src={ImageFire} alt="Hero fire image"></img> 
              FUTURE OF ESPORTS
            </a>

            <h2 className='hero__content-heading'>
              Unleash the Next Generation of Gaming
            </h2>

            <p className='hero__content-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
            </p>

            <button className='hero__button-explore' type='button'>Explore More</button>
            <button className='hero__button-team' type='button'>View our team</button>
          </div>

          <img className='hero__img' src={Image} alt="Hero img"></img>
        </div>
      </div>
    </div>
  )
}

export default Hero;