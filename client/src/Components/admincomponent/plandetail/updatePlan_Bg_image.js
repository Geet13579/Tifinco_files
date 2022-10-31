import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';
export class updatePlan_Bg_image extends Component {

    state = {
        planBg_image: '',
        planBg_image2:'',
        preSub:'',
        preSub2:[],
        Load:false,
        progress:'',
        invalidImage:''
      }

      componentDidMount() 
      {

          this.setState({
            Load:true
          }); 

          fetch("https://tifinco.com:5000/admin/getPlan_imgInfo",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  userid: sessionStorage.getItem('userid')}), // Use your own property name / key
        
             })
            .then((res) => res.json())
            .then((json) => 
            {
              console.log(json);
              json.map(plan_data =>{
              this.setState({ preSub:plan_data.planBg_image }); 
                });
              console.log("data load");
              
              this.setState({ Load:false });
              
            })
            fetch(
              "https://tifinco.com:5000/admin/getPlan_imgInfo1",{
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

      planBg_imageinput = event => 
      {
         this.setState({ invalidImage: '' });
         const imageFile = event.target.files[0];
         console.log(imageFile );
         var ImgSize = (imageFile.size)/(1024*1024);

            if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) 
            {
              this.setState({ invalidImage: 'Please select valid image.' });
              console.log(this.state.invalidImage);
              return false;
            }
            
            if (ImgSize >='2')
            {
              this.setState({ invalidImage: 'Too Large File' });
              console.log(this.state.invalidImage);
              return false;
            }
        this.setState({  planBg_image : event.target.files[0]});
        // this.setState({  planBg_image : imageFile.name});
        // var imageFile_name = imageFile.name

      }
      planBg_imageinput2= event => 
      {
         this.setState({ invalidImage: '' });
         const imageFile = event.target.files[0];
         console.log(imageFile );
         var ImgSize = (imageFile.size)/(1024*1024);

            if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) 
            {
              this.setState({ invalidImage: 'Please select valid image.' });
              console.log(this.state.invalidImage);
              return false;
            }
            
            if (ImgSize >='2')
            {
              this.setState({ invalidImage: 'Too Large File' });
              console.log(this.state.invalidImage);
              return false;
            }
        this.setState({  planBg_image2 : event.target.files[0]});
        // this.setState({  planBg_image : imageFile.name});
        // var imageFile_name = imageFile.name

      }


      handleSubmit = event => 
    {
        event.preventDefault();
        // alert(this.state.planBg_image);
        if(this.state.invalidImage !=''){
          alert("Please Select Valid File !");
          return false;
        }
        this.setState({
            Load :true,
           
            });
            const formData = new FormData();
            formData.append('planBg_image', this.state.planBg_image);
            formData.append('_id', "62a70b49a0b030fb75bbcfba");

            console.log(formData);
            
         
     try{
        axios.post("https://tifinco.com:5000/admin/addPlan_imgInfo", formData ,{userid:sessionStorage.getItem('userid')}, {
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
              console.log(res.data); // hello there
            
              if(res.data.msg=='success')
              {
                console.log("success");
                window.location.reload();
      
              }
              else
              {
                console.log("failure");
               
              }

              this.setState({
                Load :false,});
  
          })
        }  
              catch(error) 
              {
         
                console.log(error)
                this.setState({ Load :false, });
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
            formData.append('planBg_image2',this.state.planBg_image2);
            formData.append('_id', "62a7144aa0b030fb75bbcfc4");
     try{
        axios.post("https://tifinco.com:5000/admin/addPlan_imgInfo1", formData ,{userid:sessionStorage.getItem('userid')}, {
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
             <li className="breadcrumb-item active" aria-current="page">Update Plan BgImage</li>
           </ol>
         </div>
         <div className="col-auto">
           <div className="d-md-flex d-none justify-content-lg-end align-items-center">
            
           </div>
         </div>
       </div>
       <div className="row align-items-center">
         <div className="col-auto">
           <h1 className="fs-4 mt-1 mb-0">Update Plan BgImage</h1>
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
                   <input type="file" className="form-control"   name="planBg_image"  onChange={this.planBg_imageinput}  required/>
                 </div>
                 
 
                 <div ><br></br></div>
                     <div className="col-sm-3">
                     <label className="form-label">Current Image</label>
                     <img src={this.state.preSub} className="form-control form-control-lg"  height={"100px"} width={"50px"}  alt=" background plan image"></img>
                     
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
                  <input type="file" className="form-control"   name="corporate_image2"  onChange={this. planBg_imageinput2}  required/>
                </div>
                <div ><br></br></div>
      <div ><br></br></div>
                    <div className="col-sm-3">
                    <label className="form-label"> Bg Current Image2</label>
                    {/* <img src={this.state.preSub} className="form-control fo/rm-control-lg"  alt="corporate image"></img> */}
                    {this.state.preSub2.map(menuslist =>(
                             
                                             <div><img src={menuslist.planBg_image2} className="form-control form-control-lg"  height={"100px"} width={"50px"}  ></img></div>
                                             
                                     
                         
                                          
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

export default updatePlan_Bg_image