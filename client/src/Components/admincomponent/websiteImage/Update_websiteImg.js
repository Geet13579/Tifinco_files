import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";


export default class Update_websiteImg extends Component 
{
     state = 
     {
        name:'',
        my_image:'', 
        updateimage:'',                 
        preCat:[], 
        Load:false,
        progress:'',
        invalidImage:'',
        i:0,
     }


      componentDidMount() 
      {
          this.setState({
          Load:true,
           })

        fetch(`https://tifinco.com:5000/admin/get_Website_Bg_Image`,{
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
              preCat :json
             });
            })

         fetch("https://tifinco.com:5000/admin/getOneImage",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _id:this.props.match.params.id,
            userid: sessionStorage.getItem('userid'), // Use your own property name / key
          }),
        })
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
            json.map(con_data =>{
              this.setState({
                name: con_data.name,
                updateimage: con_data.image


              });
             }

             );
             console.log("data load");
             this.setState({
               Load:false
             });
                
            })//CLOSING OF FIRST FETCH

      }
    
      nameinput = event =>
      {
        this.setState({ name:event.target.value})
      }
      imginput = event => 
      {
            this.setState({ invalidImage: '' });
            const imageFile = event.target.files[0];

            var ImgSize = (imageFile.size)/(1024*1024);
        
            if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/))
            {
                this.setState({ invalidImage: 'Please select valid image.' });
                console.log(this.state.invalidImage);
                return false;
            }
            
            if (ImgSize >='2')
            {
                this.setState({ invalidImage: 'File Size Is Large ! Select File Below  2MB ' });
                console.log(this.state.invalidImage);
                return false;
            }
            this.setState({ my_image : event.target.files[0]});
            console.log(event.target.files[0]);
      }

    handleSubmit = event =>  
    {
        event.preventDefault();

        if(this.state.invalidImage !='')
        {
          alert("Please Select Valid File !");
          return false;
        }

          console.log(this.state.my_image);
         if(this.state.my_image =="")
         {
           this.state.my_image = this.state.updateimage;
           console.log(this.state.my_image);
           console.log("no image");
         }

        this.setState({
            Load :true,
           
            });

          const formData = new FormData();

          formData.append('image', this.state.my_image);
          formData.append('name', this.state.name);
          formData.append('_id', this.props.match.params.id);

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
              console.log(res.status);
              console.log(res.data);
            
              if(res.data.msg=='success')
              {
                console.log("success");
                alert("Data Updated");
                window.location.reload();
              }
              else if(res.data.msg=='exist')
              {
                this.setState({ invalidImage: '' });
                alert("Food Exists");
                window.location.reload();
              }
              else
              {
                console.log("There is an error");
              }
              this.setState({
                Load :false,
              
                });
          })
        }  
        catch(error) 
        {
         
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
            <li className="breadcrumb-item active" aria-current="page">Update Food Product</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Update Website Image </h1>
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
             
                     
                  <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >


                  <div ><br></br></div>


                 <div className="col-lg-12">
                 <label>Image Name</label><div><br></br></div>
                <input type="text" className="form-control" value={this.state.name}   name="name"  placeholder="Image Name" onChange={this.nameinput}  required autoComplete='off'/>
                </div>

                <div ><br></br></div>
           
                    
                  <div className="col-lg-12">
                  <label>Choose New Image</label><div><br></br></div>
                <input type="file" className="form-control"   name="image"   onChange={this.imginput}  />
                </div>
                <div ><br></br></div>


                <div ><br></br></div>
                    
                    <div className="col-md-2">
                                  <label>Previous Image</label><div><br></br></div>
                  <img src={this.state.updateimage} height="100" width="200" className="form-control"  />
                  </div>
                  <div ><br></br></div>
               
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
                </form>
 
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
