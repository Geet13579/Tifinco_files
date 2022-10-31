import React, { Component } from 'react'
import DeliveryHeader from '../../../Components/deliverypanelcomponent/DeliveryHeader';
import DeliveryFooter from '../../../Components/deliverypanelcomponent/DeliveryFooter'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";

export class View_User_List extends Component {

    state = 
    {
        users: [],
        i:0,
        Load: false,
        progress: '',
        invalidImage: '',
        // count :0
    
      }
      componentDidMount() 
      {
            this.setState({ Load:true }); 
        
            fetch("http://localhost:5000/admin/get_userdetail",{
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
             console.log(json);
             this.setState({
              users :json
             });
       
                this.setState({
                  Load:false
                });
              
            })
    
       }


  //delete user 

  // handledelete = (_id) => 
  // { 
    
  //   // console.log("hgello")
  //     this.setState({ Load: true });
  //     var sendId = 
  //     {
  //       _id: _id,
  //       // userid: sessionStorage.getItem('userid'),
  //     }
  //     try {
  //           axios.post("http://localhost:5000/admin/delete_userdetail", sendId, {
  //           headers: { 'Content-Type': 'application/json' },
  //             })
  //         .then(res => {
  //           //alert(res.data);
  //           console.log(res.status);
  //           console.log(res.data);

  //           if (res.data.msg == 'success')
  //           {
  //             console.log("success");
  //             window.location.reload();
  //           } 
  //           else 
  //           {
  //             console.log("failure");
  //           }

  //           this.setState({ Load: false });

  //         })
  //      } 
  //      catch (error) 
  //      {
  //       console.log(error)
  //       this.setState({ Load: false});
  //       console.log("internal server error");
  //      }
  // }



  render() {
    return (
      <div>

    <DeliveryHeader/>        
{/* main body area */}
<div className="main px-lg-5 px-md-2">
<div className="body-header d-flex text-light border-top py-3">
    {/* {console.log(this.state.percentage)} */}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">View User </li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">View Users List</h1>
          <small className="text-muted"></small>
        </div>
        <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
       
        </div>
      </div>
    </div>
  </div>
  {/* Body: Body */}

  {/* <div><br></br></div> */}
  <div className="body d-flex py-lg-4 py-3">
    <div className="container">
      <div className="row g-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <table className="table myDataTable table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Profile Image</th>
                    <th>Facebook Id</th>
                    <th>Address</th>
                    <th>Contact No.</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
               
                {console.log(this.state.i=0)}
    {this.state.users.map(data =>(
    <tr>
      <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
      <td> {data.name}</td>
      <td> {data.email}</td>
     <td> <img src={data.profileimage}  height={"70px"} width={"70px"} alt="subscribe image"></img></td>
     <td> {data.facebookid}</td>
     <td> {data.address}</td>
     <td> {data.mobile}</td>

      <td style={{ verticalAlign: "middle" }}>


           {/* <button type="button" class="btn btn-sm btn-primary"><i class="fa fa-pencil"></i></button>
           <button type="button"  onClick={() => { if (window.confirm('Do you want to delete?')) { this.handledelete(data ._id) } }}  class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                                             */}

</td>
  
    </tr>
    ))}

                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> {/* .row end */}
    </div>
  </div>
</div>

    <DeliveryFooter />
      </div>
    )
  }
}

export default View_User_List



// import React, { Component } from 'react'
// import DeliveryHeader from '../DeliveryHeader';
// import DeliveryFooter from '../DeliveryFooter';
// import axios from 'axios';
// import { Route, Switch, Link } from 'react-router-dom';
// import ReactLoading from "react-loading";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import  {REACT_APP_FILTER_LINK} from './links';

// import {PRODUCT_LIST ,SEARCH_LINK,PRODUCT_DELETE,FILTER_LINK} from '../../../Components/admincomponent/links/superadminlinks';
// export class ViewProductlist extends Component {
//   state = {

//     products: [],
//     filter_a:[],
//     i: 0,
//     Load: false,
//     progress: '',
//     invalidImage: '',
//     count :0

//   }

  // componentDidMount() {
  //   axios.post(PRODUCT_LIST,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
  //     .then(res => {
  //       const products = res.data;
  //       this.state.count =products.length;
  //      // console.log("FILTER_LINK");
  //      // console.log(REACT_APP_FILTER_LINK);
  //       // this.state.count =105;
  //       var c =0;
  //        for(var j=0;j<this.state.count;j++){
  //          if(c<this.state.count){
  //            c= c+10;
  //            this.setState({ filter_a: [...this.state.filter_a, c] })
  //       /// this.state.filter_a = c;
    
  //          }else{
  //            console.log("break");
  //            break;
  //          }
  //         }
  //        console.log( this.state.filter_a);
  //       this.setState({ products });
  //     })


  // }
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

// handleSearch = ()=>{

//   var searchdata = document.getElementById('searchdata').value;
//   // alert(searchdata);

//   this.setState({
//     Load: true,

