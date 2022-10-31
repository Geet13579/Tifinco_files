import React, { Component } from 'react'
import Header from '../C_Header';

import Footer from '../C_Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
export class Customer_list extends Component {

  state=
  {
    cust_list_plan:[],
    cust_info :[],
    Load:false,
    i:0,
    count:0,
    filter_a:[],
    list_plan:'',
    Email:'',
    userid:'',
    Mobile:'',
    token:''
  }
  componentDidMount()
  {
    this.setState({
      Load:true,
    })

    // start with axios
    
      axios.post("https://tifinco.com:5000/admin/getCustProfile", {userid: sessionStorage.getItem('userid')}, {
        headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
        })
        .then(res => {
        const cust_list_plan = res.data;
      
        this.setState({ cust_list_plan :cust_list_plan});

       this.state.cust_list_plan.map(d=>
                        
                          this.setState({
                           
                            userid:d.userid,
                            name: d.name
                 
                          }),
                     
                       
                      )
       
        console.log( this.state.userid);
        console.log( this.state.name);
         
            })

            var formdata =
            {
             userid : this.state.userid , 
             name : this.state.name      
           }

            axios.post("https://tifinco.com:5000/admin/getuserInfo", formdata,{userid: sessionStorage.getItem('userid')}, {
              headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
              })
              .then(res => {
                const cust_info = res.data;
              
                this.setState({ cust_info :cust_info});
                console.log(this.state.cust_info);

              //   this.state.cust_info.map(d=>
                        
              //     this.setState({
                   
              //       token:d.token,
               
                  
              //     }),
             
               
              // )

 
    })
for (var i =0;i<this.state.cust_list_plan.length;i++){
  if(this.state.userid == this.state.token)
  {
    var Email = this.state.cust_list_plan.email;
    var Mobile = this.state.cust_list_plan.mobile;
    this.setState({Email:Email, Mobile:Mobile})
    break;
  }
}
   
     
                console.log( this.state.cust_info);
             
                    



    // stop 
//      fetch("https://tifinco.com:5000/admin/createProfile",{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userid: sessionStorage.getItem('userid'), // Use your own property name / key
//       }),
//     })
//         .then((res) => res.json())
//         .then((json) => {
//                // console.log(json);
//             this.state.count =json.length;

//             var c =0;
//              for(var j=0;j<this.state.count;j++){
//                if(c<this.state.count){
//                  c= c+10;
//                  this.setState({ filter_a: [...this.state.filter_a, c] })
//             /// this.state.filter_a = c;
        
//                }else{
//                  console.log("break");
//                  break;
//                }
//               }
//             // console.log( this.state.filter_a);
        

//         // console.log(json);
//          this.setState({
//           cust_list_plan :json
//          });
//    //===================================== (   second fetch   )=========================================================
     
// // ======================================closing of second fetch() =================================================

//             this.setState({
//               Load:false
//             });
          
//         })

//         fetch("https://tifinco.com:5000/admin/getuserInfo",{
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             userid: sessionStorage.getItem('userid'), // Use your own property name / key
//           }),
//         })
//             .then((res) => res.json())
//             .then((json) => {
//                    console.log(json);
   
//              this.setState({
//               cust_info :json
//              });
              
//             })
  }

  pausePlan = (token)=>
  {
    window.location = "/CustmerRoutes/Cust_support/PauseCust_plan/"+ token;  
  }

   handleMore  = (token) =>
   {

      window.location = "/CustmerRoutes/Cust_support/ViewOneCustProfile/"+ token;  
      // window.location = "/KitchenRoutes/Rawmaterialroutes/Updaterawmaterial/"+_id;
      // window.location = "/CustmerRoutes/Cust_support/ViewOneCustProfile"+_id;  
      // window.location = "/CustmerRoutes/Cust_support/second"

   }
  render() {
    
    return (
      <>
       <Header/>
      {/* main body area */}
<div className="main px-lg-5 px-md-2">

  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    {/* {console.log(this.state.percentage)} */}
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
                  
              {/* { !this.state.Load ?(""
                 ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                 height={100} width={50} /></div>)} */}


  <div className="col-md-4"style={{float:"left"}}>
                       <lable><h4>Search Customer</h4></lable>
                       <input class="form-control" type="text" list="data"  id="searchdata"/>

<datalist id="data">
  {/* {this.state.cust_list_plan.map(cust =>
    <option  value={cust.name} />
  )} */}
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
                                      
                                        {/* {this.state.filter_a. map(val => <option value={val-10}>
                                        {val == 10?("0-"+val):((val-10)+1 +"-"+(val) )}
                                          
                                          </option>)} */}
                               
                                  
                                        <option value="all">All</option>
                                     
                                        </select>
                                  
                                    
                      <div><br></br></div>

                          </div>
                     
                        <div><br></br></div>
           
    {console.log( this.state.userid)}
        <h5>Customer Plan List</h5>
                <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Email</th>
      {/* <th scope="col">Address</th> */}
      <th scope="col">Phone No </th>
      {/* <th scope="col">Plan Type </th> */}
      <th scope="col">Pause Plan </th>
      <th scope="col">Action </th>

    </tr>
  </thead>
  <tbody>
  {console.log(this.state.i=0)}
    {this.state.cust_info.map(cust =>(
    <tr>
      <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i+1}</th>
      <td> {cust.name}</td>
      <td> {cust.email}</td>
      {/* <td> {cust.mealpreference}</td> */}
      <td> {cust.mobile}</td>
      {/* <td> {cust.plantype}</td>
      <td> {cust.amount}</td> */}
<td><button type="button" onClick={() => { if (window.confirm('Do you want to pause your plan ?')) { this.pausePlan(cust.token) } }} className="btn btn-sm btn-danger" ><i className="fa fa-eye" /></button></td>
      <td><button type="button" onClick={() => { if (window.confirm('Do you want to see your plan detail?')) { this.handleMore(cust.token) } }} className="btn btn-sm btn-danger" ><i className="fa fa-eye" /></button>     </td>
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

export default Customer_list
