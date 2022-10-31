import React, { Component } from 'react'
import K_Footer from '../K_Footer';
import K_Header from '../K_Header';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';


// import {Addrawmaterial} from '../../../Components/admincomponent/links/Kitchenlinks';
import {UNLIKEFOOD} from '../../../Components/admincomponent/links/Kitchenlinks';

export class  AddMasterunlikefood extends Component {
    

    state = {
        unlikefood:'',
     
     
     
        values: [],
  
        quantity:'',
        preCat:[],
        Load:false,
        progress:'',
        invalidImage:'',
        i:0,
        taskList: [{ index: Math.random(), raw: "" }],
      }
    
    

   


      unlikefood_input = event =>{
        this.setState({ unlikefood:event.target.value})
      }




handleSubmit = event =>  {
  event.preventDefault();


      const formData = {
          userid: sessionStorage.getItem('userid'),
          unlikefood:this.state.unlikefood,
        
      }
try{
  axios.post(UNLIKEFOOD, formData , {
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
        // alert("success");
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
    //     if(res.data.msg=='success'){
       

      
    //       alert("success");


        
    //           swal({
    //             title: "Good job",
    //             text: " successfully inserted !",
    //             icon: "success",
    //             buttons: [
    //               'NO',
    //               'YES'
    //             ],
    //           }).then(function(isConfirm) {
    //             if (isConfirm) {
    //            window.location.reload();
    //             } else {
    //               //if no clicked => do something else
    //             }
    //           });
             
    //       // window.location.reload();


    //     }
    //     else if(res.data.msg=='exist'){
    //       this.setState({ invalidImage: '' });
    //      alert(" food Name  Exist");
    //      window.location.reload();
    //     }

    //     this.setState({
    //       Load :false,
    //       // cname:'',
    //       // email:'',
    //       // mobile:'',
    //       // address:''
    //       });
      
    //   // console.log(res);
    //   // console.log(res.data);
     
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
    let { taskList } = this.state
    return (
      <>
       <K_Header/>
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
            <li className="breadcrumb-item active" aria-current="page">  Master Unlike food </li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0"> Master Unlike food </h1>
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
           
              {/* {
              this.state.progress && <h5> {
                this.state.progress<100?
                `${this.state.progress}%` :"Photo Uploaded ,Please Wait Almost Done....!"}
                
                 </h5>
             
              } */}


                 {this.state.invalidImage && <h5 style={{ color: "red" }}  className="error"> {this.state.invalidImage}</h5>}
             
                     
                  <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >


                  <div ><br></br></div>


                 <div className="col-lg-12">
                     <lable>   Unlike Food </lable>

                <input type="text" className="form-control"   name="unlikefood"  placeholder="unlikefood" onChange={this.unlikefood_input}  required autoComplete='off'/>
                </div>

              

                <div ><br></br></div>
   






            
   
               <div ><br></br>
               </div>
                   
                   
                  <div ><br></br></div>
               
                <div className="col-sm-12">
               
                  <button type="submit" className="btn btn-primary">Insert</button>
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
<K_Footer/>
      </>
    )
  }
}

export default AddMasterunlikefood