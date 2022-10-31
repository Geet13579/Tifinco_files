
import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';
import {CORPORATE_DATA_FETCH,UPDATE_CORPORATE_DATA,CORPORATE_DATA_FETCH1 ,INSERTCORPORATE} from '../../../Components/admincomponent/links/superadminlinks';

export default class Corporate_image extends Component {
    state = {
       corporate_image: '',
       corporate_image2: '',
        preSub:'',
        preSub2:[],
        Load:false,
        progress:'',
        invalidImage:''
      }
      componentDidMount() {
        this.setState({
          Load:true
        });
        fetch(
          CORPORATE_DATA_FETCH,{
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
             json.map(sub_data =>{
              this.setState({
                preSub:sub_data.corporate_image,
               
              });
              // console.log(con_data.cname);
             }
             );
             console.log("data load");
                this.setState({
                  Load:false
                });
            })
            fetch(
              CORPORATE_DATA_FETCH1,{
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
             this.setState({
              preSub2 :json
             });
       
                this.setState({
                  Load:false
                });
              });///second 


          
     
      }
       corporate_imageinput = event => {
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
          this.setState({ invalidImage: 'Too Large File' });
          console.log(this.state.invalidImage);
          return false;
        }
        this.setState({ corporate_image : event.target.files[0]});
      }

      corporate_imageinput2= event => {
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
          this.setState({ invalidImage: 'Too Large File' });
          console.log(this.state.invalidImage);
          return false;
        }
        this.setState({ corporate_image2 : event.target.files[0]});
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
            formData.append('corporate_image',this.state.corporate_image);
            formData.append('_id', "62a3268f96890e152efab34f");
     try{
        axios.post(UPDATE_CORPORATE_DATA, formData , {userid: sessionStorage.getItem('userid')},{
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
              // console.log(res.status);
              // console.log(res.data);
              if(res.data.msg=='success'){
                console.log("success");
                
                swal({
                  title: "Good job",
                  text: " successfully updated!",
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

      handleSubmit2 = event =>  {
        event.preventDefault();
        if(this.state.invalidImage !=''){
          alert("Please Select Valid File !");
          return false;
        }
        this.setState({
            Load :true,
            });
            const formData = new FormData();
            formData.append('corporate_image2',this.state.corporate_image2);
            formData.append('_id', "62a3206a96890e152efab338");
     try{
        axios.post(INSERTCORPORATE, formData ,{userid: sessionStorage.getItem('userid')}, {
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
              // console.log(res.status);
              // console.log(res.data);
              if(res.data.msg=='success'){
                console.log("success");


                swal({
                  title: "Good job",
                  text: " successfully updated!",
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
  render() {
    return (
      <>
       <Header/>
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
            <li className="breadcrumb-item active" aria-current="page">Corporate_order now</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Corporate Order</h1>
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
              { !this.state.Load ?(""
                 ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                 height={100} width={50} /></div>)}
              {
              this.state.progress && <h5> {
                this.state.progress<100?
                `${this.state.progress}%` :"Photo Uploaded ,Please Wait Almost Done....!"}
                 </h5>
              }
                 {this.state.invalidImage && <h5 style={{ color: "red" }}  className="error"> {this.state.invalidImage}</h5>}
                  <form onSubmit={this.handleSubmit} encType='multipart/form-data' >
                    <div ><br></br></div>
                    <div className="col-lg-12">
                  <input type="file" className="form-control"   name="corporate_image"  onChange={this. corporate_imageinput}  required/>
                </div>
                <div ><br></br></div>
           
                    <div className="col-sm-3">
                    <label className="form-label">Current Image</label>
                    <img src={this.state.preSub} className="form-control form-control-lg"  alt="corporate image"></img>
                    </div>
                  <div ><br></br></div>
             
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> {/* .row end */}


      <hr>
      </hr>

      <form onSubmit={this.handleSubmit2} encType='multipart/form-data' >
 
      <div ><br></br></div>

                    <div className="col-lg-12">
                  <input type="file" className="form-control"   name="corporate_image2"  onChange={this. corporate_imageinput2}  required/>
                </div>
                <div ><br></br></div>
      <div ><br></br></div>
                    <div className="col-sm-3">
                    <label className="form-label">Current Image2</label>
                    {/* <img src={this.state.preSub2} className="form-control form-control-lg"  alt="corporate image"></img> */}
                    {this.state.preSub2.map(menuslist =>(
                             
                                             <div><img src={menuslist.corporate_image2} className="form-control form-control-lg"  height={"100px"} width={"50px"}  ></img></div>
                                             
                                     
                         
                                          
                                        ))}
           
                    </div>

                  <div ><br></br></div>
                  <div className="col-sm-6">
                  <button type="submit" className="btn btn-primary"> Update </button>
                </div>
               

      </form>
   
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