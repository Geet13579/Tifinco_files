import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {SHOW_USER_EXTRA_FOOD, INSERT_USER_EXTRA_FOOD,DELETE_USER_EXTRA_FOOD} from '../../../Components/admincomponent/links/superadminlinks';


export default class ManageCategory extends Component {
    

    state = {
      item_image: '',
        preExtraFood:[],
        Load:false,
        progress:'',
        invalidImage:'',
        i:0,
        item_name:'',
        item_price:'',
      }
    
   
      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
            SHOW_USER_EXTRA_FOOD,{
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
              preExtraFood :json
             });
       
                this.setState({
                  Load:false
                });
              
            })

      }
       
      item_nameinput = event =>{
      
        this.setState({
          item_name:event.target.value,

        })

      }
      item_priceinput = event =>{
      
        this.setState({
          item_price:event.target.value,

        })

      }

      itemimageinput = event => {
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
        this.setState({  item_image : event.target.files[0]});
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
            formData.append('item_image', this.state.item_image);
            formData.append('item_name', this.state.item_name);
            formData.append('item_price', this.state.item_price);
          
     try{
        axios.post(INSERT_USER_EXTRA_FOOD, formData ,{userid: sessionStorage.getItem('userid')}, {
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
                window.location.reload();
      
    
              }else if(res.data.msg=='exist'){
                this.setState({ invalidImage: '' });
               alert("Exists");
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


//delete images code

handledelete = (_id)=>{
 

  this.setState({
    Load :true,
  
    });
  var sendId ={
    _id:_id,
    userid: sessionStorage.getItem('userid'),
  }
  try{
    axios.post(DELETE_USER_EXTRA_FOOD, sendId , {
      headers:{'Content-Type': 'application/json'},
        })
      .then(res => {
         
        
          if(res.data.msg=='success'){
         
            window.location.reload();
  

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
            <li className="breadcrumb-item active" aria-current="page">manage user extra food</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Manage User Extra Food</h1>
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
             
                     
                  <form onSubmit={this.handleSubmit} encType='multipart/form-data' >


                  <div ><br></br></div>
                    <div className="col-lg-12">

                  <input type="text" className="form-control"   name="item_name"  placeholder="Item Name" onChange={this.item_nameinput}  required/>
                </div>

                    <div ><br></br></div>
                    <div className="col-lg-12">

                  <input type="number" className="form-control"   name="item_price"  placeholder="Item Price" onChange={this.item_priceinput}  required/>
                </div>
                  
                    <div ><br></br></div>
                    <div className="col-lg-12">
                  <input type="file" className="form-control"   name="item_image"  onChange={this.itemimageinput}  required/>
                </div>

                
                
                

                {/* <div ><br></br></div>
                    <div className="col-sm-3">
                    <label className="form-label">Current Image</label>
                   
                    
                    </div> */}
              
                  <div ><br></br></div>
                <div className="col-sm-12">
                 <center> <button type="submit" className="btn btn-primary">Insert</button></center>
                </div>
                </form>
        <h5>User Extra Food List</h5>
                <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Item Name</th>
      <th scope="col">Item Price</th>
      <th scope="col">Images</th>
      <th scope="col">Action</th>
    
    </tr>
  </thead>
  <tbody>
  {console.log(this.state.i=0)}
    {this.state.preExtraFood.map(item_data =>(
    <tr>
      <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
      <td> {item_data.item_name}</td>
      <td> {item_data.item_price}</td>
     <td> <img src={item_data.item_image}  height={"70px"} width={"70px"} alt="subscribe image"></img></td>
 

      <td style={{ verticalAlign: "middle" }}>
        
 <button onClick={() => { if(window.confirm('Do you want to delete  image?')){this.handledelete(item_data._id)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>


</td>
  
    </tr>
    ))}
  
  </tbody>
</table>




              
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