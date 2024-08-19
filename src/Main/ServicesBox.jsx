import { Tilt } from 'react-tilt';
import { useEffect } from 'react';

// icons
import { IoIosText } from "react-icons/io";


export function ServiceBox({ title, info, delay }) {
  return (
    <Tilt className="service-tilt-box" >
      <div className='service-box' data-aos="flip-left" data-aos-delay={delay}>
        <div className='service'>
          <div className='icon-div' >
            <IoIosText />
          </div>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
    </Tilt>
  )
}



































