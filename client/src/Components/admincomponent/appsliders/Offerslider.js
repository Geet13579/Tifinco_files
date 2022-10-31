import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

import { OFFER_FETCH_SLIDER,OFFER_ADD_SLIDER,OFFER_DELETE_SLIDER,PRODUCT_LIST} from '../../../Components/admincomponent/links/superadminlinks';
export class Offerslider extends Component {

    state = {
        offerimages: '',
          offerslider:[],
          Load:false,
          progress:'',
          invalidImage:'',
          i:0,
          options : [
            { label:  'Option 1', value:  '1'  },
            { label:  'Option 2', value:  '2'  },
            { label:  'Option 3', value:  '3'  },
            { label:  'Option 4', value:  '4'  },
          ],
          value:'',
          prevProduct:[],
          discount:'',
          p_name:'',
       
        }
      
     
        componentDidMount() {
  
          this.setState({
            Load:true
          }); 
  
          fetch(
            OFFER_FETCH_SLIDER,{
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
             //  console.log(json);
               this.setState({
                offerslider :json
               });
         



               fetch(
                PRODUCT_LIST,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userid: sessionStorage.getItem('userid'), // Use your own property name / key
              }),
            })
                  .then((res) => res.json())
                  .then((jsoninner) => {
                   console.log(jsoninner);
                   this.setState({
                    prevProduct :jsoninner
                   });
             
    
    
    
                   
                      this.setState({
                        Load:false
                      });
                    
                  })

             })
  
        }
         
        handleOnselect = event =>{
          var p_name = document.getElementById('p_name').value;
       
        
          this.setState({
            p_name: p_name,
        })}
          
        offerimagesinput = event => {
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
          this.setState({offerimages : event.target.files[0]});
        }

        discountinput = event =>{
          this.setState({ discount:event.target.value})
        }
  

  
      handleSubmit = event =>  {
          event.preventDefault();
  
          if(this.state.invalidImage !=''){
            alert("Please Select Valid File !");
            return false;
          }


          if(this.state.p_name ==''){
            alert("Please Select Product !");
            return false;
          }
          this.setState({
              Load :true,
             
              });
              const formData = new FormData();
              formData.append('offerimages', this.state.offerimages);
              formData.append('discount', this.state.discount);
              formData.append('p_name', this.state.p_name);
            
       try{
          axios.post(OFFER_ADD_SLIDER, formData ,{userid: sessionStorage.getItem('userid')}, {
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
      axios.post(OFFER_DELETE_SLIDER, sendId , {
        headers:{'Content-Type': 'application/json'},
          })
        .then(res => {
            //alert(res.data);
            console.log(res.status);
            console.log(res.data);
          
            if(res.data.msg=='success'){
           
              console.log("success");
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
     
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <ol className="breadcrumb bg-transparent mb-0">
              <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">offer slider</li>
            </ol>
          </div>
          <div className="col-auto">
            <div className="d-md-flex d-none justify-content-lg-end align-items-center">
             
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-auto">
            <h1 className="fs-4 mt-1 mb-0">Offer Slider</h1>
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
                    <input type="file" className="form-control"   name="offerimages"  onChange={this.offerimagesinput}  required/>
                  </div>
                   
                  <div ><br></br></div>
  
                  {/* <div ><br></br></div>
                      <div className="col-sm-3">
                      <label className="form-label">Current Image</label>
                     
                      
                      </div> */}
                         {/* <MultiSelect
        onChange={this.handleOnselect}
        options={this.state.options}
      /> */}

                      <input class="form-control" type="text" list="data"  onChange={this.handleOnselect} placeholder='Select Product' id="p_name" required/>

                      <datalist id="data">
                        {this.state.prevProduct.map(productlist =>
                          <option  value={productlist.p_name} >   [Price:{productlist.p_price}]</option>
                        )}
                      </datalist>
                      <div><br></br></div>
                      <div className="col-lg-12">
                    <input type="number" className="form-control"  placeholder='Discount'  name="offerimages"  onChange={this.discountinput}  required/>
                  </div>
                   
           
                    <div ><br></br></div>
                  <div className="col-sm-12">
                   <center> <button type="submit" className="btn btn-primary">Insert</button></center>
                  </div>
                  </form>
          <h3 > Product  List With Offer</h3>
                  <table className="table table-striped">
    <thead>
      <tr style={{color:"red"}}>
        <th scope="col">S.No</th>
        <th scope="col">Images</th>
        <th scope="col">Product name</th>
        <th scope="col">Discount[%]</th>
        <th scope="col">Previous Price</th>
        <th scope="col">Price[After Discount]</th>
        <th scope="col">Action</th>
      
      </tr>
    </thead>
    <tbody>
    {console.log(this.state.i=0)}
      {this.state.offerslider.map(offerslider_data =>(
      <tr>
        <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
  
       <td> <img src={offerslider_data.image_name}  height={"70px"} width={"70px"} alt="offer image"></img></td>
       <td>{offerslider_data.p_name} </td>
       <td>{offerslider_data.discount} </td>
       <td>{offerslider_data.prevprice} </td>
       <td>{offerslider_data.price} </td>
  
        <td style={{ verticalAlign: "middle" }}>
          
   <button onClick={() => { if(window.confirm('Do you want to delete  image?')){this.handledelete(offerslider_data._id)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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

export default Offerslider