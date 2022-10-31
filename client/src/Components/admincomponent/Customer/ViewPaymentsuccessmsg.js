import React, { Component } from 'react'
import Header from '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import  {REACT_APP_FILTER_LINK} from './Filterlinks';
import swal from 'sweetalert';
// import Pagination from './Pagination.css'

import {FAQSHOW,FAQDELETE,FAQSEARCH,} from '../../../Components/admincomponent/links/superadminlinks';
import ReactPaginate from 'react-paginate';

export class ViewPaymentsuccessmsg extends Component {
  state = {

    paymentmsg: [],
    filter_a:[],
    i: 0,
    Load: false,
    progress: '',
    invalidImage: '',
    count :0,
    list: [],
    perPage: 6,
    page: 0,
  
    pages: 0,

  }


 
  componentDidMount() {
    this.makeHttpRequest();
  }
 
  makeHttpRequest = async() => {
    let res = await axios.post(`https://tifinco.com:5000/admin/paymsg_show`,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},}).catch(err => console.log(err));
 
    const {perPage} = this.state;
    const paymentmsg = res.data;
    console.log(res.data)
    // alert(paymentmsg)
  //  this.state.count =paymentmsg.length;
    this.setState({
      paymentmsg,
      pages: Math.floor(paymentmsg.length / perPage)
    });
  };
 
  handlePageClick = (event) => {
    let page = event.selected;
    this.setState({page})
    // alert(page)
  }


  

  handleupdate =(_id)=>{
   



    swal("Are you sure you want to do Update?", {
     title: "Are you sure?",
   })
     .then(function(isConfirm) {
         if (isConfirm) {
        
          //  window.location = "/customer/paymentmsgviewoneplan/"+_id;


           window.location = "/customer/Paymentsuccessmsg_update/"+_id; 
         } else {
           //if no clicked => do something else
         }
   
     
     
 
       });
    
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
    axios.post(FAQSEARCH, sendId, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);
        const paymentmsg = res.data;
        this.setState({ paymentmsg });
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






  handledelete = (_id) => {


    this.setState({
      Load: true,

    });
    var sendId = {
      _id: _id,
      userid: sessionStorage.getItem('userid'),
    }
    try {
      axios.post(`https://tifinco.com:5000/admin/paymentsucmsg_Delete`, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);

          if (res.data.msg == 'success') {

            console.log("success");

            swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this imaginary  file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {

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
              } else {
                swal("Your imaginary file is safe!");
              }
            });



            // window.location.reload();


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




  render() {
    const {page, perPage, pages, paymentmsg} = this.state;
  this.state. paymentmsgs = paymentmsg.slice(page * perPage, (page + 2) * perPage);

// alert( this.state. items);

 
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
            <li className="breadcrumb-item active" aria-current="page"> Payment Success Message  List</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0"> Payment Success Message  List</h1>
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

                     {/* <div className="col-md-4"style={{float:"left"}}>
                       <lable><h4>Search Product</h4></lable>
                       <input class="form-control" type="text" list="data"  id="searchdata"/>

<datalist id="data">
  {this.state.paymentmsg.map(productlist =>
    <option  value={productlist.question} />
    
  )}
</datalist>
<div><br></br></div>
<button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                          </div>  */}


                     

                          <div className="col-md-4" style={{float:"right"}}>
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
                        <div><br></br></div>
                      {/* {this.state.menuss !="" ?( */}
                      <table className="table myDataTable table-hover align-middle mb-0">
                        <thead>
                          <tr style={{backgroundColor: "#00ffff"}}>
                            <th>S.No</th>
                         
                            <th> Paragraph  1</th>
                            <th>paragraph 2</th>
                            <th>Invitationmsg</th>
                            <th>Referral</th>
                            <th>Action[Edit]</th>
                         
                            <th>Action[Delete]</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                           this.state. paymentmsgs
                              .map(paymentmsglist =>


                                <tr >
                        <td>{this.state.i = this.state.i + 1}</td>

                                  <td>{paymentmsglist.paragraph1}</td>

                               <td>{paymentmsglist.paragraph2}</td>
                               <td>{paymentmsglist.invitationmsg}</td>
                               <td>{paymentmsglist.refrralcode}</td>
                               
                               <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${rawmateriallist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => {  { this.handleupdate(paymentmsglist._id) } }} className="btn btn-sm btn-primary" ><i className="fa fa-edit" /></button>
                                  </td>
                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${paymentmsglist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => {  { this.handledelete(paymentmsglist._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
                                  </td>
                                </tr>
                             
                              )}
              
                        </tbody>
                      </table>
                      {/* ):"No Data"} */}

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


<ReactPaginate

         previousLabel={'previous'}
         nextLabel={'next'}
         breakLabel={'...'}
         pageCount={pages}
    
         marginPagesDisplayed={2}
         pageRangeDisplayed={3}
         onPageChange={this.handlePageClick}

         containerClassName={'pagination justify-content-center'}
       
         pageClassName={'page-item'}
         pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
         previousClassName={'page-item'}
         nextClassName={'page-item'}
         nextLinkClassName={'page-link'}
         breakClassName={'page-item'}
         breakLinkClassName={'page-link'}
         activeClassName={'active'}
       />
 


    

        <Footer />
      </>
    )
  }
}

export default ViewPaymentsuccessmsg