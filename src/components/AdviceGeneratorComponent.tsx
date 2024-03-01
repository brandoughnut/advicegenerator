import React, { useEffect } from 'react'
import '../App.css';
import divider from '../images/pattern-divider-desktop.svg';

const AdviceGenerator = (props: {id:number, advice:string}) => {

  return (
        <div className='text-center adviceBox'>
          <div className=' adviceTextRow'>
            <p className='adviceNumber'>ADVICE #{props.id}</p>
            <p className='adviceText'>"{props.advice}"</p>
          </div>
            
          <div className=''>
              <div className=''>
                <img className='img-fluid' src={divider} alt='divider icon'/>
              </div>
          </div>
        </div>
  )
}

export default AdviceGenerator
