import React, { Component } from 'react'
// import Loader from "react-loader-spinner"
import DeliveryHeader from '../DeliveryHeader';
import DeliveryFooter from '../DeliveryFooter'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_TIFFIN_ALLOCATED_USER} from '../../links/DeliveryLinks';
export class View_User_List extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentPage: 1, //Holds the value for the current page
  //     // posts: [], //Array where the data is stored
  //     loading: null, //Holds the value for the loading state.. can either be true or false
  //     postsPerPage: 5, //Holds the value for the number of posts per page. You can adjust to suit your needs
  //       users: [],
  //       i:0,
  //       Load: false,
  //       progress: '',
  //       invalidImage: '',
  //       // count :0
  //   };
  // }
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

            axios.post(GET_TIFFIN_ALLOCATED_USER,{userid: sessionStorage.getItem('userid')}, {
              headers: { 'Content-Type': 'application/json' },
            })
              .then(res => {
                console.log(res.data);
                console.log(res.status);
                console.log(res.data);
                const users = res.data;
                this.setState({ users:users });
           
        console.log(this.state.users);
                this.setState({
                  Load: false,
        
                });
        
              })
    
       }


  render()
 {
 
 
  // //Get currentPosts
  //   const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
  //   const currentPosts = this.state.users.slice(indexOfFirstPost, indexOfLastPost);

  //   //Implement page numbers
  //   const pageNumbers = []

  //   for (let i = 1; i <= Math.ceil(this.state.users.length / this.state.postsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }

  //   //Set current page
  //   const setPage = (pageNum) =>
  //    {
  //     this.setState({currentPage: pageNum})
  //   }
    

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
          <h1 className="fs-4 mt-1 mb-0">View Tiffin Allocated Users</h1>
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
                    <th>Plan Name</th>
                    <th>MealPreference</th>
                    <th>Tiffin Type</th>
                    <th>Tiffin No</th>
                    <th>Sabji</th>
                    <th>Extra Item </th>
                    {/* <th>Quantity</th> */}
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
               
               
              {console.log(this.state.i=0)}
              {this.state.users.map(data =>(
                  <tr>
                    <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
                    <td> {data.name}</td>
                    <td> {data.plantype}</td>
                    <td> {data.meal_pref} </td>
                    <td> {data.tiffintype}</td>
                    <td> {data.tiffin_no}</td>
                    <td> {data.sabji[0]}, {data.sabji[1]}</td>
                    <td>{data.extra_item.length == 0?("No Extra Item"): (data.extra_item+ ","+" ")}</td>
                    {/* <td>{data.quantity}</td> */}
                    <td style={{ verticalAlign: "middle" }}></td>
      
                  </tr>  ))}

                  
                </tbody>
              </table>
            </div>


         {/* {
             <div className="w-full h-screen flex items-center justify-center">
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
             </div>
          } */}

            {/* <div className="w-full flex justify-around">
            {
              pageNumbers.map((pageNum, index) => (
                <span key={index} 
                className={pageNum === this.state.currentPage 
                ? "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full bg-blue-500 text-white" 
                : "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full"} 
              
                onClick={() => {setPage(pageNum)}}>

                {pageNum}

               </span>
            ))
           }
           </div> */}

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




// import React, { Component } from "react";
// import Loader from "react-loader-spinner"
// import DeliveryHeader from '../DeliveryHeader';
// import DeliveryFooter from '../DeliveryFooter';
// import {GET_TIFFIN_ALLOCATED_USER} from '../../links/DeliveryLinks';
// import axios from 'axios';
// import { Route, Switch, Link } from 'react-router-dom';
// import ReactLoading from "react-loading";

// class View_User_List extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage: 1, //Holds the value for the current page
//       posts: [], //Array where the data is stored
//       loading: null, //Holds the value for the loading state.. can either be true or false
//       postsPerPage: 5 //Holds the value for the number of posts per page. You can adjust to suit your needs
//     };
//   }

//   //Fetch data on component mount
//   // componentDidMount() { 
//   //   this.setState({loading: true})
//   //   fetch({GET_TIFFIN_ALLOCATED_USER,})
//   //   .then((res) => res.json())
//   //   .then(data => {
//   //       this.setState({ posts: data });
//   //       this.setState({loading: false})
//   //   })
//   // }

//   componentDidMount() 
//         {
//           this.setState({loading: true})
  
//               axios.post(GET_TIFFIN_ALLOCATED_USER,{userid: sessionStorage.getItem('userid')}, {
//                 headers: { 'Content-Type': 'application/json' },
//               })
//                 .then(res => {
//                   console.log(res.data);
//                   console.log(res.status);
//                   console.log(res.data);
//                   const posts = res.data;
//                   this.setState({ posts:posts });
             
//           console.log(this.state.posts);
//                   this.setState({
//                     Load: false,
          
//                   });
          
//                 })
      
//          }

//   render() {
//     //Get currentPosts
//     const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
//     const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);

//     //Implement page numbers
//     const pageNumbers = []

//     for (let i = 1; i <= Math.ceil(this.state.posts.length / this.state.postsPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     //Set current page
//     const setPage = (pageNum) => {
//       this.setState({currentPage: pageNum})
//     }

//     return (
//       <div className="w-4/5 mx-auto">
// <DeliveryHeader/> 
//         <h2 className="text-2xl text-center font-bold">React Pagination Using Class Components and Tailwind CSS</h2>
//         <hr />
//        { this.state.loading === true
//             ? <div className="w-full h-screen flex items-center justify-center">
//                 {/* <Loader
//                   type="BallTriangle"
//                   color="#00BFFF"
//                   height={100}
//                   width={100}
//                 /> */}
//             </div> :
//         <table className="table myDataTable table-hover align-middle mb-0">
//                 <thead>
//                   <tr>
//                     <th>Serial No</th>
//                     <th>User Name</th>
//                     <th>Plan Name</th>
//                     <th>MealPreference</th>
//                     <th>Tiffin Type</th>
//                     <th>Tiffin No</th>
//                     <th>Sabji</th>
//                     <th>Extra Item </th>
//                     <th>Quantity</th>
//                     {/* <th>Action</th> */}
//                   </tr>
//                 </thead>
//                 <tbody>
               
               
//               {console.log(this.state.i=0)}
//               {this.state.posts.map(data =>(
//                   <tr>
//                     <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
//                     <td> {data.name}</td>
//                     <td> {data.plantype}</td>
//                     <td> {data.meal_pref} </td>
//                     <td> {data.tiffintype}</td>
//                     <td> {data.tiffin_no}</td>
//                     <td> {data.sabji[0]}, {data.sabji[1]}</td>
//                     <td>{data.extra_item}</td>
//                     <td>{data.quantity}</td>
//                     <td style={{ verticalAlign: "middle" }}></td>
      
//                   </tr>  ))}

                  
//                 </tbody>
//               </table>
//   }
//         <div className="w-full flex justify-around">
//           {
//             pageNumbers.map((pageNum, index) => (
//               <span key={index} className={pageNum === this.state.currentPage ? "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full bg-blue-500 text-white" : "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full"} onClick={() => {setPage(pageNum)}}>
//                 {pageNum}
//               </span>
//             ))
//           }
//         </div>
        

//         <div></div>
//         <DeliveryFooter/> 
//       </div>
//     );
//   }
// }

// export default View_User_List;

