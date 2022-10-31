//  import React, { Component } from 'react'
//  import Header from  '../DeliveryHeader';
 
//  import Footer from '../DeliveryFooter'
//  import axios from 'axios';
//  import { Route, Switch, Link } from 'react-router-dom';
//  import ReactLoading from "react-loading";
//  // import Popup from 'reactjs-popup';
//  // import 'reactjs-popup/dist/index.css';
//  // import  {REACT_APP_FILTER_LINK} from './links';
 
//  import {SHOW_DISCARD_TIFFIN,SEARCH_DISCARD_TIFFINS,DELETEONE_DISCARD_TIFFIN,DELETMul_DISCARD_TIFFIN} from '../../links/DeliveryLinks';
//  export class ViewProductlist extends Component {
//    state = {
 
//      tiffins: [],
//      filter_a:[],
//      i: 0,
//      Load: false,
//      progress: '',
//      invalidImage: '',
//      count :0,
//      checkedBoxes:[],
//      index:"",
//      headers : [

//     	{ key: '_id', label: 'Id'},
// 			{ key: 'tiffin_no', label: 'tiffin_no' },
// 			{ key: 'tiffin_cat', label: 'tiffin_cat' },
// 			{ key: 'tiffin_type', label: 'tiffin_type' }
//     ]
 
 
     
 
//    }
 
//    componentDidMount() {
 
//      axios.post(SHOW_DISCARD_TIFFIN,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
//        .then(res => {
//          const tiffins = res.data;
//          // console.log(res.data);
//          this.setState({ tiffins });
 
      
 
           
 
   
        
//        })
 
 
//    }
 
//    toggleCheckbox = (e, tiffinslist) => {		
// 		if(e.target.checked) {
// 			let arr = this.state.checkedBoxes;
// 			arr.push(tiffinslist.id);
			
// 			this.setState = { checkedBoxes: arr};
// 		} else {			
// 			let tiffinslist = this.state.checkedBoxes.splice(this.state.checkedBoxes.indexOf(tiffinslist.id), 1);
			
// 			this.setState({
// 				checkedBoxes: tiffinslist
// 			})

  
// 		}		
// 		console.log(this.state.checkedBoxes);
// 	}

  
//    deleteProducts = () => {
//    if(window.confirm('Are you sure, want to delete the selected product?')) {
//     fetch(DELETMul_DISCARD_TIFFIN, {
//       method: 'POST',
//       body: JSON.stringify({'ids' : this.state.checkedBoxes}),
//       headers: {'Content-Type' : 'application/json; charset=UTF-8'}
//     }).then(response => {
//         if(response.status === 200) {
//           document.getElementById('msg').innerHTML = '<span style="color:green;">Products deleted successfully</span>';
//         }
//       })
//   }
// }
  
//    handleSearch = ()=>{
 
//      var searchdata = document.getElementById('searchdata').value;
//      // alert(searchdata);
   
 
 
 
//      this.setState({
//        Load: true,
   
//      });
//      var sendId = {
//        _id: searchdata,
//      //   userid: sessionStorage.getItem('userid')
//      }
//      try {
//        axios.post(SEARCH_DISCARD_TIFFINS, sendId, {
//          headers: { 'Content-Type': 'application/json' },
//        })
//          .then(res => {
//            // alert(res.data);
//            console.log(res.status);
//            console.log(res.data);
//            const tiffins = res.data;
//            this.setState({ tiffins });
         
   
//            this.setState({
//              Load: false,
   
//            });
   
//          })
//      } catch (error) {
   
//        console.log(error)
//        this.setState({
//          Load: false,
//        });
//        console.log("internal server error");
//      }
   
//    }
   
//    handledelete = (_id) => {
 
 
//      this.setState({
//        Load: true,
 
//      });
//      var sendId = {
//        _id: _id,
//        // userid: sessionStorage.getItem('userid'),
//      }
//      try {
//        axios.post(DELETEONE_DISCARD_TIFFIN, sendId, {
//          headers: { 'Content-Type': 'application/json' },
//        })
//          .then(res => {
//            //alert(res.data);
//            console.log(res.status);
//            // console.log(res.data);
 
//            if (res.data.msg == 'success') {
 
//              console.log("success");
//              window.location.reload();
 
 
//            } else {
 
//              console.log("failure");
 
//            }
 
//            this.setState({
//              Load: false,
 
//            });
 
//          })
//      } catch (error) {
 
//        console.log(error)
//        this.setState({
//          Load: false,
//        });
//        console.log("internal server error");
//      }
//    }
 
 
 
 
//    render() {
 
//   var sum=this;
 
 
//      return (
//        <>
//     <Header/>
//        {/* main body area */}
//  <div className="main px-lg-5 px-md-2">
 
//    {/* Body: Header */}
//    <div className="body-header d-flex text-light border-top py-3">
//      {console.log(this.state.percentage)}
//      <div className="container">
//        <div className="row mb-3">
//          <div className="col">
//            <ol className="breadcrumb bg-transparent mb-0">
//              <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
//              <li className="breadcrumb-item active" aria-current="page">View Food Product</li>
//            </ol>
//          </div>
//          <div className="col-auto">
//            <div className="d-md-flex d-none justify-content-lg-end align-items-center">
            
//            </div>
//          </div>
//        </div>
//        <div className="row align-items-center">
//          <div className="col-auto">
//            <h1 className="fs-4 mt-1 mb-0">View Food Product</h1>
//            <small className="text-muted"></small>
//          </div>
//          <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
        
//          </div>
//        </div>
//      </div>
//    </div>
 
//            {/* Body: Body */}
//            <div className="body d-flex py-lg-4 py-3">
//              <div className="container">
//                <div className="row g-4">
               
