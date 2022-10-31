import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {ADD_FOOD, FETCH_FOOD_CAT,} from '../../../Components/admincomponent/links/superadminlinks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class Addfoodproduct extends Component {
    

    state = {
        food_name:'',
        food_image:'',
        foodType:'veg',
        price:'',
        desc1:'',
        description:'',
        values: [],
        final_desc:'',
        category:'',
        preCat:[],
        Load:false,
        progress:'',
        invalidImage:'',
        i:0,
        taskList: [{ index: Math.random(), desc: "" }],
        offer:'',
        extra:'',
        tifinco_special:''
      }
    
      handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
      }
      addClick(){
        this.setState(prevState => ({ values: [...prevState.values,'']}))
      }
      removeClick(i){
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
      }

      createUI(){
        return this.state.values.map((row, i) =>
            <div key={i}>
             {/* <input class="form-control form-control-lg" type="text" value={row||''}  /> */}
             <textarea rows={3} className="form-control no-resize"   onChange={this.handleChange.bind(this, i)} placeholder="Add description.." defaultValue={row||''} />
             <input type='button' className="btn btn-danger" value='remove' onClick={this.removeClick.bind(this, i)}/>
             <div ><br></br></div>
            </div>
            

        )
     }


      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
          FETCH_FOOD_CAT,{
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
       
                this.setState({
                  Load:false
                });
              
            })

      }
      foodtypeinput = event =>{
        this.setState({ foodType:event.target.value})
        console.log(this.state.foodType);

      }
     desc1input = event =>{
        this.setState({ desc1:event.target.value})
        console.log(this.state.desc1);
      }

      food_nameinput = event =>{
        this.setState({ food_name:event.target.value})
        console.log(this.state.food_name);
      }

      priceinput = event =>{
        this.setState({ price:event.target.value})
        console.log(this.state.price);
      }

      category_nameinput = event =>{
        this.setState({ category:event.target.value})
        console.log(this.state.category);
      }

      extrainput = event =>{
        this.setState({ extra:event.target.value})
        console.log(this.state.extra);
      }

      discountofferinput = event =>{
        this.setState({ offer:event.target.value})
        console.log(this.state.offer);
      }
     tifinco_specialinput = event =>{
        this.setState({ tifinco_special:event.target.value})
        console.log(this.state.tifinco_special);
      }


//       descinput = event =>{

// this.setState({ desc:event.target.value})
// console.log(this.state.desc)
    

//       }

    
      food_imginput = event => {
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
        this.setState({  food_image : event.target.files[0]});
        console.log(this.state.food_image);
      }

    handleSubmit = event =>  {
        event.preventDefault();

        if(this.state.invalidImage !=''){
          alert("Please Select Valid File !");
          return false;
        }
 

          this.state.final_desc = this.state.desc1+'@'+this.state.values.join('@');

        // let data = { formData: this.state, userData: localStorage.getItem('user') }
        this.setState({
            Load :true,
           
            });
            const formData = new FormData();
            formData.append('p_image', this.state.food_image);
            formData.append('p_name', this.state.food_name);
            formData.append('p_price', this.state.price);
            formData.append('extra', this.state.extra);
            formData.append('offer', this.state.offer);
            formData.append('tifinco_special', this.state.tifinco_special);
            formData.append('p_description', this.state.final_desc );
            formData.append('p_category', this.state.category);
            formData.append('p_foodtype', this.state.foodType);
            
        console.log(formData);
          
     try{
        axios.post(ADD_FOOD, formData , {userid:sessionStorage.getItem('userid')},{
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

//  handledelete = (_id)=>{
 

//   this.setState({
//     Load :true,
  
//     });
//   var sendId ={
//     _id:_id,
//     userid: sessionStorage.getItem('userid'),
//   }
//   try{
//     axios.post(`http://tifinco.com:5000/admin/deletecategory`, sendId , {
//       headers:{'Content-Type': 'application/json'},
//         })
//       .then(res => {
         
//           if(res.data.msg=='success'){
         
//             console.log("success");
//             window.location.reload();
  

//           }else{
     
//             console.log("failure");
           
//           }

//           this.setState({
//             Load :false,
          
//             });
      
//       })
//     }  catch(error) {
     
//             console.log(error)
//             this.setState({
//                 Load :false,
//                 });
//             console.log("internal server error");
//           }
// }


  render() {
    let { taskList } = this.state
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
            <li className="breadcrumb-item active" aria-current="page">Add Food Product</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Add Food Product</h1>
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

                <input type="text" className="form-control"   name="food_name"  placeholder="Food Name" onChange={this.food_nameinput}  required autoComplete='off'/>
                </div>

              

                <div ><br></br></div>
                    <div className="col-lg-12">
                  <input type="number" className="form-control"   name="price" placeholder="price"  onChange={this.priceinput}  required autoComplete='off'/>
                </div>
                <div ><br></br></div>


                    <div className="col-lg-12">
                  <input type="text" className="form-control"   name="discount_offer" placeholder="Offer Discount"  onChange={this.discountofferinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>


                <div className="col-lg-12">
                  <input type="text" className="form-control"   name="extra" placeholder="Extra "  onChange={this.extrainput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>


                <div className="col-lg-12">
                  <input type="text" className="form-control"   name="tifinco_special" placeholder="Tifinco Special "  onChange={this.tifinco_specialinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>





  <div>
  <div className="form-check-inline">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="veg" onChange={this.foodtypeinput}  defaultChecked />
    <label className="form-check-label" htmlFor="exampleRadios1">
    <span>&nbsp;&nbsp;</span>   Veg
    </label>
  </div>
  <div className="form-check-inline">
    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onChange={this.foodtypeinput}  defaultValue="nonveg" />
    <label className="form-check-label" htmlFor="exampleRadios2">
    <span>&nbsp;&nbsp;</span>  Non Veg
    </label>
  </div>
 
</div>


                <div ><br></br></div>
                <div className="col-lg-12">
                <div class="col-sm-12">
               
                                        {/* <label class="form-label">Select</label> */}
                                        <select class="form-control" name= "category" onChange = {this.category_nameinput} tabindex="-90" required>
                                        <option value="">--category--</option>
                                        {this.state.preCat.map(cat_data =>(
                                            <option value={cat_data.cat_name}>{cat_data.cat_name}</option>
                                          
                                        ))}
                                        </select>
                                    </div>
                                    </div>
                
                                   
                                    <div ><br></br></div>
                    <div>
                    <div ><br></br></div>






                <div className="col-lg-12">

                <input type="file" className="form-control"   name="food_image"   onChange={this.food_imginput}  required/>
                </div>
                <div ><br></br></div>
               
                
               </div>
               <div ><br></br></div>
                <div className="col-sm-12">
                  <textarea rows={3} className="form-control no-resize"  name="description" onChange={this.desc1input} placeholder="Add description.." defaultValue={""} />
                </div>
                <div ><br></br></div>
                
               
                <div>
               
                {this.createUI()}
              
                 
                </div>
                
                   
                   
                  <div ><br></br></div>
               
                <div className="col-sm-12">
                <button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Row</button>  <span>&nbsp;&nbsp;</span>
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
<Footer/>
      </>
    )
  }
}

