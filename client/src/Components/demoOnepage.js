

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
     
       
          
          {/* <div className='divheader1' >

          <div className='imagelogo' ></div> 
          
          </div> */}
          <div class='divheader1' >
  

  <img class="imagelogo" src='https://tifinco.com:5000/public/deliveryRegistration/1665147499369pexels-anjana.jpg' ></img>
  

  
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



// import React, { Component } from 'react'
// import { Fragment } from 'react'
// import Carousel from 'react-material-ui-carousel'
// import Font, { } from 'react-font'
// import TypeAnimation from 'react-type-animation';
// import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Card from '@mui/material/Card';
// import TextField from '@mui/material/TextField';
// import CardContent from '@mui/material/CardContent';
// import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';

// import ListItemText from '@mui/material/ListItemText';
// import EmailIcon  from '@mui/icons-material/Email';
// import CallIcon from '@mui/icons-material/Call';
// import { styled } from '@mui/material/styles';

// import MenuIcon from '@mui/icons-material/Menu';
// import Dialog from '@mui/material/Dialog';

// import CloseIcon from '@mui/icons-material/Close';

// import DialogContent from '@mui/material/DialogContent';

// import './Onepagestyle.css';
// // import logo from './OnepageImage/logo.png';

// // import bgImage1 from './OnepageImage/bgImage1.png';

// // import  GooglePayImg from './OnepageImage/Google_Play_Store_badge.png'

// // import bg1 from './OnepageImage/bg1.png';

// // import bg2 from './OnepageImage/bg2.png';

// // import bg2 from './OnepageImage/logo.png';

// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// // import Live_Tracking from '../OnepageImage/Live_Tracking.png';
// // import heatable_tiffin from './OnepageImage/heatable_tiffin.png';
// // import separate_kitchen from './OnepageImage/separate_kitchen.png';
// // import Flexible from './OnepageImage/Flexible.png';


// import CardMedia from '@mui/material/CardMedia';

// import {CardActionArea, CardActions } from '@mui/material';

// import axios from 'axios';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';







// // import FormControl from '@mui/material/CardActionArea';
// const Hiddenmenubar = styled(Button)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  
//     [theme.breakpoints.up('md')]: {
       
//         visibility: 'hidden',
        

  
//     },
 
//   }));

//   const Hiddenmenu = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//     boxShadow:"none",
    
//     [theme.breakpoints.down('md')]: {
       
//         visibility: 'hidden',

 
//     },
//   }));

//   const Handlenav = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//     boxShadow:"none",
//     marginTop:"-20px",
   
   
    
//     [theme.breakpoints.down('md')]: {
       
//        marginTop:"-20px",
//        marginLeft:"-20px",
//        height:50
      
        
 
//     },
//   }));


//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//     ...theme.typography.body2,
//     padding: theme.spacing(4),
//     textAlign: 'center',
//     alignItems:'center',
//     color: "white",
//     boxShadow:"none",
//     fontFamily: [
//       "Roboto","Helvetica","Arial","sans-serif"
//     ].join(","),
//     fontWeight:"bold",

//       "&:active": {
//         color: "#ed5782"
//       },
//       "&:hover": {
//         color: "#ed5782"
//       },
 

  
//   }));

//   const Setbutton1= styled(Button)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//     // boxShadow:"none",
    
//     [theme.breakpoints.down('md')]: {
       
//         height:"50px",
//         width:"150px",
//         marginLeft:"-20px",
//         marginTop:"15px"
 
//     },
//     [theme.breakpoints.up('md')]: {
       
//       height:"50px",
//       width:"200px",
//       marginLeft:"-35px",
//       marginTop:"20px"

//   },
//   }));

//   const Setbutton2= styled(Button)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//     // boxShadow:"none",
    
//     [theme.breakpoints.down('md')]: {
       
//         height:"50px",
//         width:"200px",
//         marginLeft:"-100px",
//         marginTop:"20px"
 
//     },
//     [theme.breakpoints.up('md')]: {
       
//       height:"50px",
//       width:"200px",
//       marginLeft:"-50px",
//       marginTop:"20px"

//   },
//   }));


//   const Centercontent= styled(Box)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//     // boxShadow:"none",
    
//     [theme.breakpoints.down('md')]: {
       
//         marginBottom:"60px",
      

 
//     },
//   }));


//   // for first Card 
// // const HandleCircle1 =styled(Box)(({ theme }) => ({
// //   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
// //   // boxShadow:"none",
// //   borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",
// //   [theme.breakpoints.down('md')]: {
     
// //     marginLeft:"-200px",
// //     marginTop:"115px"
    
   
    


// //   },
// // }));


// // const HandleCircle2 =styled(Box)(({ theme }) => ({
// //   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
// //   // boxShadow:"none",
// //   borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",
// //   [theme.breakpoints.down('md')]: {
     
// //     marginLeft:"130px",
// //     marginTop:"10px",
// //     visibility:"hidden"
    
   
    


// //   },
// // }));

//  const HandleCard1 =styled(Card)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//   boxShadow:"none",


//   [theme.breakpoints.down('md')]: {
     
//     boxShadow:"none",
//     borderBottom:3,
//     borderBottomColor:"#f4f7f6",
//     borderRadius:-1,
//     borderBottomStyle:"dashed",
   


//   },

//   [theme.breakpoints.up('md')]: {
     
    
//     borderRight:3,
//     borderRightColor:"#f4f7f6",
//     borderRadius:-1,
//     borderRightStyle:"dashed"
   


//   },
// }));



// // For Second Card

// // const HandleCircle3 =styled(Box)(({ theme }) => ({
// //   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
// //   // boxShadow:"none",
// //   borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",
// //   [theme.breakpoints.down('md')]: {
     
// //     marginLeft:"-200px",
// //     marginTop:"115px"
    
   
    


// //   },
// // }));


// // const HandleCircle4 =styled(Box)(({ theme }) => ({
// //   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
// //   // boxShadow:"none",
// //   borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",
// //   [theme.breakpoints.down('md')]: {
     
// //     marginLeft:"130px",
// //     marginTop:"10px",
// //     visibility:"hidden"
    
   
    


// //   },
// // }));

//  const HandleCard2 =styled(Card)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//   boxShadow:"none",


//   [theme.breakpoints.down('md')]: {
     
//     boxShadow:"none",
//     borderBottom:3,
//     borderBottomColor:"#f4f7f6",
//     borderRadius:-1,
//     borderBottomStyle:"dashed",
   


//   },

//   [theme.breakpoints.up('md')]: {
     
    
//     borderRight:3,
//     borderRightColor:"#f4f7f6",
//     borderRadius:-1,
//     borderRightStyle:"dashed"
   


//   },
// }));


// // For Third Card

// // const HandleCircle5 =styled(Box)(({ theme }) => ({
// //   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
// //   // boxShadow:"none",
// //   borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",
// //   [theme.breakpoints.down('md')]: {
     
// //     marginLeft:"-200px",
// //     marginTop:"115px"
    
   
    


// //   },
// // }));


// // const HandleCircle6 =styled(Box)(({ theme }) => ({
// //   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
// //   // boxShadow:"none",
// //   borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",
// //   [theme.breakpoints.down('md')]: {
     
// //     marginLeft:"130px",
// //     marginTop:"10px",
// //     visibility:"hidden"
    
   
    


// //   },
// // }));

//  const HandleCard3 =styled(Card)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
//   boxShadow:"none",


//   [theme.breakpoints.down('md')]: {
     
//     boxShadow:"none",
//     borderBottom:3,
//     borderBottomColor:"#f4f7f6",
//     borderRadius:-1,
//     borderBottomStyle:"dashed",
   


//   },

//   [theme.breakpoints.up('md')]: {
     
    
//     borderRight:3,
//     borderRightColor:"#f4f7f6",
//     borderRadius:-1,
//     borderRightStyle:"dashed"
   


//   },
// }));




// export default class Onepage extends Component {

//     state = {

//      items :[
//             // {
//             //     name: "Random Name #1",
//             //     description: "Probably the most random thing you have ever seen!",
//             //     image:bg1
//             // },
//             {
//                 name: "Tifinco",
//                 description: "Tifinco",
//                 image:""
//             }
//         ],
//         navSize:"5rem",
//         navColor:'transparent',
//         open:false,
//         getid:'',
//         singuppop:false,
//         users_name:'',
//         users_email:'',
//         subject:'',
//         comment:'',
//         users_nameinfo:'',
//         users_emailinfo:'',
//         users_numberinfo:'',
//         plan_type:'',
//         newsletterusers_email:''

       


//     }


//     setnavSize=(size)=>{
//    this.setState({navSize:size})


//     }
//     setnavColor=(color)=>{
//         this.setState({navColor:color})
//     }





//     componentDidMount() {

     

      

//         window.addEventListener('scroll', this.handleScroll);

//   // var countDownDate = new Date("Jul 30, 2022 19:00:00").getTime();

//   // // Update the count down every 1 second
//   // var x = setInterval(function() {
  
//   //   // Get today's date and time
//   //   var now = new Date().getTime();
      
//   //   // Find the distance between now and the count down date
//   //   var distance = countDownDate - now;
      
//   //   // Time calculations for days, hours, minutes and seconds
//   //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//   //   // Output the result in an element with id="demo"
//   //   document.getElementById("timer").innerHTML = days + "d " + hours + "h "
//   //   + minutes + "m " + seconds + "s ";
      
//   //   // If the count down is over, write some text 
//   //   if (distance < 0) {
//   //     clearInterval(x);
//   //     document.getElementById("timer").innerHTML = "EXPIRED";
//   //   }
//   // }, 1000);
//     }
    
//     componentWillUnmount() {
//         window.removeEventListener('scroll', this.handleScroll);
//     }
//     handleScroll=(event)=> {
//         // console.log(window.scrollY>5)
//         if (window.scrollY > 900) {

//             this.setState({navColor: "#FFFFFF",navSize:"4.5rem"});
//         }
//         else  {
//             this.setState({navColor: "transparent",navSize:"5rem"});
//         }
//     }
        
  
//     handleclickopen = () => {
//     this.setState({open:true})
//     // alert("hi")
//   };


//   handleclickclose = () => {
//     this.setState({open:false})
//   };
//  changecolor(e) {
//     e.target.style.color = '#ed5782';
//   }


//   notchangecolor(e){
//     e.target.style.color = 'black';
//   }

  
//   notchangecolorofappbar(e){
//     e.target.style.color = 'white';
//   }


//   homepagehandle=(hash)=>{
//     this.setState({getid:hash})
//     this.setState({open:false})
//     console.log(hash)
//     console.log("ok")

//   }

//   // handleclickopensignuppage = () => {
//   //   this.setState({singuppop:true})
//   //   // alert("hi")
//   // };

//   handleclickclosesinginpop=()=>{
//     this.setState({singuppop:false})
//   }

//   changenavcolor=(e)=>{

//     e.target.style.color = '#ed5782';
    


//   }


//   handleInputname=(event)=>{
// // console.log(event.target.value)

// this.setState({users_name:event.target.value});



//   }

//   handleInputemail=(event)=>{
//     this.setState({users_email:event.target.value})

//   }

//   handleInputsubject=(event)=>{
//     this.setState({subject:event.target.value})

//   }

//   handleInputcomment=(event)=>{
//     this.setState({comment:event.target.value})



//   }


//   handleSubmitusermgs = event =>  {

 
//                      const data = {
//                        user_name:this.state.users_name,
//                        user_email: this.state.users_email,
//                        subject:this.state.subject,
//                        comment:this.state.comment,
                      
                       

                      
//                      };
//                      // alert(this.state.food_name);
                   
//                try{
//                  axios.post('https://tifinco.com:5000/admin/storeusersmgs', data,{
//                    headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
//                    onUploadProgress: data => {
                  
//                      this.setState({
//                      progress: Math.round((100 * data.loaded) / data.total)
         
//                      });
//                    },
                 
//                  })
//                    .then(res => {
                    
//                        if(res.data.msg=='success'){
                       
         
                     
//                          console.log("success");
//                          window.location.reload();
               
             
//                        }
                     
//                    })
//                  }  catch(error) {
                   
//                          console.log(error)
//                          this.setState({
//                              Load :false,
//                              });
//                          console.log("internal server error");
//                        }
           
//   }

//   handleInputusername=(event)=>{

//     this.setState({users_nameinfo:event.target.value})


//   }
//   handleInputuseremail=(event)=>{
//     this.setState({users_emailinfo:event.target.value})
    
//   }
//   handleInputusernumber=(event)=>{
//     this.setState({users_numberinfo:event.target.value})

    
//   }
//   handleInputuserpalntype=(event)=>{
//     this.setState({plan_type:event.target.value})
    
//   }

//   handleInputuserfoodtype=(event)=>{
//     this.setState({food_type:event.target.value})
//   }
  



