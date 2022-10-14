import React from 'react'
import NavBar from './NavBar'

const Main = () => {
  return (
    <div className='mainContainer'>
        <NavBar/>
        <section className='mainTitle'>
          <h1>ESTÁR CÓMODO,<br/> NUNCA FUE TAN FÁCIL.</h1>
          <button>SHOP</button>
        </section>
    </div>
  )
}

export default Main