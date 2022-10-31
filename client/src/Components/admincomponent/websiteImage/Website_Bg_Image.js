import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';
export class updatePlan_Bg_image extends Component {

    state = {
        carousel_img1: '',
        carousel_img2:'',
        slider_image:'',
        preSub:'',
        i:0,
        preSub2:[],
        Load:false,
        progress:'',
        invalidImage:''
      }

      componentDidMount() 
      {
            axios.post("https://tifinco.com:5000/admin/get_Website_Bg_Image",{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
              .then(res => {
                const preSub2 = res.data;
                this.state.count =preSub2.length;

                this.setState({ preSub2 });
              })


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
        this.setState({  carousel_img1 : event.target.files[0]});
        // this.setState({  planBg_image : imageFile.name});
        console.log(this.state. carousel_img1);
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
        this.setState({ carousel_img2 : event.target.files[0]});
        console.log(this.state. carousel_img2);
  
      }
      slider_imageinput= event => 
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
        this.setState({  slider_image: event.target.files[0]});
        console.log(this.state.slider_image);
       

      }


      handleSubmit = event => 
    {
        event.preventDefault();
        console.log(this.state.carousel_img1);
        console.log(this.state.preSub);
        console.log(this.state.carousel_img2);
        console.log(this.state.slider_image);

        if(this.state.invalidImage !=''){
          alert("Please Select Valid File !");
          return false;
        }
        this.setState({
            Load :true,
           
            });
            const formData = new FormData();
            formData.append('carousel_img1', this.state.carousel_img1);
            formData.append('carousel_img2', this.state.carousel_img2);
            formData.append('slider_image', this.state.slider_image);
            
            formData.append('_id', "62dfa3f89ba8c490a81180eb");

            console.log(formData);
            
         
     try{
        axios.post("https://tifinco.com:5000/admin/insertWebsite_Bg_Image", formData ,{userid:sessionStorage.getItem('userid')}, {
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

    handleupdate =(_id)=>{

      window.location = "/websiteImage/update/"+_id;
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
             <li className="breadcrumb-item active" aria-current="page">Set Website Image</li>
           </ol>
         </div>
         <div className="col-auto">
           <div className="d-md-flex d-none justify-content-lg-end align-items-center">
            
           </div>
         </div>
       </div>
       <div className="row align-items-center">
         <div className="col-auto">
           <h1 className="fs-4 mt-1 mb-0">Set Website Image</h1>
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

                    <table className="table myDataTable table-hover align-middle mb-0">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Image Name</th>
                            <th> Image</th> 
                            <th>Action[Update]</th>                    
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.preSub2
                              .map(list =>
                                <tr >
                                  <td>{this.state.i = this.state.i + 1}</td>

                                  <td>{list.name}</td>

                                  <td><img src={list.image}  height={"100px"} width={"70px"} alt="corporate image" ></img></td>
                                 
                                  <td>
                                  
                                    <button type="button" onClick={() => { if (window.confirm('Do you want to update?')) { this.handleupdate(list._id) } }} className="btn btn-sm btn-primary" ><i className="fa fa-edit" /></button>
                                  </td>
                                </tr>
                              )}
                        </tbody>
                      </table>

                     <div ><br></br></div>
                 </form>
               
               </div>
             </div>
           </div>
         </div>
      
       </div> {/* .row end */}
       <hr>
      </hr>
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




      

     