//   handleSubmituserinfo = event =>  {

 

//     event.preventDefault();
    

// console.log(this.state.plan_type=="")

// if(this.state.plan_type==""){
// alert("please select paln type")

// }
// else{

//   const data = {
//     plan_type:this.state.plan_type,
//     user_name:this.state.users_nameinfo,
//     user_email: this.state.users_emailinfo,
//     user_number:this.state.users_numberinfo,
//     // plan_type:this.state.plan_type,
   
   
//   };


//   try{
//     axios.post('https://tifinco.com:5000/admin/payment', data,{
//       headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
//       onUploadProgress: data => {
     
//         this.setState({
//         progress: Math.round((100 * data.loaded) / data.total)
  
//         });
//       },
    
//     })
//       .then(res => {
       
//            const link =  res.data.mgs;

//           //  console.log(link.paymentLink)

//           //  link.map(link=>{

//           //   console.log(link.paymentLink)
//           //  })
//           window.location = link.paymentLink;
//           // console.log(res.data.paymentLink)
//           // if(res.data.msg=='success'){
//             // window.location = "/product/updateoptionalitem/"+_id;
  
        
//           //   // console.log("success");
//             // window.location.reload();
  
  
//           // }
//           // else if  (res.data.msg=='email_exist'){
//           //   alert("email already exist please enter new email id");
            
  
//           // }
  
//           // else if  (res.data.msg=='mobile_exist'){
//           //   alert("Mobile Number already exist ")
            
//           //           }
        
//       })
//     }  catch(error) {
      
//             console.log(error)
//             this.setState({
//                 Load :false,
//                 });
//             console.log("internal server error");
//           }
  










     
// // try{
// //   axios.post('https://tifinco.com:5000/admin/storeusersinfo', data,{
// //     headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
// //     onUploadProgress: data => {
   
// //       this.setState({
// //       progress: Math.round((100 * data.loaded) / data.total)

// //       });
// //     },
  
// //   })
// //     .then(res => {
     
// //         if(res.data.msg=='success'){
        

      
// //           console.log("success");
// //           window.location.reload();


// //         }
// //         else if  (res.data.msg=='email_exist'){
// //           alert("email already exist please enter new email id");
          

// //         }

// //         else if  (res.data.msg=='mobile_exist'){
// //           alert("Mobile Number already exist ")
          
// //                   }
      
// //     })
// //   }  catch(error) {
    
// //           console.log(error)
// //           this.setState({
// //               Load :false,
// //               });
// //           console.log("internal server error");
// //         }









// }
     
//       // alert(this.state.food_name);
 

// }
// handlenewslwtter = (event)=>{
 
//   this.setState({newsletterusers_email:event.target.value})
// }


// handleSubmitnewsletter = event =>  {




// event.preventDefault();
    

 
//   const data = {
  
//     user_email: this.state.newsletterusers_email,
  
   
//   };
     
// try{
//   axios.post('https://tifinco.com:5000/admin/storenewsletters', data,{
//     headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
//     onUploadProgress: data => {
   
//       this.setState({
//       progress: Math.round((100 * data.loaded) / data.total)

//       });
//     },
  
//   })
//     .then(res => {
     
//         if(res.data.msg=='success'){
        

      
//           console.log("success");
//           window.location.reload();
//           alert("data inserted")


//         }
//         else if  (res.data.msg=='exist'){
// alert("email already exist please enter new email id")

//         }
      
//     })
//   }  catch(error) {
    
//           console.log(error)
//           this.setState({
//               Load :false,
//               });
//           console.log("internal server error");
//         }



// }


//   render() {

//    return(<> 
//     <Font family=' normal normal bold 16px/87px Poppins'>
//       <Container maxWidth={false} disableGutters={true} justifyContent="center"  sx={{alignItems:"center"}}>
//            <Stack>

// {/* Nav Bar Section   */}
//             <Container sx={{width:"auto" }} >
//             {/* <Box sx={{ display: 'flex' }}>
//       <AppBar component="nav"  style={ {  height:this.state.navSize,transition: "all 1s", backgroundColor:this.state.navColor, boxShadow: 'none',display: "flex",position:"fixed"}}>
//         <Toolbar>
        
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
//            <img src={logo} height={50} />
//           </Typography>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           
//               <Button  sx={{ color: '#fff' }}>
//                 a
//               </Button>
//               <Button  sx={{ color: '#fff' }}>
//                 a
//               </Button>
//               <Button  sx={{ color: '#fff' }}>
//                 a
//               </Button>
       
//           </Box>
//         </Toolbar>
//       </AppBar>
//       </Box> */}
//             <Box  >
      
//               <AppBar  style={ {  height:this.state.navSize,transition: "all 1s", backgroundColor:this.state.navColor, boxShadow: 'none',display: "flex",position:"fixed"}} >


           
//                 <Grid container spacing={2} xs={12} md={12} sm={12} style={{textAlign: "center"}}>

//                   <Grid item xs={3} md={3} sm={3}>
//                     {/* <Handlenav><Item><a href="#" onClick={() => window.location.reload(false)} ><img src={logo} id="logoicon" height={50} /></a></Item></Handlenav> */}
//                   </Grid>

//                   <Grid item xs={1}  md={1} sm={1}>
//                     <Hiddenmenu> <a href="#Home"  className='link-dark textfont'  style={{marginRight:"-950px"}}>Home</a></Hiddenmenu> 
         
//                   </Grid>

//                    <Grid item xs={1}  md={2} sm={1}>
//                      <Hiddenmenu><a href='#About' className='link-dark textfont'  style={{marginRight:"-700px"}}> Our Menu</a></Hiddenmenu> 
//                     </Grid>

//                     <Grid item xs={1}  md={3} sm={1}>
//                       <Hiddenmenu><a href='#Subscription' className='link-dark textfont'  style={{marginRight:"-200px"}}> Corporate Order</a></Hiddenmenu>
//                     </Grid>
//                     {/* <Grid item xs={1}  md={1} sm={1}>
//                       <Hiddenmenu><a href='#Subscription' className='link-dark textfont'> Corporate Order</a></Hiddenmenu>
//                     </Grid>

//                     <Grid item xs={1}  md={1} sm={1}>
//                     <Hiddenmenu> <a href='#Contact'  className='link-dark textfont'> Contact</a></Hiddenmenu>
//                     </Grid> */}



//                       <Grid item xs={1}  md={1} sm={2}>
//                       <Setbutton1><a href='/login'><button class="btn fontchange"  style={{borderRadius:"5px",width: "155px",fontSize:"15px",fontWeight:"bold",marginTop:"-10px",backgroundColor:"#191A1C",color:"#FFFFFF"}}  >Download App</button></a></Setbutton1>
//                       {/* <Hiddenmenu> <Setbutton1> <Item> <a href='/login' style={{color:"white"}}> <Button  variant="contained"  sx={{ borderRadius:"5rem",fontSize:"9px",fontWeight:"bold", width:"100px",marginTop:"-10px"}} style={{backgroundColor:"#D51058"}}>Sign In </Button></a> </Item> </Setbutton1></Hiddenmenu> */}
//                     </Grid> 
//                     <Grid item xs={2}  md={2} sm={2}>
//                     {/* <Setbutton2> <Item><a href='#Booktiffin' > <Button  variant="contained" sx={{borderRadius:"1rem",fontSize:"9px",fontWeight:"bold",marginTop:"-10px" }} style={{backgroundColor:"#D51058"}}> Book a Tiffin    </Button></a> </Item> </Setbutton2> */}
//                     {/* <Setbutton2> <Item><a href='#Booktiffin' > <Button  variant="contained" sx={{borderRadius:"5px",width: "155px",fontSize:"10px",fontWeight:"bold",marginTop:"-10px" }} style={{backgroundColor:"#191A1C"}}> Login or Signup  </Button></a> </Item> </Setbutton2> */}
//                     <Hiddenmenu><Setbutton2> <a href='/login'><button class="btn fontchange" style={{borderRadius:"5px",width: "155px",fontSize:"15px",fontWeight:"bold",marginTop:"-10px",backgroundColor:"#191A1C",color:"#FFFFFF" }} > Login or Signup </button></a></Setbutton2></Hiddenmenu>
//                   </Grid>





                    

//         <Grid item xs={1}  md={1} sm={1}>
//         <Hiddenmenubar>
       
       
//                 <div className="dropdown">
//                               <Button sx={{marginTop:"10px",color:"#a6a6a4",marginLeft:4}}  onClick={this.handleclickopen}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
//                               <MenuIcon />
                                  
//                                 </Button>

//                               <Dialog open={this.state.open}  fullScreen PaperProps={{
//                                   style: { borderWidth: 10,
//                                     borderTopWidth:20,
                                  
//                                     borderColor: "#ed5782",
//                                     borderStyle: "solid",
//                                     backgroundColor: "#ffff",
//                                     color: "black",
//                                   }
//                                 }} >
                                  
//                                     <Box
                                      
//                                     //margin
//                                       display="flex"
//                                       justifyContent="flex-end"
//                                       alignItems="flex-end"
//                                       sx={{bgcolor:"#ed5782",width:"100%"}}
                                    
                                      
//                                     >
                                    
//                                        <a href='#'> <CloseIcon onClick={this.handleclickclose} sx={{color:"black"}}/></a>
                                      
//                                     </Box>
                                    
                                  
                                      
//                                       <DialogContent>
                                  
//                                 <div className="container">
//                                       <div className="row">
//                                           <div className="col">

//                                               <ul className="list-group">
                                                
//                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  className="link-dark" href="#Home">Home</a></li>
//                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}   onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#About">Our Menu</a></li>
//                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#Subscription">Corporate Order</a></li>
//                                                   {/* <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#Contact">Contact</a></li>
//                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="/login">Sign In</a></li> */}
                                            
//                                               </ul>


//                                           </div>
//                                       </div>
//                                   </div>
//                                       </DialogContent>                                    
//                                     </Dialog>            
//                   </div>

//                         </Hiddenmenubar> 
//                     </Grid>       
//                       </Grid>
               
//                   <Toolbar  >
//                   </Toolbar>

//                   </AppBar>

//                   </Box>

//             </Container>
     

//        {/* Carousel Section  */}


//         <Box zIndex={0}  sx={{position: 'relative' ,overflow:"hidden"}} >
            
//             <Carousel zIndex={false} elevation={0} dynamicHeight={true} indicatorIconButtonProps={{
//                     style: {
//                         height: '0px',
//                         display: 'none',
//                         padding: '10px',    // 1
//                         color: 'blue'       // 3
//                     }
//                 }}>
//                 {
//                     this.state.items.map( item =>(  <Paper variant="outlined " direction="column" 
//                     justify="center"
//                     alignItems="center"> <img id="bgimage" src={item.image}  style={{ height: "100vh" , backgroundSize: "fill",
//                     backgroundRepeat: "no-repeat"}} ></img> </Paper>
                    
//                     ))
//                 }
                
//             </Carousel>
//              {/* <Grid sm={12} md={12} xl={12}
//     container
//     direction="row"
//     justify="center"
//     alignItems="center"
//     style={styles.heroContainer} >
    
// </Grid> */}
           
//             <Container id="aligncontainer"  zIndex={1000} maxWidth={false} sx={{
                    
//                     bgcolor:'transparent',
//                     paddingBottom: 40, 
//                     position: 'absolute',
//                     top: 305,
//                     left:1134,
//                     zIndex: 'modal',
//                     flex: 1,
//                     flexDirection: 'column',
                    
//                     justifyContent: 'center',
//                     alignItems: 'center',
                  
                   
                   
                  

//                     }}>

//                    {/* <Grid item sm={12} md={12}>
//                    <Typography id="Home"   sx={{ color: '#ffff',fontSize: '50px', fontWeight: '700' ,paddingBottom:"20px",fontFamily:"Quicksand",visibility:"hidden"}}><span style={{color:"#D51058",fontSize: '50px', fontWeight: '700'}}>TIFINCO</span> <span className="dynamic-txts">Experience the 'NEW CONCEPT' of tiffin service</span></Typography>
                  
//                   <Typography id={this.state.getid}  sx={{ color: '#ffff',fontSize: '35px', fontWeight: '700' ,paddingBottom:"20px",fontFamily:"Quicksand"}}><span style={{color:"#D51058",fontSize: '40px', fontWeight: '700'}}>An all new way of</span> Experience the 'NEW CONCEPT' of tiffin service</Typography>
//                   <Typography sx={{ m:1, color: 'white',fontSize: '18px', fontWeight: '500',lineHeight:"1.2px",paddingBottom:"20px"}}><p style={{paddingBottom:"10px"}}>Don't miss out! Register today and</p> <span style={{paddingLeft:"20px"}}>discover our latest offers!</span></Typography>
//                   <Typography sx={{ m:1, color: 'white',fontSize: '15px', fontWeight: '500',lineHeight:"1.2px"}}><span ><CalendarMonthIcon sx={{fontSize:"15px"}}/>  July 10 2022</span><span>  <LocationOnIcon sx={{fontSize:"15px"}}/>  Now Serving in Raipur</span></Typography>
//                  <a href='#Booktiffin'><Button   variant="contained"  sx={{ marginTop:"10px" ,borderRadius:"50rem",fontSize:"9px",fontWeight:"bold", }} style={{backgroundColor:"#D51058"}} id="About"> Book A Tiffin </Button></a> 
            
