import React, { Component } from 'react'
import Header from '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import  {REACT_APP_FILTER_LINK} from './links';

import {PRODUCT_LIST ,SEARCH_LINK,PRODUCT_DELETE,FILTER_LINK} from '../../../Components/admincomponent/links/superadminlinks';
export class ViewProductlist extends Component {
  state = {

    products: [],
    filter_a:[],
    i: 0,
    Load: false,
    progress: '',
    invalidImage: '',
    count :0

  }

  componentDidMount() {
    axios.post(PRODUCT_LIST,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const products = res.data;
        this.state.count =products.length;
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
        this.setState({ products });
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
    axios.post(SEARCH_LINK, sendId, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);
        const products = res.data;
        this.setState({ products });
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
    axios.post(FILTER_LINK, sendId, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);
        const products = res.data;
        this.setState({ products });
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


    this.setState({
      Load: true,

    });
    var sendId = {
      _id: _id,
      userid: sessionStorage.getItem('userid'),
    }
    try {
      axios.post(PRODUCT_DELETE, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);

          if (res.data.msg == 'success') {

            console.log("success");
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

   window.location = "/product/update/"+_id;
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
            <li className="breadcrumb-item active" aria-current="page">View Food Product</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">View Food Product</h1>
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
                       <lable><h4>Search Product</h4></lable>
                       <input class="form-control" type="text" list="data"  id="searchdata"/>

<datalist id="data">
  {this.state.products.map(productlist =>
    <option  value={productlist.p_name} />
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
                        <div><br></br></div>
                      {this.state.products !="" ?(
                      <table className="table myDataTable table-hover align-middle mb-0">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th> Food Name</th>
                            <th>Food Image</th>
                            <th>Food category</th>
                            <th>Food Type </th>
                            <th>Food Price</th>
                            <th>Food description</th>
                            <th>Food rating </th>
                            {/* <th>Offer On food </th>
                            <th>Extra </th> */}
                            <th>Action[Update]</th>
                            <th>Action[Delete]</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.products
                              .map(productlist =>


                                <tr >
                                  <td>{this.state.i = this.state.i + 1}</td>

                                  <td>{productlist.p_name}</td>

                                  <td><img src={productlist.p_image}  height={"100px"} width={"70px"} alt="corporate image" ></img></td>
                                  <td>{productlist.p_category}</td>
                                  <td>{productlist.p_foodtype}</td>
                                  <td>{productlist.p_price}</td>
                                  <td>  <Popup trigger={<button className="btn btn-sm btn-danger"> View </button>}   position="top">
                                      {productlist.p_description.split('@').map(function (value, index, array) {
                                          return <h6>{index+1}. {value}</h6>
                                        })
                                      }
                                    
                                                                        </Popup></td>
                                  <td>{productlist.p_rating}</td>
                                  {/* <td>{productlist.offer}</td>
                                  <td>{productlist.extra}</td> */}
                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${productlist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => { if (window.confirm('Do you want to update?')) { this.handleupdate(productlist._id) } }} className="btn btn-sm btn-primary" ><i className="fa fa-edit" /></button>
                                  </td>

                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${productlist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => { if (window.confirm('Do you want to delete?')) { this.handledelete(productlist._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
                                  </td>
                                </tr>
                              )}
                        </tbody>
                      </table>
                      ):"No Data"}

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