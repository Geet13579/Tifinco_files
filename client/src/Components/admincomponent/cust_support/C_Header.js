import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
function C_Header() {
  
  const [profile_data, setData] = useState([]);
  const [Load, setLoad] = useState(false);

  const [navbar_toggle, setToggle] = useState("1");

 
  
  function logout(){
	  
	   const logoutdata = {
      userid:sessionStorage.getItem('userid')
    };
    try{
  //alert(jsonauthdata);
    axios.post('https://tifinco.com:5000/admin/logout',  logoutdata , {
      headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    })
      .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data.msg);
        
          if(res.data.msg=='success'){
            

           sessionStorage.setItem('userid', '',);
           
        
            console.log("success");
         window.location = "/" ;
         

          }else{
            
        
            alert("User logout Failed");
          }
        
      })
    }  catch(error) {
      
            console.log(error)
            alert(error);
            console.log("internal server error");
          }
  }

  useEffect(() => {
 
    const fetchData = async () => {
      setLoad(true);
      console.log(Load);
      const res = await fetch(
        'https://tifinco.com:5000/admin/profile',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: sessionStorage.getItem('userid'), // Use your own property name / key
        }),
      }
      );
     const json = await res.json();
      console.log(json);
      ///this.setState({json});
      setData(json)
      setLoad(false);
      console.log(Load);
  //   console.log();
    };
    fetchData();
  }, []);
  
  
  // useEffect(() => {
	  
	   // const logout = async () => {
      // const res = await fetch(
        // 'https://tifinco.com:5000/admin/logout',{
        // method: 'POST',
        // headers: {
          // 'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
          // userid: sessionStorage.getItem('userid'), // Use your own property name / key
        // }),
      // }
      // );
     // const json = await res.json();
      // console.log(json);
      // ///this.setState({json});
      // setData(json)
  // //   console.log();
    // };
	  
	  // logout();
  // },[]);
  
  

  return (
    // <ul>
    //   {data.map(item => (
    //     <li key={item.ObjectId}>
    //       <a href={item.url}>{item.title}</a>
    //     </li>
    //   ))}
    // </ul>
   

    <>
    
      
 
    <div className="header fixed-top py-2 px-lg-5 px-md-2">
    
  <div className="container">
    <nav className="navbar navbar-light">
      {/* Brand */}
      <a href="/DeliveryHomePage" className="brand-icon d-flex align-items-center me-3 me-lg-4">
        <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 64 80" fill="none">
          <path d="M58.8996 22.7L26.9996 2.2C23.4996 -0.0999999 18.9996 0 15.5996 2.5C12.1996 5 10.6996 9.2 11.7996 13.3L15.7996 26.8L3.49962 39.9C-3.30038 47.7 3.79962 54.5 3.89962 54.6L3.99962 54.7L36.3996 78.5C36.4996 78.6 36.5996 78.6 36.6996 78.7C37.8996 79.2 39.1996 79.4 40.3996 79.4C42.9996 79.4 45.4996 78.4 47.4996 76.4C50.2996 73.5 51.1996 69.4 49.6996 65.6L45.1996 51.8L58.9996 39.4C61.7996 37.5 63.3996 34.4 63.3996 31.1C63.4996 27.7 61.7996 24.5 58.8996 22.7ZM46.7996 66.7V66.8C48.0996 69.9 46.8996 72.7 45.2996 74.3C43.7996 75.9 41.0996 77.1 37.9996 76L5.89961 52.3C5.29961 51.7 1.09962 47.3 5.79962 42L16.8996 30.1L23.4996 52.1C24.3996 55.2 26.5996 57.7 29.5996 58.8C30.7996 59.2 31.9996 59.5 33.1996 59.5C35.0996 59.5 36.9996 58.9 38.6996 57.8C38.7996 57.8 38.7996 57.7 38.8996 57.7L42.7996 54.2L46.7996 66.7ZM57.2996 36.9C57.1996 36.9 57.1996 37 57.0996 37L44.0996 48.7L36.4996 25.5V25.4C35.1996 22.2 32.3996 20 28.9996 19.3C25.5996 18.7 22.1996 19.8 19.8996 22.3L18.2996 24L14.7996 12.3C13.8996 8.9 15.4996 6.2 17.3996 4.8C18.4996 4 19.8996 3.4 21.4996 3.4C22.6996 3.4 23.9996 3.7 25.2996 4.6L57.1996 25.1C59.1996 26.4 60.2996 28.6 60.2996 30.9C60.3996 33.4 59.2996 35.6 57.2996 36.9Z" fill="black" />
        </svg>
        <span className="fs-5 text-primary fw-bold d-none d-md-block">Tifinco</span>
      </a>
      {/* Search */}
      {/* <div className="h-left flex-grow-1 d-none d-sm-block">
        <div className="main-search border-start px-3 flex-fill">
          <input className="form-control" type="text" placeholder="Enter your search key word" />
          <div className="card border-0 shadow rounded-3 search-result slidedown">
            <div className="card-body text-start">
              <small className="dropdown-header">Recent searches</small>
              <div className="dropdown-item bg-transparent text-wrap my-2">
                <a className="badge bg-primary" href="#">Github <i className="fa fa-search ms-1" /></a>
                <a className="badge bg-primary" href="#">Notification panel <i className="fa fa-search ms-1" /></a>
                <a className="badge bg-primary" href="#">New project <i className="fa fa-search ms-1" /></a>
              </div>
              <div className="dropdown-divider my-2" />
              <small className="dropdown-header">Tutorials</small>
              <a className="d-flex align-items-center dropdown-item py-2" href="#">
                <span className="avatar sm no-thumbnail me-2"><i className="fa fa-github" /></span>
                <div className="text-truncate">
                  <span>How to set up Github?</span>
                </div>
              </a>
              <a className="d-flex align-items-center dropdown-item py-2" href="#">
                <span className="avatar sm no-thumbnail me-2"><i className="fa fa-paint-brush" /></span>
                <div className="text-truncate">
                  <span>How to change theme color?</span>
                </div>
              </a>
              <small className="dropdown-header">Members</small>
              <a className="d-flex align-items-center dropdown-item py-2" href="#">
                <img className="avatar sm rounded-circle" src="../../../assets/images/xs/avatar1.jpg" alt />
                <div className="text-truncate ms-2">
                  <span>Robert Hammer</span>
                </div>
              </a>
              <a className="d-flex align-items-center dropdown-item py-2" href="#">
                <img className="avatar sm rounded-circle" src="../../../assets/images/xs/avatar2.jpg" alt />
                <div className="text-truncate ms-2">
                  <span>Orlando Lentz</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* header rightbar icon */}
      <div className="h-right justify-content-end d-flex align-items-center">
        <div className="dropdown notifications  me-2">
          <a className="nav-link dropdown-toggle pulse p-1" href="#" role="button" data-bs-toggle="dropdown">
            <i className="fa fa-bell fa-lg" />
          </a>
          <div id="NotificationsDiv" className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
            <div className="card border-0 w380">
              <div className="card-header bg-dark border-0 p-3">
                <h5 className="mb-0 d-flex justify-content-between">
                  <span>Notifications Center</span>
                  <span>14</span>
                </h5>
                <ul className="nav nav-tabs mt-3 border-bottom-0" role="tablist">
                  <li className="nav-item"><a className="nav-link ps-0 me-2 active" data-bs-toggle="tab" href="#Noti-tab-Message" role="tab">Message</a></li>
                  <li className="nav-item"><a className="nav-link me-2" data-bs-toggle="tab" href="#Noti-tab-Events" role="tab">Events</a></li>
                  <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Noti-tab-Logs" role="tab">Logs</a></li>
                </ul>
              </div>
              <div className="tab-content card-body custom_scroll">
                <div className="tab-pane fade show active" id="Noti-tab-Message" role="tabpanel">
                  <ul className="list-unstyled list mb-0">
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar1.jpg" alt />
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Chris Morise</span> <small>2MIN</small></p>
                          <span className="text-muted">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <div className="avatar rounded-circle no-thumbnail">RH</div>
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Hammer</span> <small>13MIN</small></p>
                          <span className="text-muted">It is a long established fact that a reader will be distracted</span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar3.jpg" alt />
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Orlando Lentz</span> <small>1HR</small></p>
                          <span className="text-muted">There are many variations of passages</span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar4.jpg" alt />
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Kelly</span> <small>1DAY</small></p>
                          <span className="text-muted">Contrary to popular belief <span className="badge bg-danger">Code</span></span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar5.jpg" alt />
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Hammer</span> <small>13MIN</small></p>
                          <span className="text-muted">making it over 2000 years old</span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar6.jpg" alt />
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">Orlando Lentz</span> <small>1HR</small></p>
                          <span className="text-muted">There are many variations of passages</span>
                        </div>
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="javascript:void(0);" className="d-flex">
                        <img className="avatar rounded-circle" src="../../../assets/images/xs/avatar7.jpg" alt />
                        <div className="flex-fill ms-3">
                          <p className="d-flex justify-content-between mb-0 text-muted"><span className="fw-bold">savera</span> <small>1DAY</small></p>
                          <span className="text-muted">The generated Lorem Ipsum</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="Noti-tab-Events" role="tabpanel">
                  <ul className="list-unstyled list mb-0">
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <div className="avatar rounded no-thumbnail"><i className="fa fa-info-circle fa-lg" /></div>
                        <div className="flex-fill ms-3">
                          <p className="mb-0 text-muted">Campaign <strong className="text-primary">Holiday Sale</strong> is nearly reach budget limit.</p>
                          <small className="text-muted">10:00 AM Today</small>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <div className="avatar rounded no-thumbnail"><i className="fa fa-thumbs-up fa-lg" /></div>
                        <div className="flex-fill ms-3">
                          <p className="mb-0 text-muted">Your New Campaign <strong className="text-primary">Holiday Sale</strong> is approved.</p>
                          <small className="text-muted">11:30 AM Today</small>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <div className="avatar rounded no-thumbnail"><i className="fa fa-pie-chart fa-lg" /></div>
                        <div className="flex-fill ms-3">
                          <p className="mb-0 text-muted">Website visits from Twitter is <strong className="text-danger">27% higher</strong> than last week.</p>
                          <small className="text-muted">04:00 PM Today</small>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <div className="avatar rounded no-thumbnail"><i className="fa fa-warning fa-lg" /></div>
                        <div className="flex-fill ms-3">
                          <p className="mb-0 text-muted"><strong className="text-warning">Error</strong> on website analytics configurations</p>
                          <small className="text-muted">Yesterday</small>
                        </div>
                      </a>
                    </li>
                    <li className="py-2 mb-1 border-bottom">
                      <a href="javascript:void(0);" className="d-flex">
                        <div className="avatar rounded no-thumbnail"><i className="fa fa-thumbs-up fa-lg" /></div>
                        <div className="flex-fill ms-3">
                          <p className="mb-0 text-muted">Your New Campaign <strong className="text-primary">Holiday Sale</strong> is approved.</p>
                          <small className="text-muted">11:30 AM Today</small>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="Noti-tab-Logs" role="tabpanel">
                  <h4>No Logs right now!</h4>
                </div>
              </div>
              <a className="card-footer text-center border-top-0" href="#"> View all notifications</a>
            </div>
          </div>
        </div>
        {/* <div className="dropdown Language me-2">
          <a className="nav-link text-primary dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
            <i className="fa fa-language" />
          </a>
          <div className="dropdown-menu rounded-lg shadow border-0 p-0 mt-2" data-bs-popper="none">
            <div className="card border-0">
              <div className="list-group list-group-custom" style={{width: 200}}>
                <a href="#" className="list-group-item">
                  <span className="flag-icon flag-icon-gb me-2" />UK English
                </a>
                <a href="#" className="list-group-item">
                  <span className="flag-icon flag-icon-us me-2" />US English
                </a>
                <a href="#" className="list-group-item">
                  <span className="flag-icon flag-icon-de me-2" />Germany
                </a>
                <a href="#" className="list-group-item">
                  <span className="flag-icon flag-icon-in me-2" />Hindi
                </a>
                <a href="#" className="list-group-item">
                  <span className="flag-icon flag-icon-sa me-2" />Saudi Arabia
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="d-flex">
          <a className="nav-link text-primary p-1 me-lg-3 me-2" href="#" data-bs-toggle="modal" data-bs-target="#LayoutModal"><i className="fa fa-sliders fa-lg" /></a>
          <a className="nav-link text-primary p-1 me-lg-3 me-2" href="#" title="Settings" data-bs-toggle="modal" data-bs-target="#SettingsModal"><i className="fa fa-gear fa-lg" /></a>
        </div>
        */}
        { !Load ? profile_data && profile_data.map(profile => (
        <div className="dropdown user-profile ms-2">
          <a className="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown">
            <img className="avatar rounded-circle" src={profile.profileImage} alt />
          </a>
          <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end">
            <div className="card border-0 w240">
              <div className="card-body border-bottom">
                <div className="d-flex py-1">
                  <img className="avatar rounded-circle" src={profile.profileImage} alt />
                  <div className="flex-fill ms-3">
                    <p className="mb-0 text-muted"><span className="fw-bold">{profile.name}</span></p>
                    <small className="text-muted">{sessionStorage.getItem('userid')}</small>
                    <div>
                      <a onClick={logout} className="card-link">Sign out</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group m-2">
                <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-user" />Profile &amp; account</a>
                <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-gear" />Settings</a>
                <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-tag" />Customization</a>
                <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-users" />Manage team</a>
                <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-calendar" />My Events</a>
                <a href="#" className="list-group-item list-group-item-action border-0"><i className="w30 fa fa-credit-card" />My Statements</a>
              </div>
            </div>
          </div>
        </div>
        )):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
        height={100} width={50} /></div>)}


       


        <a className="menu-toggle ms-4 text-primary" >
          <span>Start</span>
          <svg className="avatar sm ms-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z" />
          </svg>
        </a>
      </div>
      {/* main menu */}
      <div className="card shadow menu slidedown">
        <div className="card-body p-3">
            <ul className="menu-grid list-unstyled row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-1 mb-0">
              <li className="col">
                <a  className="d-flex color-700 active">
                  <div className="avatar"><i className="fa fa-dashboard" /></div>
                  <div className="flex-fill text-truncate">
                    <p onClick={()=>{setToggle("1")}} className="h6 mb-0">Basic </p>
                    <small className="text-muted">Dashboard</small>
                  </div>
                </a>
              </li>
              <li className="col">
                <a  className="d-flex color-700">
                  <div className="avatar"><i className="fa fa-comments" /></div>
                  <div className="flex-fill text-truncate">
                    <p onClick={()=>{setToggle("2")}} className="h6 mb-0">App Users</p>
                    <small className="text-muted">Maintain Users Details</small>
                  </div>
                </a>
              </li>
              <li className="col">
                <a href="calendar.html" className="d-flex color-700">
                  <div className="avatar"><i className="fa fa-calendar" /></div>
                  <div className="flex-fill text-truncate">
                    <p className="h6 mb-0">Others</p>
                    <small className="text-muted">Total event this month 18</small>
                  </div>
                </a>
              </li>
            </ul>
            
            {/* {navbar_toggle =="1" &&     
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold">Delivery Dashboard</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
			

			
              <li><a className="ms-link" href="/dashboard/contactus">Contact Us </a></li>
              
              <li><a className="ms-link" href="/dashboard/sociallinks">Social Links</a></li>
              <li><a className="ms-link" href="/dashboard/subscribenow">Subscribe Now </a></li>
              <li><a className="ms-link" href="">Offers</a></li>
              <li><a className="ms-link" href="">Corporate Order</a></li>


            <li><a className="ms-link" href="/deliverydashboard/contactus">Contact Us </a></li>

            <li><a className="ms-link" href="">Social Links</a></li>

            </ul>
          </div>

           } */}
          
          {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold"> Customer </h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              <li><a className="ms-link" href="/CustmerRoutes/Cust_support/Customer_list">  Customer List</a></li>
              <li><a className="ms-link" href="#">Manage Customer Payment</a></li>
              {/* <li><a className="ms-link" href="/CustmerRoutes/OneCust_support/ViewOneCustProfile">  Customer List</a></li> */}

              {/* <li><a className="ms-link" href="/Delivery/showtiffin">View</a></li>
              <li><a className="ms-link" href="/Delivery/showdiscardTiffin">View Discard Tiffin</a></li>
              <li><a className="ms-link" href="/Delivery/Tiffin_Price">Insert Tiffin Price</a></li> */}

             
            </ul>
          </div>
          }

       

       {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold"> Orders</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              
              <li><a className="ms-link" href="/CustmerRoutes/Cust_support/Show_SingleOrderCust"> Single Meal Order</a></li>
            
             
            </ul>
          </div>

      }

      {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold"> Customer Problem</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              <li><a className="ms-link" href="/Delivery/AllocateTiffins">Add</a></li>
              <li><a className="ms-link" href="/Delivery/View_userPlanInfo">View</a></li>
              {/* <li><a className="ms-link" href="">Update</a></li> */}
            
            </ul>
          </div>

              }    
               
              
        
              
   {/*for user */}

            {navbar_toggle =="2" &&     
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold">User Dashboard</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
			

			
              <li><a className="ms-link" href="">User View </a></li>
              
              <li><a className="ms-link" href=""> User Update</a></li>
          
            </ul>
          </div>

           }

           
          
          {/* {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold">App Sliders</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              <li><a className="ms-link" href="/image">Add </a></li>
              <li><a className="ms-link" href="">View</a></li>
             
            </ul>
          </div>
          }

          {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold">Food Category</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              <li><a className="ms-link" href="">Add</a></li>
              <li><a className="ms-link" href="">View</a></li>
            
            </ul>
          </div>

        }

       {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold"> Food Product</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              <li><a className="ms-link" href="">Add</a></li>
              <li><a className="ms-link" href="">View</a></li>
              <li><a className="ms-link" href="">Update</a></li>
             
            </ul>
          </div>

      }

      {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold">Plan Detail</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              <li><a className="ms-link" href="">Add</a></li>
              <li><a className="ms-link" href="">View</a></li>
              <li><a className="ms-link" href="">Update</a></li>
            
            </ul>
          </div>

              }     {navbar_toggle =="1" && 
          <div className="mt-3 border-top pt-2 px-3">
            <h6 className="fw-bold">App Users</h6>
            <ul className="menu-list d-flex flex-wrap list-unstyled mb-0">
              <li><a className="ms-link" href="">View All User</a></li>
             
            </ul>
          </div>
        }  */}
   



        </div>
      
        <div className="card-footer py-3 px-4">
          <div className="row g-2">
            <div className="col">
              <div className="mb-2">
                {/* <a className="me-2 me-lg-3 text-muted" target="_blank" href="../../../documentation/index.html">Documentation</a>
                <a className="me-2 me-lg-3 text-muted" target="_blank" href="https://www.thememakker.com/all-templates/">Template</a>
                <a className="me-2 me-lg-3 text-muted" target="_blank" href="https://www.thememakker.com/all-portfolio/">My Portfolio</a>
                <a className="me-2 me-lg-3 text-muted" target="_blank" href="https://www.thememakker.com/contact/">Contacts</a>
                <a className="me-2 me-lg-3 text-muted" target="_blank" href="https://www.thememakker.com/blog/">Blog</a>
                <a className="me-2 me-lg-3 text-muted" target="_blank" href="https://www.thememakker.com/about/">About</a> */}
              </div>
              <span>© <a className="text-primary" target="_blank" href="https://www.localhost/" title="Tifinco">Tifinco</a> All rights reserved.</span>
            </div>
            <div className="col-md-auto col-12">
              <div className="text-danger"><span className="text-muted">Last accessed:</span> Today at 11:23AM</div>
              <div><span className="text-muted">Changelog: </span> <span id="ALUIversion" /></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>


    
    </>
  );
}

export default C_Header;