//                  {!this.state.Load ? (""
//                  ) : (<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
//                    height={100} width={50} /></div>)}
 
//                  {
//                    this.state.progress && <h5> {
//                      this.state.progress < 100 ?
//                        `${this.state.progress}%` : "Photo Uploaded ,Please Wait Almost Done....!"}
//                      {this.state.invalidImage && <h5 style={{ color: "red" }} className="error"> {this.state.invalidImage}</h5>}
//                    </h5>
 
//                  }
//                  <div className="col-md-12">
                      
//                    <div className="card">
//                      <div className="card-body">
 
//                      <div className="col-md-4"style={{float:"left"}}>
//                         <lable><h4>Search Tiffin</h4></lable>
//                         <input class="form-control" type="text" list="data" placeholder='Search Tiffins'  id="searchdata"/>
//  {/* 
//  <datalist id="data">
//    {this.state.tiffins.map(tiffinlist =>
//      <option  value={tiffinlist.p_name} />
//    )}
//  </datalist> */}
//  <div><br></br></div> 
//  <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
//                            </div>
 
 
 
//                            <div className="col-md-4" style={{float:"right"}}>
                      
                                   
                                     
//                        <div><br></br></div>
 
//                            </div>
//                          <div><br></br></div>
//                          {this.state.tiffins !="" ?(
//                        <table className="table myDataTable table-hover align-middle mb-0">
//                          <thead align="center">
//                            <tr >
//                            <button type="button" onClick={this.deleteProducts}>Delete Selected Product(s)</button>
//                              <th>Tiffin No</th>
//                              <th>Tiffin Category</th>
//                              <th>Tiffin Type</th>
//                              <th>Tiffin Discard Date</th>
//                              {/* <th>Action[Update]</th> */}
//                              <th>Discard Tiffin</th>
                            
//                            </tr>
//                          </thead>
//                          <tbody align="center">
//                            {
//                              this.state.tiffins.map(function(tiffinslist, index)
 
//  {
//    return(
//                                  <tr key={index} className={(index % 2) ? "odd_col" : "even_col"}>
//                                    <td><input type="checkbox" className="selectsingle" value="{item.id}" checked={sum.state.checkedBoxes.find((p) => p.id === tiffinslist._id)} onChange={(e) => sum.toggleCheckbox(e, tiffinslist)}/>  &nbsp;&nbsp;{tiffinslist._id}</td>
                                   
//                                    <td >{tiffinslist.tiffin_no}</td>
//                                    <td>{tiffinslist.tiffin_cat}</td>
//                                    <td>{tiffinslist.tiffin_type}</td>
//                                    {/* <td>{tiffinslist.updatedAt}</td> */}
//                                    <td>{tiffinslist.updatedAt.slice(0,-14)}</td>
                                  
                               
//                                    <td>
//                                      {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${productlist._id}`}><i className="fa fa-pencil" /></button> */}
//                                      <button type="button" onClick={() => {{ this. handlemove(tiffinslist._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
//                                    </td>
//                                  </tr>
                              
//                                )})}
//                          </tbody>
 
 
                      
//                        </table>
//                        ):"No Data"}
                   
 
//                      </div>
//                    </div>
//                  </div>
//                </div> {/* .row end */}
//              </div>
//            </div>
//          </div>
//       <Footer/>
//        </>
//      )
//    }
//  }
 
//  export default ViewProductlist













// // import React, { Component } from 'react';
// // import axios from 'axios';
// // // import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// // class App extends Component {

// //   state = {
// //     isMJ: false,
// //     isJB: false,
// //     isDrake: false
// //   };

// //   toggleChangeMJ = () => {
//     // this.setState(prevState => ({
//     //   isMJ: !prevState.isMJ,
//     // }));
// //   }

// //   toggleChangeJB = () => {
// //     this.setState(prevState => ({
// //       isJB: !prevState.isJB,
// //     }));
// //   }

// //   toggleChangeDrake = () => {
// //     this.setState(prevState => ({
// //       isDrake: !prevState.isDrake,
// //     }));
// //   }

// //   onSubmit = (e) => {
//     // e.preventDefault();
//     // let arr = [];
//     // for (var key in this.state) {
//     //   if(this.state[key] === true) {
//     //     arr.push(key);
//     //   }
//     // }
//     // let data = {
//     //   check: arr.toString() 
// //     };

// //     console.log(data)
// //     // axios.post('http://localhost:4000/checks/add', data)
// //     //       .then(res => console.log(res.data));
// //   }

// //   render() {
// //     return (
// //       <div className="container">
// //         <h2>Save the multiple checkbox values in React js</h2>
// //         <hr />
// //         <form onSubmit = {this.onSubmit}>
// //           <div className="form-check">
// //             <label className="form-check-label">
// //               <input type="checkbox"
// //                 checked={this.state.isMJ}
// //                 onChange={this.toggleChangeMJ}
// //                 className="form-check-input"
// //               />
// //               MJ
// //             </label>
// //           </div>
// //           <div className="form-check">
// //             <label className="form-check-label">
// //               <input type="checkbox"
// //                 checked={this.state.isMJ}
// //                 onChange={this.toggleChangeJB}
// //                 className="form-check-input"
// //               />
// //               JB
// //             </label>
// //           </div>
// //           <div className="form-check">
// //             <label className="form-check-label">
// //               <input type="checkbox"
// //                 checked={this.state.isMJ}
// //                 onChange={this.toggleChangeDrake}
// //                 className="form-check-input"
// //               />
// //               Drake
// //             </label>
// //           </div>
// //           <div className="form-group">
// //             <button className="btn btn-primary">
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     );
// //   }
// // }

// // export default App;