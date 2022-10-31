import React, { Component } from 'react'
import logo from './logo.png';
import facebook from './facebook.png';

import insta from './insta.png';
// import './Onepagestyle.css';
import './demo.css';

export default class demoOnepage extends Component {
  render() {
    return (
      <div className='emailheader' >
        <div className='subemailheader' >
     
       
          
          <div className='divheader1' >

          <div className='imagelogo' ></div> 
          
          </div>
          <div className='divheader2' >

            <h1 className='textheader' >THANK YOU !</h1>
          </div>
        </div>

        <div className='main_container'>

          <div className='main_div'  >

            <h1 className='main_text' >Hey there,</h1>
            <h1 className='main_text' > Thankyou for subscribing to tifinco newsletter. We are glad that you’re interested in us. We are working hard to launch the app as soon as possible.</h1>
            <h1 className='main_text' >As a newsletter subscriber you’ll receive all the update re- garding our app launch, subscription, offers and discounts.</h1>
            <h1 className='main_text' >We promise to not to spam your inbox with un-necessary mails.</h1>
            <h1  className='main_text' >Thankyou, <p >Team Tifinco</p></h1>
           


          </div>

        </div>


        <div className='footer_container' >
        <div className='footer1' >
          
          <p className='footer11' ></p>
          <p  className='footer12' ></p>
          
        </div>
        <div className='footer2' >
          
          <p className='footer21' >+91 81036 09515 <span className='footer21' >+91 9174847010</span></p>
       

        </div>
        <div className='footer3' >
          
          <p className='footer31' >support@tifinco.com</p>
         
        </div>
        <div className='footer4' >
          
         
          <p className='footer41' >www.tifinco.com</p>
          

        </div>
        <div className='footer5' >
          
          <p className='footer51' >You are receiving this email because you have subscribed to our newsletter</p>
         
        </div>



        </div>
        {/* <div style={{backgroundColor:"#CED4E0",width:"100%",height:"auto",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",paddingTop:"30px"}}>
        <div style={{width:"100%",height:"auto",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"center",paddingTop:"30px"}}>
          
          <p style={{backgroundImage:`url(${facebook})`,backgroundSize:"contain", width: "50px", height:" 45px",backgroundRepeat: "no-repeat"}}></p>
          <p style={{backgroundImage:`url(${insta})`,backgroundSize:"contain", width: "50px", height:" 45px",backgroundRepeat: "no-repeat"}}></p>
          
        </div>
        <div style={{width:"100%",height:"auto",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"center",paddingTop:"30px"}}>
          
          <p style={{font:" normal normal 500 15px Poppins",width:"34%"}}>+91 81036 09515 <p style={{font:" normal normal 500 15px Poppins",width:"34%"}}>+91 9174847010</p></p>
       

        </div>

        <div style={{width:"100%",height:"auto",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"center",paddingTop:"30px"}}>
          
          <p style={{font:" normal normal 500 15px Poppins"}}>support@tifinco.com</p>
         
        </div>
        <div style={{width:"100%",height:"auto",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"center",paddingTop:"30px"}}>
          
         
          <p style={{font:" normal normal 500 15px Poppins"}}>www.tifinco.com</p>
          

        </div>
        <div style={{width:"100%",height:"auto",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"center",paddingTop:"30px"}}>
          
          <p style={{font:" normal normal 500 15px Poppins",textAlign:"center"}}>You are receiving this email because you have subscribed to our newsletter</p>
         
        </div>
        </div> */}


      </div>
    )
  }
}