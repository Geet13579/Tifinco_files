 import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_PLANS,ADD_PLANS,CHKPLAN_EXIST} from '../../../Components/admincomponent/links/superadminlinks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class AddPlan extends Component {


    state = {

        invalidImage_item:'',
        invalidImage_feacher:'',

        i:0,
       
        plan_item :[{id: Math.random(),item_image:'',itemheading:'',itemImgValidation:0}],
        plan_description:[{id: Math.random(),heading_desc:''}],

        plantype_data:[],
        Load:false,
        plantype:'',
        strikethrough_price:0,
        permeal_price:0,
        permonth_price:0,
        discount :0,

        progress:'',
        chkplan : false,
        LoadForchk :false,
        bg_image:"",
        invalidImage:'',

        bg1_color:'',
        bg2_color:'',
        lb1_color:'',
        lb2_color:'',
        plan_pref :'veg'

      }


      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
          GET_PLANS,{
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
           // console.log(json);
             this.setState({
              plantype_data :json
             });

                this.setState({
                  Load:false
                });

            })

      }//closing of component did mount


      plantypechange =  event =>{
        this.setState({ plantype :event.target.value});
        var planType = document.getElementById('plantype').value;
        var planpref = document.getElementById('planpref').value;
       // alert(planType);
        var formData = {
            plan_name:planType,
            planpref:planpref,
            userid:sessionStorage.getItem('userid'),

        }

        try{
          axios.post(CHKPLAN_EXIST, formData , {
            headers:{'Content-Type': 'application/json'},
                   })
            .then(res => {
                // //alert(res.data);
                // console.log(res.status);
                // console.log(res.data);

                if(res.data.msg=='success'){

                  this.setState({
                    chkplan:false,
                  })

                }else if(res.data.msg=='exist'){
                    this.setState({
                      chkplan:true,
                    })
                
                 alert("Plan Exists");
                 window.location.reload();
                }

                
                        })
          }  catch(error) {

                  console.log(error)
                  // this.setState({
                  //     Load :false,
                  //     });
                  console.log("internal server error");
                }



      }

      planprefchange =  event =>{
        this.setState({ plan_pref :event.target.value})

      }

      strikethrough_price =  event =>{
        this.setState({ strikethrough_price :event.target.value})

      }
     
      permeal_price =  event =>{
        this.setState({ permeal_price :event.target.value})

      }
      permonth_price =  event =>{
        this.setState({ permonth_price :event.target.value})

      }
      discount =  event =>{
        this.setState({ discount :event.target.value})

      }


      bg1 =  event =>{
        this.setState({ bg1_color :event.target.value})

      }

      bg2 =  event =>{
        this.setState({ bg2_color :event.target.value})

      }

      lb1 =  event =>{
        this.setState({ lb1_color :event.target.value})

      }

      lb2 =  event =>{
        this.setState({ lb2_color :event.target.value})

      }



      createPlanDescription(){

        return this.state.plan_description.map((row, i) =>
            <div key={i}>
              <label> Description {i+1}</label><br></br>
             <textarea rows={2} className="form-control no-resize inline"  name="heading_desc"  onChange={this.handleChangeInputForDescription.bind(this, row.id)} placeholder="Add description.." defaultValue={row.desc_val||''} required/><br>
             </br>
           {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.handleRemoveFieldsForDescription.bind(this, row.id)}/>):("")}
                    <br></br><br></br>
            </div>


        )


      }

      handleChangeInputForDescription(id, event){
        const plan_description = this.state.plan_description.map(i => {
        if(id === i.id) {



            i[event.target.name] = event.target.value


        }
        return i;
      })

      this.setState({ plan_description });
    }

    handleAddFieldsForDescription(){
      this.setState(prevState => ({ plan_description: [...prevState.plan_description,{ id: Math.random(),heading_desc:''}]}))
    }

  handleRemoveFieldsForDescription(id){
      let plan_description= [...this.state.plan_description];
      plan_description.splice(plan_description.findIndex(value =>value.id===id),1);
      this.setState({ plan_description });

    }






      createFeatures(){

        return this.state.plan_desc.map((row, i) =>
            <div key={i}>
              <label> Feature {i+1}</label><br></br>
              <label style={{color:"red"}}> {row.IV == 1?("choose right file(PNG,JPG,JPEG,GIF) & size <1MB"):("")}</label><br></br>
             {/* <input class="form-control form-control-lg" type="text" value={row||''}  /> */}
             <input type="file" className="form-control"  name="icon_image"  onChange={this.handleChangeInput.bind(this, row.id)}  required></input><br></br>
             <input type="text" className="form-control"  name="heading" placeholder='Heading..'  onChange={this.handleChangeInput.bind(this, row.id)} required></input><br></br>
             <textarea rows={2} className="form-control no-resize inline"  name="desc_val"  onChange={this.handleChangeInput.bind(this, row.id)} placeholder="Add description.." defaultValue={row.desc_val||''} /><br>
             </br>
           {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.handleRemoveFields.bind(this, row.id)}/>):("")}
                    <br></br><br></br>
            </div>


        )
     }//closing of plan features



    setBG = (event)=>{
      this.setState({ invalidImage: '' });
      const imageFile = event.target.files[0];
      if (imageFile == undefined) {
        this.setState({ invalidImage: 'Please select BG image.' });
        return false;
      }
   
      var ImgSize = (imageFile.size)/(1024*1024);
 
  
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


      this.setState({
        bg_image: event.target.files[0],
      })
      
     
    }








      createPlanItem(){

      return this.state.plan_item.map((row, i) =>
          <div key={i}>
            <label> Item {i+1}</label><br></br>
            <label style={{color:"red"}}> {row.itemImgValidation == 1?("choose right file(PNG,JPG,JPEG,GIF) & size <1MB"):("")}</label><br></br>
           {/* <input class="form-control form-control-lg" type="text" value={row||''}  /> */}
           <input type="file" className="form-control"  name="item_image"  onChange={this.handleChangeInputForItem.bind(this, row.id)}  required></input><br></br>
           <input type="text" className="form-control"  name="itemheading" placeholder='Heading..'  onChange={this.handleChangeInputForItem.bind(this, row.id)} required></input><br></br>

         {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.handleRemoveFieldsForItem.bind(this, row.id)}/>):("")}
                  <br></br><br></br>
          </div>


      )
   }




   handleChangeInputForItem(id, event){
      
    const plan_item = this.state.plan_item.map(i => {

    if(id === i.id) {
      // i.itemImgValidation = 0;
      if(event.target.name ==='item_image'){

        var ImgSize;
  
        i[event.target.name] = event.target.files[0];

        const imageFile = event.target.files[0];
            if (imageFile == undefined) {
               // this.setState({ invalidImage: 'Please select  image.' });
                i.itemImgValidation = 1;
               
              }else{ 

                ImgSize = (imageFile.size)/(1024*1024);
                if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
                      i.itemImgValidation = 1;
         
                 if (ImgSize >='1') {
                      i.itemImgValidation = 1;
         
                      }//checking size
         
         
                }else{
         
                 if (ImgSize >='1') {
                         i.itemImgValidation = 1;
         
                  }else{
                         i.itemImgValidation = 0;
         
                     }//checking size
         
         
         
                }
         
               }
             
    
    

      }else{

        i[event.target.name] = event.target.value
      }

    }
    return i;
  })

  this.setState({ plan_item });
}


