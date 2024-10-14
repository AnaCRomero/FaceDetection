import React from 'react';
import { Tilt } from 'react-tilt';
import "./Logo.css"
import brain from "./brain.png"

const Logo = () => {
  return (
   <div className='ma4 mt0'>
    <Tilt className="Tilt" options={{max : 55}} style={{height:180, with:20}}>
        <div className='Tilt-inner pa3'> 
            <img  style={{paddingTop: '1%'}} src={brain} /> 
        </div>
    </Tilt>

   </div>
  );
}

export default Logo;
