

import React, {Component} from 'react';

import axios from 'axios';
import K_Footer from '../K_Footer';
import K_Header from '../K_Header';
import swal from 'sweetalert';
import $ from 'jquery';
// import {Button} from "react-bootstrap";
// import {Modal} from "react-bootstrap";
import { render } from 'react-dom';
// import swal from 'sweetalert';
import { INSERTRANDOM,RANDOMFOOD1,TODAY_LUNCH,TODAY_DINNER,GETRANDOMFOODCHAGES,TODAYLUNCHREF,TODAYDINNERREF,UPDATELUNCH,UPDATETODAYDINNER,TOMORROW_LUNCH,TOMORROW_DINNER,TOMORROWLUNCHREF,TOMORROWDINNERREF,TIFFINDINNERCOUNT,TIFINLUNCHCOUNT,ECOVEG,ECONONVEG,PREMINUMVEG,PREMINUMNONVEG,EXCUTIVEVEG,EXCUTIVENONVEG} from '../../../Components/admincomponent/links/Kitchenlinks';
// import {SHOW_TIFFIN_LIST} from '../links/DeliveryLinks';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          close: false,
        };
      }
    state = {

        preraw: [],
        preCat:[],
        preCat1:[],
       
    
       
        todaylunch:[],
        todaydinner:[],
        tifincount:[],
        tifinroticount:[],


        todaylunchRM1:'',
        todaylunchRM2:'',
        todaylunchRM3:'',

        todaydinnerRM1:'',
        todaydinnerRM2:'',
        todaydinnerRM3:'',

        tomorrowlunchRM1:'',
        tomorrowlunchRM2:'',
        tomorrowlunchRM3:'',
     
        tomorrowdinnerRM1:'',
        tomorrowdinnerRM2:'',
        tomorrowdinnerRM3:'',
        _id:'',
        // VEGITABLE COUNT 
        Ecoveg:[],
        Econonveg:[],
        preveg:[],
        prenonveg:[],
        Excutiveveg:[],
        Excutivenonveg:[],

  
    
      }

  
    
  
      componentDidMount() {



        fetch(GETRANDOMFOODCHAGES,{
          headers:{'Content-Type': 'application/json','Accept': 'application/json'},
          method:'POST',
          body:JSON.stringify({
            // _id:this.props.match.params.id,
            userid: sessionStorage.getItem('userid'),
          }),
         
        
        })
      .then((res) => res.json())
      .then((json) => {
      console.log(json);
      json.map(raw=>{

        this.setState({
          todaylunchRM1 :raw.RM1,
          todaylunchRM2 :raw.RM2,
          todaylunchRM3 :raw.RM3,
          _id:raw._id
                 });
        
                  })
         
           });//CLOSING OF  randomm FETCH
        
 ////////////////////////////////////////////////////
        
        fetch(TODAY_LUNCH,{
            headers:{'Content-Type': 'application/json','Accept': 'application/json'},
            method:'POST',
            body:JSON.stringify({
              // _id:this.props.match.params.id,
              userid: sessionStorage.getItem('userid'),
            }),
           
          })
       
        .then((res) => res.json())
        .then((json) => {
        console.log(json);
     
          json.map(raw=>{

this.setState({
          todaylunchRM1 :raw.RM1,
          todaylunchRM2 :raw.RM2,
          todaylunchRM3 :raw.RM3,
          _id:raw._id
         });

          })
          
})//CLOSING OF FIRST FETCH
// ------------------------------------------------------------------------------ today  Dinner
     
         fetch(TODAY_DINNER,{
          headers:{'Content-Type': 'application/json','Accept': 'application/json'},
          method:'POST',
          body:JSON.stringify({
            // _id:this.props.match.params.id,
            userid: sessionStorage.getItem('userid'),
          }),
         
        
        })
      .then((res) => res.json())
      .then((json) => {
      console.log(json);
      json.map(raw=>{

        this.setState({
          todaydinnerRM1 :raw.RM1,
          todaydinnerRM2 :raw.RM2,
          todaydinnerRM3 :raw.RM3,
                  todaydinner_id:raw._id
                 });
        
                  })
         
           });//CLOSING OF SECOND FETCH


// ------------------------------------------------------------------------------tomorrow lunch

           fetch(TOMORROW_LUNCH,{
            headers:{'Content-Type': 'application/json','Accept': 'application/json'},
            method:'POST',
            body:JSON.stringify({
              // _id:this.props.match.params.id,
              userid: sessionStorage.getItem('userid'),
            }),
           
          
          })
        .then((res) => res.json())
        .then((json) => {
        console.log(json);
        json.map(raw=>{

          this.setState({
            tomorrowlunchRM1 :raw.RM1,
            tomorrowlunchRM2 :raw.RM2,
            tomorrowlunchRM3 :raw.RM3,
            tomorrowlunch_id :raw._id
                   });
          
                    })
           
             });//CLOSING OF THIRD FETCH


 // ------------------------------------------------------------------------------      tomorrow dinner     
           
             fetch(TOMORROW_DINNER,{
              headers:{'Content-Type': 'application/json','Accept': 'application/json'},
              method:'POST',
              body:JSON.stringify({
                // _id:this.props.match.params.id,
                userid: sessionStorage.getItem('userid'),
              }),
             
            
            })
          .then((res) => res.json())
          .then((json) => {
          console.log(json);
          json.map(raw=>{

            this.setState({
              tomorrowdinnerRM1 :raw.RM1,
              tomorrowdinnerRM2:raw.RM2,
              tomorrowdinnerRM3:raw.RM3,
              tomorrowdinner_id :raw._id
                     });
            
                      })
             
               });//CLOSING OF FORTH FETCH
//##########################################################################    tiffin count ####################

fetch(TIFINLUNCHCOUNT,{
                headers:{'Content-Type': 'application/json','Accept': 'application/json'},
                method:'POST',
                body:JSON.stringify({
                  // _id:this.props.match.params.id,
                  userid: sessionStorage.getItem('userid'),
                }),
               
              })
           
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
            this.state.tifinlunchcount=json.length;
            this.state.tifinlunchroticount=(this.state.tifinlunchcount*3);
            this.setState({
              tifincount :json
             });
 
   });//CLOSING OF 5 TH FETCH
   fetch(TIFFINDINNERCOUNT,{
    headers:{'Content-Type': 'application/json','Accept': 'application/json'},
    method:'POST',
    body:JSON.stringify({
      // _id:this.props.match.params.id,
      userid: sessionStorage.getItem('userid'),
    }),
   
  
  })
  .then((res) => res.json())
  .then((json) => {
  console.log(json);
  this.state.tifindinnercount=json.length;
  this.state.tifindinnerroticount=(this.state.tifindinnercount*3)
  this.setState({
    tifinroticount :json
   });

   
     });//CLOSING OF 6TH FETCH