//                   </Grid>  */}
//                    <Box sx={{ flexGrow: 1 }}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={8} sm={4} md={12}>

//                     {/* <TypeAnimation 
//                         cursor={true}
//                         sequence={this.animationtext, 1000, ''}
//                         wrapper="h2"
//                         repeat={Infinity}
//                       />
                      
//                        */}
//                       <h1 className="textdiv" >An all new way of </h1>
//                       <h1 className="centertext1">tiffin delivery</h1>
//                       {/* <TypeAnimation className="textdiv2"
//                         cursor={true}
//                         sequence={[' and more…', 1000, '']}
//                         wrapper="h2"
//                         repeat={Infinity}
//                       /> */}
//                       	<div class="typing">
//                         <h1 className="textdiv2">and more…<span className="centertext2">|</span></h1>
// 	                      </div>
//                       {/* <span className="centertext2">|</span> */}
//                       {/* <h1 className="textdiv2">and more…<span className="centertext2">|</span></h1> */}

//                       {/* <div class="bhjg">
// 	<div class="typing">
//   <h1 className="textdiv" >An all new way of<br></br> <span className="centertext1">tiffin delivery</span></h1>
// 	</div>
// </div> */}
//                       <h3 className="textdiv3">Serving first in  <span className="centertext3">Raipur</span></h3>
//                       <h3 className="textdiv4">Register now to get exclusive discount on all </h3>
//                       <h3 className="textdiv5">subscription plans</h3>
//                       {/* <h3 ><img  className="imggooglepay" src={GooglePayImg} ></img></h3> */}


                       
//                     </Grid>
                  
//                   </Grid>
//                   </Box>

                   

//             </Container>

         
//         </Box>

// {/* Peper Section */}

//           <Box >
//             <Paper id={this.state.getid}  alignItems="center" justifyContent="center" sx={{marginTop:"-100px",background: "#FFFFF",borderRadius: 4,width:"auto",height:"auto",marginBottom:"50px",marginLeft:"0px",marginRight: "0px",paddingTop:"60px",paddingBottom:"27px"}}
//                 >
//                  {/* <Grid xs={12} sm={6} md={6}>
//                 <Centercontent> */}


// {/* for Coundouwn */}
// {/* 
//                 <Box sx={{ height: "100px",marginBottom:"30px", marginTop:"60px",paddingBottom:"-40px"}} >
//                     <Typography style={{textAlign:"center",fontSize:"50",justifyContent:"center",}}>
//                         <h5 style={{fontSize: "50px",verticalAlign:"center", fontWeight:"bolder",color:"#555353"}} id="timer"> </h5>
//                     </Typography>
//                 </Box >


//                 </Centercontent>



//                  </Grid> */}

                 
               
//         {/*About Subcription section  */}


//        {/* <Box className="background" sx={{ height: "auto",bgcolor:'#f4f7f6',backgroundImage:` url("https://wallpapercave.com/dwp1x/wp5524636.jpg")`}}  > */}

//        {/* <Container justifyContent="center"   maxWidth={false} sx={{backgroundColor:"#f4f7f6", marginLeft:"auto",marginRight:"auto",width:"auto" ,textAlign:"center",alignItems:"center"}} >

//                    <Grid xs={6} md={5} sm={12}>
                    
                
//                     <Grid container sx={{textAlign:"center"}} >
//                     <Grid item   >
//                     <Typography style={{marginTop:"50px",fontSize:"50",justifyContent:"center"}}>
//                      <h5  style={{fontSize: "28px",verticalAlign:"center",color:'#575554',marginBottom:"10px"}}> About Tifinco Subscription</h5>
//                  </Typography>
//                  <Typography style={{fontSize:"18px",color:"#7c7b7b", paddingTop:"10px",paddingBottom:"20px"}}>
//                  With the introduction of an automated Tiffin preparation and delivery service for corporates, students, and other institutions, eating nutritious and healthy food can now be enjoyed at the convenience of their door. Using the app-based Tiffin & food delivery service, we aim to make Tiffin and food accessible to a mass audience at an affordable price.
//                  </Typography>
                
//                     </Grid>
//                     </Grid>
//                     </Grid>



//               </Container> */}


//             <Container justifyContent="center" maxWidth={false} sx={{background: "#FFFFFF",marginLeft:"20px",marginRight:"20px",width:"auto",marginTop:"60px" }}>
//             <Box >
//                       <Grid container  sx={{background: "#FFFFFF"}}  >
//                         <Grid sx={{ background: "#FFFFFF", padding: "10px"}} xs={12} md={12} sm={6}  >
//                         <Card sx={{ minWidth: false,boxShadow:"none",height:"auto" ,background:"#2A1225",borderRadius:"5px"}} >
//                         <CardContent sx={{p:5}}>

//                           <h3 className="cardtext1">Enjoy <span className="cardtext2">pre-planned curated meals</span></h3>
//                           <h3 className="cardtext3"> delivered at your doorstep</h3>
//                           <h3 className="cardtext4"> everyday on time</h3>
//                           <h3 className="cardtext5">Plans for all suits starting at 100 per meal</h3>
//                           <div className='carddiv'><span className='cradtext6'>Explore plans on the app</span></div>
                          
//                           {/* <div class="container">
//                           <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
//                             <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill:"#2A1225"}}></path>
//                           </svg>
//                         </div> */}
                          
                          
//                       </CardContent>
//                       </Card>
//                       </Grid>


                     

//                       </Grid>
//               </Box>
//             </Container>
//             <Container justifyContent="center" maxWidth={false} sx={{background: "#FFFFFF",width:"auto" ,paddingBottom:"-24px"}}>
//             <Box >
                      
//                         <Grid sx={{ background: "#FFFFFF"}} xs={12} md={12} sm={6}  >
//                         <Card sx={{ minWidth: false,boxShadow:"none",height:"auto" ,background:"#FFFFFF"}} >
//                         <CardContent >

//                         <span className='cardttext8'>Benefits of subscribing to tifinco</span>
                        
                          
                          
//                       </CardContent>
//                       </Card>
             


                     

//                       </Grid>
//               </Box>
//             </Container>

//            <Container justifyContent="center" maxWidth={false} sx={{ backgroundColor:"#FFFFFF",marginLeft:"auto",marginRight:"auto",width:"auto",
//                      }}>
             
//                <Box >
            

//             <Grid container  sx={{bgcolor:'#FFFFFF', justifyContent: 'center',
//                     alignItems: 'center',}}  >
                      
//               <Grid sx={{ backgroundColor: '#FFFFFF'}} xs={12} md={3} sm={6}  >
//               <Card sx={{ minWidth: false,boxShadow:"none",height:"280px",backgroundColor:"#9D95C20D",m:5}} >
//               <CardContent >

//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

//                   {/* < AutoAwesomeMotionIcon sx={{color:"#ed5782",marginLeft:"0px",fontSize:"50px"}}/> */}
                 
//                   {/* <center><img  src={heatable_tiffin} height={70} /></center> */}

//                 </Typography>

//                 <center><h1 className='card1text1'> Heatable Tiffin</h1></center>
                  
             
                
                
//                   <center><p className='card1text2' >
//                   Get your food instantly hot with heatable tiffin and enjoy hot and fresh meal
        
//                   </p></center>
//             </CardContent>
//             </Card>
//             </Grid>


//             <Grid sx={{  backgroundColor: '#FFFFFF'}} xs={12} md={3} sm={6}>
//             <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",backgroundColor:"#9D95C20D",m:5}}>
//             <CardContent >
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

//                {/* < AutoAwesomeMotionIcon sx={{color:"#ed5782",marginLeft:"0px",fontSize:"50px"}}/> */}
//               {/* <center><img src={Flexible} height={70} /></center>  */}
//                 </Typography>

//                 <center><h1 className='card1text1'> Flexible</h1></center>
                  
             
                
                
//                   <center><p className='card1text2' >
//                   Pause, Change or cancel subscription according to your need
        
//                   </p></center>
               
                
//             </CardContent>
//             </Card>
//             </Grid>


//             <Grid sx={{  backgroundColor: '#FFFFFF'}}xs={12} md={3} sm={6}>
//             <Card sx={{ minWidth: false,boxShadow:"none" ,height:"280px",m:5,backgroundColor:"#9D95C20D"}}>
//             <CardContent >
//               <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

//                {/* < AutoAwesomeMotionIcon sx={{color:"#ed5782",marginLeft:"0px",fontSize:"50px"}}/> */}
//                {/* <center><img src={Live_Tracking} height={70} /></center> */}
//              </Typography>

//              <center><h1 className='card1text1'> Live Tracking</h1></center>
                  
             
                
                
//                   <center><p className='card1text2' >
//                   Know your tiffin updates with notifications and in app tracking
        
//                   </p></center>

//             </CardContent>
//             </Card>
//             </Grid>
                
//         <Grid sx={{  backgroundColor: '#FFFFFF'}}xs={12} md={3} sm={6}>
//         <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",backgroundColor:"#9D95C20D",m:5}}>
//         <CardContent >
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

//                {/* < AutoAwesomeMotionIcon sx={{color:"#ed5782",marginLeft:"0px",fontSize:"50px"}}/> */}
//                {/* <center><img src={separate_kitchen} height={70} /></center> */}
//                 </Typography>
//                 <center><h1 className='card1text1'>Separate Kitchen</h1></center>
                  
             
                
                
//                   <center><p className='card1text2' >
//                   Separate Kitchen for Veg and Non-veg meals
        
//                   </p></center>
//             </CardContent>
//             </Card>
//         </Grid>


//             </Grid>
//     </Box>


// </Container>



// {/* <Container  justifyContent="center"   maxWidth={false} sx={{ backgroundColor:"transform", marginLeft:"auto",marginRight:"auto",width:"70%" ,textAlign:"center",alignItems:"center",height:"400px"}} >

//                   <Grid xs={6} md={6} sm={12}>
                    
                
//                     <Grid container sx={{textAlign:"center"}} >
//                     <Grid item   >
                      
//                     <Typography style={{marginTop:"60px",fontSize:"50",justifyContent:"center"}}>
//                      <h3 style={{fontSize: "25px",verticalAlign:"center",color:'white'}}>Would you like to check out our current offerings ? Be sure not to miss out on our latest promostions by subscribing to newsletter TODAY.</h3>
//                    </Typography>

//                 <div className="row justify-content-center align-items-center pb-5 pt-3  setbutton">
//                 <form className="col-md-4"  onSubmit={this.handleSubmitnewsletter} id="send"  >
//                   <div className="input-group input-group-sm">
//                     <input type="email" className="form-control" placeholder="Enter Your Email Address" onChange={this.handlenewslwtter}/>
//                     <Button   variant="contained"  sx={{borderRadius:"5px",fontSize:"12px",fontWeight:"bold", }} style={{backgroundColor:"#D51058"}}  type="submit">subscribe</Button>
//                   </div>
//                 </form>
//             </div>
//                     </Grid>
//                     </Grid>
//                     </Grid>
// </Container> */}

// <Container   maxWidth={false} sx={{ marginLeft:"auto",marginRight:"auto",width:"100%",justifyContent:"center",marginTop:"20px"  }} className="containerdiv2" >

// <Grid xs={6} md={5} sm={12}>
                    
                
//                     <Grid container sx={{textAlign:"center",alignItems:"center"}} >
                    
//                    <div style={{margin:"auto"}}> <h5 className='containertext1'>Pre-book <span className="containertext2">now and get one extra meal free. See how it works <a href='#' style={{color:"#2A345A"}}><ArrowForwardIcon/></a></span></h5></div>
                    
       
                    
//                     </Grid>
//                     </Grid>

// </Container>







// <Container justifyContent="center"   maxWidth={false} sx={{ backgroundColor:"#FFE5EB",marginLeft:"auto",marginRight:"auto",width:"100%" ,alignItems:"center",marginTop:10}}>


//     <Box sx={{alignItems:"center" }}>

//             <Grid container  sx={{bgcolor:'#FFE5EB',alignItems:"center"}} justifyContent="center"    >


