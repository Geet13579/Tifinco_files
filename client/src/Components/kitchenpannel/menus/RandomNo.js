import React, { Component } from 'react'

import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import { INSERTRANDOM,RANDOMFOOD1} from '../../../Components/admincomponent/links/Kitchenlinks';
import K_Footer from '../K_Footer';
import K_Header from '../K_Header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

export default class RandomNo extends Component {
    

    state = {
     
    
      preCat:[],
      preCat1:'',
      preCat2:'',
      preCat3:'',

     
      values: [],
    
      prevProduct:[],
      Load:false,
      progress:'',
      invalidImage:'',
      i:0,
      counter:0

    }

  
  





  


Randomfoodinput1 = event =>{

  var preCat1=(this.state.preCat[0]);
  this.setState({preCat1:event.target.value});
// alert(preCat1)


  
    }

    Randomfoodinput2 = event =>{

     var preCat2=(this.state.preCat[1]);
      this.setState({preCat2:event.target.value});
      // console.log(this.state.preCat2);
      // alert(preCat2)
      
        }


        Randomfoodinput3 = event =>{

         var preCat3=(this.state.preCat[2]);
          this.setState({preCat3:event.target.value});
          // console.log(this.state.preCat3);
          // alert(preCat3)
          
            }
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    handleSubmit = event =>  {
      event.preventDefault();
var sum="";

this.state.sum = this.state.preCat[0]+"@"+this.state.preCat[1]+"@"+this.state.preCat[2];

// alert(this.state.sum);
     
      this.setState({
          Load :true,
         
          });
          const formData = {

            Randomfood:this.state.sum

          };
    //  alert(formData)
       
      
        
   try{
    

      axios.post(INSERTRANDOM, formData , {
        headers:{'content-Type': 'application/json'},
        onUploadProgress: data => {
          //Set the progress value to show the progress bar
       //  setProgress(Math.round((100 * data.loaded) / data.total))
         this.setState({
          progress: Math.round((100 * data.loaded) / data.total)

         });
        },
      })
        .then(res => {
            //alert(res.data);
            console.log(res.status);
            console.log(res.data);
         
            if(res.data.msg=='success'){
           

          
              console.log("success");
            
              swal({
                title: "Good job",
                text: " successfully inserted !",
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
             
         
    
  
            }else if(res.data.msg=='exist'){
              this.setState({ invalidImage: '' });
             alert("Food Exists");
             window.location.reload();
            }

            this.setState({
              Load :false,
          
              });
          
          // console.log(res);
          // console.log(res.data);
        })
      }  catch(error) {
       
              console.log(error)
              this.setState({
                  Load :false,
                  });
              console.log("internal server error");
            }

    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////
     refreshPage(){
     
  }
  onclickrandominput = event =>{
    // window.location.reload();
    // alert("hii")
    axios.post(RANDOMFOOD1,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
    .then(res => {
      const preCat = res.data;
     console.log(res.data)
      this.setState({ preCat :preCat});
  console.log(this.state.preCat);
    })

  }
 
   
  render() {

    return (
      <>
<K_Header/>
    {/* main body area */}
    <div className="main px-lg-5 px-md-2">

{/* Body: Header */}
<div className="body-header d-flex text-light border-top py-3">
  {console.log(this.state.percentage)}
  <div className="container">
    <div className="row mb-3">
      <div className="col">
        <ol className="breadcrumb bg-transparent mb-0">
          <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Random Menu Genrator</li>
        </ol>
      </div>
      <div className="col-auto">
        <div className="d-md-flex d-none justify-content-lg-end align-items-center">
         
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-auto">
        <h1 className="fs-4 mt-1 mb-0">Random Menu Genrator</h1>
        <small className="text-muted"></small>
      </div>
      <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
     
      </div>
    </div>
  </div>
</div>
{/* Body: Body */}

<div className="body d-flex py-lg-4 py-3">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="row g-4 px-5">
                
            {/* { !this.state.Load ?(""
               ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
               height={100} width={50} /></div>)}
          */}
            {
            this.state.progress && <h5> {
              this.state.progress<100?
              `${this.state.progress}%` :"Photo Uploaded ,Please Wait Almost Done....!"}
              
               </h5>
           
            }


               {this.state.invalidImage && <h5 style={{ color: "red" }}  className="error"> {this.state.invalidImage}</h5>}
           
                   
                <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >

              



                <button type="button" onClick={this.onclickrandominput}   className="btn btn-success"> Genrate</button>
       
                <div ><br></br></div>
              

            

              <div className="input-group  ">

          
                  <input type="text" className="form-control form-control-lg"  id='food1' value={this.state.preCat[0]} name="preCat[0]" onChange={this.Randomfoodinput1} placeholder=" Random Food Name"  />
                                         

                                
                  <input type="text" className="form-control form-control-lg"   value={this.state.preCat[1]} name="Randomfood" onChange={this.Randomfoodinput2} placeholder=" Random Food Name"  />
                  <input type="text" className="form-control form-control-lg"   value={this.state.preCat[2]} name="Randomfood" onChange={this.Randomfoodinput3} placeholder=" Random Food Name"  />
        

                      

                   </div>
            
           
            
              
                                 
                                  <div ><br></br></div>
                  
              
                 
                 
                <div ><br></br></div>
             
              <div className="col-sm-12">
              {/* <button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Row</button>  <span>&nbsp;&nbsp;</span> */}
                <button type="submit" className="btn btn-primary">Insert</button>
              </div>
              </form>



            
            </div>
          </div>
        </div>
      </div>
   
    </div> {/* .row end */}
  </div>
</div>
{/* Body: Footer */}
<div className="body-footer d-flex">
  <div className="container">
    <div className="col-12">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <p className="font-size-sm mb-0">© Tifinco <span className="d-none d-sm-inline-block"> Prixso Product.</span></p>
            </div>
            <div className="col-auto">
              <ul className="list-inline d-flex justify-content-end mb-0">
                <li className="list-inline-item"><a className="list-separator-link" href="">About</a></li>
                <li className="list-inline-item"><a className="list-separator-link" href="" target="_blank">License</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<K_Footer/>
    
      
      </>
    )
  }
}

