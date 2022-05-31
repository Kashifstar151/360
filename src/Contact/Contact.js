import React from 'react'
import "./_contact.scss"
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,
GRAD@48,400,0,0" />

const Contact = () => {
  return (
    <div className='main'>
      <section className='main_section'>
      <div className='content_div'>
        <div className='content_div_left'>
          <div className='nav_div'>
            <a href=''>Home</a>
            &nbsp;/&nbsp;Contact Us
          </div>
          <div className='content_div_left1'>
            <h3>Get In Touch</h3>
            <div className='content_div_left11'>
             <div className='icon_container'> 
             <h5>65659471</h5>
             </div>
             <div className='icon_container'> 
             <h5>134 Jurong Gateway Rd, #02-305, <br></br>
               Singapore 600134</h5>
             </div>
             <div className='icon_container'> 
             <h5>Mon-Fri: 10 am - 8 pm<br></br>
                 Sat, Sun: 10 am - 6 pm<br></br>
                 Public Holidays: 10 am - 6 pm</h5>
             </div>
             <div className='icon_container'> 
             <h5>hello@nature360.com.sg
               </h5>
             </div>
            </div>
          </div>
        </div>
        <div className='content_div_right'></div>
        
      </div>
      </section>
    </div>
  )
}

export default Contact;