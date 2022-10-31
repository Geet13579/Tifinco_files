
import React, { Component } from 'react'

import { Paper, Button ,Box,Typography,Container,Stack ,Grid} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typewriter from 'typewriter-effect';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import { styled } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';

import Dialog from '@mui/material/Dialog';

import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from '@mui/material/DialogActions';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import axios from 'axios';
import DialogContent from '@mui/material/DialogContent';

import './Onepagestyle.css';
import './tabOnepage.css';

import './tabmediaquery.css'
import logo from './OnepageImage/logo.png';

import footerlogo from './OnepageImage/footerlogo.png';
import insta from './OnepageImage/insta.png';
import facebook from './OnepageImage/facebook.png';



import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';



import mainimage from './OnepageImage/bgImage1.png';

import Group1  from './OnepageImage/Group1.png';
import Group2  from './OnepageImage/Group2.png';
import Group3  from './OnepageImage/Group3.png';
import Group4  from './OnepageImage/Group4.png';


import MaskGroup1  from './OnepageImage/MaskGroup1.png';
import MaskGroup2  from './OnepageImage/MaskGroup2.png';
import MaskGroup3  from './OnepageImage/MaskGroup3.png';
import MaskGroup4  from './OnepageImage/MaskGroup4.png';


import mobilebg from './OnepageImage/Mobile-bg.png'



import  GooglePayImg from './OnepageImage/coming-soon-google-play@2x.png'

// import bg1 from './OnepageImage/bg1.png';

// import bg2 from './OnepageImage/bg2.png';

// import bg2 from './OnepageImage/logo.png';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { color } from '@mui/system';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'transparent' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  alignItems:'center',
  color: "white",
  boxShadow:"none",
  fontFamily: [
    "Roboto","Helvetica","Arial","sans-serif"
  ].join(","),
  fontWeight:"bold",

    "&:active": {
      color: "#ed5782"
    },
    "&:hover": {
      color: "#ed5782"
    },
marginLeft:"-150px"


}));


export default class Onepage extends Component {



  state = {
    

       navSize:"5rem",
       navColor:'transparent',
       open:false,
       getid:'',
       singuppop:false,
       corporate:false,
       isLoad:false,
       islinkLoad:false,
       newsletterusers_email:'',
       width: window.innerWidth,
       height: window.innerHeight,
  

       nameOfinstitude_Or_Compony:'',
       address:'',
       contactperson_name:'',
       contact_number:'',
       gst:'',
       meal_prefrence:"veg",
       time_prefrence:'lunch',
       no_of_vegpeople:'',
       no_of_nonvegpeople:'',
       starting_date:'',
       ending_date:'',
       deliverytime:'',
       deliverylunchtime:'',
      deliverydinnertime:'',
       plan_type:'',
       proceeddisable:0,
       bookdisable:0,
       openproceed:false,
       no_of_people:'',
       email:'',
       totalAmount:0,
       status:0,
       checktime:0,
       checklunchtime:0,
       checkdinnertime:0,
       planprice:0,

 
       checkradio1:false,
       checkradio2:false,
       checkradio3:false,
       divcolor1:"#9A9A9A",
       textcolor1:"#9A9A9A",
       textcolor11:"#9A9A9A",
       bordercolor1:"2px solid #9A9A9A",
       divbackcolor1:"white",
       changelitextclr1:"white",
       changeiconclor1:"#9A9A9A",
       changetxthead1:"#9A9A9A",
 
 
       divcolor2:"#9A9A9A",
       textcolor2:"#9A9A9A",
       textcolor21:"#9A9A9A",
       bordercolor2:"2px solid #9A9A9A",
       divbackcolor2:"white",
       changelitextclr2:"white",
       changeiconclor2:"#9A9A9A",
       changetxthead2:"#9A9A9A",
 
 
       divcolor3:"#9A9A9A",
       textcolor3:"#9A9A9A",
       textcolor31:"#9A9A9A",
       bordercolor3:"2px solid #9A9A9A",
       divbackcolor3:"white",
       changelitextclr3:"white",
       changeiconclor3:"#9A9A9A",
       changetxthead3:"#9A9A9A",
 
 
      
  
  
   }


   componentDidMount=()=>{


    new Date().toISOString().slice(0,10);
    var currentdate=  new Date();

    let year = currentdate.getFullYear();
    let month = (1 + currentdate.getMonth()).toString().padStart(2, '0');
    let day = currentdate.getDate().toString().padStart(2, '0');
    var newDate = month+"/"+day+"/"+year;

    console.log(currentdate)
    this.setState({starting_date:newDate});
    this.setState({ending_date:newDate})

    var hour= currentdate.getHours().toString();
    var minut = currentdate.getMinutes().toString();



   this.setState({deliverytime:currentdate})
   this.setState({deliverylunchtime:currentdate});
   this.setState({deliverydinnertime:currentdate});
   }
  
  componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
   window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
  window.addEventListener('scroll', this.handleScroll);
  }
  
  
  
componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
   window.addEventListener('scroll', this.handleScroll);
}


// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
  window.addEventListener('scroll', this.handleScroll);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
  this.setState({height:window.innerHeight});
};




 setnavSize=(size)=>{
this.setState({navSize:size})


 }
 setnavColor=(color)=>{
     this.setState({navColor:color})
 }


 
 componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll);
 }
 handleScroll=(event)=> {
     // console.log(window.scrollY>5)
     if (window.scrollY > 900) {

         this.setState({navColor: "#FFFFFF",navSize:"4.5rem"});
     }
     else  {
         this.setState({navColor: "transparent",navSize:"5rem"});
     }
 }
     

 handleclickopen = () => {
 this.setState({open:true})
 // alert("hi")
};


handleclickclose = () => {
 this.setState({open:false})
};
changecolor(e) {
 e.target.style.color = '#ed5782';
}


notchangecolor(e){
 e.target.style.color = 'black';
}


notchangecolorofappbar(e){
 e.target.style.color = 'white';
}


