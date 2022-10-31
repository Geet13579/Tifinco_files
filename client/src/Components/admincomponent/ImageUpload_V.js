import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import test from './Test';

export default class ImageUpload_V extends Component {
    
    state = {
        image: ''
      }
    
      imageinput = event => {
        this.setState({ image: event.target.files[0]});
      }

    handleSubmit = event =>  {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.image);
        console.log("form subbmitted");
        console.log(this.state.image);
   
        // const authdata = {
        //   image:this.state.image
        // };
        //  alert(authdata.image);
  
     try{
        axios.post(`http://tifinco.com:5000/admin/image_upload`, formData , {
          headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
        })
          .then(res => {
              //alert(res.data);
              console.log(res.status);
              console.log(res.data.message);
            
              if(res.data.msg=='success'){
             

            
                console.log("success");
      
    
              }else{
               
                console.log("failure");
               
              }
              this.setState({ image: ''});
            // console.log(res);
            // console.log(res.data);
          })
        }  catch(error) {
         
                console.log(error)
            
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
            <li className="breadcrumb-item active" aria-current="page">Image</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Image Upload</h1>
          <small className="text-muted"></small>
        </div>
        <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
          {/* <div className="p-2 me-md-3">
            <div><span className="h6 mb-0">8.18K</span> <small className="text-secondary"><i className="fa fa-angle-up" /> 4.33%</small></div>
            <small className="text-muted text-uppercase">Income</small>
          </div>
          <div className="p-2 me-md-3">
            <div><span className="h6 mb-0">1.11K</span> <small className="text-secondary"><i className="fa fa-angle-up" /> 4.33%</small></div>
            <small className="text-muted text-uppercase">Expense</small>
          </div>
          <div className="p-2 pe-lg-0">
            <div><span className="h6 mb-0">3.66K</span> <small className="text-danger"><i className="fa fa-angle-down" /> 4.33%</small></div>
            <small className="text-muted text-uppercase">Revenue</small>
          </div> */}
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

             
                  <form onSubmit={this.handleSubmit} encType='multipart/form-data'>


                
                    {/* <div className="col-sm-6">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Enter here" />
                    </div>
                    <div className="col-sm-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Enter here" />
                    </div>
                    <div className="col-sm-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Enter here" />
                    </div>
                    <div className="col-sm-3">
                    <label className="form-label">Select</label>
                    <select className="form-control form-control-lg" tabIndex={-98}>
                        <option value>- Gender -</option>
                        <option value={10}>Male</option>
                        <option value={20}>Female</option>
                    </select>
                    </div>
                    <div className="col-sm-3">
                    <label className="form-label">Department</label>
                    <select className="form-control form-control-lg" tabIndex={-98}>
                        <option value>- Select -</option>
                        <option value={10}>MCA</option>
                        <option value={20}>MBA</option>
                        <option value={30}>B.Com</option>
                    </select>
                    </div>
                    <div className="col-sm-3">
                    <label className="form-label">Mobile</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Enter here" />
                    </div>
                    <div className="col-sm-6">
                    <label className="form-label">Your Email</label>
                    <input type="email" className="form-control form-control-lg" placeholder="Enter here" />
                    </div> */}
                <div className="col-lg-12">
                  <input type="file" className="form-control" name="image"  onChange={this.imageinput}  />
                </div>
                {/* <div className="col-sm-12">
                  <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                </div> */}
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
                <Switch>
                < Route path={'${this.props.match.url}/test'} component={test} />
                </Switch>
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