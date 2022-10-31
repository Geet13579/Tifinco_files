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

export class Menulist extends Component {
  state = {

    faq: [],
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
    let res = await axios.post(FAQSHOW,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},}).catch(err => console.log(err));
 
    const {perPage} = this.state;
    const faq = res.data;
    console.log(res.data)
    // alert(faq)
  //  this.state.count =faq.length;
    this.setState({
      faq,
      pages: Math.floor(faq.length / perPage)
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
        
          //  window.location = "/customer/FAQviewoneplan/"+_id;


           window.location = "/customer/FAQviewoneplan/"+_id; 
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
        const faq = res.data;
        this.setState({ faq });
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
      axios.post(FAQDELETE, sendId, {
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
    const {page, perPage, pages, faq} = this.state;
  this.state. items = faq.slice(page * perPage, (page + 2) * perPage);

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
            <li className="breadcrumb-item active" aria-current="page"> FAQ  List</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0"> FAQ  List</h1>
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
  {this.state.faq.map(productlist =>
    <option  value={productlist.question} />
    
  )}
</datalist>
<div><br></br></div>
<button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                          </div> 


                     

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
                          <tr style={{backgroundColor: "pink"}}>
                            <th>S.No</th>
                         
                            <th> Question</th>
                            <th>Answer</th>
                            <th>Action[Edit]</th>
                         
                            <th>Action[Delete]</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.items
                              .map(faqlist =>


                                <tr >
                        <td>{this.state.i = this.state.i + 1}</td>

                                  <td>{faqlist.question}</td>

                               <td>{faqlist.answer}</td>
                               
                               <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${rawmateriallist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => {  { this.handleupdate(faqlist._id) } }} className="btn btn-sm btn-primary" ><i className="fa fa-edit" /></button>
                                  </td>
                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${faqlist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => {  { this.handledelete(faqlist._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
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

export default Menulist