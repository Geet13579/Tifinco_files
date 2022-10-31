import React, { Component } from 'react'
import Header from  '../DeliveryHeader';

import Footer from '../DeliveryFooter'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {MOVE_DISCARD_TIFFIN,GET_ONETIFFIN} from '../../links/DeliveryLinks';
export default class Contactus extends Component {
    

    state = {
        tiffin_no: '',
        tiffins:[],
        tifin_notype:'VH',
        tiffin_cat:'Veg',
        tiffin_type:'Heatable',
        newtiffin_no:'',
       
        Load:false
      }
     

      componentDidMount() {
        console.log("componentgfcvbfgggh")
// console.log(this.props.match.params.id);
  //  alert("hello")
  fetch(GET_ONETIFFIN,{
    headers:{'Content-Type': 'application/json','Accept': 'application/json'},
    method:'POST',
    body:JSON.stringify({
      _id:this.props.match.params.id,
      userid: sessionStorage.getItem('userid'),
    }),
   
  }).then((response)=>response.json()).then((json)=>{ 

    // console.log("response");
    console.log(json);


    json.map(data=>{

      // console.log(data.tiffin_no);

       this.setState({
    tiffin_no:data.tiffin_no,
    tiffin_cat:data.tiffin_cat,
    tiffin_type:data.tiffin_type,                 
    });
    });
    console.log(json);

// alert(this.state.tiffin_no)
          {this.state.tiffin_no.split("-").map(function (value, index, array) {
                                                

            if(value==='VH'){
              document.getElementById("Veg").checked = true;
            
              document.getElementById("Heatable").checked = true;
            

            }
          else if(value==='VN'){
              document.getElementById("Veg").checked = true;
          
            document.getElementById("NonHeatable").checked = true;
          

          }

          else if(value==='NVH'){
            document.getElementById("NonVeg").checked = true;
        
          document.getElementById("Heatable").checked = true;
        

        }
        else if(value==='NVN'){
          document.getElementById("NonVeg").checked = true;
      
        document.getElementById("NonHeatable").checked = true;
      

      }
          
          })}
   

    // alert(this.props.match.params.id);
     this.setState({
    Load:false
  });
   });
    
    
      }

      tiffin_noinput = event => {
         this.setState({ tiffin_no: event.target.value});

        //  alert(this.state.tiffin_no);

       }

       tiffin_notypeinput=event=>{

        this.setState({ tifin_notype: event.target.value});

        // alert(this.state.tifin_notype);
    
       }


       tiffincatinput = event => {
         this.setState({ tiffin_cat: event.target.value});
        
       }

       
       tiffintypeinput = event => {
        this.setState({ tiffin_type: event.target.value});
      }