handleAddFieldsForItem(){

  this.setState(prevState => ({ plan_item: [...prevState.plan_item,{ id: Math.random(),item_image:'',itemheading:'' }]}));

}

handleRemoveFieldsForItem(id){
  let plan_item= [...this.state.plan_item];
  plan_item.splice(plan_item.findIndex(value =>value.id===id),1);
  this.setState({ plan_item });

}



    handleSubmit = event =>  {
        event.preventDefault();

            if(this.state.invalidImage !=""){
                alert("Choose Correct BG Image ");
                return false;
            }

        //for items
         this.state.invalidImage_item ="";
           console.log(this.state.plan_item) ;
           this.state.plan_item.map((val)=>{
             console.log(val.itemImgValidation);
             if(val.itemImgValidation == 1 ){
               this.state.invalidImage_item ="Please choose right image";
               console.log("found");
             }

           })

           if(this.state.invalidImage_item !=''){
            alert("Please Select Valid Image For Item!");
            return false;
          }


        this.setState({
            Load :true,

            });
            const formData = new FormData();
            formData.append('plan_pref', this.state.plan_pref);
            formData.append('plan_type', this.state.plantype);
            formData.append('plan_strikethrough_price', this.state.strikethrough_price);
            formData.append('permeal_price', this.state.permeal_price);
           formData.append('permonth_price', this.state.permonth_price );
            formData.append('discount', this.state.discount);

            formData.append('bg1_color', this.state.bg1_color);
            formData.append('bg2_color', this.state.bg2_color);

            formData.append('lb1_color', this.state.lb1_color);

            formData.append('lb2_color', this.state.lb2_color);


            formData.append('plan_description', JSON.stringify(this.state.plan_description));
            formData.append('plan_item', JSON.stringify(this.state.plan_item));

            formData.append('files',this.state.bg_image);

            this.state.plan_item.map((val)=>{
              console.log(val.item_image);
              formData.append('files',val.item_image);

            })

           

     try{
        axios.post(ADD_PLANS, formData , {userid:sessionStorage.getItem('userid')},{
          headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},
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

              if(res.data.msg=='success'){



                console.log("success");
                alert("Data Inserted");
                 window.location.reload();


              }else if(res.data.msg=='exist'){
                this.setState({ invalidImage: '' });
               alert("Food Exists");
              //  window.location.reload();
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

      }//closing of form submit








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
            <li className="breadcrumb-item active" aria-current="page">Add Food Plan</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">

          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Add Food Plan</h1>
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
                        <br></br>

                        <div class="col-sm-12">

                        {/* <label class="form-label">Select</label> */}
                        <select class="form-control" id= "plantype" onChange = {this.plantypechange} tabindex="-90" required>
                        <option value="">--Choose Plan Type--</option>
                        {this.state.plantype_data.map(plantype_data =>(
                            <option value={plantype_data.plan_name}>{plantype_data.plan_name}</option>

                        ))}
                        </select>
                    </div>
                            <br></br>
                            <div class="col-sm-12">

                            <label class="form-label">Select Plan Preference</label> 
                           <select class="form-control" id= "planpref" onChange = {this.planprefchange} tabindex="-90" required>
                           
                             {this.state.plan_pref === "veg"?(<><option value="veg" selected>Veg</option> <option value="nonveg">Non Veg</option></>):
                             (  <><option value="veg" >Veg</option> <option value="nonveg" selected>Non Veg</option></>)} 
                             
   
                         
                           </select>
                       </div>
                               <br></br>


                        <div className="col-lg-12">
                          <label>Background Image </label>
                        <input type="file" className="form-control" name='bg_img'  placeholder="Choose Background Image" onChange={this.setBG}  required autoComplete='off'/>
                        </div>


                        <br></br>


                        <div className="col-lg-12">

                        <input type="number" className="form-control"   placeholder="strikethrough price" onChange={this.strikethrough_price}  required autoComplete='off'/>
                        </div>


                        <br></br>


                        <div className="col-lg-12">

                        <input type="number" className="form-control"   placeholder="Per meal price" onChange={this.permeal_price}  required autoComplete='off'/>
                        </div>

                        <br></br>

                        <div className="col-lg-12">

                        <input type="number" className="form-control"   placeholder="Per month price" onChange={this.permonth_price}  required autoComplete='off'/>
                        </div>

                        <br></br>

                        <div className="col-lg-12">

                        <input type="number" className="form-control"   placeholder="discount" onChange={this.discount}  required autoComplete='off'/>
                        </div>

                        <br></br>


                        <div>
                        <label><b>Plan Background Styles</b></label>
                        <br></br>
                        <input type="text" className="form-control"   placeholder="Background color 1" onChange={this.bg1}  required autoComplete='off'/>
                        <br></br>
                        <input type="text" className="form-control"   placeholder="Background color 2" onChange={this.bg2}  required autoComplete='off'/>


                      </div>
                      <br></br>

                      <div>
                      <label><b>Plan Label Styles</b></label>
                      <br></br>
                      <input type="text" className="form-control"   placeholder="Label color 1" onChange={this.lb1}  required autoComplete='off'/>
                      <br></br>
                      <input type="text" className="form-control"   placeholder="Lable  color 2" onChange={this.lb2}  required autoComplete='off'/>


                    </div>
                    <br></br>


                        <div>
                        <label><b>Plan Description</b></label>
                        <br></br>
                      {this.createPlanDescription()}

                    <button type="button" className="btn btn-primary"  onClick={this.handleAddFieldsForDescription.bind(this)} >Add Description</button>
                         <span>&nbsp;&nbsp;</span>

                      </div>
                      <br></br>




                        <div>
                        <label><b>Plan Items</b></label>
                        <br></br>
                      {this.createPlanItem()}

                    <button type="button" className="btn btn-primary"  onClick={this.handleAddFieldsForItem.bind(this)} >Add Items</button>
                         <span>&nbsp;&nbsp;</span>

                      </div>
                      <br></br>


                 



                        <br></br>

                        {this.state.chkplan ==false? (
                <div className="col-sm-12">
                {/* <button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Row</button>  <span>&nbsp;&nbsp;</span> */}
                <center>  <button type="submit" className="btn btn-primary">Insert</button></center>
                </div>

                ):("")}


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