///@@@@@@@@@@@@@@@@@@@@@@@@@@@@ vegitable count @@@@@@@@@@@@@@@@@@@@@@@@@@@@22

fetch(ECOVEG,{
  headers:{'Content-Type': 'application/json','Accept': 'application/json'},
  method:'POST',
  body:JSON.stringify({
    // _id:this.props.match.params.id,
    userid: sessionStorage.getItem('userid'),
  }),
 

})
.then((res) => res.json())
.then((json) => {
console.log(json);
this.state.count =json.length;
// alert(this.state.count);
     this.state.ecovegsabji=(this.state.count*1)
    //  alert(a);
this.setState({
  Ecoveg :json
  
 });


//  const {perPage} = this.state;
  //   const menus = res.data;
  //   console.log(res.data)
  //   // alert(menus)
  // //  this.state.count =menus.length;
  //   this.setState({
  //     menus,
  //     pages: Math.floor(menus.length / perPage)
  //   });
 

 
   });//CLOSING OF 7TH FETCH


   fetch(ECONONVEG,{
    headers:{'Content-Type': 'application/json','Accept': 'application/json'},
    method:'POST',
    body:JSON.stringify({
      // _id:this.props.match.params.id,
      userid: sessionStorage.getItem('userid'),
    }),
   
  
  })
  .then((res) => res.json())
  .then((json) => {
  console.log(json);
  this.state.count1 =json.length;
  this.state.econonvegsabji=(this.state.count1*1)
  this.setState({
    Econonveg :json
   });

  
   
     });//CLOSING OF 8TH FETCH


   fetch(PREMINUMVEG,{
    headers:{'Content-Type': 'application/json','Accept': 'application/json'},
    method:'POST',
    body:JSON.stringify({
      // _id:this.props.match.params.id,
      userid: sessionStorage.getItem('userid'),
    }),
   
  
  })
  .then((res) => res.json())
  .then((json) => {
  console.log(json);
  this.state.prevagcount =json.length;
  this.state.prevagcountsabji=(this.state.prevagcount*2)
  this.setState({
    preveg :json
   });
  
   
     });//CLOSING OF 9TH FETCH

     fetch(PREMINUMNONVEG,{
      headers:{'Content-Type': 'application/json','Accept': 'application/json'},
      method:'POST',
      body:JSON.stringify({
        // _id:this.props.match.params.id,
        userid: sessionStorage.getItem('userid'),
      }),
     
    
    })
    .then((res) => res.json())
    .then((json) => {
    console.log(json);
    this.state.prenonvagcount =json.length;
    this.state.prenonvagcountsabji=(this.state.prenonvagcount*2)
    this.setState({
      prenonveg :json
     });
    
     
       });//CLOSING OF 10TH FETCH

       fetch(EXCUTIVEVEG,{
        headers:{'Content-Type': 'application/json','Accept': 'application/json'},
        method:'POST',
        body:JSON.stringify({
          // _id:this.props.match.params.id,
          userid: sessionStorage.getItem('userid'),
        }),
       
      
      })
      .then((res) => res.json())
      .then((json) => {
      console.log(json);
      this.state.Exevegcount =json.length;
      this.state.Exevegcountcountsabji=(this.state.Exevegcount*2)
      this.setState({
        Excutiveveg :json
       });
      
       
         });//CLOSING OF 10TH FETCH

         fetch(EXCUTIVENONVEG,{
          headers:{'Content-Type': 'application/json','Accept': 'application/json'},
          method:'POST',
          body:JSON.stringify({
            // _id:this.props.match.params.id,
            userid: sessionStorage.getItem('userid'),
          }),
         
        
        })
        .then((res) => res.json())
        .then((json) => {
        console.log(json);
        this.state.Exenonvegcount =json.length;
        this.state.Exenonvegcountsabji=(this.state.Exenonvegcount*2)
        this.setState({
          Excutivenonveg :json
         });
        
         
           });//CLOSING OF 10TH FETCH
    



          
       //   




          this.state.total=(this.state.count+this.state.count1+this.state.prevagcount+this.state.prenonvagcount+this.state.Exevegcount+this.state.Exenonvegcount)

}
// ------------------------------------------------------TODAY DINNER REF-----------------------------------------------------------------

