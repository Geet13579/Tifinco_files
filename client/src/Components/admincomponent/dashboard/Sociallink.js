import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_SOCIAL_DATA, UPDATE_SOCIAL_LINKS,} from '../../../Components/admincomponent/links/superadminlinks';

export class SocialLink extends Component {
    state = {
        facebook: '',
        instagram:'',
        twitter:'',
        linkedin:'',
        Load:false
      }
      componentDidMount() {
        this.setState({
          Load:true
        });
        fetch(GET_SOCIAL_DATA,{
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
                facebook:con_data.facebook,
                instagram:con_data.instagram,
                twitter:con_data.twitter,
                linkedin:con_data.linkedin
              });
              console.log(con_data.cname);
             }
             );
            //  alert("data loadead");
             console.log("data load");
                this.setState({
                  Load:false
                });
            })
       }
      facebookinput = event => {
        this.setState({facebook:event.target.value});
      }
      instagraminput = event => {
        this.setState({instagram:event.target.value});
      }
       twitterinput = event => {
        this.setState({twitter:event.target.value});
      }
       linkedininput = event => {
        this.setState({linkedin:event.target.value});
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
            facebook: this.state.facebook,
            instagram:this.state.instagram,
            twitter:this.state.twitter,
            linkedin:this.state.linkedin,
            _id:'629076818686f89d0d8b4675',
            userid:sessionStorage.getItem('userid'),
        };
        // alert("form submitted");
     try{
        axios.post(UPDATE_SOCIAL_LINKS, formData , {
          headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
        })
          .then(res => {
              //alert(res.data);
              console.log(res.status);
              console.log(res.data);
              // alert("data submitted");
              if(res.data.msg==='success'){
                console.log("success");
              }else{
                console.log("failure");
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
                // alert("rserver error");
              }
      }
  render() {
    return (
      <div>
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
                  <li className="breadcrumb-item active" aria-current="page">SocialLink us</li>
                </ol>
              </div>
              <div className="col-auto">
                <div className="d-md-flex d-none justify-content-lg-end align-items-center">
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-auto">
              
              <h1 className="fs-4 mt-1 mb-0">Social Links</h1>
    
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
                            <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                          <div className="col-sm-6">
                          <label className="form-label">Facebook</label>
                          <input type="text" className="form-control form-control-lg" value={this.state.facebook} name="facebook" onChange={this.facebookinput} placeholder="Enter here" />
                          </div>
                          <div ><br></br></div>
                          <div className="col-sm-6">
                          <label className="form-label">Instagram</label>
                          <input type="text" className="form-control form-control-lg" value={this.state.instagram} name="instagram" onChange={this.instagraminput}  placeholder="Enter here" />
                          </div>
                          <div ><br></br></div>
                          <div className="col-sm-6">
                          <label className="form-label">Twitter</label>
                          <input type="text" className="form-control form-control-lg" value={this.state.twitter} name="twitter"  onChange={this.twitterinput} placeholder="Enter here" />
                          </div>
                          <div ><br></br></div>
                          <div className="col-sm-6">
                          <label className="form-label">Linkedin</label>
                          <input type="text" className="form-control form-control-lg" value={this.state.linkedin} name="linkedin"  onChange={this.linkedininput} placeholder="Enter here" />
                          </div>
                      {/* <div ><br></br></div>
                      <div className="col-sm-12">
                        <textarea rows={4} className="form-control no-resize"  name="address"   onChange={this.addressinput}  placeholder="Address" defaultValue={this.state.address} />
                      </div> */}
                        <div ><br></br></div>
                      <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">Update</button>
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
      </div>
    )
  }
}
export default SocialLink