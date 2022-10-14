import React from 'react'
import umbrella from '../assests/itemssection/umbrella.png'
import puff from '../assests/itemssection/puff.jpg'
import cart from '../assests/itemssection/cart.png'
import nap from '../assests/itemssection/nap.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ItemsSection = () => {
  return (
    <div className='itemsContainer'>
        {/* pufi rain */}
        <div id='pufiRain' className="container">
            <div className='rainImg'>
                <button>SHOP</button>
            </div>
            <div className='textSection'>
                <img style={{width:'100px'}} src={umbrella} alt="umbrella" />
                <h4>PUFI RAIN</h4>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button><AiOutlineArrowRight/> VER MAS</button>
            </div>
        </div>
            {/* pufi puff */}
            <div  id='pufiPuff' className="container reverse">
            <div className='textSection'>
                <img style={{width:'150px'}} src={puff} alt="puff" />
                <h4>PUFI PUFF</h4>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button><AiOutlineArrowRight/> VER MAS</button>
            </div>
            <div className='puffImg'>
            </div>
        </div>

            {/* pufi cart */}
            <div  id='pufiCart' className="container">
            <div className='cartImg'>
            </div>
            <div className='textSection'>
                <img style={{width:'100px'}} src={cart} alt="umbrella" />
                <h4>PUFI CART</h4>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button><AiOutlineArrowRight/>  VER MAS</button>
            </div>
        </div>

            {/* pufi nap */}
            <div  id='pufiNap' className="container reverse">
            <div className='textSection'>
                <img style={{width:'100px'}} src={nap} alt="nap" />
                <h4>PUFI RAIN</h4>
                <p>Descripción del producto. Este es un texto simulado.</p>
                <button><AiOutlineArrowRight/>  VER MAS</button>
            </div>
            <div className='napImg'>
            </div>
        </div>

    </div>
  )
}

export default ItemsSection