generatenewTodaylunch=()=>{
    this.setState({ show: true })
    // console.log("jhff")
    // alert("hii")
    var sendid ={
      _id:this.state._id
    }
    axios.post(TODAYLUNCHREF,sendid,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
    .then(res => {
      const preCat1 = res.data;
      console.log(preCat1)
      // this.setState({preCat1:preCat1})


      

      swal({
        title: "Are You Sure Change Raw Material",
        text: " successfully Updated !",
        icon: "success",
        buttons: [
          'NO',
          'YES'
        ],
      }).then(function(isConfirm) {
        if (isConfirm) {
       window.location.reload();
        } else {
        
        }
      });
 

                  
    })
}
// ------------------------------------------------------TODAY DINNER REF-----------------------------------------------------------------


generatenewTodaydinner=()=>{
  this.setState({ show: true })
  // console.log("jhff")
  // alert("hii")
  var sendid ={
    todaydinner_id:this.state.todaydinner_id
  }
  axios.post(TODAYDINNERREF,sendid,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
  .then(res => {
    const preCat1 = res.data;
    console.log(preCat1)
  


    

    swal({
      title: "Are You Sure Change Raw Material",
      text: " successfully Updated !",
      icon: "success",
      buttons: [
        'NO',
        'YES'
      ],
    }).then(function(isConfirm) {
      if (isConfirm) {
     window.location.reload();
      } else {
        //if no clicked => do something else
      }
    });
  

                
  })
}
// ------------------------------------------------------TOMORROW LUNCH REF-----------------------------------------------------------------



generatenewtomorrowlunch=()=>{
  this.setState({ show: true })
  // console.log("jhff")
  // alert("hii")
  var sendid ={
    tomorrowlunch_id:this.state.tomorrowlunch_id
  }
  axios.post(TOMORROWLUNCHREF,sendid,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
  .then(res => {
    const preCat1 = res.data;
    console.log(preCat1)
  


    

    swal({
      title: "Are You Sure Change Raw Material",
      text: " successfully Updated !",
      icon: "success",
      buttons: [
        'NO',
        'YES'
      ],
    }).then(function(isConfirm) {
      if (isConfirm) {
     window.location.reload();
      } else {
        //if no clicked => do something else
      }
    });
  

                
  })
}
// ------------------------------------------------------TOMORROW DINNER REF-----------------------------------------------------------------



generatenewtomorrowdinner=()=>{
  this.setState({ show: true })
  // console.log("jhff")
  // alert("hii")
  var sendid ={
    tomorrowdinner_id :this.state.tomorrowdinner_id 
  }
  axios.post(TOMORROWDINNERREF,sendid,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
  .then(res => {
    const preCat1 = res.data;
    console.log(preCat1)
  


    

    swal({
      title: "Are You Sure Change Raw Material",
      text: " successfully Updated !",
      icon: "success",
      buttons: [
        'NO',
        'YES'
      ],
    }).then(function(isConfirm) {
      if (isConfirm) {
    //  window.location.reload();
      } else {
        //if no clicked => do something else
      }
    });
  

                
  })
}




    render(props){
let date = new Date();  


var crrtime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(); 
 
let options1 = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
};  

var crrdate = date.toLocaleTimeString("en-us", options1); 

// console.log(crrtime.split(' ')[0] <"3:00");
// // console.log(crrtime > "8:00:00")

// // var time = crrtime.split(' ')[0];



      const setBgColour="#fafafa";
        return (
            <div>
            <K_Header/>
            <div className="main px-lg-5 px-md-2">
            <div className="bg-animation">
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="moving-waves">
        <use style={{fill: 'var(--primary-color)', opacity: '.1'}} xlinkHref="#gentle-wave" x={48} y={-1} />
        <use style={{fill: 'var(--primary-color)', opacity: '.2'}} xlinkHref="#gentle-wave" x={48} y={3} />
        <use style={{fill: 'var(--primary-color)', opacity: '.6'}} xlinkHref="#gentle-wave" x={48} y={5} />
        <use style={{fill: 'var(--primary-color)', opacity: '.8'}} xlinkHref="#gentle-wave" x={48} y={8} />
        <use style={{fill: 'var(--primary-color)'}} xlinkHref="#gentle-wave" x={48} y={13} />
        <use style={{fill: 'var(--body-color)'}} xlinkHref="#gentle-wave" x={48} y={16} />
      </g>
    </svg>
  </div>
  <div className="body-header d-flex text-light border-top py-3">
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a className="breadcrumb-item active" href="/DeliveryHomePage">Dashboard</a></li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
            <div className="progress" style={{height: 3, width: 170}}>
              <div className="progress-bar bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <label className="text-left text-muted ms-3">Project Status</label>
            
          </div>
        </div>
         <div className="row align-items-center">
  <div className="col-auto">
    <h1 className="fs-4 mt-1 mb-0">{crrdate}</h1>
  
  </div>
  <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
  
   
  
  </div>
</div>

      </div>
     
    </div>
  </div>
  <br></br>
  <br></br>
    <div className="body d-flex py-lg-4 py-3">
        
  
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
    <div className='card-header bg-image hover-overlay'style={{
         background: "#323a45",
     
         color:"white",
        
         
        }}  

// ----------------------------------------------TODAY MENU----------------------------------------------------------------------------------------

><h5 align="center" >Today Menu </h5></div>

{crrtime.split(' ')[0] < "3:00" ?<div className="card-body"> 
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs tab-body-header rounded d-inline-flex">
                    <li className="active"><a className="nav-link active" data-target="#todaylunch" data-bs-toggle="tab" href="#todaylunch" onClick={this.handleClick}>Lunch Time</a></li>
                    <li className="nav-item"><a className="nav-link " data-target="#todaydinner" data-bs-toggle="tab" href="#todaydinner">Dinner Time</a></li>               
                  </ul>                        
                  {/* Tab panes */}


                  <div className="tab-content mt-3">
 {/* --------------------------------------------------------todaylunch ------------------------------------------------------------------------- */}


                    <div role="tabpanel" href="#tab1" data-toggle="tab" className="tab-pane in active" id="todaylunch">
                     
                          
                  <div className="row g-2 mb-6 row-deck justify-content-center">
                  <div className="col-xl-2 col-lg-2 col-md-2" >
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Tiffin  Count </span></div>
      <div className="card-body">
        {/* <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" /> */}
        <div className="mb-2 text-uppercase"><span className="h5">{ this.state.tifinlunchcount} </span><span className="h5"></span></div>
        {/* <div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div> */}
   
      </div>
    </div>
  </div>
  <div className="col-xl-8 col-lg-8 col-md-8" >
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Vegetables Count </span></div>
      <div className="card-body">
       

                <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead >
                        <tr style={{backgroundColor:"cyan"}}>
                          <th> Eco </th>
                          <th> Eco user list </th>
                          <th> Premium</th>
                          <th>  Premium user list </th>
                          <th> Excutive</th>
                          <th> Excutive user list </th>
                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.count}</span></td>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.prevagcount}</span></td>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.Exevegcount}</span></td>
                        
                        
                        </tr>
                        <tr>
                        <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                          <td><span className="h6">{this.state.ecovegsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{this.state.prevagcountsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{ this.state.Exevegcountsabji}</span></td>
                      
                        </tr>
                        <tr>
                          <td><span >Nonveg  </span></td>
                          <td><span className="h6">{this.state.count1}</span></td>
                          <td><span >Nonveg  </span></td>
                          <td><span className="h6">{this.state.prenonvagcount}</span></td>
                          <td><span >Nonveg : </span></td>
                          <td><span className="h6">{ this.state.Exenonvegcount}</span></td>
                         
                        </tr>
                        <tr>
                        <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                          <td><span className="h6">{this.state.econonvegsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{this.state.prenonvagcountsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{ this.state.Exenonvegcountsabji}</span></td>
                 
                        </tr>
                        <tr>
                        <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-success"> {this.state.count+this.state.count1}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-info">{this.state.prevagcount+this.state.prenonvagcount}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-primary">{this.state.Exevegcount+this.state.Exenonvegcount}</span></td>
                 
                        </tr>
                        <tr>
                        <td><span className="h6"  colspan="4" class="btn btn-info"> Total</span></td>
                          
                          <td><span className="h6"  class="btn btn-success">{this.state.count+this.state.count1+this.state.prevagcount+this.state.prenonvagcount+this.state.Exevegcount+this.state.Exenonvegcount}: </span></td>
                        
                 
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
   
      </div>
    </div>
  </div>
              


  <div className="col-xl-2 col-lg-2 col-md-2" >
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header " ><span className="h6 " style={{color:"#053a67"}}> Roti count </span></div>
      <div className="card-body">
  
        <div className="mb-2 text-uppercase"><span className="h5">{ this.state.tifinlunchroticount} </span><span className="h5"></span></div>
      </div>
    </div>
  </div>
  
</div>
<br></br>
<div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
                  <div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">
                
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header"><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>


     
      <div className="card-body">
        <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
     
        <div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.todaylunchRM1}</span></div>
        <div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.todaylunchRM2}</span></div>
        <div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.todaylunchRM3}</span></div>
      
      {crrtime.split(' ')[0] > "3:00"?<center><button className="btn "  type="button"  onClick={this.generatenewTodaylunch}  style={{backgroundColor:"#bdbdbd"}} disabled>Refresh</button></center>

     : <center><button className="btn btn-primary"  type="button"  onClick={this.generatenewTodaylunch} >Refresh</button></center>
}
 
      
      
  

  

      </div>
      {/* <div className="d-grid gap-2 d-md-block"> 
     <center> <Button  className="btn btn-primary"
      variant="none"
     onClick={this.generatenewmenu}
    >
     Refresh
    </Button>
    </center>
    </div>
    <Modal
      show={this.state.show}
      animation={true}
      size="md" className="" shadow-lg border >
           
      <Modal.Header className=" text-white text-center py-1" style={{
         background: "#00bdaa",
     
         color:"white",
        
         
        }}  >
        <Modal.Title className="text-center">
          <h5>Confirmation</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-0 border" >
      <ul>
   kgfjgjt 
    </ul>
   
      </Modal.Body>
<Modal.Footer className="py-1 d-flex justify-content-center">
          <div>
            <Button
              variant="outline-dark" onClick={() => this.setState({ show: false })}>Cancel</Button>
          </div>
          <div>
            <Button variant="outline-danger" className="mx-2 px-3">Save Changes</Button>
          </div>
        </Modal.Footer>
    </Modal> */}

  
    </div>

  </div>

</div>

                   
                    </div>

{/* -----------------------------------------------------------todaydinner--------------------------------------------------------------------------- */}

                    <div role="tabpanel" className="tab-pane " id="todaydinner">
                  
             
                          
                  <div className="row g-2 mb-6 row-deck justify-content-center">
                  <div className="col-xl-2 col-lg-2 col-md-2" >
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Tiffin  Count </span></div>
      <div className="card-body">
        {/* <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" /> */}
        <div className="mb-2 text-uppercase"><span className="h5">{this.state.tifindinnercount} </span><span className="h5"></span></div>
        {/* <div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div> */}
   
      </div>
    </div>
  </div>
  <div className="col-xl-8 col-lg-8 col-md-8" >
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Vegetables Count </span></div>
      <div className="card-body">
      <div class="table-responsive">
                    <table class="table table-bordered">
                    <thead >
                        <tr style={{backgroundColor:"cyan"}}>
                          <th> Eco </th>
                          <th> Eco user list </th>
                          <th> Premium</th>
                          <th>  Premium user list </th>
                          <th> Excutive</th>
                          <th> Excutive user list </th>
                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.count}</span></td>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.prevagcount}</span></td>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.Exevegcount}</span></td>
                        
                        
                        </tr>
                        <tr>
                        <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                          <td><span className="h6">{this.state.ecovegsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{this.state.prevagcountsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{ this.state.Exevegcountsabji}</span></td>
                      
                        </tr>
                        <tr>
                          <td><span >Nonveg  </span></td>
                          <td><span className="h6">{this.state.count1}</span></td>
                          <td><span >Nonveg  </span></td>
                          <td><span className="h6">{this.state.prenonvagcount}</span></td>
                          <td><span >Nonveg : </span></td>
                          <td><span className="h6">{ this.state.Exenonvegcount}</span></td>
                         
                        </tr>
                        <tr>
                        <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                          <td><span className="h6">{this.state.econonvegsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{this.state.prenonvagcountsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{ this.state.Exenonvegcountsabji}</span></td>
                 
                        </tr>
                        <tr>
                        <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-success"> {this.state.count+this.state.count1}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-info">{this.state.prevagcount+this.state.prenonvagcount}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-primary">{this.state.Exevegcount+this.state.Exenonvegcount}</span></td>
                 
                        </tr>
                        <tr>
                        <td><span className="h6"  colspan="4" class="btn btn-info"> Total</span></td>
                          
                          <td><span className="h6"  class="btn btn-success">{this.state.count+this.state.count1+this.state.prevagcount+this.state.prenonvagcount+this.state.Exevegcount+this.state.Exenonvegcount}: </span></td>
                        
                 
                        </tr>
                      
                      </tbody>

                    </table>
                  </div>
   
      </div>
    </div>
  </div>
        
         
  <div className="col-xl-2 col-lg-2 col-md-2" >
            <div className="card overflow-hidden  " >
              <div className="progress" style={{height: 1}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="card-header " style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>ROTI COUNT</span></div>
              <div className="card-body">
              <div className="mb-2 text-uppercase"><span className="h5">{  this.state.tifindinnerroticount} </span><span className="h5"></span></div>
              </div>
            </div>
          </div>
          
        </div>
        <br></br>
        <div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
                          <div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">
                        
            <div className="card overflow-hidden  " >
              <div className="progress" style={{height: 1}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="card-header" style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>
        
        
             
              <div className="card-body">
                <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
             
                <div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.todaydinnerRM1}</span></div>
                <div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.todaydinnerRM2}</span></div>
                <div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.todaydinnerRM3}</span></div>
              
                
                {crrtime.split(' ')[0] <"3:00"? <center><button className="btn btn-primary" type="button" style={{backgroundColor:"#bdbdbd"}} onClick={this.generatenewTodaydinner}>Refresh</button></center>
        
        :<center><button className="btn btn-primary" type="button"  onClick={this.generatenewTodaydinner} >Refresh</button></center>

  }
              </div>
        
          
            </div>
        
          </div>
        
        </div>
        
                              
                    </div>
                  </div>
                </div>



:




<div className="card-body"> 
{/* Nav tabs */}
<ul className="nav nav-tabs tab-body-header rounded d-inline-flex">
  <li className="active"><a className="nav-link " data-target="#todaylunch" data-bs-toggle="tab" href="#todaylunch" onClick={this.handleClick}>Lunch Time</a></li>
  <li className="nav-item"><a className="nav-link active" data-target="#todaydinner" data-bs-toggle="tab" href="#todaydinner">Dinner Time</a></li>               
</ul>                        
{/* Tab panes */}


<div className="tab-content mt-3">
{/* --------------------------------------------------------todaylunch ------------------------------------------------------------------------- */}


  <div role="tabpanel" href="#tab1" data-toggle="tab" className="tab-pane in " id="todaylunch">
  
        
<div className="row g-2 mb-6 row-deck justify-content-center">
<div className="col-xl-6 col-lg-4 col-md-6" >
<div className="card overflow-hidden  " >
<div className="progress" style={{height: 1}}>
<div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
</div>
<div className="card-header "><span className="h6 " style={{color:"#053a67"}}>Customer Count</span></div>
<div className="card-body">
<i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
<div className="mb-2 text-uppercase"><span className="h5">Veg  : </span><span className="h5">5</span></div>
<div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div>

</div>
</div>
</div>

<div className="col-xl-6 col-lg-4 col-md-6" >
<div className="card overflow-hidden  " >
<div className="progress" style={{height: 1}}>
<div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
</div>
<div className="card-header " ><span className="h6 " style={{color:"#053a67"}}>Order</span></div>
<div className="card-body">
<i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
<div className="mb-2 text-uppercase">Expense</div>
<div><span className="h4">$3,251</span> <span className="small text-muted"><i className="fa fa-level-up" /> 13%</span></div>
<small className="text-muted">Analytics for last week</small>
</div>
</div>
</div>

</div>
<br></br>
<div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
<div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">

<div className="card overflow-hidden  " >
<div className="progress" style={{height: 1}}>
<div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
</div>
<div className="card-header"><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>



<div className="card-body">
<i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />

<div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.todaylunchRM1}</span></div>
<div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.todaylunchRM2}</span></div>
<div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.todaylunchRM3}</span></div>

{crrtime.split(' ')[0] >"3:00"?<center><button className="btn "  type="button"  onClick={this.generatenewTodaylunch}  style={{backgroundColor:"#bdbdbd"}} disabled>Refresh</button></center>

:<center><button className="btn btn-primary"  type="button"  onClick={this.generatenewTodaylunch}>Refresh</button></center>

    }






</div>


</div>

</div>

</div>

   
  </div>

{/* -----------------------------------------------------------todaydinner--------------------------------------------------------------------------- */}

  <div role="tabpanel" className="tab-pane in active " id="todaydinner">

        
        <div className="row g-2 mb-6 row-deck justify-content-center">
        <div className="col-xl-6 col-lg-4 col-md-6" >
<div className="card overflow-hidden  " >
<div className="progress" style={{height: 1}}>
<div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
</div>
<div className="card-header " style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67",}}>Customer Count</span></div>
<div className="card-body">
<i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
<div className="mb-2 text-uppercase"><span className="h5">Veg  : </span><span className="h5">5</span></div>
<div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div>

</div>
</div>
</div>

<div className="col-xl-6 col-lg-4 col-md-6" >
<div className="card overflow-hidden  " >
<div className="progress" style={{height: 1}}>
<div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
</div>
<div className="card-header " style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>Order</span></div>
<div className="card-body">
<i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
<div className="mb-2 text-uppercase">Expense</div>
<div><span className="h4">$3,251</span> <span className="small text-muted"><i className="fa fa-level-up" /> 13%</span></div>
<small className="text-muted">Analytics for last week</small>
</div>
</div>
</div>

</div>
<br></br>
<div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
        <div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">
      
<div className="card overflow-hidden  " >
<div className="progress" style={{height: 1}}>
<div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
</div>
<div className="card-header" style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>



<div className="card-body">
<i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />

<div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.todaydinnerRM1}</span></div>
<div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.todaydinnerRM2}</span></div>
<div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.todaydinnerRM3}</span></div>