//             <Grid sx={{ backgroundColor: '#FFE5EB' ,alignItems:"center"}} xs={12} md={6} sm={4}  >
//             <Card sx={{ minWidth: false,boxShadow:"none",backgroundColor: '#FFE5EB'}}  >
//             <Grid sx={{ backgroundColor: '#FFE5EB',}}  >
//                    <div className='containermain'>
//                    <h1 className='container3card1text1'>Delicious <span style={{color: "#DC2D55"}}>Combo Meals</span> you can't resist</h1>
//                   <h1 className='container3card1text2'>Try our exciting range of veg and non-veg combo meals</h1>
//                   <h1 className='container3card1text3'>Order from our app and get 50 OFF on your first order</h1>
//                   <div className='conatinerbutton'><h1 className='container3card1text4'>ORDER NOW</h1></div>

//                    </div>
                 
//                      </Grid>
//               </Card>

//         </Grid>


//     <Grid sx={{  backgroundColor: '#FFE5EB',}} xs={12} md={5.5} sm={8}>
// <Card sx={{ minWidth: false ,boxShadow:"none"}}>
//    <Grid container  sx={{bgcolor:'#FFE5EB',alignItems:"center",padding:"5px"}}  >


// <Grid sx={{ backgroundColor: '#FFE5EB',marginRight: "40px",marginTop:"80px",marginBottom:"-40px"}} xs={12} md={3} sm={6}  >

// <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",backgroundColor:"#FFE5EB"}}>
//       <CardActionArea >
//         <CardMedia
//           component="img"
//           height="200"
//           image="https://www.mothersrecipe.com/wp-content/uploads/2020/12/Image-624x351.jpg"
//           alt="green iguana"
//           sx={{borderRadius:"10px"}}
//         />
       
//       </CardActionArea>
//       <CardActions>
//         <p className='crad4text4'> Chinese Combos</p>
       
        
//       </CardActions>
//     </Card>

//   </Grid>
      


//     <Grid sx={{  backgroundColor: '#FFE5EB',marginTop:"80px",marginLeft:"20px",marginBottom:"-40px"}} xs={12} md={3} sm={6}>



//     <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",borderRadius:"5px",backgroundColor:"#FFE5EB"}}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="200"
//           image="https://www.mothersrecipe.com/wp-content/uploads/2020/12/Image-624x351.jpg"
//           alt="green iguana"
//           sx={{borderRadius:"10px"}}
//         />
       
//       </CardActionArea>
//       <CardActions>
//       <p className='crad4text4'> Rice Combos</p>
//       </CardActions>
//     </Card>
//         </Grid>
       


//     </Grid>


// </Card>





// <Card sx={{ minWidth: false ,boxShadow:"none"}}>
//    <Grid container  sx={{bgcolor:'#FFE5EB',alignItems:"center",marginTop: "0px"}}  >


// <Grid sx={{ backgroundColor: '#FFE5EB',marginRight: "40px"}} xs={12} md={3} sm={6}  >

// <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",borderRadius:"5px",backgroundColor:"#FFE5EB"}}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="200"
//           image="https://www.mothersrecipe.com/wp-content/uploads/2020/12/Image-624x351.jpg"
//           alt="green iguana"
//           sx={{borderRadius:"10px"}}
//         />
       
//       </CardActionArea>
//       <CardActions>
//       <p className='crad4text4'>Thali Combos</p>
//       </CardActions>
//     </Card>

//   </Grid>
      


//     <Grid sx={{  backgroundColor: '#FFE5EB',m:3}} xs={12} md={3} sm={6}>

//     <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",borderRadius:"10px",backgroundColor:"#FFE5EB"}}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="200"
//           image="https://www.mothersrecipe.com/wp-content/uploads/2020/12/Image-624x351.jpg"
//           alt="green iguana"
//           sx={{borderRadius:"20px"}}
//         />
       
//       </CardActionArea>
//       <CardActions>
//       <p className='crad4text4'> Paratha Combos</p>
//       </CardActions>
//     </Card>

//         </Grid>
       


//     </Grid>


// </Card>
//         </Grid>
 
//     </Grid>
// </Box>

// </Container>






// <Container justifyContent="center" maxWidth={false} sx={{background: "#FFFFFF",marginLeft:"20px",marginRight:"20px",width:"auto",marginTop:"60px" }}>
//             <Box zIndex={0}  sx={{position: 'relative' ,overflow:"hidden"}} >
//                       <Grid container  sx={{background: "#FFFFFF"}}  >
//                         <Grid sx={{ background: "#FFFFFF", padding: "10px"}} xs={12} md={12} sm={6}  >
//                         <Card sx={{ minWidth: false,boxShadow:"none",height:"auto" ,background:"#FF45001A",borderRadius:"5px",m:10}} >
//                         <CardContent sx={{p:5}}>

//                           {/* <h3 className="cardtext1">Enjoy <span className="cardtext2">pre-planned curated meals</span></h3>
//                           <h3 className="cardtext3"> delivered at your doorstep</h3>
//                           <h3 className="cardtext4"> everyday on time</h3>
//                           <h3 className="cardtext5">Plans for all suits starting at 100 per meal</h3>
//                           <div className='carddiv'><span className='cradtext6'>Explore plans on the app</span></div>
//                            */}
                        
//                           <h1 className='containert5text1'>Get the tifinco app via email or phone number</h1>
//                           <FormControl>
  
//       <RadioGroup
//         row
//         aria-labelledby="demo-row-radio-buttons-group-label"
//         name="row-radio-buttons-group"
      
//       >
//         <FormControlLabel className="containerredio" value="female" 
//           control={<Radio  sx={{
//             color: "#DA234D",
//             '&.Mui-checked': {
//               color: "#DA234D",
//             },
//           }}/>} label="Female" />
//         <FormControlLabel className="containerredio"  value="male" control={<Radio  sx={{
//           color: "#DA234D",
//           '&.Mui-checked': {
//             color: "#DA234D",
//           },
//         }}/>} label="Male" />
     
//       </RadioGroup>
//     </FormControl> 
    
//            <div className="row  pb-5 pt-6  setbutton" style={{paddingTop:"20px"}}>
//                 <form className="col-md-3"  onSubmit={this.handleSubmitnewsletter} id="send"  >
//                   <div className="input-group input-group-xl">
//                     <input type="email" className="form-control" placeholder="Enter Your Email Address" onChange={this.handlenewslwtter}/>
//                     <Button   variant="contained"  sx={{borderRadius:"5px",fontSize:"12px",fontWeight:"bold",p:"15px"}} style={{backgroundColor:"#DA234D",marginLeft:20}}  type="submit">subscribe</Button>
//                   </div>
//                 </form>
//             </div>
//             <h1 className='containedtext7'>Download the app from</h1>
//             {/* <h3 ><img  className="imggooglepay" src={GooglePayImg} ></img></h3> */}
                          
//                       </CardContent>
//                       </Card>
//                       </Grid>


                     

//                       </Grid>



//                       <Container id="aligncontainer"  zIndex={1000} maxWidth={false} sx={{
                    
//                     bgcolor:'transparent',
//                     paddingBottom: 40, 
//                     position: 'absolute',
//                     top: 50,
//                     left:1134,
//                     zIndex: 'modal',
//                     flex: 1,
//                     flexDirection: 'column',
                    
//                     justifyContent: 'center',
//                     alignItems: 'center',
                  
                   
                   
                  

//                     }}>

                 
//                    <Box sx={{ flexGrow: 1 }}>
//                   <Grid container spacing={2}>
//                   <Grid sx={{ backgroundColor: 'red',marginRight: "40px"}} xs={12} md={3} sm={6}  >

// <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",borderRadius:"5px",backgroundColor:"#FFFFFF"}}>
//       <CardActionArea>
//         {/* <CardMedia
//           component="img"
//           height="200"
//           image="https://www.mothersrecipe.com/wp-content/uploads/2020/12/Image-624x351.jpg"
//           alt="green iguana"
//           sx={{borderRadius:"10px"}}
//         /> */}
       
//       </CardActionArea>
//       <CardActions>
//       {/* <p className='crad4text4'>Thali Combos</p> */}
//       </CardActions>
//     </Card>

//   </Grid>
                  
//                   </Grid>
//                   </Box>

                   

//             </Container>
//             <Container id="aligncontainer"  zIndex={2000} maxWidth={false} sx={{
                    
//                     bgcolor:'transparent',
//                     paddingBottom: 40, 
//                     position: 'absolute',
//                     top: 100,
//                     left:1134,
//                     zIndex: 'modal',
//                     flex: 1,
//                     flexDirection: 'column',
                    
//                     justifyContent: 'center',
//                     alignItems: 'center',
                  
                   
                   
                  

//                     }}>

                 
//                    <Box sx={{ flexGrow: 1 }}>
//                   <Grid container spacing={2}>
//                   <Grid sx={{ backgroundColor: '#FFFFF',marginRight: "40px"}} xs={12} md={3} sm={6}  >

// <Card sx={{ minWidth: false ,boxShadow:"none",height:"280px",borderRadius:"5px",backgroundColor:"#FFFFFF"}}>
//       <CardActionArea>
//         {/* <CardMedia
//           component="img"
//           height="200"
//           image="https://www.mothersrecipe.com/wp-content/uploads/2020/12/Image-624x351.jpg"
//           alt="green iguana"
//           sx={{borderRadius:"10px"}}
//         /> */}
       
//       </CardActionArea>
//       <CardActions>
//       {/* <p className='crad4text4'>Thali Combos</p> */}
//       </CardActions>
//     </Card>

//   </Grid>
                  
//                   </Grid>
//                   </Box>

                   

//             </Container>
            
//               </Box>
//             </Container>









// {/* <Container justifyContent="center"   maxWidth={false} sx={{ backgroundColor:"#f4f7f6",marginLeft:"auto",marginRight:"auto",width:"auto",alignItems:"center" }}>

// <br></br>
//     <Box sx={{alignItems:"center",paddingTop:"50px" }}>
//     <Typography variant="h5" style={{textAlign:"center",justifyContent:"center", color:"#555353" }}> Let's Talk Product</Typography><br></br><p  style={{fontSize:"15px",color:"#747373",textAlign:"center"}}>
//                    What are you waiting for? Join our best tiffin and food service</p><br></br>
//             <Grid container  sx={{bgcolor:'#f4f7f6',alignItems:"center"}}justifyContent="center"  >


//         <Grid sx={{ backgroundColor: '#f4f7f6'}} xs={12} md={3} sm={6}  >
//         <Card sx={{ minWidth: false,boxShadow:"none" }} >
//         <CardContent sx={{padding:"30px"}}>
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

//                < AutoAwesomeMotionIcon sx={{color:"#ed5782",marginLeft:"0px",fontSize:"50px"}}/>

//                 </Typography>

//                 <Typography sx={{fontSize:"20px",color:"#555353"}} component="div">
//                 Tiffin Service 
//                 </Typography>
//                 <Typography sx={{fontSize:"20px",color:"#555353"}}>
//                Veg & Non-Veg
//                 </Typography>
                
//                 <Typography sx={{ mb: 1.5 ,fontSize:"15px",paddingTop:"30px"}} color="text.secondary">
//                 Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.
//                 <br />
               
//                 </Typography>
//             </CardContent>
//             </Card>

//                 </Grid>


//             <Grid sx={{  backgroundColor: '#f4f7f6', padding: "10px"}} xs={12} md={3} sm={6}>
//         <Card sx={{ minWidth: false ,boxShadow:"none"}}>
//         <CardContent sx={{padding:"30px"}}>
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

//                < AutoAwesomeMotionIcon sx={{color:"#ed5782",marginLeft:"0px",fontSize:"50px"}}/>

//                 </Typography>

//                 <Typography sx={{fontSize:"20px",color:"#555353"}} component="div">
//                Combo Box
//                 </Typography>
//                 {/* <Typography sx={{fontSize:"20px",color:"#555353"}}>
//                Veg & Non-Veg
//                 </Typography> */}
                
//                 {/* <Typography sx={{ mb: 1.5 ,fontSize:"15px",paddingTop:"30px"}} color="text.secondary">
//                 Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.
//                 <br />
               
//                 </Typography>
//             </CardContent>
//             </Card>

//                 </Grid>
//                 <Grid sx={{  backgroundColor: '#f4f7f6', padding: "10px"}}xs={12} md={3} sm={6}>
//         <Card sx={{ minWidth: false,boxShadow:"none" }}>
//         <CardContent sx={{padding:"30px"}}>
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

//                < AutoAwesomeMotionIcon sx={{color:"#ed5782",marginLeft:"0px",fontSize:"50px"}}/>

//                 </Typography>

//                 <Typography sx={{fontSize:"20px",color:"#555353"}} component="div">
//                Corporate
//                 </Typography> */}
//                 {/* <Typography sx={{fontSize:"20px",color:"#555353"}}>
//                Veg & Non-Veg
//                 </Typography> */}
                