      tiffin_choice=event=>{

        this.setState({ tifin_notype: event.target.value});

       }
 
    
  handledelete = () => {


    this.setState({
      Load: true,

    });
    var sendId = {
      _id: this.props.match.params.id,
      userid: sessionStorage.getItem('userid'),
    }
    // alert(sendId._id);
    try {
      axios.post(MOVE_DISCARD_TIFFIN, sendId, {
        headers: { 'Accept':'application/json','Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);

          window.location = "/Delivery/showtiffin";
          
          this.setState({
            Load: false,

          });

        })
    } catch (error) {

      console.log(error)
      this.setState({
        Load: false,
      });
      console.log("internal server error");
    }
  }

  render() {
   var self=this;
    return (
      <>
       <Header/>
      {/* main body area */}
<div className="main px-lg-5 px-md-2">

  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Discard Tiffin</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Discard Tiffin</h1>
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
              <div className="row g-4">
           
        { !this.state.Load ?(
             
                     
                  <form onSubmit={this.handleSubmit} encType='multipart/form-data' >

   
<div class="col-4">
<div className="input-group  ">
                      {this.state.tiffin_no.split("-").map(function (value, index, array) {
                                           

                                           if((index===0 ) && value==='VH'){

                        
                                          
                                         return ( 
                                   
                                         <select rows={0} className=" form-control form-control form-control-lg" onChange={self.tiffin_noinput} defaultValue={value} >

                                           

                                         <option value={value} selected>{value}</option>
                                          <option value="VN">VN</option>
                                          <option value="NVH">NVH</option>
                                          <option value="NVN">NVN</option>
                                                         
                                        
                                         </select>
                      
                                        
                                       
                                       
                                       );
                                          
                                        }
                                      
                                      
                                        else if((index===0 ) && value==='VN'){
                                          

                        
                                          
                                            return ( 
                                      
                                            <select rows={0} className=" form-control form-control form-control-lg" onChange={self.tiffin_noinput}    defaultValue={value} >
   
                                              
   
                                            <option value={value} selected>{value}</option>
                                             <option value="VH">VH</option>
                                             <option value="NVH">NVH</option>
                                             <option value="NVN">NVN</option>
                                                            
                                           
                                            </select>
                         
                                           
                                          
                                          
                                          );
                                             
                                           }

                                           else if((index===0 ) && value==='NVN'){
                                          

                        
                                          
                                            return ( 
                                      
                                            <select rows={0} className=" form-control form-control form-control-lg" onChange={self.tiffin_noinput}   defaultValue={value} >
   
                                              
   
                                            <option value={value} selected>{value}</option>
                                             <option value="VH">VH</option>
                                             <option value="VN">VN</option>
                                             <option value="NVH">NVH</option>
                                            
                                                            
                                           
                                            </select>
                         
                                           
                                          
                                          
                                          );
                                             
                                           }
                                       
                                     

                                        else {
                                   
                                          return ( 
                                   
                                         <input type="text" rows={0} className="form-control form-control-lg" onChange={self.tiffin_notypeinput} defaultValue={value} />
                           
                                       
                                      );
                                      }

                                   
                                       })
                                
                                    } 
                               
                                       </div>
</div> 
                   

{/* <div className="form-check-inline">

<label className=" fw-bold form-label">Tiffin No.</label><br></br>
<input type="text" className="form-control form-control-lg" value={this.state.tiffin_no}  name="tiifin_no" onChange={this.tiffin_noinput} placeholder="Tiffin No" />


  </div> */}
                    <div ><br></br></div>


                  
                    
                    <div className="form-check-inline">

                       <label className=" fw-bold form-label">Tiffin category</label><br></br>
                        <input className="form-check-input" type="radio" name="catRadios" id="Veg" defaultValue="Veg" onChange={this.tiffincatinput}  defaultChecked />
                        <label className="form-check-label" htmlFor="catRadios1">
                        <span>&nbsp;&nbsp;</span>   Veg
                        </label>
                         </div>





                    <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="catRadios" id="NonVeg"  onChange={this.tiffincatinput}  defaultValue="NonVeg" />
                        <label className="form-check-label" htmlFor="catRadios2">
                        <span>&nbsp;&nbsp;</span>  Non Veg
                        </label>
                    </div>
                                        <div ><br></br></div>
                                        <div ><br></br></div>



                  
                    <div className="form-check-inline">

                    <label className="fw-bold form-label">Tiffin Type</label><br></br>
                    <input className="form-check-input" type="radio" name="typeRadios" id="Heatable" defaultValue="Heatable" onChange={this.tiffintypeinput}  defaultChecked />
                    <label className="form-check-label" htmlFor="typeRadios1">
                    <span>&nbsp;&nbsp;</span> Heatable
                    </label>
                    </div>  

                    

                     
                     
                    <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="typeRadios" id="NonHeatable" onChange={this.tiffintypeinput}  defaultValue="NonHeatable" />
                    <label className="form-check-label" htmlFor="typeRadios2">
                    <span>&nbsp;&nbsp;</span>  Non Heatable
                    </label>
                    </div>
                           
                
                  <div ><br></br></div>
                <div className="col-sm-12">
                  <button type="submit" onClick={() => { if (window.confirm('Do you want to delete?')) { this.handledelete(this.state.tiffin_no) } }} className="btn btn-danger">Remove</button>
                </div>
                </form>
                 ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                 height={100} width={50} /></div>)}
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
<Footer/>
      </>
    )
  }
}