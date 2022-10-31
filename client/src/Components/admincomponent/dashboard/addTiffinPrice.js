// import React, { Component } from 'react'

// export class addTiffinPrice extends Component {
//   render() {
//     return (
//       <div>addTiffinPrice hello <h1> tifinco here!!!!!!!!1</h1></div>
//     )
//   }
// }

// export default addTiffinPrice



import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import swal from 'sweetalert';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
// import {GET_TIFFINPRICE, INSERT_TIFFIN_PRICE, DELETE_TIFFIN_PRICE} from '../../links/DeliveryLinks'
import {GET_TIFFINPRICE, INSERT_TIFFIN_PRICE, DELETE_TIFFIN_PRICE} from '../../../Components/admincomponent/links/superadminlinks';
export class AddTiffin_Price extends Component {
    state = 
    {
         preTiffinPrice:[],
         Load:false,
         Heatable:'',
         NonHeatable:'',
         Tax:''
    }

    componentDidMount() 
    {
        this.setState({
          Load:true,
        })
         fetch(GET_TIFFINPRICE,{
          method: 'POST',  headers: {'Content-Type': 'application/json' },
         
          body: JSON.stringify({
            userid: sessionStorage.getItem('userid'), // Use your own property name / key
          }),
        })
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
            json.map(TiffinPrice =>{
                this.setState({
                  Heatable: TiffinPrice.Heatable,
                  NonHeatable:TiffinPrice.NonHeatable,
                  Tax: TiffinPrice.Tax
                });
                console.log(TiffinPrice.Tax);
               }
  
               );
                this.setState({
                  Load:false
                });
              
            })

      }


     
      Heatableinput = event =>
      {
        this.setState({ Heatable:event.target.value })
      }

      NonHeatableinput = event =>
      {
        this.setState({  NonHeatable:event.target.value  })
      }
      Taxinput = event =>
      {
        this.setState({   Tax:event.target.value  })
      }


      handleSubmit = event =>  
      {
          event.preventDefault();

    
            const formData = 
            {
                 userid: sessionStorage.getItem('userid'),
                 Heatable:this.state. Heatable,
                 NonHeatable:this.state. NonHeatable,
                 Tax : this.state.Tax,
                 _id:'62fe357a9ae0be0ba91e6519',
            }
           try
           {
                axios.post(INSERT_TIFFIN_PRICE, formData , {
                headers:{'Content-Type': 'application/json'},
                onUploadProgress: data => {

                this.setState({
                  progress: Math.round((100 * data.loaded) / data.total)

                  });
                  },
                })
                .then(res => {
                    //alert(res.data);
                    console.log(res.status);
                    console.log(res.data);

                    if(res.data.msg=='success')
                    {         
                     console.log("success");
                       swal({
                        // title: "Good job",
                        text: " successfully inserted !",
                        icon: "success",
                        // content: 'You can place <b>anything</b> <i>you</i> want in here.',
                        buttons: [
                        'NO',
                        'YES'
                      ],
                    }).then(function(isConfirm)
                     {
                        if (isConfirm)
                        {
                        window.location.reload();
                        } 
                        else
                        {
                          //if no clicked => do something else
                        }
                       
                     });                                         
        
                    }
                    else if(res.data.msg=='exist')
                    {
                      this.setState({ invalidImage: '' });
                      alert("Tiffin Price Exist");
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


 handledelete = (_id)=>
 {
        this.setState({
          Load :true,
        
          });
        var sendId ={
          _id:_id,
          userid: sessionStorage.getItem('userid'),
        }
        try{
          axios.post(DELETE_TIFFIN_PRICE, sendId , {
            headers:{'Content-Type': 'application/json'},
              })
            .then(res => {
                //alert(res.data);
                console.log(res.status);
                console.log(res.data);
              
                if(res.data.msg=='success'){
               
                  console.log("success");
                  window.location.reload();
        
      
                }
                else
                {
           
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
          <h1 className="fs-4 mt-1 mb-0">Insert Tifin Price</h1>
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
                   <label>Heatable Tiffin Price </label><div ><br></br></div>
                  <input type="number" className="form-control"   name="Heatable" value= {this.state. Heatable} onChange={this.Heatableinput}  required/>
                  <div ><br></br></div>
                  <div ><br></br></div>
                  <label>NonHeatable Tiffin Price </label><div ><br></br></div>
                  <input type="number" className="form-control"   name="NonHeatable" value = {this.state.NonHeatable} onChange={this.NonHeatableinput}  required/>
                  <div ><br></br></div>
                  <div ><br></br></div>
                  <label>Tax And Charges </label><div ><br></br></div>
                  <input type="number" className="form-control"   name="Tax" value = {this.state.Tax} onChange={this.Taxinput}  required/>


                </div>

                  
                    <div ><br></br></div>
             
              
                  <div ><br></br></div>
                <div className="col-sm-12">
                 <center> <button type="submit" className="btn btn-primary">Insert</button></center>
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

export default AddTiffin_Price