//                 {/* <Typography sx={{ mb: 1.5 ,fontSize:"15px",paddingTop:"30px"}} color="text.secondary">
//                 Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.
//                 <br /> */}
               
//                 {/* </Typography>
//             </CardContent>
//             </Card>

//                 </Grid>
                
        


//             </Grid>
//     </Box>
//     <br></br>


// <br></br> */}

// {/* 










// <Container justifyContent="center"  sx={{width:"70%"}} >


//     <Box  sx={{marginLeft:"15px",alignItems:"center"}}>


//     <Typography  style={{textAlign:"center",justifyContent:"center", color:"#555353"}}><h5>Who's Speaking?</h5><p  style={{fontSize:"20px",color:"#a6a6a4"}}>Where The Business World Meets</p></Typography>



// <br></br>



//             <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{bgcolor:'#f4f7f6'}}  >


//         <Grid sx={{ backgroundColor: '#f4f7f6', padding: "10px"}} xs={3} md={3} sm={6}  >
//         <Card sx={{ minWidth: false,boxShadow:"none", padding:"10px"}} >
//         <CardActionArea>
//         <CardMedia
//           component="img"
//           height="150"
//           image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{fontSize:"12px"}}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
    
//             </Card>

//                 </Grid>


//             <Grid sx={{  backgroundColor: '#f4f7f6', padding: "10px"}} xs={3} md={3} sm={6}>
//         <Card sx={{ minWidth: false ,boxShadow:"none",padding:"10px"}} >
//         <CardActionArea>
//         <CardMedia
//           component="img"
//           height="150"
//           image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{fontSize:"12px"}}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//             </Card>

//                 </Grid>




//                 <Grid sx={{  backgroundColor: '#f4f7f6', padding: "10px"}}xs={3} md={3} sm={6}>
//         <Card sx={{ minWidth: false,boxShadow:"none",padding:"10px" }}>
//         <CardActionArea>
//         <CardMedia 
//           component="img"
//           height="150"
//           image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{fontSize:"12px"}}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//             </Card>

//                 </Grid>




                
//         <Grid sx={{  backgroundColor: '#f4f7f6', padding: "10px"}}xs={3} md={3} sm={6}>
//         <Card sx={{ minWidth: false ,boxShadow:"none",padding:"10px"}}>
//         <CardActionArea>
//         <CardMedia
//           component="img"
//           height="150"
//           image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{fontSize:"12px"}}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//             </Card>
//         </Grid>


//             </Grid>
//     </Box>
//     </Container>
//     <br></br> */}


    
// {/* </Container> */}
//    {/* </Box> */}





//    <Container justifyContent="center"   maxWidth={false} sx={{ marginLeft:"auto",marginRight:"auto",width:"70%" ,textAlign:"center",alignItems:"center"}} >

//    <Grid xs={6} md={5} sm={12}>
                       
                   
//                        <Grid container sx={{textAlign:"center"}} >
//                        <Grid item   >
//                        <Typography style={{marginTop:"50px",fontSize:"50",justifyContent:"center"}}>
//                         <h5 style={{fontSize: "25px",verticalAlign:"center",color:'#575554',marginBottom:"10px"}}>What Are You Waiting For? Join Out Best Tiffin & Food Service</h5>
//                     </Typography>
//                     <Typography style={{fontSize:"15px",color:"#887d67"}}>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobislConsectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl</Typography>
//                     <Button   variant="contained"  sx={{ marginTop:"10px",marginBottom:"50px" ,borderRadius:"5px",fontSize:"12px",fontWeight:"bold", }} style={{backgroundColor:"#D51058"}} id="Booktiffin"> Still Confused</Button>
//                        </Grid>
//                        </Grid>
//                        </Grid>
//    {/* <Box sx={{ height: "170px",marginBottom:"27px", paddingTop:"30px",paddingBottom:"30px"}}>
//                     <Typography style={{marginLeft:"15%",marginTop:"20px",fontSize:"50",justifyContent:"center",}}>
//                         <h5 style={{fontSize: "25px",verticalAlign:"center",color:'#575554'}}>What Are You Waiting For? Join Out Best Tiffin & Food Service</h5>
//                     </Typography>
//                     <Typography style={{fontSize:"15px",color:"#a6a6a4",marginLeft:"15%"}}>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobislConsectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl</Typography>
//                     <Button   variant="contained"  sx={{marginLeft:"15%", marginTop:"10px" ,borderRadius:"50rem",fontSize:"9px",fontWeight:"bold", }} style={{backgroundColor:"#ed5782"}}> Still Confused</Button>
//                 </Box > */}


//    </Container>
               
                


//                 <Box sx={{ height: "auto",paddingBottom:"27px",paddingTop:"27px",bgcolor:'#f4f7f6'}} >

     
//                 {/* <Typography  style={{textAlign:"center",justifyContent:"center", color:"#555353"}}><h5>Early Bird Offer</h5><p  style={{fontSize:"15px",color:"#a6a6a4"}}>
//                     Hurry Up and get the Early Bird subscription while they are availables at discounted rates</p></Typography> */}

//    <Container justifyContent="center"   maxWidth={false} sx={{ backgroundColor:"#f4f7f6",marginLeft:"auto",marginRight:"auto",width:"auto" ,alignItems:"center"}}>

//         <Typography variant="h5" style={{textAlign:"center",justifyContent:"center", color:"#555353"}}> Early Bird Offer</Typography><br></br><p  style={{fontSize:"18px",color:"#747272",textAlign:"center"}}>
//         Hurry Up and get the Early Bird subscription while they are availables at discounted rates</p><br></br>
//             <Box sx={{alignItems:"center" }}>
//                     <Grid container  sx={{bgcolor:'#f4f7f6',alignItems:"center"}} justifyContent="center"    >


//         <Grid sx={{ backgroundColor: '#f4f7f6',padding:"10px" ,alignItems:"center"}} xs={12} md={3} sm={4}  >
//         <Card sx={{ minWidth: false,boxShadow:"none"}} >
//         <Grid sx={{ backgroundColor: '#ffdd95', padding: "20px",width:"auto", borderRadius:"4px",color:"#a6a6a4"}}  >
                        
                             

//                         <div className="rounded-3 ">
//                        <form className="row g-3"   onSubmit={this.handleSubmituserinfo} encType='multipart/form-data' id="sendinfo">
                     
//                          <div className="col-12 form-floating">
//                            <input type="text" className="form-control"  name="name" placeholder="Your Name" onChange={this.handleInputusername} required/>
//                            <label>Name</label>
//                          </div>
                        
//                          <div className="col-12 form-floating">
//                            <input type="email" className="form-control" name="email"  placeholder="Your Email" onChange={this.handleInputuseremail} required/>
//                            <label>Your Email</label>
//                          </div>
//                          <div className="col-12 form-floating">
//                            <input type="text" className="form-control" name="phone"  placeholder="Your Phone" onChange={this.handleInputusernumber} required/>
//                            <label>Your Phone</label>
//                          </div>
//                          <div className="col-12 form-floating">
                           
                          
//                          <select className="form-select" aria-label="Default select example" onChange={this.handleInputuserpalntype} required>
//                         <option selected>Plan Type</option>
//                         <option value="eco">ECO</option>
//                         <option value="premium">PREMIUM</option>
//                         <option value="executive">EXECUTIVE</option>
//                        </select>   
//                          </div>

//                          {/* <div className="col-12 form-floating">
                           
//                       <select className="form-select" aria-label="Default select example" onChange={this.handleInputuserfoodtype} required>
//                           <option selected>Food Type</option>
//                           <option value="veg">Veg</option>
//                           <option value="non_veg">Non Veg</option>
                          
//                       </select>   
//                            </div> */}
//                          {/* <div className="col-12">
//                            <input className="form-check-input w-30" type="checkbox" value="" id="flexCheckDefault"/>
//                            <span>Don’t want to miss anything from special event.Join our newsletter and stay up-to-date by using your email above.</span>
//                          </div> */}
//                          <div className="col-12">
//                         <center>
//                         <Fab variant="extended" sx={{  marginTop:1 ,borderRadius:"4px",fontSize:"10px",fontWeight:"bold",color:"#fbdce5" }} style={{backgroundColor:"#D51058"}} size="small" color="primary" aria-label="add" form="sendinfo" type="submit">
//                           {/* <Button  variant="fab"  > */}
//                              Pre Book  Tiffin   
                          
//                            {/* </Button> */}
//                            </Fab>
                           
//                            </center> 
//                          </div>
//                        </form>
//                      </div>
                                 
   
//                              </Grid>
//             </Card>

//                 </Grid>


//             <Grid sx={{  backgroundColor: '#f4f7f6'}} xs={12} md={5.5} sm={8}>
//         <Card sx={{ minWidth: false ,boxShadow:"none"}}>
//            <Grid container  sx={{bgcolor:'#f4f7f6',alignItems:"center",padding:"10px"}}  >


//         <Grid sx={{ backgroundColor: '#f4f7f6'}} xs={12} md={4} sm={6}  >
//         <HandleCard1>
//         <Card sx={{ minWidth: false, height:"150px"}} >
//         {/* <HandleCircle1>
//         <Box sx={{borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",marginLeft:"195px",marginTop:"-10px"}}></Box> 
//         </HandleCircle1>  */}
//        {/* < HandleCircle2> <Box sx={{borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",marginLeft:"195px",marginTop:"100px"}}></Box> </HandleCircle2> */}
       
//         <CardContent sx={{padding:"30px"}}>
//         <Typography sx={{textAlign:"center"}}>$490</Typography><p style={{textAlign:"center",fontSize:"15px",color:"#a6a6a4"}}>100 Tickets</p>
              
//             </CardContent>
//             </Card>
//             </HandleCard1>
           
//                 </Grid>
              


//             <Grid sx={{  backgroundColor: '#f4f7f6'}} xs={12} md={8} sm={6}>

//         <Card sx={{ minWidth: false ,boxShadow:"none",height:"150px"}}>
//         <CardContent sx={{padding:"20px"}}>
//         <Typography sx={{fontWeight:"bolder"}}>ECO</Typography>
//          <Typography sx={{fontSize:12,color:"#656464", paddingBottom:1}}>Regular Seat<span style={{paddingLeft:"70px"}}>Tree days Access</span></Typography>
             
//         {/* <Button  variant="fab" sx={{  borderRadius:"4px",fontSize:"10px",fontWeight:"bold",color:"#fbdce5" }} style={{backgroundColor:"#ed5782"}}> Buy Now  </Button> */}
              
//             </CardContent>
//             </Card>

//                 </Grid>
               
        


                
        


//             </Grid>
     
       
//         </Card>




//         <Card sx={{ minWidth: false ,boxShadow:"none"}}>
//         <Grid container  sx={{bgcolor:'#f4f7f6',alignItems:"center",padding:"10px"}}  >


// <Grid sx={{ backgroundColor: '#f4f7f6'}} xs={12} md={4} sm={6}  >
//   <HandleCard2>
//   <Card sx={{ minWidth: false,height:"150px"}} >
//   {/* <HandleCircle3><Box sx={{borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",marginLeft:"195px",marginTop:"-10px"}}></Box> </HandleCircle3>
// <HandleCircle4> <Box sx={{borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",marginLeft:"195px",marginTop:"100px"}}></Box> </HandleCircle4> */}
       
// <CardContent sx={{padding:"30px"}}>
// <Typography sx={{textAlign:"center"}}>$490</Typography><p style={{textAlign:"center",fontSize:"15px",color:"#a6a6a4"}}>100 Tickets</p>
//     </CardContent>
//     </Card>
//   </HandleCard2>


//         </Grid>


//     <Grid sx={{  backgroundColor: '#f4f7f6'}} xs={12} md={8} sm={6}>
// <Card sx={{ minWidth: false ,boxShadow:"none",height:"150px"}}>
// <CardContent sx={{paddingLeft:"20px"}}>
       

//         <Typography sx={{fontWeight:"bolder"}}>PREMIUM</Typography>
//          <Typography sx={{fontSize:12,color:"#656464", paddingBottom:1}}>Regular Seat<span style={{paddingLeft:"70px"}}>Tree days Access</span></Typography>
             
//         {/* <Button  variant="fab" sx={{  borderRadius:"4px",fontSize:"10px",fontWeight:"bold",color:"#fbdce5" }} style={{backgroundColor:"#ed5782"}}> Buy Now  </Button> */}
      
//     </CardContent>
//     </Card>

//         </Grid>
               
        
//             </Grid>
        
       
//         </Card>

//         <Card sx={{ minWidth: false ,boxShadow:"none"}}>
//         <Grid container  sx={{bgcolor:'#f4f7f6',alignItems:"center",padding:"10px"}}  >


//    <Grid sx={{ backgroundColor: '#f4f7f6'}} xs={12} md={4} sm={6}  >