handlenewslwtter = (event)=>{

  this.setState({newsletterusers_email:event.target.value})
  console.log(event.target.value)
  }

  handleSubmitnewsletter = event =>  
  {
  
    if(this.state.newsletterusers_email==''){
    
      alert("Please Enter Your Email");
      
   
    }
    else{
      event.preventDefault();
     
      
      const data = 
      {
         user_email: this.state.newsletterusers_email,
      };
      
    try{
      this.setState({
        isLoad : true,
      });
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
         
          this.setState({
            isLoad :false,
            
          });
       
           console.log("success");
         
           alert("Thanks! Your message has been sent, please check your email shortly");
           window.location.reload();
    
    
         }
         else if  (res.data.msg=='exist'){
          this.setState({
            isLoad :false,
            });
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
     
    
    
  
  
  
         
    
    }



// handleSubmitnewsletter = event =>  
// {
//   event.preventDefault();

  
//   const data = 
//   {
//      user_email: this.state.newsletterusers_email,
//   };
  
// try{
// axios.post('https://tifinco.com:5000/admin/storenewsletters', data,{
//  headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
//  onUploadProgress: data => {

//    this.setState({
//    progress: Math.round((100 * data.loaded) / data.total)

//    });
//  },

// })
//  .then(res => {
  
//      if(res.data.msg=='success'){
     

   
//        console.log("success");
     
//        alert("Thanks! Your message has been sent, please check your email shortly");
//        window.location.reload();


//      }
//      else if  (res.data.msg=='exist'){
//     alert("email already exist please enter new email id")

//      }
   
//  })
// }  catch(error) {
 
//        console.log(error)
//        this.setState({
//            Load :false,
//            });
//        console.log("internal server error");
//      }





     

// }



onconfirmclick = ()=>{

  this.setState({corporate:true})
 

 }

 onconfirmclick123 = ()=>{

  this.setState({corporate:true})
 

 }


 onconfirmclick1 = (planprice)=>{
  this.setState({corporate:false})
  this.setState({openproceed:true})
  this.setState({proceeddisable:1})
  this.setState({planprice:planprice})


 }

 onconfirmclick2=()=>{
  this.setState({corporate:true})
  this.setState({openproceed:false})
  // this.setState({open:false})



 }


 handleClose=()=>{
   this.setState({open:false})
   window.location.reload();
   this.setState({openproceed:false})
 }



 setdate=(dt)=>{
console.log(dt)
 }

 

//   insert corporate orders 

handleInputcomponyname=(event)=>{
  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({nameOfinstitude_Or_Compony:event.target.value});
  console.log(event.target.value)

  
  


}
 handleInputcontactname=(event)=>{

  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({contactperson_name:event.target.value})
  console.log(event.target.value)



}
handleInputuseraddr=(event)=>{
  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({address:event.target.value})
  console.log(event.target.value)

  
}
handleInputusernumber=(event)=>{
  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({contact_number:event.target.value})
  console.log(event.target.value)


  
}

handleInputemail=(event)=>{
  
  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({email:event.target.value})
  console.log(event.target.value)


  
}
handleInputgst=(event)=>{
 
  this.setState({gst:event.target.value})



  
}


handleInputdate_to=(startingdate)=>{
  this.setState({proceeddisable:1})
  console.log(startingdate)
  var date = new Date(startingdate.$d);
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  var newDate = month+"/"+day+"/"+year;
  console.log("hello "+newDate)
  this.setState({starting_date:newDate.toLocaleString()})

  
  


  
}
handleInputdate_from=(ending_date)=>{
  this.setState({proceeddisable:1})
  var date = new Date(ending_date.$d);
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  var newDate = month+"/"+day+"/"+year;
  console.log("hello "+newDate)
  this.setState({ending_date:newDate.toLocaleString()})


  
}

_handleInputtime = (gettime) => {
  this.setState({ proceeddisable: 1 });

  this.setState({checktime:1})
  this.setState({ deliverytime: gettime });



};
handleInputlunchtime= (gettime) => {
  this.setState({ bookdisable: 1 });

  this.setState({checklunchtime:1})
  this.setState({ deliverylunchtime: gettime });




};

handleInputdinnertime= (gettime) => {
  this.setState({ bookdisable: 1 });

  this.setState({checkdinnertime:1})
  this.setState({ deliverydinnertime: gettime });




};
get handleInputtime() {
  return this._handleInputtime;
}
set handleInputtime(value) {
  this._handleInputtime = value;
}

handleInputmeal_prefrence=(event)=>{
  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({meal_prefrence:event.target.value})
  console.log(event.target.value)


  
}
handleInputnoofpoeple=(event)=>{

  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({no_of_people:event.target.value})
  console.log(event.target.value)


}

handleInputnoofveg=(event)=>{
  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({no_of_vegpeople:event.target.value})
  console.log(event.target.value)

}

handleInputnoofnonveg=(event)=>{
  this.setState({proceeddisable:1})
  if(event.target.value ==''){
    this.setState({proceeddisable:0})
    
  }
  this.setState({no_of_nonvegpeople:event.target.value})
  console.log(event.target.value)

}

onchangecolors1 =(event)=>{

  // console.log()
  if(event.target.checked==true){
    this.setState({checkradio1:true});
    this.setState({textcolor1:"#DE2844"});
    this.setState({textcolor11:"black"});
    this.setState({bordercolor1:"2px solid #DE2844"});
    this.setState({divbackcolor1:"#FFF2F2"});
    this.setState({changelitextclr1:"#FFF2F2"});
    this.setState({changeiconclor1:"black"});
    this.setState({changetxthead1:"#DE2844"});



    this.setState({checkradio2:false});
    this.setState({textcolor2:"#9A9A9A"});
    this.setState({textcolor21:"#9A9A9A"});
    this.setState({bordercolor2:"2px solid #9A9A9A"});
    this.setState({divbackcolor2:"white"});
    this.setState({changelitextclr2:"white"});
    this.setState({changeiconclor2:"#9A9A9A"});
    this.setState({changetxthead2:"#9A9A9A"});

    this.setState({checkradio3:false});
    this.setState({textcolor3:"#9A9A9A"});
    this.setState({textcolor31:"#9A9A9A"});
    this.setState({bordercolor3:"2px solid #9A9A9A"});
    this.setState({divbackcolor3:"white"});
    this.setState({changelitextclr3:"white"});
    this.setState({changeiconclor3:"#9A9A9A"});
    this.setState({changetxthead3:"#9A9A9A"});

  }





  
}
onchangecolors2 =(event)=>{

  if(event.target.checked==true){
    this.setState({checkradio2:true});
    this.setState({textcolor2:"#DE2844"});
    this.setState({textcolor21:"black"});
    this.setState({bordercolor2:"2px solid #DE2844"});
    this.setState({divbackcolor2:"#FFF2F2"});
    this.setState({changelitextclr2:"#FFF2F2"});
    this.setState({changeiconclor2:"black"});
    this.setState({changetxthead2:"#DE2844"});



    this.setState({checkradio1:false});
    this.setState({textcolor1:"#9A9A9A"});
    this.setState({textcolor11:"#9A9A9A"});
    this.setState({bordercolor1:"2px solid #9A9A9A"});
    this.setState({divbackcolor1:"white"});
    this.setState({changelitextclr1:"white"});
    this.setState({changeiconclor1:"#9A9A9A"});
    this.setState({changetxthead1:"#9A9A9A"});

    this.setState({checkradio3:false});
    this.setState({textcolor3:"#9A9A9A"});
    this.setState({textcolor31:"#9A9A9A"});
    this.setState({bordercolor3:"2px solid #9A9A9A"});
    this.setState({divbackcolor3:"white"});
    this.setState({changelitextclr3:"white"});
    this.setState({changeiconclor3:"#9A9A9A"});
    this.setState({changetxthead3:"#9A9A9A"});
  }

  
}
onchangecolors3 =(event)=>{

  if(event.target.checked==true){
    this.setState({checkradio3:true});
    this.setState({textcolor3:"#DE2844"});
    this.setState({textcolor31:"black"});
    this.setState({bordercolor3:"2px solid #DE2844"});
    this.setState({divbackcolor3:"#FFF2F2"});
    this.setState({changelitextclr3:"#FFF2F2"});
    this.setState({changeiconclor3:"black"});
    this.setState({changetxthead3:"#DE2844"});



    this.setState({checkradio1:false});
    this.setState({textcolor1:"#9A9A9A"});
    this.setState({textcolor11:"#9A9A9A"});
    this.setState({bordercolor1:"2px solid #9A9A9A"});
    this.setState({divbackcolor1:"white"});
    this.setState({changelitextclr1:"white"});
    this.setState({changeiconclor1:"#9A9A9A"});
    this.setState({changetxthead1:"#9A9A9A"});

    this.setState({checkradio2:false});
    this.setState({textcolor2:"#9A9A9A"});
    this.setState({textcolor21:"#9A9A9A"});
    this.setState({bordercolor2:"2px solid #9A9A9A"});
    this.setState({divbackcolor2:"white"});
    this.setState({changelitextclr2:"white"});
    this.setState({changeiconclor2:"#9A9A9A"});
    this.setState({changetxthead2:"#9A9A9A"});
  }

  
}
  handleInputtime_prefrence=(event)=>{
    this.setState({bookdisable:1})
    if(event.target.value ==''){
      this.setState({bookdisable:0})
      
    }

    console.log(event.target.value)

    this.setState({time_prefrence:event.target.value})
    console.log(event.target.value)
  

  }

handleplantype=(event)=>{
  this.setState({bookdisable:1})
  this.setState({plan_type:event.target.value})


  // console.log(event.target.value)

  if(event.target.value=='eco'){

    this.setState({planprice:120})


  }
  else if(event.target.value=='executive'){
    this.setState({planprice:150})


  }
  else if(event.target.value=='premium'){
    this.setState({planprice:210})


  }
 
  
}
handleSubmituserinfo = (event) =>  {

  var no_of_vegpeople =0;
  var no_of_nonvegpeople =0;

  

  var lunchtime =0;
  var dinnertime=0

event.preventDefault();


if(this.state.meal_prefrence=="veg"){

  no_of_vegpeople=this.state.no_of_people;
  no_of_nonvegpeople=0;

}
else if(this.state.meal_prefrence=="nonveg"){
  no_of_nonvegpeople=this.state.no_of_people;
  no_of_vegpeople=0;

}
else if(this.state.meal_prefrence=="both"){
  no_of_vegpeople = this.state.no_of_vegpeople;
  no_of_nonvegpeople = this.state.no_of_nonvegpeople;
  
}





if(this.state.time_prefrence=='lunch'){
  if(this.state.checktime==0){
    var date = new Date(
      this.state.deliverytime);
    let hour = date.getHours().toString();
    let minut = date.getMinutes().toString();

    console.log(hour);
    console.log(minut);


    // let time = hour+":"+minut
    console.log(hour+":"+minut);

    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minut = minut < 10 ? '0'+minut : minut;
    lunchtime = hour + ':' + minut + ' ' + ampm;

    console.log(lunchtime);

    dinnertime=0

  }
  else{
    var date = new Date(
      this.state.deliverytime.$d);
      let hour = date.getHours().toString();
      let minut = date.getMinutes().toString();
  
      console.log(hour);
      console.log(minut);
  
  
      // let time = hour+":"+minut
      console.log(hour+":"+minut);
  
      var ampm = hour >= 12 ? 'pm' : 'am';
      hour = hour % 12;
      hour = hour ? hour : 12; // the hour '0' should be '12'
      minut = minut < 10 ? '0'+minut : minut;
      lunchtime = hour + ':' + minut + ' ' + ampm;
  
      console.log(lunchtime);
      dinnertime=0
  }

}
else if(this.state.time_prefrence=='dinner'){
  if(this.state.checktime==0){
    var date = new Date(
      this.state.deliverytime);
    let hour = date.getHours().toString();
    let minut = date.getMinutes().toString();

    console.log(hour);
    console.log(minut);


    // let time = hour+":"+minut
    console.log(hour+":"+minut);

    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minut = minut < 10 ? '0'+minut : minut;
    dinnertime = hour + ':' + minut + ' ' + ampm;

    lunchtime=0
    console.log(dinnertime);
  }
  else{
    var date = new Date(
      this.state.deliverytime.$d);
    let hour = date.getHours().toString();
    let minut = date.getMinutes().toString();

    console.log(hour);
    console.log(minut);


    // let time = hour+":"+minut
    console.log(hour+":"+minut);

    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minut = minut < 10 ? '0'+minut : minut;
    dinnertime = hour + ':' + minut + ' ' + ampm;

    console.log(dinnertime);
    lunchtime=0
  }

}
else if(this.state.time_prefrence=='both'){
  if(this.state.checklunchtime==0 && this.state.checkdinnertime==0){
    var lunchdate = new Date(
      this.state.deliverylunchtime);
    
      let lunchhour = lunchdate.getHours().toString();
      let lunchminut = lunchdate.getMinutes().toString();
  
      console.log(lunchhour);
      console.log(lunchminut);
  
  
      // let time = lunchhour+":"+lunchminut
      console.log(lunchhour+":"+lunchminut);
  
      var ampm = lunchhour >= 12 ? 'pm' : 'am';
      lunchhour = lunchhour % 12;
      lunchhour = lunchhour ? lunchhour : 12; // the lunchhour '0' should be '12'
      lunchminut = lunchminut < 10 ? '0'+lunchminut : lunchminut;
      lunchtime = lunchhour + ':' + lunchminut + ' ' + ampm;
  
      console.log(lunchtime);



      var dinnerdate = new Date(
        this.state.deliverydinnertime);
      
        let dinnerhour = dinnerdate.getHours().toString();
        let dinnerminut = dinnerdate.getMinutes().toString();
    
        console.log(dinnerhour);
        console.log(dinnerminut);
    
    
        // let time = dinnerhour+":"+dinnerminut
        console.log(dinnerhour+":"+dinnerminut);
    
        var dinnerampm = dinnerhour >= 12 ? 'pm' : 'am';
        dinnerhour = dinnerhour % 12;
        dinnerhour = dinnerhour ? dinnerhour : 12; // the dinnerhour '0' should be '12'
        dinnerminut = dinnerminut < 10 ? '0'+dinnerminut : dinnerminut;
        dinnertime = dinnerhour + ':' + dinnerminut + ' ' + dinnerampm;
    
        console.log(dinnertime);


      // dinnertime=0
  }
  else if(this.state.checklunchtime==1 && this.state.checkdinnertime==0){


    var date = new Date(
      this.state.deliverylunchtime.$d);
      let hour = date.getHours().toString();
      let minut = date.getMinutes().toString();
  
      console.log(hour);
      console.log(minut);
  
  
      // let time = hour+":"+minut
      console.log(hour+":"+minut);
  
      var ampm = hour >= 12 ? 'pm' : 'am';
      hour = hour % 12;
      hour = hour ? hour : 12; // the hour '0' should be '12'
      minut = minut < 10 ? '0'+minut : minut;
      lunchtime = hour + ':' + minut + ' ' + ampm;
  
      console.log(lunchtime);


      var dinnerdate = new Date(
      this.state.deliverydinnertime);
    
      let dinnerhour = dinnerdate.getHours().toString();
      let dinnerminut = dinnerdate.getMinutes().toString();
  
      console.log(dinnerhour);
      console.log(dinnerminut);
  
  
      // let time = dinnerhour+":"+dinnerminut
      console.log(dinnerhour+":"+dinnerminut);
  
      var dinnerampm = dinnerhour >= 12 ? 'pm' : 'am';
      dinnerhour = dinnerhour % 12;
      dinnerhour = dinnerhour ? dinnerhour : 12; // the dinnerhour '0' should be '12'
      dinnerminut = dinnerminut < 10 ? '0'+dinnerminut : dinnerminut;
      dinnertime = dinnerhour + ':' + dinnerminut + ' ' + dinnerampm;
  
      console.log(dinnertime);

  }
  else if(this.state.checklunchtime==0 && this.state.checkdinnertime==1){


    var lunchdate = new Date(
      this.state.deliverylunchtime);
    
      let lunchhour = lunchdate.getHours().toString();
      let lunchminut = lunchdate.getMinutes().toString();
  
      console.log(lunchhour);
      console.log(lunchminut);
  
  
      // let time = lunchhour+":"+lunchminut
      console.log(lunchhour+":"+lunchminut);
  
      var ampm = lunchhour >= 12 ? 'pm' : 'am';
      lunchhour = lunchhour % 12;
      lunchhour = lunchhour ? lunchhour : 12; // the lunchhour '0' should be '12'
      lunchminut = lunchminut < 10 ? '0'+lunchminut : lunchminut;
      lunchtime = lunchhour + ':' + lunchminut + ' ' + ampm;
  
      console.log(lunchtime);

      var date = new Date(
        this.state.deliverydinnertime.$d);
      let hour = date.getHours().toString();
      let minut = date.getMinutes().toString();
  
      console.log(hour);
      console.log(minut);
  
  
      // let time = hour+":"+minut
      console.log(hour+":"+minut);
  
      var ampm = hour >= 12 ? 'pm' : 'am';
      hour = hour % 12;
      hour = hour ? hour : 12; // the hour '0' should be '12'
      minut = minut < 10 ? '0'+minut : minut;
      dinnertime = hour + ':' + minut + ' ' + ampm;
  
      console.log(dinnertime);
     

  }
  else if(this.state.checklunchtime==1 && this.state.checkdinnertime==1){

    var lunchdate = new Date(
      this.state.deliverylunchtime.$d);
    let lunchhour = lunchdate.getHours().toString();
    let lunchminut = lunchdate.getMinutes().toString();

    console.log(lunchhour);
    console.log(lunchminut);


    // let time = lunchhour+":"+lunchminut
    console.log(lunchhour+":"+lunchminut);

    var ampm = lunchhour >= 12 ? 'pm' : 'am';
    lunchhour = lunchhour % 12;
    lunchhour = lunchhour ? lunchhour : 12; // the lunchhour '0' should be '12'
    lunchminut = lunchminut < 10 ? '0'+lunchminut : lunchminut;
    lunchtime = lunchhour + ':' + lunchminut + ' ' + ampm;

    console.log(lunchtime);
   

      var dinnerdate = new Date(
      this.state.deliverydinnertime.$d);
      let dinnerhour = dinnerdate.getHours().toString();
      let dinnerminut = dinnerdate.getMinutes().toString();
  
      console.log(dinnerhour);
      console.log(dinnerminut);
  
  
      // let time = dinnerhour+":"+dinnerminut
      console.log(dinnerhour+":"+dinnerminut);
  
      var dinnerampm = dinnerhour >= 12 ? 'pm' : 'am';
      dinnerhour = dinnerhour % 12;
      dinnerhour = dinnerhour ? dinnerhour : 12; // the dinnerhour '0' should be '12'
      dinnerminut = dinnerminut < 10 ? '0'+dinnerminut : dinnerminut;
      dinnertime = dinnerhour + ':' + dinnerminut + ' ' + dinnerampm;
  
      console.log(dinnertime);
     

  }

}



if (this.state.status === 0) {
  var data = {
    nameOfinstitude_Or_Compony:this.state.nameOfinstitude_Or_Compony,
    address:this.state.address,
    contactperson_name:this.state.contactperson_name,
    contact_number:this.state.contact_number,
    gst:this.state.gst,
    meal_prefrence:this.state.meal_prefrence,
    time_prefrence:this.state.time_prefrence,
    no_of_vegpeople:no_of_vegpeople,
    no_of_nonvegpeople:no_of_nonvegpeople,
    starting_date:this.state.starting_date,
    ending_date:this.state.ending_date,
    // deliverytime:strTime,
    dinnertime:dinnertime,
    lunchtime:lunchtime,
    plan_type:this.state.plan_type,
    email:this.state.email,
    amount:500,
    status:"pay_book"
 
   
   
  };

  
}
if (this.state.status === 1) {
  var data = {
    nameOfinstitude_Or_Compony:this.state.nameOfinstitude_Or_Compony,
    address:this.state.address,
    contactperson_name:this.state.contactperson_name,
    contact_number:this.state.contact_number,
    gst:this.state.gst,
    meal_prefrence:this.state.meal_prefrence,
    time_prefrence:this.state.time_prefrence,
    no_of_vegpeople:no_of_vegpeople,
    no_of_nonvegpeople:no_of_nonvegpeople,
    starting_date:this.state.starting_date,
    ending_date:this.state.ending_date,
    dinnertime:dinnertime,
    lunchtime:lunchtime,
    plan_type:this.state.plan_type,
    email:this.state.email,
    amount:this.state.totalAmount,
    status:"pay_full"
 
   
   
  };

  
}


console.log(data)

try{
console.log("try")
axios.post('https://tifinco.com:5000/admin/corporatepayment', data,{
  headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
  onUploadProgress: data => {
 
    this.setState({
    progress: Math.round((100 * data.loaded) / data.total)

    });
  },

})
  .then(res => {
   
       const link =  res.data.mgs;
   
      //  alert("data")
       window.location = link.paymentLink;
    
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

  const margin = (this.state.height-this.state.width)/2;

  const topmargin = ((this.state.height)*60)/100
  const topmargin1 = (this.state.height*25)/100;
  const leftmargin = ((this.state.width)*58)/100;
  const textwidth = ((this.state.width)*40)/100;

  const changepadding = ((this.state.height)*0.7)/100;
  const { width } = this.state;
  const iswidth = width <= 1090;

  // const topmargin = (this.state.height*25)/100;
  // const leftmargin = ((this.state.width)*62)/100;

  const changedialogwidth = ((this.state.width)*60)/100;

  const changeinputwidth = changedialogwidth*39.5/1000*10;


  const changeinputmargin = changedialogwidth*5.123/100;

  const changefieldwidth = changedialogwidth*20/100;
   
  const changevegnonve = changeinputwidth/2;

const changesecondmargin = changedialogwidth*4/100;


var no_of_vegpeople =0;
var no_of_nonvegpeople =0;
var amount=0;
var no_ofpeople=0;

var totalAmount=0

if(this.state.meal_prefrence=="veg"){

  no_of_vegpeople=this.state.no_of_people;
  no_of_nonvegpeople=0;

}
else if(this.state.meal_prefrence=="nonveg"){
  no_of_nonvegpeople=this.state.no_of_people;
  no_of_vegpeople=0;

}
else if(this.state.meal_prefrence=="both"){
  no_of_vegpeople = this.state.no_of_vegpeople;
  no_of_nonvegpeople = this.state.no_of_nonvegpeople;
  var totalAmount=0
}

const date1 = new Date(this.state.starting_date);
const date2 = new Date(this.state.ending_date);
// console.log(date1)
// console.log(date2)
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

// console.log(diffDays+1)


no_ofpeople = (parseInt(no_of_vegpeople)+parseInt(no_of_nonvegpeople))*this.state.planprice;

// console.log("no of veg",no_of_vegpeople)
// console.log("no of nonveg",no_of_nonvegpeople)
// console.log("no total ammount pepople",no_ofpeople)

amount=no_ofpeople*(diffDays+1);

var gstAmount = amount*0.05;
var totalAmount = amount+gstAmount;

// console.log("total",totalAmount)
 
   return (
   
    <Container maxWidth={false} disableGutters={true} justifyContent="center"  sx={{alignItems:"center",}} style={{width:"100%"}} >
         <Stack>

{/* Nav Bar Section   */}
          {/* <Container sx={{width:"100%", }} style={{maxWidth:1900}} >
     
          <Box  > */}
    

<div style={{width:"100%",paddingLeft:"20px",paddingRight:"20px",paddingTop:"40px"}}>
<div className='mobile-bar' >
      <div className='mobilelogo'><a href="#" onClick={() => window.location.reload(false)}  id="home">
      <div style={{backgroundImage:`url(${logo})`,width:"180px",height:"50px",backgroundPosition:'center',backgroundSize:'cover'}}></div>
        {/* <img src={logo} id="logoicon" height={40} /> */}
        </a></div>
      <div className='mobilerightmenu' > 
      {/* <a href="#Home"   className='link-dark1 textfont' >Home</a>
      <a href='#About' className='link-dark2 textfont' > Our Menu</a>
      <a href='#Subscription'  className='link-dark3 textfont' > Corporate Order</a>
      <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"   >Download App</button></a> */}
      {/* <a href='/login' style={{marginLeft:"40px",width:"auto"}}><button class="btn buttonchange"  > Login or Signup </button></a> */}
     
                              <MenuIcon onClick={this.handleclickopen} style={{backgroundColor:"#DA234D",height:"40px",width:"40px",borderRadius:5}} />
                                  
                          

                              <Dialog className='dialogconatiner' open={this.state.open}  fullScreen PaperProps={{
                                  style: { 
                                  
                                    backgroundColor: "#DA234D",
                                    color: "black",
                                    
                                  }
                                }} >
                                  
                                    <Box
                                      
                                   
                                     
                                      sx={{bgcolor:"#3DA234D",width:"100%",margin:"50px"}}
                                    
                                      
                                    >
                                      
                                    
                                       <a href='#'> <ArrowBackIcon onClick={this.handleclickclose} sx={{color:"white"}}/></a>
                                      
                                    </Box>
                                    
                                  
                                      
                                   <DialogContent >
                                     <ul style={{listStyle:"none"}}>
                                       <li style={{    marginBottom: "30px"}}> <a href='https://bit.ly/3Pr9XDq' target="_blank"><button class="btn mobilebuttonchange"   >Download App</button></a></li>
                                       <li  style={{    marginBottom: "30px"}}> <a href='/login' ><button class="btn mobilebuttonchange"  > Login or Signup </button></a> </li>
                                       <li  style={{    marginBottom: "30px"}}><a href='' style={{color:"white",font:"normal normal 600 18px Poppins"}}>Home</a></li>
                                       <li  style={{    marginBottom: "30px"}}><a href='#' onClick={this.onconfirmclick} style={{color:"white",font:"normal normal 600 18px Poppins"}}>Corporate Orders</a></li>


                    

    




{/*  for proceed open */}




<Dialog maxWidth={500} open={this.state.openproceed} PaperProps={{ sx: { width: changedialogwidth, height: "auto",bgcolor:'white',borderRadius:"10px" } }} actions={[
      <Button type="submit" form="my-form-id" label="Submit" />
    ]}>
      <Box
        m={1}
      //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        
      >

        <div class="input-group" style={{width:"100%",justifyContent: "space-between"}} >
        <Button  sx={{ height: 40 ,color:"#da2850"}} >
          <ArrowBackIcon onClick={()=>this.onconfirmclick2() } />
        </Button>
        <Button  sx={{ height: 40 ,color:"#da2850"}} onClick={this.handleClose}>
          <CloseIcon />
        </Button>
        </div>
    
      </Box>
      
        <DialogTitle ><center><strong style={{color: '#00000',font:" normal normal 600 15px/15px Poppins"}} >Enter details to book</strong></center></DialogTitle>
        
        <DialogContent >
        <form onSubmit={this.handleSubmituserinfo} encType='multipart/form-data' id="sendinfo" >

        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label dialogtextfont">Name Of Institution/Company</label>
          <input value={this.state.nameOfinstitude_Or_Compony} style={{border:"1px solid #BFC1C5",height:"40px",width:"100%",color:"black"}}  onChange={this.handleInputcomponyname} placeholder='Enter Here'  type="text" className="form-control inputhoverborder" required/>
      
         <ErrorOutlineIcon  style={{color:"red",fontSize:"16px",display:"none"}}/>
        </div>
      


        <div class="mb-3">
          <label  for="formGroupExampleInput" class="form-label dialogtextfont">Contact Person Name</label>
          <input value={this.state.contactperson_name} style={{border:"1px solid #BFC1C5",height:"40px",width:"100%",color:"black"}}  onChange={this.handleInputcontactname} placeholder='Enter Contact Person Name '   type="text" className="form-control inputhoverborder" required/>
        
        </div>
        


        {/* ,,,starting_date,ending_date,,,, */}
       
        
       
        <div class="mb-3">
          <label  for="formGroupExampleInput" class="form-label dialogtextfont">Contact Number</label>
          <input value={this.state.contact_number} style={{border:"1px solid #BFC1C5",height:"40px",width:"100%",color:"black"}}   onChange={this.handleInputusernumber} placeholder='Enter Contact Number'  type="text" className="form-control inputhoverborder" required/>
        
        </div>



        <div class="mb-3">
          <label  for="formGroupExampleInput" class="form-label dialogtextfont">Email</label>
          <input value={this.state.email} style={{border:"1px solid #BFC1C5",height:"40px",width:"100%",color:"black"}}   onChange={this.handleInputemail} placeholder='Enter Your Email'   type="text" className="form-control inputhoverborder" required/>
        
        </div>
     

       

        <div class="mb-3">
          <label  for="formGroupExampleInput" class="form-label dialogtextfont">Address</label>
          <input value={this.state.address} style={{border:"1px solid #BFC1C5",height:"40px",width:"100%",color:"black"}}   onChange={this.handleInputuseraddr} placeholder='Enter Your Address'   type="text" className="form-control inputhoverborder" required/>
        
        </div>



        <div class="mb-3">
          <label  for="formGroupExampleInput" class="form-label dialogtextfont">GSTIN (for input tax credit)</label>
          <input value={this.state.gst} style={{border:"1px solid #BFC1C5",height:"40px",width:"100%",color:"black"}}   onChange={this.handleInputgst} type="text" className="form-control inputhoverborder" placeholder='Enter GST No.' required/>
        
        </div>
        
       





        {/* <div class="mb-3">
          <label  for="formGroupExampleInput" class="form-label dialogtextfont">GSTIN (for input tax credit)</label>
          <input  style={{border:"1px solid #BFC1C5",height:"40px",width:"550px",color:"black"}} onChange={this.handleInputgst} placeholder='Enter GST'  type="text" className="form-control inputhoverborder"/>
        
        </div> */}
       
          <div class="mb-3">
          <label   for="formGroupExampleInput" class="form-label dialogtextfont">Order For (Number Of People)</label>


          {this.state.meal_prefrence=='veg' || this.state.meal_prefrence=='nonveg' ? <input  onChange={this.handleInputnoofpoeple} value={this.state.no_of_people} style={{border:"1px solid #BFC1C5",height:"40px",width:"100%",color:"black"}}   placeholder='Enter no. of people'  type="text" className="form-control inputhoverborder1" required/>:
              
              this.state.width<=1024?<div class="input-group">
              <input  style={{border:"1px solid #BFC1C5",height:"40px",width:changevegnonve,color:"black"}} placeholder='No. of veg '  onChange={this.handleInputnoofveg} value={this.state.no_of_vegpeople} type="text" className="form-control inputhoverborder " required/>

              <span class="input-group-glue" style={{width:"10px"}}></span>

              
              <input  style={{border:"1px solid #BFC1C5",height:"40px",width:changevegnonve,color:"black"}} placeholder='No. of nonveg '  onChange={this.handleInputnoofnonveg} value={this.state.no_of_nonvegpeople} type="text" className="form-control inputhoverborder " required/>

           </div>:  
           
           
           
           
           <div class="input-group">
              <input  style={{border:"1px solid #BFC1C5",height:"40px",width:changevegnonve,color:"black"}} placeholder='No. of veg '  onChange={this.handleInputnoofveg} value={this.state.no_of_vegpeople} type="text" className="form-control inputhoverborder " required/>

              <span class="input-group-glue" style={{width:"10px"}}></span>

              
              <input    style={{border:"1px solid #BFC1C5",height:"40px",width:changevegnonve,color:"black"}} placeholder='No. of nonveg '  onChange={this.handleInputnoofnonveg} value={this.state.no_of_nonvegpeople} type="text" className="form-control inputhoverborder " required/>

           </div>
        
              }




          </div>
        <div class="mb-3">
         
          <h6 className='dialogtextfont' >Meal Prefrence:-</h6>
        
                <FormControl sx={{width:"100%"}}>
                  

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="veg"
                 
                
                >
                  <FormControlLabel value="veg"
                  
                    control={<Radio   sx={{
                      color: "#DA234D",
                      '&.Mui-checked': {
                        color: "#DA234D",
                      },
                    }} select />} label="Veg" onChange={this.handleInputmeal_prefrence} />
                    
                    
                  <FormControlLabel  value="nonveg" control={<Radio  sx={{
                    color: "#DA234D",
                    '&.Mui-checked': {
                      color: "#DA234D",
                    },
                  }}/>} label="Non Veg" onChange={this.handleInputmeal_prefrence}/>

                   <FormControlLabel  value="both" control={<Radio  sx={{
                    color: "#DA234D",
                    '&.Mui-checked': {
                      color: "#DA234D",
                    },
                  }}/>} label="Both" onChange={this.handleInputmeal_prefrence}/>
              
                </RadioGroup>
              </FormControl> 


             
        
        
        </div>
       

                
        <div class="mb-3" >
        
        <h6 style={{font:" normal normal 700 14px/15px Poppins"}}>Time Prefrence:-</h6>

              <FormControl sx={{width:"100%"}}>
                

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="lunch"
                
              
              >
                <FormControlLabel value="lunch"
                
                  control={<Radio   sx={{
                    color: "#DA234D",
                    '&.Mui-checked': {
                      color: "#DA234D",
                    },
                  }} select />} label="Lunch" onChange={this.handleInputtime_prefrence} />
                  
                  
                <FormControlLabel  value="dinner" control={<Radio  sx={{
                  color: "#DA234D",
                  '&.Mui-checked': {
                    color: "#DA234D",
                  },
                }}/>} label="Dinner" onChange={this.handleInputtime_prefrence}/>

                  <FormControlLabel  value="both" control={<Radio  sx={{
                  color: "#DA234D",
                  '&.Mui-checked': {
                    color: "#DA234D",
                  },
                }}/>} label="Both" onChange={this.handleInputtime_prefrence}/>
            
              </RadioGroup>
            </FormControl> 


            


        </div>
        {this.state.time_prefrence=='lunch'||this.state.time_prefrence=='dinner'? 
          <div class="mb-3" >
          <label style={{font:" normal normal 700 14px Poppins"}} for="formGroupExampleInput" class="form-label">Choose Time</label>
          <div class="input-group" style={{width:"100%"}}>
         
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Time"
              value={this.state.deliverytime}
              onChange={(newValue) => {
                this.handleInputtime(newValue);
              }}
              renderInput={(params) => <TextField {...params} style={{height:"40px",width:"100%",backgroundColor:"white"}}/>}
            />         
          </LocalizationProvider>
  
          </div>
        
       
        </div>:


        <div class="mb-3" >
        {/* <label style={{font:" normal normal 700 14px Poppins"}} for="formGroupExampleInput" class="form-label">Date & Time</label> */}
      
       <div className='tabfelxdia'>
      

             <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Lunch_Time"
                  value={this.state.deliverylunchtime}
                  onChange={(newValue) => {
                    this.handleInputlunchtime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} style={{height:"40px",width:changeinputwidth,backgroundColor:"white"}}/>}
                />   

          </LocalizationProvider>
        <span class="input-group-glue" style={{width:"20px"}}></span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Dinner_Time"
            value={this.state.deliverydinnertime}
            onChange={(newValue) => {
              this.handleInputdinnertime(newValue);
            }}
            renderInput={(params) => <TextField {...params} style={{height:"40px",width:"100%",backgroundColor:"white"}}/>}
          />         
        </LocalizationProvider>
        <span class="input-group-glue" style={{width:"20px"}}></span>



       </div>
        
         
        
     
      </div>



        }






<br></br>
<br></br>
        

        <div class="mb-3" >
        {/* <label style={{font:" normal normal 700 14px Poppins"}} for="formGroupExampleInput" class="form-label">Date & Time</label> */}
      
       <div className='tabfelxdia'>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="To"
            value={this.state.starting_date}
            onChange={(newValue) => {
              this.handleInputdate_to(newValue);
            }}
            renderInput={(params) => <TextField {...params}  style={{height:"40px",width:changeinputwidth,backgroundColor:"white",marginBottom:"15px"}}/>}
          />

        </LocalizationProvider>
        <span class="input-group-glue" style={{width:"20px"}}></span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="From"
            value={this.state.ending_date}
            onChange={(newValue) => {
              this.handleInputdate_from(newValue);
            }}
            renderInput={(params) => <TextField {...params} className="inputhoverborder"  style={{height:"40px",width:changeinputwidth,backgroundColor:"white",marginBottom:"15px"}}/>}
          />
        </LocalizationProvider>
        <span class="input-group-glue" style={{width:"20px"}}></span>



       </div>
        
         
        
     
      </div>
      {this.state.proceeddisable==0?
        // <center><button type="submit" style={{marginBottom:"20px"}}  className=" btn btn-secondary disproceedbtn " disabled>Book</button> </center>

        <div class="input-group" style={{justifyContent:"center"}}>
        <button type="submit" className="btn btn-secondary  modispaybookbtn" disabled>Pay Book</button> 
               
             
          <span class="input-group-glue" style={{width:"40px"}}></span>

         <button type="submit" className="btn btn-secondary modispaybookbtn" disabled>Pay Full</button> 
          
         
          </div>
        
        
        :
        // <center><button style={{marginBottom:"20px"}}type="submit" form='sendinfo' className="btn  proceedbtn" >Book</button></center> }
        <div class="input-group" style={{justifyContent:"center"}}>
        <button type="submit" form='sendinfo'  onClick={() => (this.state.status = 0)} className="btn  mopaybookbtn">Pay Book for <span style={{color:"white",font:" normal normal 700 14px Poppins"}}>&#x20b9; 500</span></button> 
               
             
          <span class="input-group-glue" style={{width:"40px"}}></span>

          

          {isNaN(totalAmount)? <button type="submit"  form='sendinfo'  onClick={() => (this.state.status = 1)} className="btn mopaybookbtn">Pay Full for  &#x20b9; </button> 
          
          : <button type="submit"  form='sendinfo'  onClick={() => (this.state.status = 1,this.state.totalAmount=totalAmount)} className="btn mopaybookbtn">Pay Full for <span style={{color:"white",font:" normal normal 700 14px Poppins"}}>&#x20b9; {parseInt(totalAmount)}</span> </button> }
        
          
         
          </div>}



  </form>
        </DialogContent>
       

       
      </Dialog>














                                       <li  style={{    marginBottom: "30px"}}><a href='/ourmenu' style={{color:"white",font:"normal normal 600 18px Poppins"}}>Our menu</a></li>
                                    
                                     </ul>
                              
                                      </DialogContent>                                    
                                    </Dialog>           
                  </div>
      </div>
    </div>


  
         





      <Box zIndex={-100}  sx={{position: 'absolute' ,overflow:"hidden",width:"100%"}} >
          
         
                   <Paper variant="outlined " direction="column" 
                  justify="center"
                  alignItems="center"> 
                    <div >

                    </div>
                    {/* <img id="bgimagemobile" src={mobilebg}  style={{ height: "110vh" , backgroundSize: "fill",width:"100%",
                    backgroundRepeat: "no-repeat"}} ></img>  */}
                    <div style={{backgroundImage:`url(${mobilebg})`,height:"100vh",width:"100%", backgroundSize:'cover',backgroundPosition:'center'}}></div>
                  </Paper>
                  
             

          <Container   zIndex={1000} maxWidth={false} sx={{
                  marginLeft:"auto",marginRight:"auto",
                  
                  height:"350px",
                
                  position: 'absolute',
                  top: topmargin,
                  
                  zIndex: 1000,
                  
                  paddingLeft:0,
                  paddingRight:0,
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"space-between",
                  alignItems:"center",
                  
                  
                
                 
                 
                

                  }}>
                    <div className='tabflexanimation'>
               
                                    <Typewriter 
                                   options={{
                                  
                                    autoStart: true,
                                    loop: true,
                                  }}
                                      onInit={(typewriter) => {
                                        typewriter.pauseFor(1000)
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 800 30px Poppins";>An all new way of</h1>')
                                        .pauseFor(300)
                                        
                                        .typeString('<h1 style="color:#141923 ;font:normal normal 800 30px Poppins";>tiffin delivery </h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 800 30px Poppins";>and more…<span style="color:black">|</span></h1>')
                                        .pauseFor(300)
                                        .deleteAll()
                                        .typeString('<h1 style="color:#DC2D55;font:normal normal 800 30px Poppins";>Reimagined avatar<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font:normal normal 800 30px Poppins";> of <span style="color:#141923 ;font: normal normal 800 30px Poppins";>combos</span> with chef<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font:normal normal 800 30px Poppins";>Curated menus.<h1>')
                                        .deleteAll()
                                        .typeString('<h1 style="color: #DC2D55; font:normal normal 800 30px Poppins";>Curated meals that</h1>')
                                        .typeString('<h1 style="color: #DC2D55; font:normal normal 800 30px Poppins";>fits in all pocket</h1>')
                                        .typeString('<h1 style="color:#141923 ;font:normal normal 800 30px Poppins";>coming soon...</h1>')
                                         .start();
                                       
                                      }}
                                    />


                    </div>
                    <div className='tabpostionfixediv'>
                    <h3 style={{font:"normal normal 600 15px Poppins"}}>Serving first in  <span style={{font:" normal normal 800 18px Poppins"}}>Raipur</span></h3>
                                                        <h3 style={{font:"normal normal 600 12px Poppins", color:"#535A64",textAlign:"center"}}>Register now to get exclusive discount on all subscription plans</h3>
                                                          <h3 style={{textAlign:"start"}}><a target="_blank" rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.prixso.tifinco'><img  src={GooglePayImg}  height={30}></img></a></h3>



                    </div>




 

          </Container>

{/* <Paper variant="outlined " direction="column" 
         justify="center"
         alignItems="center"> 
           <div >

           </div>
           <img  src={mainimage}  style={{ height: "100vh" , backgroundSize: "cover",width:"100%",
           backgroundRepeat: "no-repeat"}} ></img> 
         </Paper>



         <Container   zIndex={1000} maxWidth={false} sx={{
                  marginLeft:"auto",marginRight:"auto",
                  
                  height:"400px",
                
                  position: 'absolute',
                  top: topmargin1,
                  left: leftmargin,
                  
                  zIndex: 1000,
                  
                  paddingLeft:0,
                  paddingRight:0,
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"space-between",
                  alignItems:"flex-start",
                  
                  
                
                 
                 
                

                  }}>
                    <div className='tabflexanimation' >
                    <Typewriter 
                                   options={{
                                  
                                    autoStart: true,
                                    loop: true,
                                  }}
                                      onInit={(typewriter) => {
                                        typewriter.pauseFor(1000)
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 25px Poppins";>An all new way of</h1>')
                                        .pauseFor(300)
                                        
                                        .typeString('<h1 style="color:#141923 ;font: normal normal 700 25px Poppins";>tiffin delivery </h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 25px/25px Poppins";>and more…<span style="color:black">|</span></h1>')
                                        .pauseFor(300)
                                        .deleteAll()
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 25px Poppins";>Reimagined avatar<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 25px Poppins";> of <span style="color:#141923 ;font: normal normal 800 25px Poppins";>combos</span> with chef<h1>')
                                        .typeString('<h1 style="color:#DC2D55;font: normal normal 700 25px Poppins";>Curated menus.<h1>')
                                        .deleteAll()
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 25px Poppins";>Curated meals that</h1>')
                                        .typeString('<h1 style="color: #DC2D55; font: normal normal 700 25px Poppins";>fits in all pocket</h1>')
                                        .typeString('<h1 style="color:#141923 ;font: normal normal 700 25px Poppins";>coming soon...</h1>')
                                         .start();
                                       
                                      }}
                                    />


                    </div>
                    <div className='tabpostionfixediv' style={{width: textwidth}}>
                    <h3 style={{font:"normal normal 600 20px Poppins"}}>Serving first in  <span style={{font:"normal normal 600 25px Poppins"}}>Raipur</span></h3>
                                       <h3 style={{font:"normal normal 600 15px Poppins", color:"#535A64"}}>Register now to get exclusive discount on all subscription plans</h3>
                                        <h3 style={{textAlign:"start"}}><a href='https://play.google.com/store/apps/details?id=com.prixso.tifinco'><img  src={GooglePayImg}  height={40}></img></a></h3>


                    </div>




 

          </Container> */}




            <Paper id={this.state.getid}  alignItems="center" justifyContent="center" sx={{background: "#FFFFF",borderRadius: 4,width:"auto",height:"auto",marginLeft:"0px",marginRight: "0px",paddingTop:"40px",}}>
            
            <Container maxWidth={false}>

            <Container justifyContent="center" maxWidth={false} sx={{ width:"auto",bgcolor:"#1F1221",borderRadius:"5px",height:"300px",display:"flex",alignItems:"center"}} >


                <div style={{paddingLeft:"20px"}}>
                <h3 style={{color:"#FFFFFF",font:" normal normal 600 25px Poppins"}}>Enjoy <span style={{color:"#DC2D55",font:" normal normal 600 25px Poppins"}}>pre-planned curated meals</span></h3>
                                  <h3 style={{color:"#FFFFFF",font:" normal normal 600 25px/15px Poppins"}}> delivered at your doorstep</h3>
                                  <h3 style={{color:"#FFFFFF",font:" normal normal 600 25px Poppins"}}> everyday on time</h3>
                                  <h3 style={{color:"#99979C",font:" normal normal 500 18px Poppins",paddingRight:"80px"}}>Plans for all suits starting at 100 per meal</h3>
                                  <div className="tabbutn" ><span className='tabtxt'>Explore plans on the app</span></div>



                </div>






                </Container>
                
                <div style={{height:"20px"}}></div>


            <h1 style={{font:"normal normal 600 25px/36px Poppins"}}>Benefits of subscribing to tifinco</h1>

            <div className='maintabflexdivcontainerdiv'>
            <div className='tabflexdivcontainerdiv1' style={{width:"100%"}}>
              
              <Container justifyContent="center" maxWidth={false} sx={{ width:"40%",bgcolor:"#9D95C20D",borderRadius:"5px",height:"285px"}} >
  
  
                  <div style={{textAlign:"center",paddingTop:"30px"}}>
                  <img  src={Group1} height={70} />
                    <h1 style={{color:"#141923",font:"normal normal 600 18px/60px Poppins"}}>Heatable Tiffin</h1>
                    <center>  <p  style={{color:"#141923",font:"normal normal 500 16px/20px Poppins",height:"63px",width:"226px",textAlign:"center"}}>Get your food instantly hot with heatable tiffin and enjoy hot and fresh meal</p></center>
  
  
  
  
  
                  </div>
  
  
                  </Container>
  
  
                  <Container justifyContent="center" maxWidth={false} sx={{ width:"40%",bgcolor:"#9D95C20D",borderRadius:"5px",height:"285px"}} >
  
  
                  <div style={{textAlign:"center",paddingTop:"30px"}}>
                  <img  src={Group2} height={70} />
                    <h1 style={{color:"#141923",font:"normal normal 600 18px/60px Poppins"}}>Live Tracking</h1>
                    <center>  <p  style={{color:"#141923",font:"normal normal 500 16px/20px Poppins",height:"63px",width:"226px",textAlign:"center"}}>Know your tiffin updates with notifications and in app tracking</p></center>
  
  
  
                  </div>
  
  
                  </Container>
  
              </div>
  
  
              <div className='tabflexdivcontainerdiv2' style={{width:"100%"}}>
                        <Container justifyContent="center" maxWidth={false} sx={{ width:"40%",bgcolor:"#9D95C20D",borderRadius:"5px",height:"285px"}} >
  
  
                        <div style={{textAlign:"center",paddingTop:"30px"}}>
                        <img  src={Group3} height={70} />
                          <h1 style={{color:"#141923",font:"normal normal 600 18px/60px Poppins"}}>Flexible</h1>
                          <center>  <p  style={{color:"#141923",font:"normal normal 500 16px/20px Poppins",height:"63px",width:"226px",textAlign:"center"}}>Pause, Change or cancel subscription according to your need</p></center>
  
  
  
                        </div>
  
  
                        </Container>
                        <Container justifyContent="center" maxWidth={false} sx={{ width:"40%",bgcolor:"#9D95C20D",borderRadius:"5px",height:"285px",marginTop:"20px"}} >
  
  
                        <div style={{textAlign:"center",paddingTop:"30px"}}>
                        <img  src={Group4} height={70} />
                        <h1 style={{color:"#141923",font:"normal normal 600 18px/60px Poppins"}}>Separate Kitchen</h1>
                        <center>  <p  style={{color:"#141923",font:"normal normal 500 16px/20px Poppins",height:"63px",width:"226px",textAlign:"center"}}>Separate Kitchen for Veg and Non-veg meals</p></center>
  
  
  
                        </div>
  
  
                        </Container>
                        </div>



            </div>

            


            

            </Container>
            <div style={{height:"20px"}}></div>
            <Container   maxWidth={false} sx={{ width:"100%",justifyContent:"center",height:"50px"  ,backgroundColor:"#B2AFFF1A",display:"flex",alignItems:"flex-end"}}>


{/*                     
                   <div style={{textAlign:"center"}}> 
                   <h5 style={{font:"normal normal 600 14px poppins",color:"#215ACE"}}>Pre-book  
                   <span style={{color:"black"}}> now and get one extra meal free. See how it works <a href='#' style={{color:"#2A345A"}}><ArrowForwardIcon/>
                   </a></span></h5></div>
                     */}
       

        </Container>


        <div style={{height:"20px"}}></div>


        <Container sx={{background: "linear-gradient(180deg, #FFE5EB 0%, #FFF3F3 100%)" }} className='tabflexcontainer'> 

         

         
         
          
        </Container>
        <div style={{height:"40px"}}></div>
        <Container  style={{backgroundColor:"#DA234D",height:"auto",paddingTop:"27px"}} maxWidth={false}>
          <Container style={{height:"auto",paddingLeft:"50px",paddingRight:"50px"}}>
            <div style={{backgroundImage:`url(${footerlogo})`,backgroundSize:"129px", width: "130px", height:" 45px",backgroundRepeat: "no-repeat"}}></div>

            <div className='tabfootercontainerflex' >




         
                 <div className='tabfootercontainerflex1'>
                   <ul style={{ listStyle: "none",color: "#FFFFFF",font:"normal normal 600 18px/43px Poppins",padding:0}}>
                   
                     <li> Useful Links </li>
                     <li><a href='#home'>Home</a> </li>
                     <li><a href='#Corporate' style={{color:"white"}} onClick={this.onconfirmclick}> Corporate Orders</a></li>
                     <Dialog maxWidth={700} open={this.state.corporate} PaperProps={{ sx: { width: changedialogwidth, height: "84%",bgcolor:'white',borderRadius:"10px" } }} actions={[
      <Button type="submit" form="my-form-id" label="Submit" />
    ]}>
      <Box
        m={1}
      //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        
      >
          <Button className="closebtn" sx={{ height: 40 ,color:"#da2850"}} onClick={this.handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      
        <DialogTitle style={{marginLeft:changesecondmargin}}><strong style={{color: '#00000',font:" normal normal 600 15px/15px Poppins"}} >Choose between multiple plan option to according to your preferences</strong></DialogTitle>
        
        <DialogContent style={{padding:0}}>
          
        <form  >
        <table class="table">
        <div className='tabmaintabluardiv'>
        <div className='tabcolm1'>

        <ul class="tablisttable1" >
            <li class="tablitable1">Plan</li>
            <li class="tablitable12" >3 - 4 Roti</li>
            <li class="tablitable12" >Veg-1 / Nonveg-1 / Both</li>
            <li class="tablitable12" >Veg-2 / Nonveg-2 / Both</li>
            <li class="tablitable12" >Veg-3</li>
            <li class="tablitable12" >Salad / Papad / Acchar</li>
            <li class="tablitable12" >Sweet Dish</li>
            <li class="tablitable12" >Cold Drink</li>
            <li class="tablitable1" style={{paddingTop:"49px"}} >Select Plan</li>
          </ul>

        </div>
       
        <div className='tabcolm2'>

        <ul class="tablisttable2">
            <li class="tablitable2" style={{backgroundColor:this.state.changelitextclr1,borderTopLeftRadius:"10px",borderTopRightRadius:"10px",color:this.state.changetxthead1}}>Eco</li>
            <li class="tablitable" style={{backgroundColor:this.state.changelitextclr1,color:this.state.changeiconclor1,padding:changepadding}}><CheckIcon/></li>
            <li class="tablitable" style={{backgroundColor:this.state.changelitextclr1,color:this.state.changeiconclor1,padding:changepadding}}><CheckIcon/></li>
            <li class="tablitable" style={{backgroundColor:this.state.changelitextclr1,color:this.state.changeiconclor1,padding:changepadding}}><CloseIcon /></li>
            <li class="tablitable" style={{backgroundColor:this.state.changelitextclr1,color:this.state.changeiconclor1,padding:changepadding}}><CloseIcon /></li>
            <li class="tablitable" style={{backgroundColor:this.state.changelitextclr1,color:this.state.changeiconclor1,padding:changepadding}}><CheckIcon/></li>
            <li class="tablitable" style={{backgroundColor:this.state.changelitextclr1,color:this.state.changeiconclor1,padding:changepadding}}><CheckIcon/></li>
            <li class="tablitable" style={{backgroundColor:this.state.changelitextclr1,color:this.state.changeiconclor1,padding:changepadding,borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}><CloseIcon /></li>
            <li style={{paddingTop:"5px",listStyle:"none"}}>
             <FormControl style={{width:"90%"}}>
                  

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="veg"
                   
                  
                  >
                    
                    <FormControlLabel  value="eco" control={<Radio size="large" sx={{
                      color:this.state.textcolor1,
                      '&.Mui-checked': {
                        color: this.state.textcolor1,
                        backgroundColor:"white"
                      },
                      '&.Mui-focus': {
                       
                        backgroundColor:"white"
                      },
                      position:"absolute",
                      marginLeft:"-5",
                      marginTop:"50px",
                      width:"23px",
                      height:"23px",
                      backgroundColor:"white"
                    }}
                    onChange={this.handleplantype}
                    checked={this.state.checkradio1} onClick={this.onchangecolors1} />} />
  
                    
                
                  </RadioGroup>
                </FormControl> 
               <div style={{width:"auto",height:"80px",backgroundColor:this.state.divbackcolor1,borderRadius:"10px",border:this.state.bordercolor1,display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <li className='tabchangerediotext1' style={{color:this.state.textcolor11}}>Eco</li>
                <li  className='tabchangerediotext2' style={{color:this.state.textcolor11}}>&#x20b9; 120</li>
                <li  className='tabchangerediotext3' style={{color:this.state.textcolor11}}>Per person</li>
                
                </div></li>
              

            
            
          </ul>


        </div>
        <div className='tabcolm3'>

        <ul class="tablisttable3">
            <li class="tablitable2" style={{backgroundColor:this.state.changelitextclr2,borderTopLeftRadius:"10px",borderTopRightRadius:"10px",color:this.state.changetxthead2}} >Executive</li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr2,color:this.state.changeiconclor2,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr2,color:this.state.changeiconclor2,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr2,color:this.state.changeiconclor2,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr2,color:this.state.changeiconclor2,padding:changepadding}} ><CloseIcon /></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr2,color:this.state.changeiconclor2,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr2,color:this.state.changeiconclor2,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr2,color:this.state.changeiconclor2,padding:changepadding,borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}} ><CloseIcon /></li>
            <li style={{paddingTop:"5px",listStyle:"none"}}>
             <FormControl style={{width:"90%"}}>
                  

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="veg"
                   
                  
                  >
                    
                    <FormControlLabel  value="executive" control={<Radio size="large" sx={{
                      color: this.state.textcolor2,
                      '&.Mui-checked': {
                        color: this.state.textcolor2,
                        backgroundColor:"white"
                      },
                      '&.Mui-focus': {
                       
                        backgroundColor:"white"
                      },
                      position:"absolute",
                      marginLeft:"-5",
                      marginTop:"50px",
                      width:"23px",
                      height:"23px",
                      backgroundColor:"white"
                    }}

                    checked={this.state.checkradio2}
                    onChange={this.handleplantype}
                    
                    />} onClick={this.onchangecolors2}/>
  
                    
                
                  </RadioGroup>
                </FormControl> 
               <div style={{width:"auto",height:"80px",backgroundColor:this.state.divbackcolor2,borderRadius:"10px",border:this.state.bordercolor2,display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <li className='tabchangerediotext1' style={{color:this.state.textcolor21}}>Executive</li>
                <li className='tabchangerediotext2' style={{color:this.state.textcolor21}}>&#x20b9; 150</li>
                <li className='tabchangerediotext3' style={{color:this.state.textcolor21}}>Per person</li>
                
                </div></li>
            
          </ul>



        </div>
        <div className='tabcolm4'>



        <ul class="tablisttable4">
          <li class="tablitable2" style={{backgroundColor:this.state.changelitextclr3,borderTopLeftRadius:"10px",borderTopRightRadius:"10px",color:this.state.changetxthead3}}>Premium</li>
          <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr3,color:this.state.changeiconclor3,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr3,color:this.state.changeiconclor3,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr3,color:this.state.changeiconclor3,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr3,color:this.state.changeiconclor3,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr3,color:this.state.changeiconclor3,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr3,color:this.state.changeiconclor3,padding:changepadding}} ><CheckIcon/></li>
            <li class="tablitable" style={{textAlign:"center",backgroundColor:this.state.changelitextclr3,color:this.state.changeiconclor3,padding:changepadding,borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}} ><CheckIcon/></li>
            <li style={{paddingTop:"5px",listStyle:"none"}}>
             <FormControl style={{width:"90%"}}>
                  

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="veg"
                   
                  
                  >
                    
                    <FormControlLabel  value="premium" control={<Radio size="large" sx={{
                      color: this.state.textcolor3,
                      '&.Mui-checked': {
                        color: this.state.textcolor3,
                        backgroundColor:"white"
                      },
                      '&.Mui-focus': {
                       
                        backgroundColor:"white"
                      },
                      position:"absolute",
                      marginLeft:"-5",
                      marginTop:"50px",
                      width:"23px",
                      height:"23px",
                      backgroundColor:"white"
                    }}
                    checked={this.state.checkradio3}
                    onChange={this.handleplantype}
                    />} onClick={this.onchangecolors3}/>
  
                    
                
                  </RadioGroup>
                </FormControl> 
               <div style={{width:"auto",height:"80px",backgroundColor:this.state.divbackcolor3,borderRadius:"10px",border:this.state.bordercolor3,display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <li className='tabchangerediotext1' style={{color:this.state.textcolor31}}>Premium</li>
                <li className='tabchangerediotext2' style={{color:this.state.textcolor31}}>&#x20b9; 210</li>
                <li className='tabchangerediotext3' style={{color:this.state.textcolor31}}>Per person</li>
                
                </div></li>
           
        </ul>

        </div>
          </div>
        
          </table>
         

          

  </form>

     
        </DialogContent>

        {this.state.bookdisable==0?<button type="submit"  className=" btn btn-secondary mobiledisproceedbtn " disabled>Proceed</button> :

        <button type="button" onClick={()=>this.onconfirmclick1(this.state.planprice) } className="btn  mobileproceedbtn" >Proceed</button> }


       
       
      </Dialog>
                     <li><a href='/ourmenu' style={{color:"white"}}>Our menu</a></li>
                     <li>About us</li>


                   </ul>
                  
                  
                  




                  </div>
                  <div className='tabfootercontainerflex2'>
                    <ul style={{ listStyle: "none",color: "#FFFFFF",font:"normal normal 600 18px/43px Poppins"}}>
                      <li>Social Links</li>
                      <li > <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0" target="_blank" rel="noopener noreferrer"><img src={insta} height={30}/></a>
                      <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0" target="_blank" rel="noopener noreferrer"><img style={{paddingLeft:"20px"}} src={facebook} height={30}/>
                      </a></li>
                      <li ><a href='https://play.google.com/store/apps/details?id=com.prixso.tifinco' target="_blank" rel="noopener noreferrer"><img  src={GooglePayImg} height={30}/></a></li>
                   
                      <li></li>
                    </ul>




                      </div>
                      </div>

                      <div className='tabfooterparagraph'>

                        <p style={{font:"normal normal 400 15px Poppins"}}>Tifinco: tiffin redefined is an automated chef-curated food delivery subscription service that allows users to buy affordable and flexible plans like premium, standard and economy and customize them according to their need and preferences
                           beside subscription user can also order delicious combo meals like paratha, Chinese, rice and thali meals</p>

                          <p style={{font:"normal normal 400 16px/25px Poppins"}}>Get to know about latest exciting offers and deals</p>
                      </div>

                      <div>
                      <form onSubmit={this.handleSubmitnewsletter}>

                        <input onChange={this.handlenewslwtter} type="email" className='form-control' placeholder='Email or Phone No.' style={{height:"40px",width:"300px",marginBottom:"20px",font:" normal normal normal 16px/41px Poppins",color:"black"}} />
                       
                       
                       {this.state.isLoad==true?<button className='btn' style={{height:"auto",width:"auto",borderRadius:"5px",backgroundColor:"#d1d1d1",color:"#a1a1a1",font:" normal normal 600 16px Poppins"}}>Subscribe</button>
                       :<button className='btn' style={{height:"auto",width:"auto",borderRadius:"5px",backgroundColor:"#000000",color:"white",font:" normal normal 600 16px Poppins"}}>Subscribe</button>}
                        
                     </form>
                      </div>
                      <div style={{height:"40px"}}></div>

                  


          </Container>
         

        </Container>
        <div className='tabendfooterflex' >
                      <div style={{height:"30px"}}></div>
                        <div className='tabendfooterflex1'>
                        &#169; Tifinco Foodtech Pvt. Ltd



                        </div>


                        <div className='tabendfooterflex2'>
                        Powered and managed by Prixso Software Pvt. Ltd


                        </div>



                      </div>
        


           
            
            
            </Paper>

        


       
      </Box>


      
     
                   

   
        </Stack>
     
    
      
    </Container>
    
   );

        
 
    
 
 }}

