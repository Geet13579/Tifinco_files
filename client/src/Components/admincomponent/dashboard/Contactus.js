import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";

import {CONTACT_DETAIL,UPDATE_CONTACT_DETAIIL} from '../../../Components/admincomponent/links/superadminlinks';
export default class Contactus extends Component {
    

    state = {
        cname: '',
        mobile:'',
        email:'',
        address:'',
        Load:false
      }
    
      componentDidMount() {

        this.setState({
          Load:true
        }); 

        fetch(
          CONTACT_DETAIL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: sessionStorage.getItem('userid'), // Use your own property name / key
        }),
      })
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
             json.map(con_data =>{
              this.setState({
                cname: con_data.cname,
                mobile:con_data.mobile,
                email:con_data.email,
                address:con_data.address

              });
              // console.log(con_data.cname);
             }

             );
             console.log("data load");
                this.setState({
                  Load:false
                });
              
            })



      }
       
    
      cnameinput = event => {
        this.setState({ cname: event.target.value});
      }

      mobileinput = event => {
        this.setState({ mobile: event.target.value});
      }

     emailinput = event => {
        this.setState({ email: event.target.value});
      }

      addressinput = event => {
        this.setState({ address: event.target.value});
      }

    handleSubmit = event =>  {
        event.preventDefault();
        this.setState({
            Load :true,
            });
        // const formData = new FormData();
        // formData.append('cname', this.state.cname);
        // formData.append('mobile', this.state.mobile);
        // formData.append('email', this.state.email);
        // formData.append('address', this.state.address);
        // formData.append('userid', sessionStorage.getItem('userid'));
        // console.log("form subbmitted");
    
   
        const formData = {
            cname: this.state.cname,
            mobile:this.state.mobile,
            email:this.state.email,
            address:this.state.address,
            _id:'629077508686f89d0d8b4678',
            userid: sessionStorage.getItem('userid'),

        };
         
  
     try{
        axios.post(UPDATE_CONTACT_DETAIIL, formData , {
          headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
        })
          .then(res => {
              //alert(res.data);
              console.log(res.status);
              console.log(res.data);
            
              if(res.data.msg=='success'){
             

            
                console.log("success");
      
    
              }else{
               
               
                console.log("failure");
               
              }

              this.setState({
                Load :false,
                // cname:'',
                // email:'',
                // mobile:'',
                // address:''
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
  render() {
   
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
            <li className="breadcrumb-item active" aria-current="page">contact us</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Contact Us</h1>
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


                
                    <div className="col-sm-6">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control form-control-lg" value={this.state.cname}  name="cname" onChange={this.cnameinput} placeholder="Enter here" />
                    </div>
                    <div ><br></br></div>
                    <div className="col-sm-6">
                    <label className="form-label">Mobile</label>
                    <input type="number" className="form-control form-control-lg"  value={this.state.mobile} name="mobile" onChange={this.mobileinput}  placeholder="Enter here" />
                    </div>
                    <div ><br></br></div>
                    <div className="col-sm-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control form-control-lg"  value={this.state.email} name="email"  onChange={this.emailinput} placeholder="Enter here" />
                    </div>
                
                <div ><br></br></div>
                <div className="col-sm-12">
                  <textarea rows={4} className="form-control no-resize"  name="address"   onChange={this.addressinput}  placeholder="Address" defaultValue={this.state.address} />
                </div>
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