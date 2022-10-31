import React, { Component } from 'react';
// import mainimage from './Onepage/OnepageImage/bgImage2.jpg';
// import GooglePayImg from './Onepage/OnepageImage/Google_Play_Store_badge.png';
import { Paper,Box,Container,Grid,} from '@mui/material';


import Typewriter from 'typewriter-effect';
// import logo from './Onepage/OnepageImage/logo.png';

import logo from './OnepageImage/logo.png'
import facebook2 from './OnepageImage/facebook2.png'
import insta2 from './OnepageImage/insta2.png';
import mainimage from './OnepageImage/bgImage2.jpg'
import GooglePayImg from './OnepageImage/coming-soon-google-play@2x.png'

import axios from 'axios';
// import facebook2 from './Onepage/OnepageImage/facebook2.png';
// import insta2 from './Onepage/OnepageImage/insta2.png';

import './Onepagestyle.css';
import { Button } from '@mui/material';


export default class Onepage extends Component {


  state = {
    width: window.innerWidth,
    height:window.innerHeight,
    newsletterusers_email:'',
  
   }
componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
   window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
  window.addEventListener('scroll', this.handleScroll);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
  this.setState({ height: window.innerHeight });
};


handlenewslwtter = (event)=>{

  this.setState({newsletterusers_email:event.target.value})
  }


  // handleAutoGeneratedNewsLetter = ()=>
  // {
  //   console.log("button clicked");
  //   if(this.state.newsletterusers_email)
  //   console.log(this.state.newsletterusers_email)
  //   else
  //   console.log("Email Fielsd is empty");
  // }


