import React from 'react'
import Title from"../Common/title/Title"
// import { homeAbout } from "../../dummydata"
import Heading from '../Common/Heading/Heading'
import {homeAbout} from"../../dummydata"
import Awrapper from './Awrapper'
import "./About.css"
const AboutCard = () => {
  return (
    <div>
    
    <section className='aboutHome'>
    <div className='container flexSB'>
    <div className='left row'>
   
 
           <img src='./images/about.web.webp' alt='' />
    
    </div>
     <div className='right-row'>
     <Title subtitle='LEARN ANYTHING' title='Benefits About OnSite Learning Expertise' />
     <div className='items'>
     {homeAbout.map((val) => {
        return (
            <div className='item flexSB'>

            <div className='img'>
            <img src={val.cover} alt='' />
          </div>
          <div className='text'>
          <h2>{val.title}</h2>
          <p>{val.desc}</p>
        </div>

            </div>

            )
        })}
      </div>
   
     </div>
    </div>

    
    </section>
    <Awrapper/>
    
    </div>
  )
}

export default AboutCard