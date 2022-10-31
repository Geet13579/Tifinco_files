import React, { Component } from 'react'
import K_Footer from '../K_Footer';
import K_Header from '../K_Header';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
// let USER_PLAN_SEARCH = "https://tifinco.com:5000/admin/searchuserplan";
import {GET_CUSTOMER_PLAN_DETAIL,USR_PLAN_FILTER,USER_PLAN_SEARCH,ACTIVE_USER_PLAN } from '../../../Components/admincomponent/links/Kitchenlinks';


export default class Subscribetion extends Component {
    

    state = {
          cust_list_plan:[],
        Load:false,
        i:0,
        count:0,
        filter_a:[],
        list_plan:'',
          }
    
   
      componentDidMount() {
        this.setState({
          Load:true,
        })
         fetch(
            GET_CUSTOMER_PLAN_DETAIL,{
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
                this.state.count =json.length;
               // console.log(this.state.count);
               // console.log(REACT_APP_FILTER_LINK);
                // this.state.count =105;
                var c =0;
                 for(var j=0;j<this.state.count;j++){
                   if(c<this.state.count){
                     c= c+10;
                     this.setState({ filter_a: [...this.state.filter_a, c] })
                /// this.state.filter_a = c;
            
                   }else{
                     console.log("break");
                     break;
                   }
                  }
                // console.log( this.state.filter_a);
            

            // console.log(json);
             this.setState({
              cust_list_plan :json
             });
       
                this.setState({
                  Load:false
                });
              
            })

      }
       
      
      handleSearch = ()=>{

        var searchdata = document.getElementById('searchdata').value;
        // alert(searchdata);
      
        this.setState({
          Load: true,
      
        });
        var sendId = {
          _id: searchdata,
          userid: sessionStorage.getItem('userid'),
        }
        try {
          axios.post(USER_PLAN_SEARCH, sendId, {
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => {
              //alert(res.data);
            //   console.log(res.status);
            //   console.log(res.data);
              const cust_list_plan = res.data;
              this.setState({ cust_list_plan });
              // if (res.data.msg == 'success') {
      
              //   console.log("success");
              //   window.location.reload();
      
      
              // } else {
      
              //   console.log("failure");
      
              // }
      
              this.setState({
                Load: false,
      
              });
      
            })
        } catch (error) {
      
          console.log(error)
          this.setState({
            Load: false,
          });
          console.log("internal server error");
        }
      
      }
      
      
      //handle limits
      
      handleLimit = ()=>{
      
        var limit_val = document.getElementById('lmt_val').value;
        // alert(searchdata);
       // alert(limit_val);
        this.setState({
          Load: true,
      
        });
        var sendId = {
          limit_val: limit_val,
          userid: sessionStorage.getItem('userid'),
        }
        try {
          axios.post(USR_PLAN_FILTER, sendId, {
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => {
              //alert(res.data);
            //   console.log(res.status);
            //   console.log(res.data);
              const cust_list_plan = res.data;
              this.setState({ cust_list_plan });
              // if (res.data.msg == 'success') {
      
              //   console.log("success");
              //   window.location.reload();
      
      
              // } else {
      
              //   console.log("failure");
      
              // }
      
              this.setState({
                Load: false,
      
              });
      
            })
        } catch (error) {
      
          console.log(error)
          this.setState({
            Load: false,
          });
          console.log("internal server error");
        }
      
      }


      activeUsers= (e) => 
      {
              // console.log(e.target.id);
              // this.props.id()   
        var Myid = e.target.id;
       console.log(Myid);
        this.setState({
          Load: true,
        });
        var sendId = {
          id : Myid,
          userid: sessionStorage.getItem('userid')   
        }
    
        console.log( sendId);
        try {
                axios.post(ACTIVE_USER_PLAN ,sendId,
                { headers: { 'Content-Type': 'application/json'}, })

                .then(res => {
                  
                  console.log("hello goggle i am purnima ");
                  console.log(res.data);
                  
                  const cust_list_plan = res.data;

                  this.setState({cust_list_plan} );

                }).catch(err => console.log(err))

                  this.setState({
                    Load: false,
                  });
      
            
             }
         catch (error) 
         {
      
              console.log(error)
              this.setState({
                Load: false,
              });
              console.log("internal server error");
          }
      
      }
      
      handleMore  = (_id) =>{

      
  //  window.location = "/customer/viewoneplan/"+_id;  
   window.location="/KitchenRoutes/Kitchedashboard/K_oneplan/"+_id;
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
            <li className="breadcrumb-item active" aria-current="page">customer plan</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Customer Plan </h1>
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


  <div className="col-md-4"style={{float:"left"}}>
                       <lable><h4>Search Customer</h4></lable>
                       <input class="form-control" type="text" list="data"  id="searchdata"/>

<datalist id="data">
  {this.state.cust_list_plan.map(cust =>
    <option  value={cust.customerid} />
  )}
</datalist>
<div><br></br></div>
<button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                          </div>


                          {/* <div className="col-md-4">
                    
                          </div> */}

                          <div className="col-md-4" style={{float:"right"}}>
                       <lable><h4>Filter</h4></lable>
                  
                   
               
                                        {/* <label class="form-label">Select</label> */}
                                        <select class="form-control" id= "lmt_val" onChange = {this.handleLimit} tabindex="-90" required>
                                        <option value="">Choose Limit</option>
                                      
                                        {this.state.filter_a. map(val => <option value={val-10}>
                                        {val == 10?("0-"+val):((val-10)+1 +"-"+(val) )}
                                          
                                          </option>)}
                               
                                  
                                        <option value="all">All</option>
                                     
                                        </select>
                                  
                                    
                      <div><br></br></div>

                          </div>

                          <div class="col-md-4" style={{float:"right"}}>
                          < button class="btn btn-primary" type="button" onClick={this.activeUsers}  id ="1" >Active Users</button>
                          <spacer type="horizontal" width="100" height="100"> </spacer>
                            <button class="btn btn-primary" type="button" onClick={this.activeUsers} id = "0">Expired Users</button>
                            </div>
                        <div><br></br></div>
           
    
        <h5>Customer Plan List</h5>
                <table className="table table-striped">
  <thead>
  <tr style={{backgroundColor: "#00ffff"}}>
      <th scope="col">S.No</th>
      <th scope="col">Customer Id</th>
      <th scope="col">Meal Time</th>
      <th scope="col">Meal Preference</th>
      <th scope="col">Purchase Date </th>
      <th scope="col">Plan Duration </th>
      {/* <th scope="col">Repeat On  </th>
      <th scope="col">Non Veg Preference Day </th> */}
      <th scope="col">Tifin Type </th>
      <th scope="col">Action </th>

    </tr>
  </thead>
  <tbody>
  {console.log(this.state.i=0)}
    {this.state.cust_list_plan.map(cust =>(
    <tr>
      <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i+1}</th>
      <td> {cust.customerid}</td>
      <td> {cust.meal_time}</td>
      <td> {cust.mealpreference}</td>
      <td> {cust.starting_date}</td>
      <td> {cust.meal_days}</td>
      {/*<td> {cust.repeat_on.map(data =>{})}</td>
       <td> {cust.nonveg_pre_d.map(data =>{})}</td> */}
      <td> {cust.tiffintype}</td>

      <td><button type="button" onClick={() => { if (window.confirm('Do you want to see?')) { this.handleMore(cust._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-eye" /></button>     </td>
                             
      {/* <td> <img src={cust.profileimage} alt="profile img" height={70} width={70}></img></td> */}
    

  
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
<K_Footer/>
      </>
    )
  }
}