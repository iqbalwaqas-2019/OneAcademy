import React from 'react'
import './contact.css'
import Back from '../Common/back/Back'

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6863.418499776028!2d74.30882456741399!3d31.479300479873903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919051f68d00bb1%3A0x763a95bd77354bc0!2sCyberCO2!5e0!3m2!1sen!2s!4v1679154053801!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
    <Back title ='Contact Us' />
    <section className='contact padding'>
        <div className='container shadow flexSB'>
            <div className='left row'>
                <iframe src={map}>  </iframe>
            </div>
            <div className='right row'>
                <h1>Contact Us</h1>
                <p>You can contact us on below mentioned address  </p>
                <div className='items grid2'>
                    <div className='box'>
                        <h4>ADDRESS</h4>
                        <p>65K Model Town Lahore</p>
                    </div>
                    <div className='box'>
                        <h4>Email:</h4>
                        <p>info@info.com</p>
                    </div>
                    <div className='box'>
                        <h4>PHONE:</h4>
                        <p>+123 456 789</p>
                    </div>
                </div>
                <form action=''>
                    <div className='flexSB'>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='Email'/>
                    </div>
                    <input type='email' placeholder='Subject'/>
                    <textarea cols='30' rows='10'>
                        Create a message here...
                    </textarea>
                    <button className='primary-btn'>SEND MESSAGE</button>
                    
                </form>
                <h3>Follow us here</h3>
                <span>FACEBOOK TWITTER INSTAGRAM</span>
            </div>
        </div>

    </section>
    </>
  )
}

export default Contact