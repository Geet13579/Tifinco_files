import React, { Component } from 'react'
import Header from  '../Header';

import Footer from '../Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {INSERTTEXES,SHOWSTEX} from '../../../Components/admincomponent/links/superadminlinks';
export class Texes_And_Charges extends Component {
    state = 
    {
         preTiffinPrice:[],
         Load:false,
         taxcharges:'',
         deliveryfee:'',
         Taxes:''
    }
  
    componentDidMount() {
      this.setState({
        Load:true,
      })
       fetch(SHOWSTEX,{
        method: 'POST',  headers: {'Content-Type': 'application/json' },
       
        body: JSON.stringify({
          userid: sessionStorage.getItem('userid'), // Use your own property name / key
        }),
      })
          .then((res) => res.json())
          .then((json) => {
          console.log(json);
          json.map(tax =>{
              this.setState({
                taxcharges:tax.texesandcharges,
                deliveryfee:tax.deliveryfee,
               
              });
          
             }

             );

          
     
              this.setState({
                Load:false
              });
            
          })

    }

    texesandchargesinput = event =>
      {
        this.setState({ taxcharges:event.target.value })
      }

      deliveryfeeinput = event =>
      {
        this.setState({  deliveryfee:event.target.value  })
      }
     

      handleSubmit = event =>  {

console.log(this.state.texes);
console.log(this.state.deliveryfee);
        event.preventDefault();

    
            const formData = {
                _id: "629086347875e20b5ae3c220",
                texesandcharges:this.state.taxcharges,
                deliveryfee:this.state.deliveryfee,
                userid: sessionStorage.getItem('userid')
            }

            console.log(formData)
     try{
        axios.post(INSERTTEXES, formData , {
          headers:{'Content-Type': 'application/json'},
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
    {/* {console.log(this.state.percentage)} */}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Insert Tifin Price</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Taxes And Charges</h1>
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
           
              
             
                     
                  <form onSubmit={this.handleSubmit} encType='multipart/form-data' >


                  <div ><br></br></div>
                    <div className="col-lg-12">
                   <label>Taxes and Charges </label><div ><br></br></div>
                   <input type="number" className="form-control"   name="taxcharges" value = {this.state.taxcharges} onChange={this.texesandchargesinput}  required/>
                  <div ><br></br></div>
                  <div ><br></br></div>
                  <label>Delivery Fee </label><div ><br></br></div>
                  <input type="number" className="form-control"   name="deliveryfee" value = {this.state.deliveryfee} onChange={this.deliveryfeeinput}  required/>
                 


                </div>

                  
                    <div ><br></br></div>
             
              
                  <div ><br></br></div>
                <div className="col-sm-12">
                 <center> <button type="submit" className="btn btn-primary">submit</button></center>
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

export default Texes_And_Charges
