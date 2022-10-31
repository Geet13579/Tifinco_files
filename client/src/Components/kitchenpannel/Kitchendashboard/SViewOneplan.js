import React, { Component } from 'react'
import K_Footer from '../K_Footer';
import K_Header from '../K_Header';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_PLAN_BY_ID }  from '../../../Components/admincomponent/links/Kitchenlinks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class SViewOneplan extends Component {
    

    state = {
         usr_plan :[],
        Load:false,
    
      }

    

      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
            GET_PLAN_BY_ID,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userid: sessionStorage.getItem('userid'),
            _id:this.props.match.params.id // Use your own property name / key
          }),
        })
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
             this.setState({
                usr_plan :json
             });
            

                 this.setState({
                    Load:false
                  });
                
            })//CLOSING OF FIRST FETCH

      }




  render() {

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
            <li className="breadcrumb-item active" aria-current="page">Update Food Product</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">User Plan </h1>
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

                 {this.state.usr_plan.map(plan=>(<>
                    <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >


<div ><br></br></div>
<div className="col-lg-12">
<b><label>Customer Id</label></b>  : &nbsp;&nbsp;{plan.customerid}<div><br></br></div>

</div>
<div ><br></br></div>

<div className="col-lg-12">
<b><label>Plan Type</label></b>  : &nbsp;&nbsp;{plan.plantype}<div><br></br></div>

</div>
<div ><br></br></div>

<div className="col-lg-12">
<b><label>Meal Time[Lunch,Dinner,Both]</label></b>  : &nbsp;&nbsp;{plan.meal_time}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Meal Preference [Veg,Nonveg]</label></b>  : &nbsp;&nbsp;{plan.mealpreference}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Meal Days [Duration]</label></b>  : &nbsp;&nbsp;{plan.meal_days} Days<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Starting Date[Purchase Date]</label></b>  : &nbsp;&nbsp;{plan.starting_date}<div><br></br></div>

</div>
         
<div className="col-lg-12">
<b><label> Unlike Food </label></b>  : &nbsp;&nbsp;<br></br>
{plan.unlike_foods.map(data =>(<> 
<table>
Veg :  {data.veg}<br></br>
Nonveg:  {data.nonveg}<br></br>
{/* Wednesday :  {data.w =="1"?("Yes"):("No")}<br></br>
Thursday :  {data.th =="1"?("Yes"):("No")}<br></br>
Friday :  {data.fr=="1"?("Yes"):("No")}<br></br>
Saturday :  {data.sat =="1"?("Yes"):("No")}<br></br>
Sunday:  {data.s =="1"?("Yes"):("No")}<br></br> */}

</table>
</>))}
</div>
 <div ><br></br></div> 
  
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Tiffin Type</label></b>  : &nbsp;&nbsp;{plan.tiffintype}<div><br></br></div>

</div>
<div ><br></br></div>

<div className="col-lg-12">
<b><label>Repeat On</label></b>  : &nbsp;&nbsp;<br></br>
{plan.repeat_on.map(data =>(<> 
<table>
Monday :  {data.m =="1"?("Yes"):("No")}<br></br>
Tuesday :  {data.t =="1"?("Yes"):("No")}<br></br>
Wednesday :  {data.w =="1"?("Yes"):("No")}<br></br>
Thursday :  {data.th =="1"?("Yes"):("No")}<br></br>
Friday :  {data.fr=="1"?("Yes"):("No")}<br></br>
Saturday :  {data.sat =="1"?("Yes"):("No")}<br></br>
Sunday:  {data.s =="1"?("Yes"):("No")}<br></br>

</table>




</>))}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Non Veg Preference Day</label></b>  : &nbsp;&nbsp;{plan.nonveg_pre_d.map(data =>(<>
    <table>
Monday :  {data.m =="1"?("Yes"):("No")}<br></br>
Tuesday :  {data.t =="1"?("Yes"):("No")}<br></br>
Wednesday :  {data.w =="1"?("Yes"):("No")}<br></br>
Thursday :  {data.th =="1"?("Yes"):("No")}<br></br>
Friday :  {data.fr=="1"?("Yes"):("No")}<br></br>
Saturday :  {data.sat =="1"?("Yes"):("No")}<br></br>
Sunday:  {data.s =="1"?("Yes"):("No")}<br></br>

</table>


</>))}<div><br></br></div>

</div>

<div ><br></br></div>
</form>
                 
                 </>))}
  


              
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

