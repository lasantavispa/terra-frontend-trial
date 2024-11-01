import React from 'react'
import Content from './Content'
import Hero from './Hero'

function Landing({hero, body}) {
  return (
    <>
    <Hero hero={hero}/>
    <Content body={body}/>
    </>
  )
}

Landing.propTypes = {
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
  }),
  body: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posts: PropTypes.objectOf(PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
    })),
  }),
}

export default Landing