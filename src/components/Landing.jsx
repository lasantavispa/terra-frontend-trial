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

export default Landing