import React, { Component } from 'react'
import K_Header from '../K_Header';
import K_Footer from '../K_Footer';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_PLAN_BY_ID } from '../../../Components/admincomponent/links/superadminlinks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class ViewOnePlan extends Component {
    

    state = {
         usr_plan :[],
        Load:false,
    
      }

    

      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
            `https://tifinco.com:5000/admin/fetch_PerticulerOrder`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userid: sessionStorage.getItem('userid'),
            token:this.props.match.params.token // Use your own property name / key
          }),
        })
            .then((res) => res.json())
            .then((json) => {
            console.log(json);
            // alert(json)
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
            <li className="breadcrumb-item active" aria-current="page">  Order </li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0"> Order  list </h1>
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
<b><label>paymentid</label></b>  : &nbsp;&nbsp;{plan.paymentid
}<div><br></br></div>

</div>
<div ><br></br></div>

<div className="col-lg-12">
<b><label>paymentmethod</label></b>  : &nbsp;&nbsp;{plan.paymentmethod}<div><br></br></div>

</div>
<div ><br></br></div>

<div className="col-lg-12">
<b><label>finalprice</label></b>  : &nbsp;&nbsp;{plan.finalprice}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Orderid</label></b>  : &nbsp;&nbsp;{plan.Orderid}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>userid</label></b>  : &nbsp;&nbsp;{plan.userid}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>totalPrice</label></b>  : &nbsp;&nbsp;{plan.totalPrice}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>orderStatus</label></b>  : &nbsp;&nbsp;{plan.orderStatus}<div><br></br></div>

</div>
<div ><br></br></div>
<div className="col-lg-12">
<b><label>txn_time</label></b>  : &nbsp;&nbsp;{plan.txn_time}<div><br></br></div>

</div>
<div ><br></br></div>
<div ><br></br></div>
<div className="col-lg-12">
<b><label>cf_orderid</label></b>  : &nbsp;&nbsp;{plan.cf_orderid}<div><br></br></div>

</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Item</label></b>  : &nbsp;&nbsp;<br></br>
{/* {plan.repeat_on.map(data =>(<>  */}
 <table>



name :{plan.item.name}<br></br>
quantity :{plan.item.quantity}<br></br>
{/* Wednessday :{plan.repeat_on.w=="1"?"yes":"no"}<br></br>
Thursday :{plan.repeat_on.th=="1"?"yes":"no"}<br></br>
Friday :{plan.repeat_on.fr=="1"?"yes":"no"}<br></br>
Sarturday :{plan.repeat_on.sat=="1"?"yes":"no"}<br></br>
Sunday :{plan.repeat_on.sun=="1"?"yes":"no"} */}
</table>





</div>
<div ><br></br></div>


<div className="col-lg-12">
<b><label>Non Veg Preference Day</label></b>  : &nbsp;&nbsp;

    {/* <table>


Monday :{plan.nonveg_pre_d.m=="1"?"yes":"no"}<br></br>
Tuesday :{plan.nonveg_pre_d.t=="1"?"yes":"no"}<br></br>
Wednessday :{plan.nonveg_pre_d.w=="1"?"yes":"no"}<br></br>
Thursday :{plan.nonveg_pre_d.th=="1"?"yes":"no"}<br></br>
Friday :{plan.nonveg_pre_d.fr=="1"?"yes":"no"}<br></br>
Sarturday :{plan.nonveg_pre_d.sat=="1"?"yes":"no"}<br></br>
Sunday :{plan.nonveg_pre_d.sun=="1"?"yes":"no"}

</table> */}


{/* </>))} */}
<div><br></br></div>

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