//      <HandleCard3>
//      <Card sx={{ minWidth: false,height:"150px"}} >

//        {/* <HandleCircle5>
//        <Box sx={{borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",marginLeft:"195px",marginTop:"-10px"}}></Box> 
//        </HandleCircle5>
//        <HandleCircle6>
//        <Box sx={{borderRadius:"50%",height:"30px",width:"30px" ,bgcolor:"#f4f7f6", position:"absolute",marginLeft:"195px",marginTop:"100px"}}></Box> 
//        </HandleCircle6> */}
//          <CardContent sx={{padding:"30px"}}>
//         <Typography sx={{textAlign:"center"}}>$490</Typography><p style={{textAlign:"center",fontSize:"15px",color:"#a6a6a4"}}>100 Tickets</p>
                            
//         </CardContent>
//           </Card>


//      </HandleCard3>
                     

//         </Grid>


//           <Grid sx={{  backgroundColor: '#f4f7f6'}} xs={12} md={8} sm={6} >
//       <Card sx={{ minWidth: false ,boxShadow:"none",height:"150px"}}>
//       <CardContent sx={{padding:"20px"}} >
//       <Typography sx={{fontWeight:"bolder"}}>EXECUTIVE</Typography>
//          <Typography sx={{fontSize:12,color:"#656464", paddingBottom:1}}>Regular Seat<span style={{paddingLeft:"70px"}}>Tree days Access</span></Typography>
         
             
//         {/* <Button  variant="fab" sx={{  borderRadius:"4px",fontSize:"10px",fontWeight:"bold",color:"#fbdce5" }} style={{backgroundColor:"#ed5782"}} id="Contact"> Buy Now  </Button> */}
//           </CardContent>
//           </Card>

//               </Grid>


//             </Grid>
      
       
//         </Card>

//                 </Grid>
                
          
                
        


//             </Grid>
//     </Box>
 


    
// </Container>




//                 </Box>
//                 <Container justifyContent="center"   maxWidth={false} sx={{ marginLeft:"auto",marginRight:"auto",width:"auto" ,textAlign:"center",alignItems:"center"}} >
//                 <Typography justifyContent="center" variant="h5" style={{textAlign:"center", color:"#555353",padding:"20px"}}> Contact Us</Typography><br></br><p  style={{fontSize:"15px",color:"#887d67",textAlign:"center"}}>
//                 Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobislConsectetur adipisicing elit.<p> Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl</p></p><br></br>
//                      <Grid xs={6} md={12} sm={12}>
                    
                
//                     <Grid container sx={{textAlign:"center",justifyContent:"center",alignItems:"center"}} >
//                     {/* <Grid sx={{ justifyContent:"center",alignItems:"center"}} > */}
// {/*                     
//                     <Typography style={{marginTop:"50px",fontSize:"50",justifyContent:"center"}}>
//                      <h5 style={{fontSize: "25px",verticalAlign:"center",color:'#575554',marginBottom:"10px"}}>Contact Us</h5>
//                  </Typography>
//                  <Typography style={{fontSize:"15px",color:"#887d67"}}>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobislConsectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl</Typography> */}
//                  <Box sx={{alignItems:"center",justifyContent:"center",alignItems:"center" }}>
//             <Grid container sx={{justifyContent:"center",alignItems:"center"}}>


//         <Grid xs={12} md={5} sm={6}  >
//         <Card sx={{ minWidth: false,boxShadow:"none",bgcolor:"#ffdd95" }} >
//         <CardContent >
         
//          <List >
              
//                 <ListItem >
//                 <Box sx={{height:"50px",width:"50px",background: "linear-gradient(#ED5782, #726a95)",borderRadius:"5px" }}>< LocationOnIcon  sx={{color:"white",fontSize:"20px",marginLeft:"15px",marginTop:"10px"}} /></Box>
//                    <ListItemText sx={{marginLeft:"30px",marginTop:"20px"}}
                   
//                     secondary=  {<React.Fragment>
//                     <Typography sx={{fontSize:"15px"}} >
//                      Location
//                     </Typography>
//               {<p style={{fontSize:"12px"}}>157 William St, New York, Ny<p style={{fontSize:"12px"}}>United</p></p>}
              
             
//             </React.Fragment>}
//                   />
//                 </ListItem>
             
//             </List>
//             </CardContent>
//             </Card>

//                 </Grid>


//             <Grid xs={12} md={4} sm={6}>
//         <Card sx={{ minWidth: false ,boxShadow:"none"}}>
//         <Card sx={{ minWidth: false,boxShadow:"none",bgcolor:"#ffdd95" }} >
//         <CardContent >
         
//          <List >
              
//                 <ListItem >
//                   <Box sx={{height:"50px",width:"50px",background: "linear-gradient(#ED5782, #726a95)",borderRadius:"5px" }}>< CallIcon sx={{marginLeft:"15px",marginTop:"10px",color:"white",fontSize:"20px"}} /></Box>
//                    <ListItemText sx={{marginLeft:"30px",marginTop:"20px"}}
                   
//                     secondary=  {<React.Fragment>
//                     <Typography sx={{fontSize:"15px"}} >
//                      Call Us
//                     </Typography>
//               {<p style={{fontSize:"12px"}}><a href="tel:+123456789" style={{color:"#ed5782"}}>( +91 ) 123456789</a><p style={{fontSize:"12px",color:"#ed5782"}}><a href="tel:+123456789" style={{color:"#ed5782"}}>( +91 ) 123456789</a><p style={{fontSize:"12px"}}>10 AM to 7 PM</p></p></p>}
              
             
//             </React.Fragment>}
//                   />
//                 </ListItem>
             
//             </List>
//             </CardContent>
//             </Card>
//             </Card>

//                 </Grid>
//                 <Grid xs={12} md={3} sm={6}>
//            <Card sx={{ minWidth: false,boxShadow:"none",bgcolor:"#ffdd95" }} >
//         <CardContent >
         
//          <List >
              
//                 <ListItem >
//                   <Box sx={{height:"50px",width:"50px",background: "linear-gradient(#ED5782, #726a95)",borderRadius:"5px" }}>< EmailIcon sx={{color:"white",fontSize:"20px",margin:"15px"}} /></Box>
//                    <ListItemText sx={{marginLeft:"20px",marginTop:"20px"}}
                   
//                     secondary=  {<React.Fragment>
//                     <Typography sx={{fontSize:"15px"}} >
//                      Mail Us
//                     </Typography>
//               {<p style={{fontSize:"12px"}}><a href="mailto:@gmail.com" style={{color:"#ed5782"}}>@gmail.com</a><p style={{fontSize:"12px"}}><a href="mailto:@gmail.com" style={{color:"#ed5782"}}>@gmail.com</a></p></p>}
              
             
//             </React.Fragment>}
//                   />
//                 </ListItem>
             
//             </List>
//             </CardContent>
//             </Card>

//                 </Grid>
                
        


//             </Grid>
//     </Box>
//                     </Grid>
//                     {/* </Grid> */}
//                     </Grid>


// </Container>



// <Container   maxWidth={false} sx={{ marginLeft:"auto",marginRight:"auto",width:"auto",alignItems:"center"}} xs={12} md={12} sm={6} >

//     <Box justifyContent="center" sx={{alignItems:"center" }}>



// <Grid justifyContent="center" container sx={{ padding:"10px"}}  >
// {/* <Card sx={{ minWidth: false,boxShadow:"none"}} > */}
// {/* <Grid justifyContent="center"  sx={{ backgroundColor: 'yellow', padding: "20px",width:"auto", borderRadius:"4px",color:"#a6a6a4"}}  > */}
                
                     
// <div  className="col-md-6 col-lg-6">
//                 <form className="row g-2"  onSubmit={this.handleSubmitusermgs} encType='multipart/form-data' id="sendmgs">
//                     <div className="col-md-6">
//                         <div className="form-floating">
//                             <input type="text" className="form-control" placeholder="Enter Name" onChange={this.handleInputname}/>
//                             <label>Enter Name</label>
//                         </div>
//                     </div>
//                     <div className="col-md-6">
//                         <div className="form-floating">
//                             <input type="email" className="form-control" placeholder="Enter Email" onChange={this.handleInputemail}/>
//                             <label>Enter Email</label>
//                         </div>
//                     </div>
//                     <div className="col-12">
//                         <div className="form-floating">
//                             <input type="text" className="form-control" placeholder="Enter Subject" onChange={this.handleInputsubject}/>
//                             <label>Enter Subject</label>
//                         </div>
//                     </div>
//                     <div className="col-12">
//                         <div className="form-floating">
//                             <textarea className="form-control" placeholder="Leave a comment here" style={{height: "140px"}} onChange={this.handleInputcomment}/>
//                             <label>Leave a comment here</label>
//                         </div>
//                     </div>
//                     <center><div className="col-12" >
//                     <Fab variant="extended"  sx={{  marginTop:1 ,borderRadius:"4px",fontSize:"12px",fontWeight:"bold",color:"#fbdce5"}} style={{backgroundColor:"#D51058"}} type="submit" form="sendmgs">Send Message  </Fab>
//                     </div></center>
//                 </form>
//               </div>
                         

//                      {/* </Grid> */}
//     {/* </Card> */}

//         </Grid>


// </Box>
// <br></br>


// <br></br>



// </Container>

//             </Paper>
//           </Box>
            
//         {/* </Paper> */}
//           </Stack>
      
        
//       </Container>
//       </Font>
        
//  </>
// )
//   }
// }

// // import React, { Component } from 'react'
// // import { Fragment } from 'react'
// // import Carousel from 'react-material-ui-carousel'
// // import Font, { } from 'react-font'
// // import TypeAnimation from 'react-type-animation';
// // import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import LocationOnIcon from '@mui/icons-material/LocationOn';
// // import Card from '@mui/material/Card';
// // import TextField from '@mui/material/TextField';
// // import CardContent from '@mui/material/CardContent';
// // import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';

// // import ListItemText from '@mui/material/ListItemText';
// // import EmailIcon  from '@mui/icons-material/Email';
// // import CallIcon from '@mui/icons-material/Call';
// // import { styled } from '@mui/material/styles';

// // import MenuIcon from '@mui/icons-material/Menu';
// // import Dialog from '@mui/material/Dialog';

// // import CloseIcon from '@mui/icons-material/Close';

// // import DialogContent from '@mui/material/DialogContent';

// // import './Onepagestyle.css';
// // import './mobileOnepage.css';
// // import logo from './OnepageImage/logo.png';

// // import footerlogo from './OnepageImage/footerlogo.png';
// // import insta from './OnepageImage/insta.png';
// // import facebook from './OnepageImage/facebook.png';



// // import mainimage from './OnepageImage/bgImage1.png';

// // import Group1  from './OnepageImage/Group1.png';
// // import Group2  from './OnepageImage/Group2.png';
// // import Group3  from './OnepageImage/Group3.png';
// // import Group4  from './OnepageImage/Group4.png';


// // import MaskGroup1  from './OnepageImage/MaskGroup1.png';
// // import MaskGroup2  from './OnepageImage/MaskGroup2.png';
// // import MaskGroup3  from './OnepageImage/MaskGroup3.png';
// // import MaskGroup4  from './OnepageImage/MaskGroup4.png';


// // import mobilebg from './OnepageImage/Mobile-bg.png'

// // import mobile  from './OnepageImage/mobile.png';

// // import  GooglePayImg from './OnepageImage/Google_Play_Store_badge.png'

// // // import bg1 from './OnepageImage/bg1.png';

// // // import bg2 from './OnepageImage/bg2.png';

// // // import bg2 from './OnepageImage/logo.png';

// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// // import Live_Tracking from './OnepageImage/Live_Tracking.png';
// // import heatable_tiffin from './OnepageImage/heatable_tiffin.png';
// // import separate_kitchen from './OnepageImage/separate_kitchen.png';
// // import Flexible from './OnepageImage/Flexible.png';



// // import CardMedia from '@mui/material/CardMedia';

// // import {CardActionArea, CardActions } from '@mui/material';

// // import axios from 'axios';

// // import Radio from '@mui/material/Radio';
// // import RadioGroup from '@mui/material/RadioGroup';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import FormControl from '@mui/material/FormControl';
// // import FormLabel from '@mui/material/FormLabel';


// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
// //   ...theme.typography.body2,
// //   padding: theme.spacing(4),
// //   textAlign: 'center',
// //   alignItems:'center',
// //   color: "white",
// //   boxShadow:"none",
// //   fontFamily: [
// //     "Roboto","Helvetica","Arial","sans-serif"
// //   ].join(","),
// //   fontWeight:"bold",

// //     "&:active": {
// //       color: "#ed5782"
// //     },
// //     "&:hover": {
// //       color: "#ed5782"
// //     },
// // marginLeft:"-150px"


// // }));


// // export default class Onepage extends Component {



