import React, { Component } from 'react'
import Header from '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';


// import {Adduser} from '../../../Components/admincomponent/links/Kitchenlinks';
import { CREATEUSER } from '../../../Components/admincomponent/links/superadminlinks';
// import { events } from '../../../../../server/model/adminmodel/kitchenmodel/Menus_M';
// import {} from '../../../Components/admincomponent/links/Kitchenlinks';
// import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

// import { Menulist } from './Menulist';

export class Adduser extends Component {


  state = {
    name: '',
    email: '',
 
    password: '',

    profileImage: '',
    values: [],

    preraw: [],
    Load: false,
    progress: '',
    invalidImage: '',
    i: 0,
    taskList: [{ index: Math.random(), raw: "" }],
  }

  





 
  passwordinput = event => {
    this.setState({ password: event.target.value })

  }

  emailinput = event => {
    this.setState({ email: event.target.value })
  }
  nameinput = event => {
    this.setState({ name: event.target.value })
  }
  admintypeinput = event => {
    this.setState({ admintype: event.target.value })
  }
  profileimageinput=event=>
  {
    this.setState({ profileImage: event.target.value })
  }







  profileimageinput = event => {
    this.setState({ invalidImage: '' });
     const imageFile = event.target.files[0];

     var ImgSize = (imageFile.size)/(1024*1024);
  // alert(ImgSize);
    // if (!imageFile) {
    //   this.setState({ invalidImage: 'Please select image.' });
    //   return false;
    // }
 
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      this.setState({ invalidImage: 'Please select valid image.' });
      console.log(this.state.invalidImage);
      return false;
    }
    
    if (ImgSize >='2') {
      this.setState({ invalidImage: 'File Size Is Large ! Select File Below  2MB ' });
      console.log(this.state.invalidImage);
      return false;
    }
    this.setState({  profileImage : event.target.files[0]});
  }

handleSubmit = event =>  {
    event.preventDefault();

    if(this.state.invalidImage !=''){
      alert("Please Select Valid File !");
      return false;
    }
    this.setState({
        Load :true,
       
        });
        const formData = new FormData();
        
    formData.append('profileImage', this.state.profileImage);
    formData.append('name', this.state.name);
    formData.append('password', this.state.password);
    formData.append('admintype', this.state.admintype);


    formData.append('email', this.state.email);
      
 try{
  axios.post(CREATEUSER, formData, {userid: sessionStorage.getItem('userid')},{
      headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},
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
            // window.location.reload();
  

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

  ////////////////////////////////////////////////////////////////////////////////////////////////////



  render() {
    let { taskList } = this.state
    return (
      <>
        <Header />
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
                    <li className="breadcrumb-item active" aria-current="page">Create User </li>
                  </ol>
                </div>
                <div className="col-auto">
                  <div className="d-md-flex d-none justify-content-lg-end align-items-center">

                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-auto">
                  <h1 className="fs-4 mt-1 mb-0">Add  User</h1>
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
                 height={100} width={50} /></div>)} */}

                        {
                          this.state.progress && <h5> {
                            this.state.progress < 100 ?
                              `${this.state.progress}%` : "Photo Uploaded ,Please Wait Almost Done....!"}

                          </h5>

                        }


                        {this.state.invalidImage && <h5 style={{ color: "red" }} className="error"> {this.state.invalidImage}</h5>}

<center>
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'   >
                          <div ><br></br></div>



                          <div ><br></br></div>




                          <div className="col-lg-8">
                            <lable> Name</lable>

                            <input type="text" className="form-control" name="name" placeholder="Name" onChange={this.nameinput} required autoComplete='off' />
                          </div>



                          <div ><br></br></div>
                          <div ><br></br></div>


                          <div className="col-lg-8">
                            <lable>  Email</lable>

                            <input type="text" className="form-control" name="food_qr" placeholder="Email" onChange={this.emailinput} required autoComplete='off' />
                          </div>



                          <div ><br></br></div>
                          <div ><br></br></div>


                          
                          <div className="col-lg-8">
                            <lable>   Password</lable>

                            <input type="password" className="form-control" name="food_qr" placeholder="Password" onChange={this.passwordinput} required autoComplete='off' />
                          </div>



                          <div ><br></br></div>
                          <div ><br></br></div>


                        
                          <div className="col-lg-8">
                            <lable>  Admin Type </lable>

                            <input type="text" className="form-control" name="food_qr" placeholder=" Admin Type" onChange={this.admintypeinput} required autoComplete='off' />
                          </div>



                          <div ><br></br></div>
                          <div ><br></br></div>


                          <div className="col-lg-8">
                            <lable>   Profile Image</lable>

                        <input type="file" className="form-control" name="food_qr" placeholder=" Profile Image" onChange={this.profileimageinput} required autoComplete='off' />
                           </div>



<div ><br></br></div>
      


                     


                          <div ><br></br></div>

                         
                          <div className="col-lg-8">

                            <button type="submit" className="btn btn-primary">Insert</button>
                          </div>
                        </form>


</center>

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
        <Footer />
      </>
    )
  }
}

export default Adduser