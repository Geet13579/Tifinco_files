import React, { Component } from 'react'
import Header from  '../DeliveryHeader';

import Footer from '../DeliveryFooter'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {ADD_TIFFIN,GETLAST_TIFFIN} from '../../links/DeliveryLinks';
export default class Contactus extends Component {
    

    state = {
        tiffin_no: '',
        tifin_notype:'VH',
        tiffin_cat:'veg',
        
        tiffin_type:'heatable',
        value: '',
        Load:false,
        todos:[],
        lasttiffin_type:"",
        lasttiffin_cat:"",
        lastnowithzero:"",
        lastno:0


        
      }
      


      tiffin_noinput = event => {

       

        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
           this.setState({tiffin_no: event.target.value})
        }

         this.setState({ tiffin_no: event.target.value});

       }

       tiffin_notypeinput=event=>{
   
        // this.setState({ tifin_notype: event.target.value});


        var tiffin_type = document.getElementById("tiffin_type");
        this.setState({ tifin_notype: tiffin_type.value});
        // console.log(tiffin_type.value)

        if(tiffin_type.value === "VH"){
          var lasttiffin_cat = "veg";

          var lasttiffin_type = "heatable";
          
  
          }
          else if (tiffin_type.value === "VNH"){
          var lasttiffin_cat = "veg";

          var lasttiffin_type = "nonheatable";
          
  
          }
            
           else if(tiffin_type.value === "NVH"){
           var lasttiffin_cat = "nonveg";

           var lasttiffin_type = "heatable";
         
            
      
         }
         else{
  
          var lasttiffin_cat = "nonveg";

          var lasttiffin_type = "nonheatable";
        
         }

      


               const data = {
                             
                              tiffin_cat:lasttiffin_cat,
                              tiffin_type:lasttiffin_type,
                              userid: sessionStorage.getItem('userid'),
                            };



                            axios.post(GETLAST_TIFFIN,data,{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
                            .then(res => {
                              const todos = res.data;
                              
                        console.log(res.data);
                        if(res.data==='empty'){
                          this.setState({tiffin_no:1});
                        }
                        else{
                  this.setState({tiffin_no:Number(todos)+1});
                        }
                
                            })

    
       }

    
    

       tiffincatinput =(event) => {
         this.setState({ tiffin_cat: event.target.value});
         
 
        
       }
       tiffintypeinput = event => {
        this.setState({ tiffin_type: event.target.value});
      }

      tiffin_input=event=>{

      this.setState({ tifin_notype: event.target.value});

       if(this.state.tifin_notype==='VH'){
   

        this.setState({ tiffin_cat:"veg"});
        this.setState({ tiffin_type:"heatable"});

       }
       else  if(this.state.tifin_notype==='VNH'){
  
        this.setState({ tiffin_cat:"veg"});
        this.setState({ tiffin_type:"nonheatable"});

       }

       else  if(this.state.tifin_notype==='NVH'){
  

        this.setState({ tiffin_cat:"nonveg"});
        this.setState({ tiffin_type:"heatable"});
        
       }
       else  if(this.state.tifin_notype==='NVNH'){
  

        this.setState({ tiffin_cat:"nonveg"});
        this.setState({ tiffin_type:"nonheatable"});
       }


    
       }
 
       handleSubmit = event =>  {

      

        if(this.state.tiffin_no==="" || this.state.tiffin_no==='0' || this.state.tiffin_no==="01" || this.state.tiffin_no==="02"|| this.state.tiffin_no==="03"|| this.state.tiffin_no==="04"|| this.state.tiffin_no==="05"|| this.state.tiffin_no==="06"|| this.state.tiffin_no==="07"|| this.state.tiffin_no==="08" || this.state.tiffin_no==="09")
        {
             if(this.state.tiffin_no==="")  {
 
               alert("Tiffin No can't be empty");
              
             }
             else if(this.state.tiffin_no==="0"){
 
               alert("Tiffin No can't be started from "+this.state.tiffin_no);
              
             }
             else{
               alert("Tiffin No can't be started from "+this.state.tiffin_no+"  ,"+"must be write "+this.state.tiffin_no.replace(0,""));
              
             } 
 
                           
               }
 
               else{
  
                       event.preventDefault();
                       
                     if(this.state.tiffin_no<=9){
 
                       this.state.newtiffin_no = this.state.tifin_notype+"-"+"0"+this.state.tiffin_no;  
 
                     }
                     else{
                       
                       this.state.newtiffin_no = this.state.tifin_notype+"-"+this.state.tiffin_no; 
 
                     }
                
                         const data = {
                           tiffin_no:this.state.newtiffin_no,
                           tiffin_cat: this.state.tiffin_cat,
                           tiffin_type:this.state.tiffin_type,
                           userid: sessionStorage.getItem('userid'),
                         };
                         // alert(this.state.food_name);
                       
                   try{
                     axios.post(ADD_TIFFIN, data,{
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
                             window.location.reload();
                   
                 
                           }
                           
                           else if(res.data.msg=='exist')
                           {
                       
                           alert("Tiffin No. Exists");
                           window.location.reload();
 
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
  render() {
    let {tiffin_cat} = this.state
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
            <li className="breadcrumb-item active" aria-current="page">Add New Tiffin</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Add Tiffin</h1>
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
                                            <select class="form-control form-control-lg" name= "tifin_notype" onChange = {this.tiffin_notypeinput} id='tiffin_type' onClick = {this.tiffin_input} autoComplete='off' placeholder="Tiffin No"  required>
                                                                     <option value="">choose tiffin type</option>
                                                                        <option value="VH">VH</option>
                                                                        <option value="VNH">VNH</option>
                                                                        <option value="NVH">NVH</option>
                                                                        <option value="NVNH">NVNH</option>
                                                                      
                                                                      
                                            </select>
                                         

                                
                                            <span class="input-group-btn"></span>
                                         
                            
                                         <input type="number" className="form-control"  value = {this.state.tiffin_no} onChange={this.tiffin_noinput}  required/>
                                          
         
                                </div>
                      </div>
              
                
                    <div ><br></br></div>
       

     <div className="form-check-inline">

<label className=" fw-bold form-label">VH</label>

<label className="form-check-label" htmlFor="catRadios1">
<span>&nbsp;&nbsp;</span> :  Veg Heatable
</label>
<br></br>
<label className=" fw-bold form-label">VNH</label>

<label className="form-check-label" htmlFor="catRadios1">
<span>&nbsp;&nbsp;</span> :  Veg Nonheatable
</label>
<br></br>
<label className=" fw-bold form-label">NVH</label>

<label className="form-check-label" htmlFor="catRadios1">
<span>&nbsp;&nbsp;</span> : Nonveg Heatable
</label>
<br></br>
<label className=" fw-bold form-label">NVNH</label>

<label className="form-check-label" htmlFor="catRadios1">
<span>&nbsp;&nbsp;</span> : Nonveg NonHeatable
</label>
</div>
                    



                    {/* {alert(this.state.tiffin_cat)} */}
                    {/* <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="catRadios" id="catRadios2" checked={this.state.tifin_notype==="NVN" || this.state.tifin_notype==="NVH"} onChange={this.tiffincatinput}  defaultValue="nonveg" />
                        <label className="form-check-label" htmlFor="catRadios2">
                        <span>&nbsp;&nbsp;</span>  Non Veg
                        </label>
                    </div>
                                        <div ><br></br></div>
                                        <div ><br></br></div>
                                        <div className="form-check-inline">

                    <label className="fw-bold form-label">Tiffin Type</label><br></br>
                    <input className="form-check-input" type="radio" name="typeRadios" id="typeRadios1" checked={this.state.tifin_notype==="VH" || this.state.tifin_notype==="NVH"} defaultValue="heatable" onChange={this.tiffintypeinput}  defaultChecked />
                    <label className="form-check-label" htmlFor="typeRadios1">
                    <span>&nbsp;&nbsp;</span> Heatable
                    </label>
                    </div>


                    <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="typeRadios" id="typeRadios2" checked={this.state.tifin_notype==="NVN" || this.state.tifin_notype==="VN"} onChange={this.tiffintypeinput}  defaultValue="nonheatable" />
                    <label className="form-check-label" htmlFor="typeRadios2">
                    <span>&nbsp;&nbsp;</span>  Non Heatable
                    </label>
                    </div> */}
                                    
                
                  <div ><br></br></div>
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
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