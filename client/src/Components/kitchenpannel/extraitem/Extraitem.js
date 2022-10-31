import React, { Component } from 'react'
import K_Header from '../K_Header';
import K_Footer from '../K_Footer';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import swal from 'sweetalert';

import QRCode from 'qrcode.react';
import ReactPaginate from 'react-paginate';
import jsPDF from 'jspdf';
import { SHOW_MENU, SEARCHMENUS, DELETEMENUS, FILTERMENUS } from '../../../Components/admincomponent/links/Kitchenlinks';
// import {GET_PLANINFO,GET_TIFFINS, GET_USERDATA, INSERT_TIFFIN_ALLOCATED_DATA} from '../../links/DeliveryLinks';
export class Extraitem extends Component {
  state = {

  
    filter_a: [],
    i: 0,
    Load: false,
    progress: '',
    invalidImage: '',
    count: 0,
    list: [],
    perPage: 3,
    page: 0,
    extra_item: [],
    pages: 0,
    user_list: [],
    status:''
  }




  componentDidMount() {

    axios.post(`https://tifinco.com:5000/admin/EXtraitem`, {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    })
      .then(res => {
        const user_list = res.data;
        // this.state.user_list=user_list.length;
        user_list.map(d =>

          this.setState({

            extra_item: d.extra_item,
          }),

        )





        //   )
        console.log(this.state.item_name);
        console.log(this.state.item_qty);

        this.setState({ user_list: user_list });
      })

    //               const user_list = this.state.user_list.map(data => {
    //   data.extra_item.map((d,index)=>(

    //  this.state.extra_item=d.item_name,
    //  this.state.extra_item2=this.state.extra_item.length
    // alert()

    //   ))
    // })




  }

  Extrainput1=event=>
      {
        this.setState({status:event.target.value})
      }

 
      handleSubmit = event =>  {
        event.preventDefault();

       
      

        this.setState({
            Load :true,
           
            });
            const formData = new FormData();
         
    
        
            formData.append('status', this.state.status);
            formData.append('_id', this.props.match.params.id);
            
        
          
     try{
      

        axios.post("https://tifinco.com:5000/admin/UpdateEXtraitem", formData , {
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
                  text: " successfully   Updated !",
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


    // alert( this.state. items);


    return (
      <>
        <K_Header />
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
                    <li className="breadcrumb-item active" aria-current="page"> Extra item List</li>
                  </ol>
                </div>
                <div className="col-auto">
                  <div className="d-md-flex d-none justify-content-lg-end align-items-center">

                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-auto">
                  <h1 className="fs-4 mt-1 mb-0"> Extra Item  List</h1>
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





                      <div className="col-md-4" style={{ float: "right" }}>
                        {/* <lable><h4>Filter</h4></lable> */}




                        {/* <select class="form-control" id= "lmt_val" onChange = {this.handleLimit} tabindex="-90" required>
                  <option value="">Choose Limit</option>
                
                  {this.state.filter_a. map(val => <option value={val-10}>
                  {val == 10?("0-"+val):((val-10)+1 +"-"+(val) )}
                    
                    </option>)}
         
            
                  <option value="all">All</option>
               
                  </select>  */}


                        <div><br></br></div>

                      </div>
                      <form onSubmit={this.handleSubmit}    >
                      <div><br></br></div>
                      <table>
                        <tr>
                          <th>Extra Item </th>
                          <th> Quantity Item </th>
                        </tr>
                        <tr>
                        {/* {this.state.i = this.state.i + 1} */}
                          <td>{this.state.user_list.map((data) => (data.extra_item.map((d, i) => (<li> Extra Item :<input class="form-control"
                            type="text" value={d.item_name} key={i} /></li>)))

                          )} </td>
                          <td>{this.state.user_list.map((data) => (data.extra_item.map((d, i) => (<li>  Quantity :<input class="form-control"
                            type="text" value={d.item_qty} key={i} /></li>)))

                          )} </td>
                        </tr>
                      </table>

                      {/* 
                        {this.state.user_list.map((data) => (data.extra_item.map((d,i)=>(<li> Extra Item{this.state.i=this.state.i+1} :<input class="form-control"  
                      type="text"   value={d.item_qty}  key={i}   /></li> ))) 
                       
                        )} 
                       <button type="button" class="btn btn-success"> Total </button>
                       
                    
                        
                            {this.state.user_list.map((data) =>(data.extra_item.map((d,a)=>(<li> Quantity{this.state.j=this.state.j+1} :<input class="form-control" 
                       type="text" id ={"qty"+a} key={a} onChange={()=>{this.showAnswer(a)}}  value={d.item_qty} required  /></li> ))
                      ))}  <div><br></br></div>  
                        <button type="button" class="btn btn-success">Total</button> */}
                      <div><br></br></div>
                      {/* {this.state.menuss !="" ?( */}

                      {/* ):"No Data"} */}
                     
                      <select class="form-select" aria-label="Default select example" name="status"onChange={this.Extrainput1}>
                        <option selected>Status</option>
                        <option value="Available">Delivered</option>
                        <option value="Processing"> Processing</option>
                        <option value="cencle">cancel</option>
                      </select>
                      <div><br></br></div>
                 <center>   <button type="button" class="btn btn-info">  Update</button></center> 
              </form> 
                    </div>
                  </div>
                </div>
              </div> {/* .row end */}
            </div>
          </div>
        </div>
        {/* //////////////////////////////////////////////// */}



        {/* <div className="pagination-txt">Display  {this.state.menus} relevant
                      jobs
                  </div> */}

        {/* -------------------------------------------###########3 pagination start */}








        <K_Footer />
      </>
    )
  }
}

export default Extraitem