// //   state = {
// //     width: window.innerWidth,

// //     // items :[
// //     //        // {
// //     //        //     name: "Random Name #1",
// //     //        //     description: "Probably the most random thing you have ever seen!",
// //     //        //     image:bg1
// //     //        // },
// //     //        {
// //     //            name: "Tifinco",
// //     //            description: "Tifinco",
// //     //            image:bgImage1
// //     //        }
// //     //    ],
// //        navSize:"5rem",
// //        navColor:'transparent',
// //        open:false,
// //        getid:'',
// //        singuppop:false,
// //        users_name:'',
// //        users_email:'',
// //        subject:'',
// //        comment:'',
// //        users_nameinfo:'',
// //        users_emailinfo:'',
// //        users_numberinfo:'',
// //        plan_type:'',
// //        newsletterusers_email:''
  
      
  
  
// //    }
// // componentWillMount() {
// //   window.addEventListener('resize', this.handleWindowSizeChange);
// //    window.addEventListener('scroll', this.handleScroll);
// // }

// // // make sure to remove the listener
// // // when the component is not mounted anymore
// // componentWillUnmount() {
// //   window.removeEventListener('resize', this.handleWindowSizeChange);
// //   window.addEventListener('scroll', this.handleScroll);
// // }

// // handleWindowSizeChange = () => {
// //   this.setState({ width: window.innerWidth });
// // };




// //  setnavSize=(size)=>{
// // this.setState({navSize:size})


// //  }
// //  setnavColor=(color)=>{
// //      this.setState({navColor:color})
// //  }


 
// //  componentWillUnmount() {
// //      window.removeEventListener('scroll', this.handleScroll);
// //  }
// //  handleScroll=(event)=> {
// //      // console.log(window.scrollY>5)
// //      if (window.scrollY > 900) {

// //          this.setState({navColor: "#FFFFFF",navSize:"4.5rem"});
// //      }
// //      else  {
// //          this.setState({navColor: "transparent",navSize:"5rem"});
// //      }
// //  }
     

// //  handleclickopen = () => {
// //  this.setState({open:true})
// //  // alert("hi")
// // };


// // handleclickclose = () => {
// //  this.setState({open:false})
// // };
// // changecolor(e) {
// //  e.target.style.color = '#ed5782';
// // }


// // notchangecolor(e){
// //  e.target.style.color = 'black';
// // }


// // notchangecolorofappbar(e){
// //  e.target.style.color = 'white';
// // }


// // homepagehandle=(hash)=>{
// //  this.setState({getid:hash})
// //  this.setState({open:false})
// //  console.log(hash)
// //  console.log("ok")

// // }

// // // handleclickopensignuppage = () => {
// // //   this.setState({singuppop:true})
// // //   // alert("hi")
// // // };

// // handleclickclosesinginpop=()=>{
// //  this.setState({singuppop:false})
// // }

// // changenavcolor=(e)=>{

// //  e.target.style.color = '#ed5782';
 


// // }


// // handleInputname=(event)=>{
// // // console.log(event.target.value)

// // this.setState({users_name:event.target.value});



// // }

// // handleInputemail=(event)=>{
// //  this.setState({users_email:event.target.value})

// // }

// // handleInputsubject=(event)=>{
// //  this.setState({subject:event.target.value})

// // }

// // handleInputcomment=(event)=>{
// //  this.setState({comment:event.target.value})



// // }


// // handleSubmitusermgs = event =>  {


// //                   const data = {
// //                     user_name:this.state.users_name,
// //                     user_email: this.state.users_email,
// //                     subject:this.state.subject,
// //                     comment:this.state.comment,
                   
                    

                   
// //                   };
// //                   // alert(this.state.food_name);
                
// //             try{
// //               axios.post('https://tifinco.com:5000/admin/storeusersmgs', data,{
// //                 headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
// //                 onUploadProgress: data => {
               
// //                   this.setState({
// //                   progress: Math.round((100 * data.loaded) / data.total)
      
// //                   });
// //                 },
              
// //               })
// //                 .then(res => {
                 
// //                     if(res.data.msg=='success'){
                    
      
                  
// //                       console.log("success");
// //                       window.location.reload();
            
          
// //                     }
                  
// //                 })
// //               }  catch(error) {
                
// //                       console.log(error)
// //                       this.setState({
// //                           Load :false,
// //                           });
// //                       console.log("internal server error");
// //                     }
        
// // }

// // handleInputusername=(event)=>{

// //  this.setState({users_nameinfo:event.target.value})


// // }
// // handleInputuseremail=(event)=>{
// //  this.setState({users_emailinfo:event.target.value})
 
// // }
// // handleInputusernumber=(event)=>{
// //  this.setState({users_numberinfo:event.target.value})

 
// // }
// // handleInputuserpalntype=(event)=>{
// //  this.setState({plan_type:event.target.value})
 
// // }

// // handleInputuserfoodtype=(event)=>{
// //  this.setState({food_type:event.target.value})
// // }




// // handleSubmituserinfo = event =>  {



// //  event.preventDefault();
 

// // console.log(this.state.plan_type=="")

// // if(this.state.plan_type==""){
// // alert("please select paln type")

// // }
// // else{

// // const data = {
// //  plan_type:this.state.plan_type,
// //  user_name:this.state.users_nameinfo,
// //  user_email: this.state.users_emailinfo,
// //  user_number:this.state.users_numberinfo,
// //  // plan_type:this.state.plan_type,


// // };


// // try{
// //  axios.post('https://tifinco.com:5000/admin/payment', data,{
// //    headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
// //    onUploadProgress: data => {
  
// //      this.setState({
// //      progress: Math.round((100 * data.loaded) / data.total)

// //      });
// //    },
 
// //  })
// //    .then(res => {
    
// //         const link =  res.data.mgs;

// //        //  console.log(link.paymentLink)

// //        //  link.map(link=>{

// //        //   console.log(link.paymentLink)
// //        //  })
// //        window.location = link.paymentLink;
// //        // console.log(res.data.paymentLink)
// //        // if(res.data.msg=='success'){
// //          // window.location = "/product/updateoptionalitem/"+_id;

     
// //        //   // console.log("success");
// //          // window.location.reload();


// //        // }
// //        // else if  (res.data.msg=='email_exist'){
// //        //   alert("email already exist please enter new email id");
         

// //        // }

// //        // else if  (res.data.msg=='mobile_exist'){
// //        //   alert("Mobile Number already exist ")
         
// //        //           }
     
// //    })
// //  }  catch(error) {
   
// //          console.log(error)
// //          this.setState({
// //              Load :false,
// //              });
// //          console.log("internal server error");
// //        }











  
// // // try{
// // //   axios.post('https://tifinco.com:5000/admin/storeusersinfo', data,{
// // //     headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
// // //     onUploadProgress: data => {

// // //       this.setState({
// // //       progress: Math.round((100 * data.loaded) / data.total)

// // //       });
// // //     },

// // //   })
// // //     .then(res => {
  
// // //         if(res.data.msg=='success'){
     

   
// // //           console.log("success");
// // //           window.location.reload();


// // //         }
// // //         else if  (res.data.msg=='email_exist'){
// // //           alert("email already exist please enter new email id");
       

// // //         }

// // //         else if  (res.data.msg=='mobile_exist'){
// // //           alert("Mobile Number already exist ")
       
// // //                   }
   
// // //     })
// // //   }  catch(error) {
 
// // //           console.log(error)
// // //           this.setState({
// // //               Load :false,
// // //               });
// // //           console.log("internal server error");
// // //         }









// // }
  
// //    // alert(this.state.food_name);


// // }
// // handlenewslwtter = (event)=>{

// // this.setState({newsletterusers_email:event.target.value})
// // }


// // handleSubmitnewsletter = event =>  {




// // event.preventDefault();
 


// // const data = {

// //  user_email: this.state.newsletterusers_email,


// // };
  
// // try{
// // axios.post('https://tifinco.com:5000/admin/storenewsletters', data,{
// //  headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
// //  onUploadProgress: data => {

// //    this.setState({
// //    progress: Math.round((100 * data.loaded) / data.total)

// //    });
// //  },

// // })
// //  .then(res => {
  
// //      if(res.data.msg=='success'){
     

   
// //        console.log("success");
// //        window.location.reload();
// //        alert("data inserted")


// //      }
// //      else if  (res.data.msg=='exist'){
// // alert("email already exist please enter new email id")

// //      }
   
// //  })
// // }  catch(error) {
 
// //        console.log(error)
// //        this.setState({
// //            Load :false,
// //            });
// //        console.log("internal server error");
// //      }



// // }


// // render() {
// //   const { width } = this.state;
// //   const isMobile = width <= 600;
// //   const isTablet = width<=860;
// //   // the rest is the same...

// //  if (isMobile) {
// //    return (
// //     <Font family=' normal normal bold 16px/87px Poppins'>
// //     <Container maxWidth={false} disableGutters={true} justifyContent="center"  sx={{alignItems:"center",}} style={{width:{width}}} >
// //          <Stack>

    

// // <div style={{width:"100%",paddingLeft:"5px",paddingRight:"5px",paddingTop:"30px"}}>
// // <div className='mobile-bar' style={{height:this.state.navSize}}>
// //       <div className='logo'><a href="#" onClick={() => window.location.reload(false)} ><img src={logo} id="logoicon" height={30} /></a></div>
// //       <div className='rightmenu' > 
// //       {/* <a href="#Home"   className='link-dark1 textfont' >Home</a>
// //       <a href='#About' className='link-dark2 textfont' > Our Menu</a>
// //       <a href='#Subscription'  className='link-dark3 textfont' > Corporate Order</a>
// //       <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"   >Download App</button></a> */}
// //       {/* <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"  > Login or Signup </button></a> */}
     
// //                               {/* <Button sx={{color:"#FFFFF"}}  onClick={this.handleclickopen}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
// //                               <MenuIcon sx={{bgcolor:"#DA234D"}}/>
                                  
// //                               </Button>

// //                               <Dialog open={this.state.open}  fullScreen PaperProps={{
// //                                   style: { borderWidth: 10,
// //                                     borderTopWidth:20,
                                  
// //                                     borderColor: "#ed5782",
// //                                     borderStyle: "solid",
// //                                     backgroundColor: "#ffff",
// //                                     color: "black",
// //                                   }
// //                                 }} > */}
                                  
// //                                     {/* <Box
                                      
                                   
// //                                       display="flex"
// //                                       justifyContent="flex-end"
// //                                       alignItems="flex-end"
// //                                       sx={{bgcolor:"#ed5782",width:"100%"}}
                                    
                                      
// //                                     >
                                    
// //                                        <a href='#'> <CloseIcon onClick={this.handleclickclose} sx={{color:"black"}}/></a>
                                      
// //                                     </Box> */}
                                    
                                  
                                      
// //                                       {/* <DialogContent>
                                  
// //                                 <div className="container">
// //                                       <div className="row">
// //                                           <div className="col">

// //                                               <ul className="list-group">
                                                
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  className="link-dark" href="#Home">Home</a></li>
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}   onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#About">Our Menu</a></li>
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#Subscription">Corporate Order</a></li> */}
// //                                                   {/* <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#Contact">Contact</a></li>
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="/login">Sign In</a></li> */}
                                            
// //                                               {/* </ul>


// //                                           </div>
// //                                       </div>
// //                                   </div>
// //                                       </DialogContent>                                    
// //                                     </Dialog>             */}
// //                   </div>
// //       </div>
// //     </div>


  
         





// //       <Box zIndex={-100}  sx={{position: 'absolute' ,overflow:"hidden",width:"100%"}} >
          
         
// //                    <Paper variant="outlined " direction="column" 
// //                   justify="center"
// //                   alignItems="center"> 
// //                     <div >

// //                     </div>
// //                     <img id="bgimagemobile" src={mobilebg}  style={{ height: "100vh" , backgroundSize: "fill",width:"100%",
// //                     backgroundRepeat: "no-repeat"}} ></img> 
// //                   </Paper>
                  
             

// //           <Container id="mobilealigncontainer"  zIndex={1000} maxWidth={false} sx={{
// //                   marginLeft:"auto",marginRight:"auto",
// //                   bgcolor:'transparent',
// //                   paddingBottom: 40, 
// //                   position: 'absolute',
// //                   top: "50%",
// //                   // left:1134,
// //                   zIndex: 1000,
// //                   flex: 1,
// //                   flexDirection: 'column',
                  
// //                   justifyContent: 'center',
// //                   alignItems: 'center',
// //                   paddingLeft:0,
// //                   paddingRight:0
                  
                
                 
                 
                

// //                   }}>


// //                         <Box >
                      

// //                       <Grid container  sx={{bgcolor:'transparent', justifyContent: 'center',
// //                               alignItems: 'center',}}  >
                                
