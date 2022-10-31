import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {STORE_PLAN_DAYS,DELETE_PLAN_DAYS,GET_PLAN_DAYS,} from '../../../Components/admincomponent/links/superadminlinks';


export default class ManageCategory extends Component {
    

    state = {
           prePlandays:[],
        Load:false,
        i:0,
        plandays:''
      }
    
   
      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
            GET_PLAN_DAYS,{
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
                prePlandays :json
             });
       
                this.setState({
                  Load:false
                });
              
            })

      }
       
      plandaysinput = event =>{
      
        this.setState({
         plandays:event.target.value,

        })

      }

    

    handleSubmit = event =>  {
        event.preventDefault();

    
            const formData = {
                userid: sessionStorage.getItem('userid'),
                plandays:this.state.plandays
            }
     try{
        axios.post(STORE_PLAN_DAYS, formData , {
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
      
    
              }else if(res.data.msg=='exist'){
                this.setState({ invalidImage: '' });
               alert("Plan day Exist");
               window.location.reload();
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
    axios.post(DELETE_PLAN_DAYS, sendId , {
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
    {console.log(this.state.percentage)}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">manage plan days</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Manage Plan Days</h1>
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

                  <input type="number" className="form-control"   name="plan_days"  placeholder="Plan Days" onChange={this.plandaysinput}  required/>
                </div>
                  
                    <div ><br></br></div>
             
              
                  <div ><br></br></div>
                <div className="col-sm-12">
                 <center> <button type="submit" className="btn btn-primary">Insert</button></center>
                </div>
                </form>
        <h5>Plan Days List</h5>
                <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Plan Days</th>
     
      <th scope="col">Action</th>
    
    </tr>
  </thead>
  <tbody>
  {console.log(this.state.i=0)}
    {this.state.prePlandays.map(plan =>(
    <tr>
      <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
      <td> {plan.plandays}</td>

 

      <td style={{ verticalAlign: "middle" }}>
        
 <button onClick={() => { if(window.confirm('Do you want to delete  image?')){this.handledelete(plan._id)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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