import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";

export class registerDeliveryBoy extends Component {
    state=
    {
        name :'',
        date_of_birth:'',
        mobile:'',
        address:'',
        pan_card:'',
        adhaar_card:'',
        username:'',
        email:'',
        pan_image:'',
        Invalidpan_image:'',
        adhaar_image:'',
        Invalidadhaar_image:'',
        profile_image:'',
        Invalidprofile_image:'',

    }


    nameinput=event=>
    {
        this.setState({ name:event.target.value });
        console.log(this.state.name);
    }
    dobinput=event=>
    {
        this.setState({date_of_birth :event.target.value });
        console.log(this.state.date_of_birth);
    }
    mobileinput=event=>
    {
        this.setState({ mobile: event.target.value});
        console.log(this.state.mobile);
         }
    emailinput=event=>
    {
        this.setState({email :event.target.value });
       console.log(this.state.email);
          }
    addressinput=event=>
    {
        this.setState({address :event.target.value });
       console.log(this.state.address);
          }
    paninput=event=>
    {
        this.setState({ pan_card:event.target.value });
       console.log(this.state.pan_card);
          }
    adhaarinput=event=>
    {
        this.setState({adhaar_card :event.target.value });
       console.log(this.state.adhaar_card);
          }
    usernameinput = event =>
    {
        this.setState({username:event.target.value})
         console.log(this.state.username);
    }
    dojinput=event=>
    {
        this.setState({joining_date :event.target.value });
        console.log(this.state.joining_date);
    }