// //                         <Grid sx={{ backgroundColor: 'transparent',height: "500px",borderRadius:"5px"}} xs={12} md={12} sm={12}  >
// //                         <Card sx={{ minWidth: false,boxShadow:"none",backgroundColor:"transparent",borderRadius:"5px"}} >
// //                         <CardContent className="mobileflexdivcontainer" >

                        

// //                                 <h1 className="mobiletextdiv" >An all new way of </h1>
// //                             <h1 className="mobilecentertext1">tiffin delivery</h1>
                          
// //                               <div class="mobiletyping">
// //                               <h1 className="mobiletextdiv2">and more…<span className="mobilecentertext2">|</span></h1>
// //                               </div>
                
// //                             <h3 className="mobiletextdiv3">Serving first in  <span className="mobilecentertext3">Raipur</span></h3>
// //                             <h3 className="mobiletextdiv4">Register now to get exclusive discount on all subscription plans</h3>
// //                             {/* <h3 className="mobiletextdiv5"></h3> */}
// //                             <h3 style={{textAlign:"start"}}><img  className="mobileimggooglepay" src={GooglePayImg}  height={30}></img></h3>


                                  
                                    
// //                       </CardContent>
// //                       </Card>
// //                       </Grid>


// //                       </Grid>
// //               </Box>


      




// //                  {/* <Box sx={{ flexGrow: 1 }}>
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6} sm={6} md={12} sx={{bgcolor:'red'}}>

// //                     <h1 className="textdiv" >An all new way of </h1>
// //                     <h1 className="centertext1">tiffin delivery</h1>
                  
// //                       <div class="typing">
// //                       <h1 className="textdiv2">and more…<span className="centertext2">|</span></h1>
// //                       </div>
        
// //                     <h3 className="textdiv3">Serving first in  <span className="centertext3">Raipur</span></h3>
// //                     <h3 className="textdiv4">Register now to get exclusive discount on all </h3>
// //                     <h3 className="textdiv5">subscription plans</h3>
// //                     <h3 ><img  className="imggooglepay" src={GooglePayImg} ></img></h3>


                     
// //                   </Grid>
                
// //                 </Grid>

                
// //                 </Box> */}



                 

// //           </Container>

       
// //       </Box>

   
// //         </Stack>
    
      
// //     </Container>
// //     </Font>
// //    );
// //  }
// //  else if(isTablet){
// //    return(
// // <>
// // <Font family=' normal normal bold 16px/87px Poppins'>
// //     <Container maxWidth={false} disableGutters={true} justifyContent="center"  sx={{alignItems:"center",}} style={{width:{width}}} >
// //          <Stack>

// // {/* Nav Bar Section   */}
// //           {/* <Container sx={{width:"100%", }} style={{maxWidth:1900}} >
     
// //           <Box  > */}
    

// // <div style={{width:"100%",paddingLeft:"5px",paddingRight:"5px",paddingTop:"30px"}}>
// // <div className='app-bar' style={{height:this.state.navSize,backgroundColor:this.state.navColor}}>
// //       <div className='logo'><a href="#" onClick={() => window.location.reload(false)} ><img src={logo} id="logoicon" height={50} /></a></div>
// //       <div className='rightmenu' > 
// //       {/* <a href="#Home"   className='link-dark1 textfont' >Home</a>
// //       <a href='#About' className='link-dark2 textfont' > Our Menu</a>
// //       <a href='#Subscription'  className='link-dark3 textfont' > Corporate Order</a>
// //       <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"   >Download App</button></a> */}
// //       {/* <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"  > Login or Signup </button></a> */}
     
// //                               {/* <Button sx={{color:"#FFFFF"}}  onClick={this.handleclickopen}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
// //                               <MenuIcon sx={{bgcolor:"#DA234D"}}/>
                                  
// //                               </Button>

// //                               <Dialog open={this.state.open}  fullScreen PaperProps={{
// //                                   style: { borderWidth: 10,
// //                                     borderTopWidth:20,
                                  
// //                                     borderColor: "#ed5782",
// //                                     borderStyle: "solid",
// //                                     backgroundColor: "#ffff",
// //                                     color: "black",
// //                                   }
// //                                 }} > */}
                                  
// //                                     {/* <Box
                                      
                                   
// //                                       display="flex"
// //                                       justifyContent="flex-end"
// //                                       alignItems="flex-end"
// //                                       sx={{bgcolor:"#ed5782",width:"100%"}}
                                    
                                      
// //                                     >
                                    
// //                                        <a href='#'> <CloseIcon onClick={this.handleclickclose} sx={{color:"black"}}/></a>
                                      
// //                                     </Box> */}
                                    
                                  
                                      
// //                                       {/* <DialogContent>
                                  
// //                                 <div className="container">
// //                                       <div className="row">
// //                                           <div className="col">

// //                                               <ul className="list-group">
                                                
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  className="link-dark" href="#Home">Home</a></li>
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}   onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#About">Our Menu</a></li>
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#Subscription">Corporate Order</a></li> */}
// //                                                   {/* <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="#Contact">Contact</a></li>
// //                                                   <li className="list-group-item border-0"><a onClick={()=>{this.homepagehandle(window.location.hash)}}  onMouseEnter={this.changecolor} onMouseLeave={this.notchangecolor} className="link-dark" href="/login">Sign In</a></li> */}
                                            
// //                                               {/* </ul>


// //                                           </div>
// //                                       </div>
// //                                   </div>
// //                                       </DialogContent>                                    
// //                                     </Dialog>             */}
// //                   </div>
// //       </div>
// //     </div>


  
         





// //       <Box zIndex={-100}  sx={{position: 'absolute' ,overflow:"hidden",width:"100%"}} >
          
         
// //                    <Paper variant="outlined " direction="column" 
// //                   justify="center"
// //                   alignItems="center"> 
// //                     <div >

// //                     </div>
// //                     <img id="bgimagetab" src={mobilebg}  style={{ height: "100vh" , backgroundSize: "fill",width:"100%",
// //                     backgroundRepeat: "no-repeat"}} ></img> 
// //                   </Paper>
                  
             

// //           <Container id="tabaligncontainer"  zIndex={1000} maxWidth={false} sx={{
// //                   marginLeft:"auto",marginRight:"auto",
// //                   bgcolor:'transparent',
// //                   paddingBottom: 40, 
// //                   position: 'absolute',
// //                   top: "50%",
// //                   // left:1134,
// //                   zIndex: 1000,
// //                   flex: 1,
// //                   flexDirection: 'column',
                  
// //                   justifyContent: 'center',
// //                   alignItems: 'center',
// //                   paddingLeft:0,
// //                   paddingRight:0
                  
                
                 
                 
                

// //                   }}>


// //                         <Box >
                      

// //                       <Grid container  sx={{bgcolor:'transparent', justifyContent: 'center',
// //                               alignItems: 'center',}}  >
                                
// //                         <Grid sx={{ backgroundColor: 'transparent',height: "500px",borderRadius:"5px"}} xs={12} md={12} sm={12}  >
// //                         <Card sx={{ minWidth: false,boxShadow:"none",backgroundColor:"transparent",borderRadius:"5px"}} >
// //                         <CardContent className="tabflexdivcontainer" >

                        

// //                                 <h1 className="tabtextdiv" >An all new way of </h1>
// //                             <h1 className="tabcentertext1">tiffin delivery</h1>
                          
// //                               <div class="tabtyping">
// //                               <h1 className="tabtextdiv2">and more…<span className="tabcentertext2">|</span></h1>
// //                               </div>
                
// //                             <h3 className="tabtextdiv3">Serving first in  <span className="tabcentertext3">Raipur</span></h3>
// //                             <h3 className="tabtextdiv4">Register now to get exclusive discount on all subscription plans</h3>
// //                             {/* <h3 className="mobiletextdiv5"></h3> */}
// //                             <h3 style={{textAlign:"start"}}><img  className="tabimggooglepay" src={GooglePayImg}  height={30}></img></h3>


                                  
                                    
// //                       </CardContent>
// //                       </Card>
// //                       </Grid>


// //                       </Grid>
// //               </Box>


      




// //                  {/* <Box sx={{ flexGrow: 1 }}>
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={6} sm={6} md={12} sx={{bgcolor:'red'}}>

// //                     <h1 className="textdiv" >An all new way of </h1>
// //                     <h1 className="centertext1">tiffin delivery</h1>
                  
// //                       <div class="typing">
// //                       <h1 className="textdiv2">and more…<span className="centertext2">|</span></h1>
// //                       </div>
        
// //                     <h3 className="textdiv3">Serving first in  <span className="centertext3">Raipur</span></h3>
// //                     <h3 className="textdiv4">Register now to get exclusive discount on all </h3>
// //                     <h3 className="textdiv5">subscription plans</h3>
// //                     <h3 ><img  className="imggooglepay" src={GooglePayImg} ></img></h3>


                     
// //                   </Grid>
                
// //                 </Grid>

                
// //                 </Box> */}



                 

// //           </Container>

       
// //       </Box>

      

   
// //         </Stack>
    
      
// //     </Container>
// //     </Font>

// // </>

// //    );
// //  }
 
 
// //  else {
// //     return (
// //       <Font family=' normal normal bold 16px/87px Poppins'>
// //       <Container maxWidth={false} disableGutters={true} justifyContent="center"  sx={{alignItems:"center",}} style={{width:{width}}} >
// //            <Stack>

// // {/* Nav Bar Section   */}
// //             {/* <Container sx={{width:"100%", }} style={{maxWidth:1900}} >
       
// //             <Box  > */}
      

// // <div style={{width:"100%",paddingLeft:"140px",paddingRight:"140px",paddingTop:"30px"}}>
// // <div className='app-bar' style={{height:this.state.navSize,backgroundColor:this.state.navColor}}>
// //         <div className='logo'><a href="#" onClick={() => window.location.reload(false)} ><img src={logo} id="logoicon" height={50} /></a></div>
// //         <div className='rightmenu' > 
// //         {/* <a href="#Home"   className='link-dark1 textfont' >Home</a>
// //         <a href='#About' className='link-dark2 textfont' > Our Menu</a>
// //         <a href='#Subscription'  className='link-dark3 textfont' > Corporate Order</a>
// //         <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"   >Download App</button></a> */}
// //         <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"  > Login or Signup </button></a>
// //         </div>
// //       </div>

// // </div>
    
              




// //         <Box zIndex={-100}  sx={{position: 'absolute' ,overflow:"hidden",width:"100%"}} >
            
           
// //                      <Paper variant="outlined " direction="column" 
// //                     justify="center"
// //                     alignItems="center"> <img id="bgimage" src={mainimage}  style={{ height: "100vh" , backgroundSize: "fill",
// //                     backgroundRepeat: "no-repeat"}} ></img> </Paper>
                    
               
 
// //             <Container id="aligncontainer"  zIndex={1000} maxWidth={false} sx={{
// //                     marginLeft:"auto",marginRight:"auto",
// //                     bgcolor:'transparent',
// //                     paddingBottom: 40, 
// //                     position: 'absolute',
// //                     top: 105,
// //                     // left:1134,
// //                     zIndex: 1000,
// //                     flex: 1,
// //                     flexDirection: 'column',
                    
// //                     justifyContent: 'center',
// //                     alignItems: 'center',
                    
                  
                   
                   
                  

// //                     }}>


// //                           <Box >
                        

// //                         <Grid container className="aligncontainerleft" sx={{bgcolor:'transparent', justifyContent: 'center',
// //                                 alignItems: 'center',}}  >
                                  
// //                           <Grid sx={{ backgroundColor: 'transparent',height: "400px",borderRadius:"5px"}} xs={12} md={12} sm={12}  >
// //                           <Card sx={{ minWidth: false,boxShadow:"none",backgroundColor:"transparent",m:5,borderRadius:"5px"}} >
// //                           <CardContent className="flexdivcontainer">

                          

// //                                   <h1 className="textdiv" >An all new way of </h1>
// //                               <h1 className="centertext1">tiffin delivery</h1>
                            
// //                                 <div class="typing">
// //                                 <h1 className="textdiv2">and more…<span className="centertext2">|</span></h1>
// //                                 </div>
                  
// //                               <h3 className="textdiv3">Serving first in  <span className="centertext3">Raipur</span></h3>
// //                               <h3 className="textdiv4">Register now to get exclusive discount on all </h3>
// //                               <h3 className="textdiv5">subscription plans</h3>
// //                               <h3 style={{textAlign:"start"}}><img  className="imggooglepay" src={GooglePayImg} ></img></h3>


                                    
                                      
// //                         </CardContent>
// //                         </Card>
// //                         </Grid>


// //                         </Grid>
// //                 </Box>


        





                   

// //             </Container>

         
// //         </Box>


// //           </Stack>
      
        
// //       </Container>
// //       </Font>
        
 
// //     );
 
// //  }}
// // }