{crrtime.split(' ')[0] <"3:00"?<center><button className="btn btn-primary" type="button" style={{backgroundColor:"#bdbdbd"}} onClick={this.generatenewTodaydinner}>Refresh</button></center>

:<center><button className="btn btn-primary" type="button"  onClick={this.generatenewTodaydinner} >Refresh</button></center>
  }


</div>


</div>

</div>

</div>

  </div>
</div>
</div>}
                {/* ------------ */}
    </div>
  </div>
{/* --------------------------------------------------------TOMORROW MENU--------------------------------------------------------------------------- */}

  <div class="col-sm-6">
    <div class="card">
    <div className='card-header 'style={{
         background: "#323a45",
     
         color:"white",
        
         
        }}  


><h5 align="center">Tomorrow Menu</h5></div>
   {crrtime.split(' ')[0] < "3:00"?<div className="card-body"> 
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs tab-body-header rounded d-inline-flex">
                    <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tomarrowlunch">Lunch Time</a></li>
                    <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tomarrowdinner">Dinner Time</a></li>               
                  </ul>                        
                  {/* Tab panes */}
                  <div className="tab-content mt-3">

{/* -------------------------------------------tomarrowlunch--------------------------------------------------------------------------------------- */}


       
<div role="tabpanel" href="#tab1" data-toggle="tab" className="tab-pane in active" id="tomarrowlunch">
                     
                          
                     <div className="row g-2 mb-6 row-deck justify-content-center">
                     <div className="col-xl-2 col-lg-2 col-md-2" >
       <div className="card overflow-hidden  " >
         <div className="progress" style={{height: 1}}>
           <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
         </div>
         <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Tiffin  Count </span></div>
         <div className="card-body">
           {/* <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" /> */}
           <div className="mb-2 text-uppercase"><span className="h5">{ this.state.tifinlunchcount} </span><span className="h5"></span></div>
           {/* <div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div> */}
      
         </div>
       </div>
     </div>
     <div className="col-xl-8 col-lg-8 col-md-8" >
       <div className="card overflow-hidden  " >
         <div className="progress" style={{height: 1}}>
           <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
         </div>
         <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Vegetables Count </span></div>
         <div className="card-body">
          
   
                   <div class="table-responsive">
                       <table class="table table-bordered">
                         <thead >
                           <tr style={{backgroundColor:"cyan"}}>
                             <th> Eco </th>
                             <th> Eco user list </th>
                             <th> Premium</th>
                             <th>  Premium user list </th>
                             <th> Excutive</th>
                             <th> Excutive user list </th>
                       
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td><span >Veg  : </span></td>
                             <td><span className="h6">{this.state.count}</span></td>
                             <td><span >Veg  : </span></td>
                             <td><span className="h6">{this.state.prevagcount}</span></td>
                             <td><span >Veg  : </span></td>
                             <td><span className="h6">{this.state.Exevegcount}</span></td>
                           
                           
                           </tr>
                           <tr>
                           <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                             <td><span className="h6">{this.state.ecovegsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{this.state.prevagcountsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{ this.state.Exevegcountsabji}</span></td>
                         
                           </tr>
                           <tr>
                             <td><span >Nonveg  </span></td>
                             <td><span className="h6">{this.state.count1}</span></td>
                             <td><span >Nonveg  </span></td>
                             <td><span className="h6">{this.state.prenonvagcount}</span></td>
                             <td><span >Nonveg : </span></td>
                             <td><span className="h6">{ this.state.Exenonvegcount}</span></td>
                            
                           </tr>
                           <tr>
                           <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                             <td><span className="h6">{this.state.econonvegsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{this.state.prenonvagcountsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{ this.state.Exenonvegcountsabji}</span></td>
                    
                           </tr>
                           <tr>
                           <td><span className="h6"></span></td>
                             <td><span className="h6" class="btn btn-outline-success"> {this.state.count+this.state.count1}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6" class="btn btn-outline-info">{this.state.prevagcount+this.state.prenonvagcount}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6" class="btn btn-outline-primary">{this.state.Exevegcount+this.state.Exenonvegcount}</span></td>
                    
                           </tr>
                           <tr>
                           <td><span className="h6"  colspan="4" class="btn btn-info"> Total</span></td>
                             
                             <td><span className="h6"  class="btn btn-success">{this.state.count+this.state.count1+this.state.prevagcount+this.state.prenonvagcount+this.state.Exevegcount+this.state.Exenonvegcount}: </span></td>
                           
                    
                           </tr>
                         
                         </tbody>
                       </table>
                     </div>
      
         </div>
       </div>
     </div>
                 
   
   
     <div className="col-xl-2 col-lg-2 col-md-2" >
       <div className="card overflow-hidden  " >
         <div className="progress" style={{height: 1}}>
           <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
         </div>
         <div className="card-header " ><span className="h6 " style={{color:"#053a67"}}> Roti count </span></div>
         <div className="card-body">
     
           <div className="mb-2 text-uppercase"><span className="h5">{ this.state.tifinlunchroticount} </span><span className="h5"></span></div>
         </div>
       </div>
     </div>
     
   </div>
   <br></br>
        <div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
                          <div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">
                        
            <div className="card overflow-hidden  " >
              <div className="progress" style={{height: 1}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="card-header"><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>
        
        
             
              <div className="card-body">
                <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
             
                <div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.tomorrowlunchRM1}</span></div>
                <div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.tomorrowlunchRM2}</span></div>
                <div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.tomorrowlunchRM3}</span></div>
              
                
          <center><button className="btn btn-primary" type="button"  onClick={this.generatenewtomorrowlunch}>Refresh</button></center>
        
          
        
          
        
              </div>
         
          
            </div>
        
          </div>
        
        </div>
        
                             
                    </div>

{/* ------------------------------------------------------------tomarrowdinner--------------------------------------------------------------------- */}


                    <div role="tabpanel" className="tab-pane" id="tomarrowdinner" >
            
                          
                    <div className="row g-2 mb-6 row-deck justify-content-left">
                    <div className="col-xl-2 col-lg-2 col-md-2" >
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Tiffin  Count </span></div>
      <div className="card-body">
        {/* <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" /> */}
        <div className="mb-2 text-uppercase"><span className="h5">{this.state.tifindinnercount} </span><span className="h5"></span></div>
        {/* <div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div> */}
   
      </div>
    </div>
  </div>
  <div className="col-xl-8 col-lg-8 col-md-8" >
    <div className="card overflow-hidden  " >
      <div className="progress" style={{height: 1}}>
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
      </div>
      <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Vegetables Count </span></div>
      <div className="card-body">
      <div class="table-responsive">
                    <table class="table table-bordered">
                    <thead >
                        <tr style={{backgroundColor:"cyan"}}>
                          <th> Eco </th>
                          <th> Eco user list </th>
                          <th> Premium</th>
                          <th>  Premium user list </th>
                          <th> Excutive</th>
                          <th> Excutive user list </th>
                    
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.count}</span></td>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.prevagcount}</span></td>
                          <td><span >Veg  : </span></td>
                          <td><span className="h6">{this.state.Exevegcount}</span></td>
                        
                        
                        </tr>
                        <tr>
                        <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                          <td><span className="h6">{this.state.ecovegsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{this.state.prevagcountsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{ this.state.Exevegcountsabji}</span></td>
                      
                        </tr>
                        <tr>
                          <td><span >Nonveg  </span></td>
                          <td><span className="h6">{this.state.count1}</span></td>
                          <td><span >Nonveg  </span></td>
                          <td><span className="h6">{this.state.prenonvagcount}</span></td>
                          <td><span >Nonveg : </span></td>
                          <td><span className="h6">{ this.state.Exenonvegcount}</span></td>
                         
                        </tr>
                        <tr>
                        <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                          <td><span className="h6">{this.state.econonvegsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{this.state.prenonvagcountsabji}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6">{ this.state.Exenonvegcountsabji}</span></td>
                 
                        </tr>
                        <tr>
                        <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-success"> {this.state.count+this.state.count1}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-info">{this.state.prevagcount+this.state.prenonvagcount}</span></td>
                          <td><span className="h6"></span></td>
                          <td><span className="h6" class="btn btn-outline-primary">{this.state.Exevegcount+this.state.Exenonvegcount}</span></td>
                 
                        </tr>
                        <tr>
                        <td><span className="h6"  colspan="4" class="btn btn-info"> Total</span></td>
                          
                          <td><span className="h6"  class="btn btn-success">{this.state.count+this.state.count1+this.state.prevagcount+this.state.prenonvagcount+this.state.Exevegcount+this.state.Exenonvegcount}: </span></td>
                        
                 
                        </tr>
                      
                      </tbody>

                    </table>
                  </div>
   
      </div>
    </div>
  
        
         
    <div className="col-xl-2 col-lg-2 col-md-2 justify-content-right" >
            <div className="card overflow-hidden  " >
              <div className="progress" style={{height: 1}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="card-header " style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>ROTI COUNT</span></div>
              <div className="card-body">
              <div className="mb-2 text-uppercase"><span className="h5">{  this.state.tifindinnerroticount} </span><span className="h5"></span></div>
              </div>
            </div>
          </div>
          
        </div>
          
        </div>
        <br></br>
        <div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
                          <div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">
                        
            <div className="card overflow-hidden  " >
              <div className="progress" style={{height: 1}}>
                <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
              </div>
              <div className="card-header" style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>
        
        
             
              <div className="card-body">
                <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
             
                <div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.tomorrowdinnerRM1}</span></div>
                <div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.tomorrowdinnerRM2}</span></div>
                <div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.tomorrowdinnerRM3}</span></div>
              
                
          <center><button className="btn btn-primary" type="button"  onClick={this.generatenewtomorrowdinner}>Refresh</button></center>
        
          
        
          
        
              </div>
          
          
            </div>
        
          </div>
        
        </div>
        
                              
                    </div>
                  </div>
                </div>

                :



                <div className="card-body"> 
                {/* Nav tabs */}
                <ul className="nav nav-tabs tab-body-header rounded d-inline-flex">
                  <li className="nav-item"><a className="nav-link " data-bs-toggle="tab" href="#tomarrowlunch">Lunch Time</a></li>
                  <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tomarrowdinner">Dinner Time</a></li>               
                </ul>                        
                {/* Tab panes */}
                <div className="tab-content mt-8">

{/* -------------------------------------------tomarrowlunch--------------------------------------------------------------------------------------- */}

<div role="tabpanel" href="#tab1" data-toggle="tab" className="tab-pane in active" id="tomarrowlunch">
                     
                          
                     <div className="row g-2 mb-6 row-deck justify-content-center">
                     <div className="col-xl-2 col-lg-2 col-md-2" >
       <div className="card overflow-hidden  " >
         <div className="progress" style={{height: 1}}>
           <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
         </div>
         <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Tiffin  Count </span></div>
         <div className="card-body">
           {/* <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" /> */}
           <div className="mb-2 text-uppercase"><span className="h5">{ this.state.tifinlunchcount} </span><span className="h5"></span></div>
           {/* <div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div> */}
      
         </div>
       </div>
     </div>
     <div className="col-xl-8 col-lg-8 col-md-8" >
       <div className="card overflow-hidden  " >
         <div className="progress" style={{height: 1}}>
           <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
         </div>
         <div className="card-header "><span className="h6 " style={{color:"#053a67"}}> Vegetables Count </span></div>
         <div className="card-body">
          
   
                   <div class="table-responsive">
                       <table class="table table-bordered">
                         <thead >
                           <tr style={{backgroundColor:"cyan"}}>
                             <th> Eco </th>
                             <th> Eco user list </th>
                             <th> Premium</th>
                             <th>  Premium user list </th>
                             <th> Excutive</th>
                             <th> Excutive user list </th>
                       
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td><span >Veg  : </span></td>
                             <td><span className="h6">{this.state.count}</span></td>
                             <td><span >Veg  : </span></td>
                             <td><span className="h6">{this.state.prevagcount}</span></td>
                             <td><span >Veg  : </span></td>
                             <td><span className="h6">{this.state.Exevegcount}</span></td>
                           
                           
                           </tr>
                           <tr>
                           <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                             <td><span className="h6">{this.state.ecovegsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{this.state.prevagcountsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{ this.state.Exevegcountsabji}</span></td>
                         
                           </tr>
                           <tr>
                             <td><span >Nonveg  </span></td>
                             <td><span className="h6">{this.state.count1}</span></td>
                             <td><span >Nonveg  </span></td>
                             <td><span className="h6">{this.state.prenonvagcount}</span></td>
                             <td><span >Nonveg : </span></td>
                             <td><span className="h6">{ this.state.Exenonvegcount}</span></td>
                            
                           </tr>
                           <tr>
                           <td><span className="h6"  class="btn btn-primary"> Sabji</span></td>
                             <td><span className="h6">{this.state.econonvegsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{this.state.prenonvagcountsabji}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6">{ this.state.Exenonvegcountsabji}</span></td>
                    
                           </tr>
                           <tr>
                           <td><span className="h6"></span></td>
                             <td><span className="h6" class="btn btn-outline-success"> {this.state.count+this.state.count1}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6" class="btn btn-outline-info">{this.state.prevagcount+this.state.prenonvagcount}</span></td>
                             <td><span className="h6"></span></td>
                             <td><span className="h6" class="btn btn-outline-primary">{this.state.Exevegcount+this.state.Exenonvegcount}</span></td>
                    
                           </tr>
                           <tr>
                           <td><span className="h6"  colspan="4" class="btn btn-info"> Total</span></td>
                             
                             <td><span className="h6"  class="btn btn-success">{this.state.count+this.state.count1+this.state.prevagcount+this.state.prenonvagcount+this.state.Exevegcount+this.state.Exenonvegcount}: </span></td>
                           
                    
                           </tr>
                         
                         </tbody>
                       </table>
                     </div>
      
         </div>
       </div>
     </div>
                 
   
   
     <div className="col-xl-2 col-lg-2 col-md-2" >
       <div className="card overflow-hidden  " >
         <div className="progress" style={{height: 1}}>
           <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
         </div>
         <div className="card-header " ><span className="h6 " style={{color:"#053a67"}}> Roti count </span></div>
         <div className="card-body">
     
           <div className="mb-2 text-uppercase"><span className="h5">{ this.state.tifinlunchroticount} </span><span className="h5"></span></div>
         </div>
       </div>
     </div>
     
   </div>

      <br></br>
      <div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
                        <div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">
                      
          <div className="card overflow-hidden  " >
            <div className="progress" style={{height: 1}}>
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="card-header"><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>
      
      
           
            <div className="card-body">
              <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
           
              <div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.tomorrowlunchRM1}</span></div>
              <div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.tomorrowlunchRM2}</span></div>
              <div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.tomorrowlunchRM3}</span></div>
            
              
        <center><button className="btn btn-primary" type="button"  onClick={this.generatenewtomorrowlunch}>Refresh</button></center>
      
        
      
        
      
            </div>
       
        
          </div>
      
        </div>
      
      </div>
      
                        
                  </div>

{/* ------------------------------------------------------------tomarrowdinner--------------------------------------------------------------------- */}


                  <div role="tabpanel" className="tab-pane in active" id="tomarrowdinner">
              
                        
                        <div className="row g-2 mb-6 row-deck justify-content-center">
                        <div className="col-xl-2 col-lg-2 col-md-2" >
          <div className="card overflow-hidden  " >
            <div className="progress" style={{height: 1}}>
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="card-header " style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>Customer Count</span></div>
            <div className="card-body">
              <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
              <div className="mb-2 text-uppercase"><span className="h5">Veg  : </span><span className="h5">5</span></div>
              <div className="mb-2 text-uppercase"><span className="h5">Nonveg : </span><span className="h5">5</span></div>
         
            </div>
          </div>
        </div>
      
        <div className="col-xl-8 col-lg-8 col-md-8" >
          <div className="card overflow-hidden  " >
            <div className="progress" style={{height: 1}}>
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="card-header "style={{backgroundColor:"#eceff1"}} ><span className="h6 " style={{color:"#053a67"}}>Order</span></div>
            <div className="card-body">
              <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
              <div className="mb-2 text-uppercase">Expense</div>
              <div><span className="h4">$3,251</span> <span className="small text-muted"><i className="fa fa-level-up" /> 13%</span></div>
              <small className="text-muted">Analytics for last week</small>
            </div>
          </div>
        </div>
        
      </div>
      <br></br>
      <div className="row g-2 mb-6 row-deck justify-content-center"class="bg-image hover-zoom">
                        <div className="col-xl-12 col-lg-4 col-md-6" class="shadow p-3 mb-5 bg-white rounded">
                      
          <div className="card overflow-hidden  " >
            <div className="progress" style={{height: 1}}>
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <div className="card-header" style={{backgroundColor:"#eceff1"}}><span className="h6 " style={{color:"#053a67"}}>Raw Material List</span></div>
      
      
           
            <div className="card-body">
              <i className="fa fa-credit-card fa-lg position-absolute top-0 end-0 p-3" />
           
              <div className="mb-2 text-uppercase"><span className="h5">RM 1  : </span><span className="h5">{this.state.tomorrowdinnerRM1}</span></div>
              <div className="mb-2 text-uppercase"><span className="h5">RM 2 : </span><span className="h5">{this.state.tomorrowdinnerRM2}</span></div>
              <div className="mb-2 text-uppercase"><span className="h5">RM 3 : </span><span className="h5">{this.state.tomorrowdinnerRM3}</span></div>
            
              
        <center><button className="btn btn-primary" type="button"  onClick={this.generatenewtomorrowdinner}>Refresh</button></center>
      
        
      
        
      
            </div>
        
        
          </div>
      
        </div>
      
      </div>
      
                         
                  </div>
                </div>
              </div>}
    </div>
  </div>
</div>
</div>
</div>


<K_Footer/> 
  
  
  </div>
 
)
}
}