    pan_imageinput = event =>
    {
        this.setState({ Invalidpan_image: '' });
        const imageFile = event.target.files[0];

        var ImageSize = (imageFile.size)/(1024*1024);
    
       if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/))
       {
         this.setState({ Invalidpan_image: 'Please select valid image.' });
         console.log(this.state.Invalidpan_image);
         return false;
       }
       
       if (ImageSize >='2')
       {
         this.setState({ Invalidpan_image: 'File Size Is Large ! Select File Below  2MB ' });
         console.log(this.state.Invalidpan_image);
         return false;
       }
       this.setState({ pan_image: event.target.files[0]});
       console.log(this.state.pan_image);
    }


    adhaar_imageinput = event =>
    {
        this.setState({ Invalidadhaar_image: '' });
        const imageFile = event.target.files[0];

        var ImageSize = (imageFile.size)/(1024*1024);
    
       if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/))
       {
         this.setState({ Invalidadhaar_image: 'Please select valid image.' });
         console.log(this.state.Invalidadhaar_image);
         return false;
       }
       
       if (ImageSize >='2')
       {
         this.setState({ Invalidadhaar_image: 'File Size Is Large ! Select File Below  2MB ' });
         console.log(this.state.Invalidadhaar_image);
         return false;
       }
       this.setState({ adhaar_image : event.target.files[0]});
       console.log(this.state.adhaar_image );
    }


    profile_imageinput = event =>
    {
        this.setState({ Invalidprofile_image: '' });
         const imageFile = event.target.files[0];

         var ImageSize = (imageFile.size)/(1024*1024);
     
        if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/))
        {
          this.setState({ Invalidprofile_image: 'Please select valid image.' });
          console.log(this.state.Invalidprofile_image);
          return false;
        }
        
        if (ImageSize >='2')
        {
          this.setState({ Invalidprofile_image: 'File Size Is Large ! Select File Below  2MB ' });
          console.log(this.state.Invalidprofile_image);
          return false;
        }
        this.setState({ profile_image : event.target.files[0]});
        console.log(this.state.profile_image);
    }

      handleSubmit = event =>  
      {
        event.preventDefault();
         var total_img = [];

        if(this.state.Invalidpan_image !='')
        {
          alert("Please Select Valid File !");
          return false;
        }
        else{
          total_img.push(this.state.pan_image);
        }
        if(this.state.Invalidadhaar_image !='')
        {
          alert("Please Select Valid File !");
          return false;
        }
        else{
          total_img.push(this.state.adhaar_image);
        }
        if(this.state.Invalidprofile_image !='')
        {
          alert("Please Select Valid File !");
          return false;
        }
        else{
          total_img.push(this.state.profile_image);
        }
        console.log(total_img);
        
      

        this.setState({
            Load :true,
           
            });

          
            const formData = new FormData();
            formData.append('name', this.state.name);
            formData.append('username', this.state.username);
            formData.append('date_of_birth', this.state.date_of_birth);
            formData.append('mobile', this.state.mobile);
            formData.append('address', this.state.address);
            formData.append('email', this.state.email);
            formData.append('joining_date', this.state.joining_date );
            formData.append('pan_card', this.state.pan_card);
            formData.append('pan_image', this.state.pan_image);
            formData.append('adhaar_image', this.state.adhaar_image);
            formData.append('profile_image', this.state.profile_image);
            formData.append('adhaar_card', this.state.adhaar_card);
            
        console.log(formData);
          
     try{
        axios.post("https://tifinco.com:5000/admin/register", formData , {userid:sessionStorage.getItem('userid')},{
          headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},
          onUploadProgress: data => {

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
                window.location.reload();
      
    
              }else if(res.data.msg=='exist'){
                this.setState({ invalidImage: '' });
               alert("User Name Exists");
               window.location.reload();
              }

              this.setState({
                Load :false,

                });
            

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
            <li className="breadcrumb-item active" aria-current="page">Register Delivery Boy</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Register Delivery Boy</h1>
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
           
        {/* { !this.state.Load ?( */}
             
                     
                  <form onSubmit={this.handleSubmit} encType='multipart/form-data' >


                
                    <div className="col-lg-12">
                    <label className="form-label"> Name</label>
                    <input type="text" className="form-control form-control-lg"  name="cname" onChange={this.nameinput} placeholder="Enter Name here" required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label"> Date of Birth</label>
                    <input type="date" className="form-control form-control-lg"  name="cname" onChange={this.dobinput} placeholder="Enter Dte of birth here" required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label">Mobile</label>
                    <input type="number" className="form-control form-control-lg"  name="mobile" onChange={this.mobileinput}  placeholder="Enter Mobile no here" required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control form-control-lg"  name="email"  onChange={this.emailinput} placeholder="Enter Email address here" required/>
                    </div>

                
                    <div ><br></br></div>
                    <label className=' ="form-label'>Address</label>
                    <div className="col-sm-12">
                    <textarea rows={4} className="form-control no-resize"  name="address"   onChange={this.addressinput}  placeholder="Address"  required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label"> Pan Card No</label>
                    <input type="text" className="form-control form-control-lg"  name="cname" onChange={this.paninput} placeholder="Enter Pan card No" required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label"> Pan Card Image</label>
                    <input type="file" className="form-control"   name="pan_image"   onChange={this.pan_imageinput} required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label"> Adhaar Card No</label>
                    <input type="text" className="form-control form-control-lg"  name="cname" onChange={this.adhaarinput} placeholder="Enter adhaar card no" required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label"> Adhaar Card Image</label>
                    <input type="file" className="form-control"   name="adhaar_image"   onChange={this.adhaar_imageinput} required/>
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label"> UserName</label>
                    <input type="text" className="form-control form-control-lg"  name="cname" onChange={this.usernameinput} placeholder="Enter Your username here" required/>
                    </div>
                    <div ><br></br></div>
                    
                    <label className="form-label"> Profile Image</label>
                    <div className="col-lg-12">
                    <input type="file" className="form-control"   name="profile_image"   onChange={this.profile_imageinput} required/>
                    
                    </div>
                    <div ><br></br></div>
                    <div className="col-lg-12">
                    <label className="form-label"> Date of Joining</label>
                    <input type="date" className="form-control form-control-lg"  name="cname" onChange={this.dojinput} placeholder="Enter Date of birth here" required/>
                    </div>
                    <div ><br></br></div>
                    
                   
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
                 {/* ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                 height={100} width={50} /></div>)} */}
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

export default registerDeliveryBoy