handleSubmitnewsletter = event =>  
{
    event.preventDefault();
  
    
    const data = 
    {
       user_email: this.state.newsletterusers_email,
    };
    
  try{
  axios.post('https://tifinco.com:5000/admin/storenewsletters', data,{
   headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
   onUploadProgress: data => {
  
     this.setState({
     progress: Math.round((100 * data.loaded) / data.total)
  
     });
   },
  
  })
   .then(res => {
    
       if(res.data.msg=='success'){
       
  
     
         console.log("success");
       
         alert("Thanks! Your message has been sent, please check your email shortly");
         window.location.reload();
  
  
       }
       else if  (res.data.msg=='exist'){
  alert("email already exist please enter new email id")
  
       }
     
   })
  }  catch(error) {
   
         console.log(error)
         this.setState({
             Load :false,
             });
         console.log("internal server error");
       }
  
  



       
  
  }

  render() {
    

    const { width } = this.state;
    const {height} = this.state;
    const isMobile = width <= 600;

    const isTablet = width<=1200;
    // the rest is the same...
  console.log(width);
  console.log(height);
   if (width<height) {
     return (
      // <MobileOnePage/>
      <div className='Maincontainer' style={{backgroundColor:"white"}} >
            <div className='formobileimageflex'>
            <img id="bgimage" src={mainimage}  style={{ height: "64vh" , backgroundSize: "cover",backgroundRepeat: "no-repeat"}} ></img>
            </div>

            {/* <form   onSubmit={this.handleSubmitnewsletter} id="send"  >
                            <div class="containeritem">
                              <div class="item1">
                              <input type="email" className="form-control " style={{border: "1px solid #BFC1C5",height: "60px",  width: "356px",color:"black"}} placeholder="Enter Your Email Address" onChange={this.handlenewslwtter}/>
                              </div>
                              <div class="item2">
                              <button type="submit" style={{color:"white",height:"55px"}} class="btn btn-dark">Subscribe</button>
                              </div>
                            </div>
                            </form> */}





            <div className='formobiletextflex' >
            <Container sx={{marginTop:"10%",marginLeft:"50px",width:"auto"}}>
            <div style={{backgroundImage:`url(${logo})`,backgroundSize:"cover",height:"51px",width:"185px"}}></div>
                        
                        

                      						

                                  <div className='typeeriteranimation' style={{position:"absolute"}}>
                                  <Typewriter 
                                   options={{
                                  
                                    autoStart: true,
                                    loop: true,
                                  }}
                                      onInit={(typewriter) => {
                                        typewriter.pauseFor(1000)
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 30px Poppins";>An all new way of</h1>')
                                        .pauseFor(300)
                                        
                                        .typeString('<h1 style="color:#141923 ;font: normal normal 700 30px Poppins";>tiffin delivery </h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px/30px Poppins";>and more…<span style="color:black">|</span></h1>')
                                        .pauseFor(300)
                                        .deleteAll()
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px Poppins";>Reimagined avatar<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px Poppins";> of <span style="color:#141923 ;font: normal normal 800 30px Poppins";>combos</span> with chef<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px Poppins";>Curated menus.<h1>')
										 .deleteAll()
										.typeString('<h1 style="color: #DC2D55; font: normal normal 700 30px Poppins";>Curated meals that</h1>')
										.typeString('<h1 style="color: #DC2D55; font: normal normal 700 30px Poppins";>fits in all pocket</h1>')
										.typeString('<h1 style="color:#141923 ;font: normal normal 700 030px Poppins";>coming soon...</h1>')
                                        .start();
                                       
                                      }}
                                    />



                                  </div>
                                 
          



                </Container>
                <Container >
                <div className='postionfixediv' style={{marginTop:"200px",textAlign:"center"}}> <h3 style={{font:"normal normal 600 20px Poppins"}}>Launching Soon in <span className="tabcentertext3">Raipur</span></h3>
                       {/* <h3 className="textdiv4">Register now to get exclusive discount on all </h3>
					   
                       <h3 className="textdiv5">subscription plans</h3> */}
					   
                       <h3 style={{textAlign:"center"}}><a href="https://play.google.com/store/apps/details?id=com.prixso.tifinco"><img height={40} style={{marginTop:"20px"}} src={GooglePayImg} ></img></a></h3>
                       {/* <h3 className='textdiv6'>Get to know about all the updates regarding launch</h3> */}
                       <h3 style={{font: "normal normal 600 14px Poppins"}}>Join the newsletter to be the first to hear about big surprises after launch.</h3>


                       <div className="row  pb-5 pt-6  setbutton" style={{paddingTop:"20px"}}>
                      <form   onSubmit={this.handleSubmitnewsletter} id="send"  >
                        <div >
                         <center><input type="email" className="form-control" style={{border: "1px solid #BFC1C5",height: "50px",  width: "290px",color:"black",font:"normal normal 600 16px Poppins"}} placeholder="Email" onChange={this.handlenewslwtter} required/></center>
                         
                        </div>
                        <button type="submit" style={{color:"white",marginTop:"10px",width:"120px",height:"50px",font:"normal normal 700 20px Poppins"}} class="btn btn-dark">Subscribe</button>


                </form>
                        <h3 className='textdiv7' style={{textAlign:"center"}}>Follow us on</h3>
               
                        <h1> <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0"><img src={insta2}  height={30}/></a><span><a href=""><img src={facebook2}  height={30} style={{marginLeft:"30px"}}/></a></span></h1>
                       
                        


                 
               
            </div></div>






                </Container>

            


            </div>



        </div>
     
     
     );
   }

  
   
     else if(isTablet)
   {
  return(
<div >
       

        <div className='Maincontainer' style={{display:"flex",height:"auto",backgroundColor:"white"}} >
            <div className='imageflex' style={{width:"55%",backgroundImage:`url(${mainimage})`,backgroundSize:"cover"}}>
            {/* <img id="bgimage" src={mainimage}  style={{ height: "100vh" , backgroundSize: "fill",backgroundRepeat: "no-repeat"}} ></img> */}
            </div>

            <div className='textflex' style={{width:"45%",backgroundColor:"white"}}>
                <Container sx={{marginTop:"10%",marginLeft:"50px",width:"auto"}}>
                <div style={{marginBottom: "240px"}}>
                <div style={{backgroundImage:`url(${logo})`,backgroundSize:"cover",height:"51px",width:"185px"}}></div>
                          {/* <img src={logo} id="logoicon" height={30} /> */}
                           {/* <h1 className="textdiv" >An all new way of </h1>
                       <h1 className="centertext1">tiffin delivery</h1> */}
                     
                         {/* <div class="typing">
                         <h1 className="textdiv2">and more…<span className="centertext2">|</span></h1>
                         </div> */}

{/* 
                        <div style={{ width: '20em' }} >
                                    <TypeAnimation 
                                    cursor={true}
                                    sequence={[
                                      'Pre-define width of wrapper',
                                      2000,
                                      'to prevent layout-shift.',
                                      2000,
                                    ]}
                                    wrapper="h2"
                                    repeat={Infinity}
                                  />
                                    </div> */}
                                    {/* Reimagined avatar
                                    of combos with chef
                                    curated menus */}
									
									
												
												

                                  <div className='typeeriteranimation' style={{position:"absolute"}}>
                                  <Typewriter 
                                   options={{
                                  
                                    autoStart: true,
                                    loop: true,
                                  }}
                                      onInit={(typewriter) => {
                                        typewriter.pauseFor(1000)
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 30px Poppins";>An all new way of</h1>')
                                        .pauseFor(300)
                                        
                                        .typeString('<h1 style="color:#141923 ;font: normal normal 700 30px Poppins";>tiffin delivery </h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px/30px Poppins";>and more…<span style="color:black">|</span></h1>')
                                        .pauseFor(300)
                                        .deleteAll()
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px Poppins";>Reimagined avatar<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px Poppins";> of <span style="color:#141923 ;font: normal normal 800 30px Poppins";>combos</span> with chef<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 30px Poppins";>Curated menus.<h1>')
                                        .deleteAll()
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 30px Poppins";>Curated meals that</h1>')
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 30px Poppins";>fits in all pocket</h1>')
                                        .typeString('<h1 style="color:#141923 ;font: normal normal 700 030px Poppins";>coming soon...</h1>')
                                         .start();
                                       
                                      }}
                                    />

</div>

                                  </div>
                                 
           <div className='postionfixediv' > <h3 style={{font:"normal normal 600 20px Poppins"}}>Launching Soon in <span className="tabcentertext3">Raipur</span></h3>
                       {/* <h3 className="textdiv4">Register now to get exclusive discount on all </h3>
					   
                       <h3 className="textdiv5">subscription plans</h3> */}
					   
                       <h3 style={{textAlign:"start"}}><a href="https://play.google.com/store/apps/details?id=com.prixso.tifinco"><img height={40} style={{marginTop:"20px"}} src={GooglePayImg} ></img></a></h3>
                       <h3 className='textdiv6'>Get to know about all the updates regarding launch</h3>
                       {/* <h3 style={{font: "normal normal 600 14px Poppins"}}>Join the newsletter to be the first to hear about big surprises after launch.</h3> */}


                       <div className="row  pb-5 pt-6  setbutton" style={{paddingTop:"20px"}}>
                      <form   onSubmit={this.handleSubmitnewsletter} id="send"  >
					  
                        <div >
                          <input type="email" className="form-control" style={{border: "1px solid #BFC1C5",height: "40px",  width: "250px",color:"black",font:"normal normal 600 16px Poppins"}} placeholder="Email" onChange={this.handlenewslwtter} required/>
                         
                        </div>
                        <button type="submit" style={{color:"white",marginTop:"10px",width:"120px",height:"50px",font:"normal normal 700 18px Poppins"}} class="btn btn-dark">Subscribe</button>


                </form>
                        <h3 className='textdiv7'>Follow us on</h3>
               
                        <h1> <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0"><img src={insta2}  height={30}/></a><span><a href=""><img src={facebook2}  height={30} style={{marginLeft:"30px"}}/></a></span></h1>
                       
                        


                 
               
            </div></div>
                      
                       




                </Container>

            


            </div>



        </div>
      </div>
    );
  
  } 
  else{
    return(
     
      <div >
       

        <div className='Maincontainer' style={{display:"flex",height:"130vh",backgroundColor:"white"}}>
            <div className='imageflex' style={{width:"50%",backgroundImage:`url(${mainimage})`,backgroundSize:"cover"}}>
            {/* <img id="bgimage" src={mainimage}  style={{ height: "130vh" , backgroundSize: "fill",backgroundRepeat: "no-repeat"}} ></img> */}
            </div>

            <div className='textflex' style={{width:"45%",backgroundColor:"white"}}>

                <Container sx={{marginTop:"10%",marginLeft:"50px",width:"auto"}}>
                  <div style={{marginBottom: "240px"}}>
                  <div style={{backgroundImage:`url(${logo})`,backgroundSize:"cover",height:"51px",width:"185px"}}></div>

                  
                          {/* <img src={logo} id="logoicon" height={30} /> */}
                           {/* <h1 className="textdiv" >An all new way of </h1>
                       <h1 className="centertext1">tiffin delivery</h1> */}
                     
                         {/* <div class="typing">
                         <h1 className="textdiv2">and more…<span className="centertext2">|</span></h1>
                         </div> */}

{/* 
                        <div style={{ width: '20em' }} >
                                    <TypeAnimation 
                                    cursor={true}
                                    sequence={[
                                      'Pre-define width of wrapper',
                                      2000,Email
                                    {/* Reimagined avatar
                                    of combos with chef
                                    curated menus */}
									
									
												
												

                                  <div className='typeeriteranimation' style={{position:"absolute"}}>
                                  <Typewriter 
                                   options={{
                                  
                                    autoStart: true,
                                    loop: true,
                                  }}
                                      onInit={(typewriter) => {
                                        typewriter.pauseFor(1000)
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 50px Poppins";>An all new way of</h1>')
                                        .pauseFor(300)
                                        
                                        .typeString('<h1 style="color:#141923 ;font: normal normal 700 50px Poppins";>tiffin delivery </h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 50px/30px Poppins";>and more…<span style="color:black">|</span></h1>')
                                        .pauseFor(300)
                                        .deleteAll()
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 50px Poppins";>Reimagined avatar<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 50px Poppins";> of <span style="color:#141923 ;font: normal normal 800 50px Poppins";>combos</span> with chef<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 50px Poppins";>Curated menus.<h1>')
                                        .deleteAll()
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 50px Poppins";>Curated meals that</h1>')
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 50px Poppins";>fits in all pocket</h1>')
                                        .typeString('<h1 style="color:#141923 ;font: normal normal 700 50px Poppins";>coming soon...</h1>')
                                        .start();
                                       
                                      }}
                                    />
</div>


                                  </div>
                                 
           <div className='postionfixediv' > <h3 style={{font:"normal normal 600 25px Poppins"}}>Launching Soon in <span className="centertext3">Raipur</span></h3>
                       {/* <h3 className="textdiv4">Register now to get exclusive discount on all </h3>
                       <h3 className="textdiv5">subscription plans</h3> */}
                       <h3 style={{textAlign:"start"}}><a href="https://play.google.com/store/apps/details?id=com.prixso.tifinco"><img  className="imggooglepay" src={GooglePayImg} ></img></a></h3>
                       <h3 className='textdiv6'>Get to know about all the updates regarding launch</h3>
                       {/* <h3 style={{font: "normal normal 600 16px Poppins"}}>Join the newsletter to be the first to hear about big surprises after launch.</h3> */}


                       <div className="row  pb-5 pt-6  setbutton" style={{paddingTop:"20px"}}>
                      <form   onSubmit={this.handleSubmitnewsletter} id="send"  >
                        <div >
                          <input type="email" className="form-control" style={{border: "1px solid #BFC1C5",height: "60px",  width: "400px",color:"black",font:"normal normal 600 16px Poppins"}} placeholder="Email" onChange={this.handlenewslwtter} required/>
                         
                        </div>
                        {/* <span class ="ow-send-status-success-email ow-cl-green-label owHideTemp" style ={{display:"inline"}}>Thanks! Your message has been sent, please check your email shortly.</span> */}
                        <button type="submit" style={{color:"white",marginTop:"10px",width:"156px",height:"50px",font:"normal normal 700 20px Poppins"}} class="btn btn-dark" onClick={this.handleAutoGeneratedNewsLetter}>Subscribe</button>


                </form>
                        <h3 className='textdiv7'>Follow us on</h3>
               
                        <h1> <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0"><img src={insta2}  height={30}/></a><span><a href=""><img src={facebook2}  height={30} style={{marginLeft:"30px"}}/></a></span></h1>
                       
                        


                 
               
            </div></div>
                      
                       




                </Container>

            


            </div>



        </div>
      </div>
    )
    
  }
 
}
}
