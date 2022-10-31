import React, { Component } from 'react'
import K_Footer from '../K_Footer';
import K_Header from '../K_Header';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';


// import {Addrawmaterial} from '../../../Components/admincomponent/links/Kitchenlinks';
import {ADD_MENU} from '../../../Components/admincomponent/links/Kitchenlinks';

export class Addmenu extends Component {
    

    state = {
        food_name:'',
        food_image:'',
        foodType:'veg',
        price:'',
     
     
        values: [],
  
        quantity:'',
        preCat:[],
        Load:false,
        progress:'',
        invalidImage:'',
        i:0,
        taskList: [{ index: Math.random(), raw: "" }],
      }
    
    

      // componentDidMount() {
      //   this.setState({
      //     Load:true,
      //   })
      //    fetch(
      //    "http://localhost:5000/admin/get_category")
      //       .then((res) => res.json())
      //       .then((json) => {
      //       console.log(json);
      //        this.setState({
      //         preCat :json
      //        });
       
      //           this.setState({
      //             Load:false
      //           });
              
      //       })

      // }




      // componentDidMount() {
      //   this.setState({
      //     Load:true,
      //   })
      //    fetch(
      //     VIEWRAW,{
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       userid: sessionStorage.getItem('userid'), // Use your own property name / key
      //     }),
      //   })
      //       .then((res) => res.json())
      //       .then((json) => {
      //       console.log(json);
      //        this.setState({
      //         preCat :json
      //        });
       
      //           this.setState({
      //             Load:false
      //           });
              
      //       })

      // }
      foodtypeinput = event =>{
        this.setState({ foodType:event.target.value})

      }


      food_nameinput = event =>{
        this.setState({ food_name:event.target.value})
      }

      priceinput = event =>{
        this.setState({ price:event.target.value})
      }

      food_quantityinput = event =>{
        this.setState({ quantity:event.target.value})
      }
      // food_QRinput=event=>
      // {
      //   this.setState({ url:event.target.value})
      // }


//       descinput = event =>{

// this.setState({ desc:event.target.value})
// console.log(this.state.desc)
    

//       }

    
      // food_imginput = event => {
      //   this.setState({ invalidImage: '' });
      //    const imageFile = event.target.files[0];

      //    var ImgSize = (imageFile.size)/(1024*1024);
      // // alert(ImgSize);
      //   // if (!imageFile) {
      //   //   this.setState({ invalidImage: 'Please select image.' });
      //   //   return false;
      //   // }
     
      //   if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      //     this.setState({ invalidImage: 'Please select valid image.' });
      //     console.log(this.state.invalidImage);
      //     return false;
      //   }
        
      //   if (ImgSize >='2') {
      //     this.setState({ invalidImage: 'File Size Is Large ! Select File Below  2MB ' });
      //     console.log(this.state.invalidImage);
      //     return false;
      //   }
      //   this.setState({  food_image : event.target.files[0]});
      // }

    handleSubmit = event =>  {
        event.preventDefault();

        if(this.state.invalidImage !=''){
          alert("Please Select Valid File !");
          return false;
        }
 

          // this.state.final_raw = this.state.raw1+'@'+this.state.values.join('@');

        // let data = { formData: this.state, userData: localStorage.getItem('user') }
        this.setState({
            Load :true,
           
            });
            const formData = new FormData();
            formData.append('p_image', this.state.food_image);
            formData.append('p_name', this.state.food_name);
            formData.append('p_price', this.state.price);
        
            formData.append('p_quantity', this.state.quantity);
            formData.append('p_foodtype', this.state.foodType);
            
        
          
     try{
      

        axios.post(ADD_MENU, formData , {
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
                // swal("Good job!", " you are successfully inserted", "success");
                // // if(swal)
                // // {
                // //    window.location.reload();
                // }
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
               
           
      
    
              }else if(res.data.msg=='exist'){
                this.setState({ invalidImage: '' });
               alert("Food Exists");
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
    _id:_id
  }
  try{
    axios.post(`http://localhost:5000/admin/deletecategory`, sendId , {
      headers:{'Content-Type': 'application/json'},
        })
      .then(res => {
         
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
            <li className="breadcrumb-item active" aria-current="page">Add  Menus</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Add  Menus</h1>
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
           
              {
              this.state.progress && <h5> {
                this.state.progress<100?
                `${this.state.progress}%` :"Photo Uploaded ,Please Wait Almost Done....!"}
                
                 </h5>
             
              }


                 {this.state.invalidImage && <h5 style={{ color: "red" }}  className="error"> {this.state.invalidImage}</h5>}
             
                     
                  <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >


                  <div ><br></br></div>


                  <div className="input-group  ">
                  <input type="text" className="form-control form-control-lg"  value={this.state.tiffin_no} name="tiifin_no" onChange={this.tiffin_noinput} placeholder="Tiffin No"  />
                                         

                                
                                            <span class="input-group-btn">  </span>
                              


                        <button type="" className="btn btn-dark">Insert</button>

                   </div>
              

              <div ><br></br></div>

             
       

                   
                   
                  <div ><br></br></div>
               
                <div className="col-sm-12">
               
                  <center><button type="submit" className="btn btn-primary ">Insert</button></center>
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

export default Addmenu