//   });
//   var sendId = {
//     _id: searchdata,
//     userid: sessionStorage.getItem('userid'),
//   }
//   try {
//     axios.post(SEARCH_LINK, sendId, {
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(res => {
//         //alert(res.data);
//         console.log(res.status);
//         console.log(res.data);
//         const products = res.data;
//         this.setState({ products });
        // if (res.data.msg == 'success') {

        //   console.log("success");
        //   window.location.reload();


        // } else {

        //   console.log("failure");

        // }

//         this.setState({
//           Load: false,

//         });

//       })
//   } catch (error) {

//     console.log(error)
//     this.setState({
//       Load: false,
//     });
//     console.log("internal server error");
//   }

// }


// //handle limits

// handleLimit = ()=>{

//   var limit_val = document.getElementById('lmt_val').value;
//   // alert(searchdata);
//  // alert(limit_val);
//   this.setState({
//     Load: true,

//   });
//   var sendId = {
//     limit_val: limit_val,
//     userid: sessionStorage.getItem('userid'),
//   }
//   try {
//     axios.post(FILTER_LINK, sendId, {
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then(res => {
//         //alert(res.data);
//         console.log(res.status);
//         console.log(res.data);
//         const products = res.data;
//         this.setState({ products });
//         // if (res.data.msg == 'success') {

//         //   console.log("success");
//         //   window.location.reload();


//         // } else {

//         //   console.log("failure");

//         // }

//         this.setState({
//           Load: false,

//         });

//       })
//   } catch (error) {

//     console.log(error)
//     this.setState({
//       Load: false,
//     });
//     console.log("internal server error");
//   }

// }



//   //delete images code

//   handledelete = (_id) => {


//     this.setState({
//       Load: true,

//     });
//     var sendId = {
//       _id: _id,
//       userid: sessionStorage.getItem('userid'),
//     }
//     try {
//       axios.post(PRODUCT_DELETE, sendId, {
//         headers: { 'Content-Type': 'application/json' },
//       })
//         .then(res => {
//           //alert(res.data);
//           console.log(res.status);
//           console.log(res.data);

//           if (res.data.msg == 'success') {

//             console.log("success");
//             window.location.reload();


//           } else {

//             console.log("failure");

//           }

//           this.setState({
//             Load: false,

//           });

//         })
//     } catch (error) {

//       console.log(error)
//       this.setState({
//         Load: false,
//       });
//       console.log("internal server error");
//     }
//   }


//  handleupdate =(_id)=>{

//    window.location = "/product/update/"+_id;
//  }



//   render() {
//     return (
//       <>
//          <DeliveryHeader/>   
//       {/* main body area */}
// <div className="main px-lg-5 px-md-2">

//   {/* Body: Header */}
//   <div className="body-header d-flex text-light border-top py-3">
//     {console.log(this.state.percentage)}
//     <div className="container">
//       <div className="row mb-3">
//         <div className="col">
//           <ol className="breadcrumb bg-transparent mb-0">
//             <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
//             <li className="breadcrumb-item active" aria-current="page">View Food Product</li>
//           </ol>
//         </div>
//         <div className="col-auto">
//           <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
//           </div>
//         </div>
//       </div>
//       <div className="row align-items-center">
//         <div className="col-auto">
//           <h1 className="fs-4 mt-1 mb-0">View Food Product</h1>
//           <small className="text-muted"></small>
//         </div>
//         <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
       
//         </div>
//       </div>
//     </div>
//   </div>

//           {/* Body: Body */}
//           <div className="body d-flex py-lg-4 py-3">
//             <div className="container">
//               <div className="row g-4">
              
//                 {!this.state.Load ? (""
//                 ) : (<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
//                   height={100} width={50} /></div>)}

//                 {
//                   this.state.progress && <h5> {
//                     this.state.progress < 100 ?
//                       `${this.state.progress}%` : "Photo Uploaded ,Please Wait Almost Done....!"}
//                     {this.state.invalidImage && <h5 style={{ color: "red" }} className="error"> {this.state.invalidImage}</h5>}
//                   </h5>

//                 }
//                 <div className="col-md-12">
                     
//                   <div className="card">
//                     <div className="card-body">

//                     <div className="col-md-4"style={{float:"left"}}>
//                        <lable><h4>Search Product</h4></lable>
//                        <input class="form-control" type="text" list="data"  id="searchdata"/>


// <div><br></br></div>
// <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
//                           </div>


//                           {/* <div className="col-md-4">
                    
//                           </div> */}

//                           <div className="col-md-4" style={{float:"right"}}>
                   
                                  
                                    
//                       <div><br></br></div>

//                           </div>
//                         <div><br></br></div>
//                       {/* {this.state.products !="" ?( */}
//                       <table className="table myDataTable table-hover align-middle mb-0">
//                         <thead>
//                           <tr>
//                             <th>S.No</th>
//                             <th> Food Name</th>
//                             <th>Food Image</th>
//                             <th>Food category</th>
//                             <th>Food Type </th>
//                             <th>Food Price</th>
//                             <th>Food description</th>
//                             <th>Food rating </th>
//                             <th>Action[Update]</th>
//                             <th>Action[Delete]</th>
//                           </tr>
//                         </thead>
                        
//                       </table>
//                       {/* ):"No Data"} */}

//                     </div>
//                   </div>
//                 </div>
//               </div> {/* .row end */}
//             </div>
//           </div>
//         </div>
//         <DeliveryFooter />
//       </>
//     )
//   }
// }

// export default ViewProductlist