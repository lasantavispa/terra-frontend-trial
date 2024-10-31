import React, {useEffect, useState}  from 'react'
import { setLocalStorage, getLocalStorage } from '../services/LocalStorage';
import '../scss/Hero.scss'
import PropTypes from 'prop-types';


function Hero({hero}) {
  const [firstAccess, setFirstAccess] = useState(false)

  useEffect (() => {
    const hasAccessed = getLocalStorage('firstAccess');
      if (!hasAccessed) {
        setFirstAccess(true);
        setLocalStorage('firstAccess', true);
      }
  }, [])

  const backgroundStyle = {
    backgroundImage: `url(${hero.bg_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const buttonClass = firstAccess ? 'btn-green' : 'btn-black';

  return (
    <div className='hero' style={backgroundStyle}>
      <img src={hero.shapes.shape_1} alt="shape-1" className='hero__shape-1' />
      <div className='hero__content'>
        <h1 className='hero__h1'>{firstAccess ? hero.title.first_time_accessing : hero.title.second_time_accessing}</h1>
        <p className='hero__p'>{hero.subtitle}</p>
        <button className={`hero__btn ${buttonClass}`}>{firstAccess ? hero.button_label. first_time_accessing : hero.button_label.second_time_accessing}</button>
      </div>
        <img src={hero.shapes.shape_2} alt="shape-2" className='hero__shape-2'/>
    </div>
 
  )
}

Hero.propTypes = {
  hero: PropTypes.shape({
    shapes: PropTypes.shape({
      shape_1: PropTypes.string.isRequired,
      shape_2: PropTypes.string.isRequired,
    }),
    title: PropTypes.shape({
      first_time_accessing: PropTypes.string.isRequired,
      second_time_accessing: PropTypes.string.isRequired,
    }),
    subtitle: PropTypes.string.isRequired,
    button_label: PropTypes.shape({
      first_time_accessing: PropTypes.string.isRequired,
      second_time_accessing: PropTypes.string.isRequired,
    }),
    bg_image: PropTypes.string.isRequired,
})
}

export default Hero