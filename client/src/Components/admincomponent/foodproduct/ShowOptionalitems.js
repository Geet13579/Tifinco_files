import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';
import axios from 'axios';
import Footer from '../../../Components/admincomponent/Footer'
import QRCode from 'qrcode.react';

import ReactLoading from "react-loading";
import jsPDF from 'jspdf';
import {SHOW_OPTIONAL_ITEM,DELETE_OPTIONAL} from '../../../Components/admincomponent/links/superadminlinks';
import {SHOW_TIFFIN_LIST,SEARCH_TIFFINS} from '../links/DeliveryLinks';


class TodoApp extends React.Component {
  state = {

    tiffins: [],
    filter_a:[],
    i: 0,
    Load: false,
    progress: '',
    invalidImage: '',
    count :0,
    offset: 0,
    
    perPage: 10,
    currentPage: 0,
    search_tiffins:''
   
  
   
 

  }
  constructor() {
    super();
    this.state = {
      todos:[],
      // todos: ['a','b','c','d','e','f','g','h','i','j','k'],
      currentPage: 1,
      todosPerPage: 3,
      value:0,
      countlast:0
    };


    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {

    axios.post(SHOW_OPTIONAL_ITEM,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const todos = res.data;
    //   console.log(todos)
        this.setState({ todos });

      })


  }

  handleupdate =(_id)=>{
// console.log(_id)
    window.location = "/product/updateoptionalitem/"+_id;
  }



handlemove =(_id)=>{


var sendId = {
      _id: _id,
      userid:sessionStorage.getItem('userid')
     
    }
    // alert(sendId._id);
    try {
      axios.post(DELETE_OPTIONAL, sendId, {
        headers: { 'Accept':'application/json','Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);

          alert("Are You Sure");
           window.location.reload();

          
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



  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    this.setState({value: this.state.value+1});
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((data, index) => {
      return (

      
                                        <tr key={index}>
                                      
                                          <td id="tiffin_no">{index+1}</td>
                                          <td>{data.tiffintype}</td>
                                          <td>{data.title}</td>
                                          <td>


    {data.optionals.map((d,index)=>{
    return (  <tr>
      
        <td>{d.options}</td><td></td>
        <td>{d.price}</td>
    </tr>)
    })}
  


</td>
{/* {data.optionals.map((d,index)=>{
    return (<td>{d.price}{d.options}</td>
        
        )
})} */}
                                          
 <td>
 <button type="button" onClick={() => { if (window.confirm('Do you want to update?')) { this.handleupdate(data._id) } }}  className="btn btn-sm btn-primary"><i className="fa fa-pencil" /></button> 
</td>
<td> <button type="button" onClick={() => {{ this. handlemove(data._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button></td>

                                          
                
                                        </tr>
                                    
        
      );
    });

// console.log(renderTodos)
    // Logic for displaying page numbers
    const pageNumbers = [];
    // const preNumbers = [];
    const NextNumber = [];
 
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {

      // console.log("legnth" ,todos.length )
      // console.log(i)

      // if(i==1){
      //  preNumbers.push(i);
    
      // }


        if(i<=5){
     pageNumbers.push(i);
  
      }
      else {
      NextNumber.push(i);
      //  console.log(count)
   

      


      }
    }
    // console.log("page",pageNumbers)
    // console.log("previ",preNum)
    // console.log("next",NextNum)

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-item" style={{padding:'3px'}} ><a id={number}
        onClick={this.handleClick}  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#" key={number}> {number}</a>       </li>
   
        


      );
    });


    // const previousPage = preNumbers.map(number => {
    //   return (
    //     <li className="page-item" style={{padding:'3px'}} ><a id={number}
    //     onClick={this.handleClick}  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#" key={number}> previous</a>       </li>
    


    //   );
    // });

    const NextPage = NextNumber.map((number,i) => {
      return (


        <li className="page-item" style={{padding:'3px'}} > 
               
        {/* {console.log(this.state.countlast)} */}


        {/* {todos.length/ todosPerPage ?console.log(right):console.log(wrong)} */}
        {/* {this.state.value>=count? <a id={number} */}
         <a id={number}
        onClick={this.handleClick}  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#" key={number} >Next </a> 
       
           </li>
   
        


      );
    });

    return (


      <>
   <Header/>
  
  
      {/* main body area */}
<div className="main px-lg-5 px-md-2" >

  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    {/* {console.log(this.state.percentage)} */}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">View Optional Item</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">View Optional Item</h1>
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
                       <lable><h4>Search Tiffin</h4></lable>
                       {/* <input class="form-control" type="text" list="data" value={this.state.search_tiffins} onChange={this.handleinputSearch} placeholder='Search Tiffins'  id="searchdata"/> */}

{/* <datalist id="data">
  {this.state.products.map(productlist =>
    <option  value={productlist.p_name} />
  )}
</datalist>*/}
<div><br></br></div> 
{/* <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button> */}
{console.log(this.state.searchinputdata)}

                          </div>


                          {/* <div className="col-md-4">
                    
                          </div> */}

                          <div className="col-md-4" style={{float:"right"}}>
                   
                                    
                      <div><br></br></div>

                          </div>
                        <div><br></br></div>
                        <table className="table myDataTable table-hover align-middle mb-0">
                             <thead align="center">
                                  <tr>
                                    <th>Item No</th>
                                   
                                    <th>Optional Type</th>
                                    {/* <th>Action[Update]</th> */}
                                    
                                    <th> Title</th>
                                    <th  >
                                      <tr>
                                    <td>option</td>
                                      <td>Price</td>
                                          </tr>
                                    </th>
        
                                   
                                  </tr>
                                </thead>
                                <tbody align="center">
     
                                {/* <div style={{ display: 'block', padding: 30 }}>
      <h4>How to use Pagination Component in ReactJS?</h4>
      <Pagination count={10} />
    </div> */}
          {renderTodos}
       

          </tbody>
                              </table>
                             

      
                              <div className="center">
                      

                  
<div><br></br></div>
<nav aria-label="Page navigation example">
           <ul className="pagination justify-content-center" >
           {/* <li className="page-item" style={{padding:'3px'}} ><a className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#">&laquo;</a></li> */}
           
           {/* {previousPage} */}
        {renderPageNumbers}
        {NextPage}
          {/* <li className="page-item" style={{padding:'3px'}} ><a className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#">&raquo;</a></li> */}
        </ul>

        </nav>
        </div>
        </div>
                  </div>
                </div>
              </div> {/* .row end */}
            </div>
          </div>
        
            
        </div>
     <Footer/>
      </>

    );
  }
}

export default TodoApp