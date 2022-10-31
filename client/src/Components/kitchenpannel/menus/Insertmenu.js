import React, { Component } from 'react'
import K_Footer from '../K_Footer';
import K_Header from '../K_Header';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';

// import { INSERTRANDOM,RANDOMFOOD1,TODAY_LUNCH,TODAY_DINNER,RANDOMFOODREF,UPDATELUNCH,UPDATETODAYDINNER} from '../../../Components/admincomponent/links/Kitchenlinks';
// import {Insertmenu} from '../../../Components/admincomponent/links/Kitchenlinks';
import {ADD_MENU,RAWMATERIAL_LIST ,TODAY_LUNCH,TODAY_DINNER,K_TODAYMENURAWMATERIAL} from '../../../Components/admincomponent/links/Kitchenlinks';
// import { events } from '../../../../../server/model/adminmodel/kitchenmodel/Menus_M';
// import {} from '../../../Components/admincomponent/links/Kitchenlinks';
// import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

import { Menulist } from './Menulist';

export class Insertmenu extends Component {
    

    state = {
        food_name:'',
        food_image:'',
        foodType:'veg',
        price:'',
        raw1:'',
        Rawmaterial:'',
        values: [],
        final_raw:'',
        final_qr1:'',
        quantity:'',
        preraw:[],
        Load:false,
        progress:'',
        invalidImage:'',
        i:0,
        food_rawmaterial1:'',
        food_rawmaterial2:'',
        food_rawmaterial3:'',
        todaylunch:[],
        todaydinner:[],
        taskList: [{ index: Math.random(), raw: "" }],
        curDT : new Date().toLocaleString(),
      }
    


      


      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
          K_TODAYMENURAWMATERIAL,{
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
              todaylunch :json
             });
       
                this.setState({
                  Load:false
                });
                // fetch(
                //   TODAY_DINNER,{
                //   method: 'POST',
                //   headers: {
                //     'Content-Type': 'application/json',
                //   },
                //   body: JSON.stringify({
                //     userid: sessionStorage.getItem('userid'), // Use your own property name / key
                //   }),
                // })
                //     .then((res) => res.json())
                //     .then((json) => {
                //     console.log(json);
                //      this.setState({
                //       todaydinner :json
                //      });
               
                //         this.setState({
                //           Load:false
                //         });
                //       });///second 


              
            })//first fetch 

      }
      foodtypeinput = event =>{
        this.setState({ foodType:event.target.value})

      }
  
      // food_qrinput=event=>
      // {
      //   this.setState({ foodqr:event.target.value})
      // }
      food_name1input=event=>
      {
        this.setState({ food_name:event.target.value})
      }
      food_rawmaterialinput1=event=>
      {
        this.setState({food_rawmaterial1:event.target.value})
      }
      food_rawmaterialinput2=event=>
      {
        this.setState({food_rawmaterial2:event.target.value})
      }
    
      food_rawmaterialinput3=event=>
      {
        this.setState({food_rawmaterial3:event.target.value})
      }
    


    handleSubmit = event =>  {
        event.preventDefault();

       
        // this.state.final_qr1 = this.state.qr1+'@'+this.state.values.join('@');

        //   this.state.final_raw = this.state.raw1+'@'+this.state.values.join('@');
          this.state.sum=this.state.food_rawmaterial1+'@'+this.state.food_rawmaterial2+'@'+this.state.food_rawmaterial3;

        // let data = { formData: this.state, userData: localStorage.getItem('user') }
        this.setState({
            Load :true,
           
            });
            const formData = new FormData();
         
            // formData.append('p_foodqr', this.state.foodqr);
            formData.append('p_name', this.state.food_name);
           formData.append('food_rawmaterial', this.state.sum);
        
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
            <li className="breadcrumb-item active" aria-current="page">Add   Food Menu</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Add   Food Menu</h1>
          <small className="text-muted"></small>
        </div>
        <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
        <p> {this.state.curDT}</p> 
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
                <div className="col-lg-12">
{/*  ----------------------------------------------------  Today lunch ------------------------------------------------------------- */}
                <div class="col-sm-12">
                 
         
                                      
                                      
                <label>Today Lunch </label> 
                                       <select class="form-control" name= "food_rawmaterial1" onChange={this.food_rawmaterialinput1}tabindex="-90" >
                                    
                                       
                                       <option value="">--</option>
                                    
                                        {this.state.todaylunch.map(todaylunch1 =>(
                                            <option   value={todaylunch1.RM1}>{todaylunch1.RM1}</option>
                                       
                                          
                                          
                                        ))}
                                        </select>
                                        <div ><br></br></div>
                                        <select class="form-control" name= " food_rawmaterial2" onChange={this.food_rawmaterialinput2} tabindex="-90" >
                             
                                        <option value="">--</option>
                                    
                                    
                                        {this.state.todaylunch.map(todaylunch1 =>(
                                     
                                            <option   value={todaylunch1.RM2}>{todaylunch1.RM2}</option>
                                  
                                          
                                          
                                        ))}
                                        </select>
                                        <div ><br></br></div>
                                        <select class="form-control" name= " food_rawmaterial3" onChange={this.food_rawmaterialinput3} tabindex="-90" >
                                   
                                       
                                        <option value="">--</option>
                                    
                                        {this.state.todaylunch.map(todaylunch1 =>(
                                          
                                            <option   value={todaylunch1.RM3}>{todaylunch1.RM3}</option>
                                          
                                          
                                        ))}
                                        </select>
                                    </div>
                                    </div>
              
                                   
                                    <div ><br></br></div>

{/*  ----------------------------------------------------  Today  Dinner  ------------------------------------------------------------- */}
                                    {/* <div >
                                   <label> Today Dinner </label> 
                                 


                                       <select class="form-control" name= "food_rawmaterial1" onChange={this.food_rawmaterialinput1}tabindex="-90" >
                                    
                                       
                                    <option value="">--</option>
                                 
                                    {this.state.todaydinner.map(todaydinner1=>(
                                          <option   value={todaydinner1.RM1}>{todaydinner1.RM1}</option>
                                         
                                          
                                       ))}
                                     </select>
                                     <div ><br></br></div>
                                     <select class="form-control" name= " food_rawmaterial2" onChange={this.food_rawmaterialinput2} tabindex="-90" >
                          
                                     <option value="">--</option>
                                 
                                 
                                     {this.state.todaydinner.map(todaydinner1=>(
                                          <option   value={todaydinner1.RM2}>{todaydinner1.RM2}</option>
                                         
                                          
                                       ))}
                                     </select>
                                     <div ><br></br></div>
                                     <select class="form-control" name= " food_rawmaterial3" onChange={this.food_rawmaterialinput3} tabindex="-90" >
                                
                                    
                                     <option value="">--</option>
                                 
                                     {this.state.todaydinner.map(todaydinner1=>(
                                          <option   value={todaydinner1.RM3}>{todaydinner1.RM3}</option>
                                         
                                          
                                       ))}
                                     </select>
                              
                                   </div> */}
<div><br></br></div>









                                        {/* //////////////////////////////////////////////////////////////////////////////////////////// */}




                                        
    
   

    

  

                                
                                        

         

                                   
         <div className="col-lg-12">
             <lable> Food Name</lable>

              <input type="text" className="form-control"   name="food_name"  placeholder="Food Name" onChange={this.food_name1input}  required autoComplete='off'/>
             </div>



               <div ><br></br></div>
  {/* <div ><br></br></div>


                 <div className="col-lg-12">
                     <lable>  qr Name</lable>

                <input type="text" className="form-control"   name="food_qr"  placeholder="food_qr Name" onChange={this.food_qrinput}  required autoComplete='off'/>
                </div>

              

                <div ><br></br></div> */}


                  <div ><br></br></div> 




                <div ><br></br></div>
                
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

export default Insertmenu