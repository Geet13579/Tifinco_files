import React, { Component } from 'react'
import Header from '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {PLAN_LIST,PLAN_SEARCH,PLAN_DELETE, } from '../../../Components/admincomponent/links/superadminlinks';
export class ViewProductlist extends Component {
  state = {

    products: [],
    filter_a:[],
    i: 0,
    Load: false,
    progress: '',
    invalidImage: '',
    count :0,
    plan_list :[],

  }

  componentDidMount() {
    axios.post(PLAN_LIST,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const products = res.data;

        this.setState({
            plan_list:res.data,
        })
       

      //  console.log(this.state.plan_list);
       
      })


  }
  // handledelete = (_id)=>
  //  {
  //    alert(_id);
  //    fetch(`http://localhost:5000/admin/deleteUser + ${_id} `,{
  //      method:'delete'
  //  }).then((result)=>{
  //    result.json().then((resp)=>{
  //      alert(resp);

  //    })
  //  })
  //  }
//search 

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
    axios.post(PLAN_SEARCH, sendId, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);
        const plan_list = res.data;

        this.state.count =plan_list.length;
        // console.log("FILTER_LINK");
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
          console.log( this.state.filter_a);


        this.setState({ plan_list });
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




  //delete images code

  handledelete = (_id) => {

  //alert(_id);
    this.setState({
      Load: true,

    });
    var sendId = {
      _id: _id,
      userid: sessionStorage.getItem('userid'),
    }
    try {
      axios.post(PLAN_DELETE, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);

          if (res.data.msg == 'success') {

            console.log("success");
            alert("Plan Deleted");
                       window.location.reload();


          } else {

            console.log("failure");

          }

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


 handleupdate =(_id)=>{

   window.location = "/foodplan/update/"+_id;
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
            <li className="breadcrumb-item active" aria-current="page">View Food Plan</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">View Food Plan</h1>
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
              
                {!this.state.Load ? (""
                ) : (<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                  height={100} width={50} /></div>)}

                {
                  this.state.progress && <h5> {
                    this.state.progress < 100 ?
                      `${this.state.progress}%` : "Photo Uploaded ,Please Wait Almost Done....!"}
                    {this.state.invalidImage && <h5 style={{ color: "red" }} className="error"> {this.state.invalidImage}</h5>}
                  </h5>

                }
                <div className="col-md-12">
                     
                  <div className="card">
                    <div className="card-body">

                    <div className="col-md-4"style={{float:"left"}}>
                       <lable><h4>Search plans by name</h4></lable>
                       <input class="form-control" type="text" list="data"  id="searchdata"/>

<datalist id="data">
  {this.state.products.map(productlist =>
    <option  value={productlist.p_name} />
  )}
</datalist>
<div><br></br></div>
<button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                          </div>

<br></br>


                        <div><br></br></div>
                      
                      {this.state.plan_list !="" ?(
                      <table className="table myDataTable table-hover align-middle mb-0">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th> Plan Name</th>
                            <th>Action[View,Update]</th>
                            <th>Action[Delete]</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.plan_list
                              .map(plan_data =>


                                <tr >
                                  <td>{this.state.i = this.state.i + 1}</td>

                                  <td>{plan_data.plan_name} : {plan_data.plan_pref} </td>

                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${productlist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => { if (window.confirm('Do you want to update?')) { this.handleupdate(plan_data._id) } }} className="btn btn-sm btn-primary" ><i className="fa fa-edit" /></button>
                                  </td>

                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${productlist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => { if (window.confirm('Do you want to delete?')) { this.handledelete(plan_data._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
                                  </td>
                                </tr>
                              )}
                        </tbody>
                      </table>
                      ):(<div  className="col-md-2"><h1></h1><h6>No Data</h6></div>)}

                    </div>
                  </div>
                </div>
              </div> {/* .row end */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default ViewProductlist