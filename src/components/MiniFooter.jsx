import React from 'react'
import brandLive from '../assests/footer/Brandlive.png'

const MiniFooter = () => {
  return (
    <div className='miniFooterContainer'>
        <p>PUFI Copryright 2017 - Todos los derechos reservados</p>
        <span>Matias Tellini</span>
        <img src={brandLive} alt="" />
    </div>
  )
}

export default MiniFooter