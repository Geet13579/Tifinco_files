
import React, { Component } from 'react'

import {ShOWUSERSINFO,SEARCHUSERS,SENDSINGLEUSERS,SENDTOMULTIPLE} from '../../../Components/admincomponent/links/superadminlinks';
import Footer from '../../../Components/admincomponent/Footer'
import Header from  '../../../Components/admincomponent/Header';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';




class View_Payment_Details extends React.Component {


    state ={

        userlist:[],
        userstatus:[]
    }
componentDidMount (){
    
    // https://tifinco.com:5000/admin/getuserpaymentdetail
    axios.post("https://tifinco.com:5000/admin/getuserpaymentdetail",{orderId: this.props.match.params.id,})
    .then(res => {
      const userdata = res.data;
    //   console.log(userdata)
  
      this.setState({ userlist: userdata});
   
     
    })

// for getStatus

axios.post("https://tifinco.com:5000/admin/getUserStatus",{orderId: this.props.match.params.id,})
.then(res => {
  const userstatus = res.data;
  console.log(userstatus)

//   userdata.map((data)=>{
//       this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ id: data.orderId,  checked:false } ]}))

//     });
  this.setState({ userstatus: userstatus});





  //   console.log(this.state.ischeck[1]['checked']);
    // this.receivedData()
 
})

    // https://tifinco.com:5000/admin/getUserStatus

}

onclickgetstatus = ()=>{

}

  render() {



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
            <li className="breadcrumb-item active" aria-current="page">Payment Details</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Name : {this.state.userlist.customerName}</h1>
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
                            <Tabs
                    defaultActiveKey="first"
                   
                    className="mb-3"
                    
                    fill
                   
                    >
                        
                    <Tab eventKey="first" title="Get Details" className="nl" >
                    <Container sx={{height:"auto",width:"auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        
                    }}>
                <Box sx={{boxShadow: 20,borderRadius:2}}>

            
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sm={6}>
                    <Paper sx={{textAlign: 'center',borderRadius:2 ,backgroundColor:"#313a44"}} elevation={5} >
                        {/* <Typography><CheckCircleOutlineIcon sx={{color:"white",fontSize:"80px",m:3}}/></Typography>
                    <Typography sx={{color:"white",fontWeight:"bold"}} >
                        <h2 style={{p:3}}>Payment Successfull</h2>
                    </Typography> */}
                    <Grid item xs={12} md={12} sm={8} sx={{backgroundColor:"transparent", }}>
                    {/* <Typography sx={{color:"black",fontWeight:"bold"}} >
                        <h5 style={{p:3}}>Payment Successfull : <span> order Id</span></h5>
                    </Typography> */}
                    <TableContainer >
                    <Table sx={{ minWidth: 50, }} >
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Id</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userlist.orderId}</TableCell>

                    </TableHead>


                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Phone Number</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userlist.customerPhone}</TableCell>

                    </TableHead>

                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Pay Amount</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userlist.orderAmount}</TableCell>

                    </TableHead>


                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Currency</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userlist.orderCurrency}</TableCell>
                    
                    </TableHead>

                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Status</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userlist.orderStatus}</TableCell>

                    </TableHead>
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Note</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userlist.orderNote}</TableCell>

                    </TableHead>
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}> Seller Phone</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userlist.sellerPhone}</TableCell>

                    </TableHead>
                    


                    </Table>




                    </TableContainer>

                    </Grid>
 
                    </Paper>
                </Grid>
        
                </Grid>
            
            </Box>

        </Container>
                    </Tab>
                    <Tab eventKey="second" title="Get Status">
                    <Container sx={{height:"auto",width:"auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        
                    }}>
                <Box sx={{boxShadow: 20,borderRadius:2}}>

            
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sm={6}>
                    <Paper sx={{textAlign: 'center',borderRadius:2 ,backgroundColor:"#313a44"}} elevation={5} >
                        {/* <Typography><CheckCircleOutlineIcon sx={{color:"white",fontSize:"80px",m:3}}/></Typography>
                    <Typography sx={{color:"white",fontWeight:"bold"}} >
                        <h2 style={{p:3}}>Payment Successfull</h2>
                    </Typography> */}
                    <Grid item xs={12} md={12} sm={8} sx={{backgroundColor:"transparent", }}>
                    {/* <Typography sx={{color:"black",fontWeight:"bold"}} >
                        <h5 style={{p:3}}>Payment Successfull : <span> order Id</span></h5>
                    </Typography> */}
                    <TableContainer >
                    <Table sx={{ minWidth: 50, }} >
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Status</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.orderStatus}</TableCell>

                    </TableHead>
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Pay Amount</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.orderAmount}</TableCell>

                    </TableHead>
                      <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order ExpiryTime</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.orderExpiryTime}</TableCell>

                    </TableHead>


                  

                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Status</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.orderStatus}</TableCell>

                    </TableHead>


                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>paymentMode</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.paymentMode}</TableCell>
                    
                    </TableHead>

                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Status</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.referenceId}</TableCell>

                    </TableHead>
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>status</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.status}</TableCell>

                    </TableHead>
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Text Message</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.txMsg}</TableCell>

                    </TableHead>
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Text Status</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.txMsg}</TableCell>

                    </TableHead>
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Text Time</TableCell>
                    <TableCell sx={{color:'white'}}>{this.state.userstatus.txTime}</TableCell>

                    </TableHead>
                                        


                    </Table>





                    </TableContainer>

                    </Grid>
 
                    </Paper>
                </Grid>
        
                </Grid>
            
            </Box>

        </Container>
                    </Tab>
                    <Tab eventKey="third" title="Trigger Payment Email">
                    <Container sx={{height:"auto",width:"auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        
                    }}>
                <Box sx={{boxShadow: 20,borderRadius:2}}>

            
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sm={6}>
                    <Paper sx={{textAlign: 'center',borderRadius:2 ,backgroundColor:"#313a44"}} elevation={5} >
                        {/* <Typography><CheckCircleOutlineIcon sx={{color:"white",fontSize:"80px",m:3}}/></Typography>
                    <Typography sx={{color:"white",fontWeight:"bold"}} >
                        <h2 style={{p:3}}>Payment Successfull</h2>
                    </Typography> */}
                    <Grid item xs={12} md={12} sm={8} sx={{backgroundColor:"transparent", }}>
                    {/* <Typography sx={{color:"black",fontWeight:"bold"}} >
                        <h5 style={{p:3}}>Payment Successfull : <span> order Id</span></h5>
                    </Typography> */}
                    <TableContainer >
                    <Table sx={{ minWidth: 50, }} >
                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Order Id</TableCell>
                    <TableCell sx={{color:'white'}}>jgjhg</TableCell>

                    </TableHead>


                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Reference Id</TableCell>
                    <TableCell sx={{color:'white'}}>jhgjh </TableCell>

                    </TableHead>

                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Payment Mode</TableCell>
                    <TableCell sx={{color:'white'}}>gvhg</TableCell>

                    </TableHead>


                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Pay Ammount</TableCell>
                    <TableCell sx={{color:'white'}}>vnh</TableCell>
                    
                    </TableHead>

                    <TableHead>

                    <TableCell sx={{color:'white',paddingLeft:10}}>Payment Date</TableCell>
                    <TableCell sx={{color:'white'}}>vnbhm</TableCell>

                    </TableHead>
                    


                    </Table>




                    </TableContainer>

                    </Grid>
 
                    </Paper>
                </Grid>
        
                </Grid>
            
            </Box>

        </Container>
                    </Tab>
                    {/* <Tab eventKey="contact" title="Contact">
                        contact
                    </Tab> */}
                    </Tabs>
              
               </div>
                             
                         <div className="center">
                      
                       
                      
                        </div>
      
     
                  </div>
                  </div>
                </div>
              

       
        
            
        
     <Footer/>
      </>

    );
  }
}

export default View_Payment_Details 

// import React, { Component } from 'react'

// export default class ViewuserPaymentdetails extends Component {
//   render() {
//     return (
//       <div>   <div classname="col-lg-8 col-md-12">
//   <div classname="card">
//     <div classname="card-body"> 
//       {/* Nav tabs */}
//       <ul classname="nav nav-tabs tab-body-header rounded d-inline-flex">
//         <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#ExamToppers">Exam Toppers</a></li>
//         <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#NewAdmission">New Admission</a></li>               
//       </ul>                        
//       {/* Tab panes */}
//       <div classname="tab-content mt-3">
//         <div role="tabpanel" className="tab-pane in active" id="ExamToppers">
//           <div classname="table-responsive">
//             <table classname="table align-middle table-hover mb-0">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Report</th>
//                   <th>Year</th>
//                   <th>Field</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Dean Otto</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2018</td>
//                   <td>MCA</td>
//                 </tr>
//                 <tr>
//                   <td>K. Thornton</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-warning" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2018</td>
//                   <td>B.E</td>
//                 </tr>
//                 <tr>
//                   <td>Kane D.</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2019</td>
//                   <td>B.Pharm</td>
//                 </tr>
//                 <tr>
//                   <td>Jack Bird</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-danger" role="progressbar" style={{width: '23%'}} aria-valuenow={23} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2018</td>
//                   <td>MCA</td>
//                 </tr>
//                 <tr>
//                   <td>Hughe L.</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-danger" role="progressbar" style={{width: '34%'}} aria-valuenow={34} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2020</td>
//                   <td>PHD</td>
//                 </tr>
//                 <tr>
//                   <td>Jack Bird</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-success" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2018</td>
//                   <td>MCA</td>
//                 </tr>
//                 <tr>
//                   <td>Hughe L.</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2020</td>
//                   <td>MBA</td>
//                 </tr>
//                 <tr>
//                   <td>Kane D.</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-danger" role="progressbar" style={{width: '12%'}} aria-valuenow={12} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2019</td>
//                   <td>B.Pharm</td>
//                 </tr>
//                 <tr>
//                   <td>Jack Bird</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-success" role="progressbar" style={{width: '81%'}} aria-valuenow={81} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2018</td>
//                   <td>MCA</td>
//                 </tr>
//                 <tr>
//                   <td>Hughe L.</td>
//                   <td>
//                     <div className="progress" style={{height: 3}}>
//                       <div className="progress-bar bg-danger" role="progressbar" style={{width: '9%'}} aria-valuenow={9} aria-valuemin={0} aria-valuemax={100} />
//                     </div>
//                   </td>
//                   <td>2020</td>
//                   <td>PHD</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div role="tabpanel" className="tab-pane" id="NewAdmission">
//           <div classname="table-responsive">
//             <table classname="table table-striped table-hover mb-0">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Age</th>
//                   <th>Number</th>
//                   <th>Department</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Dean Otto</td>
//                   <td>22</td>
//                   <td>+404-447-6013</td>
//                   <td><span classname="badge bg-primary">MCA</span></td>
//                 </tr>
//                 <tr>
//                   <td>K. Thornton</td>
//                   <td>23</td>
//                   <td>+404-447-6013</td>
//                   <td><span classname="badge bg-info">MBA</span></td>
//                 </tr>
//                 <tr>
//                   <td>Kane D.</td>
//                   <td>22</td>
//                   <td>+404-447-4582</td>
//                   <td><span classname="badge bg-warning">Medical</span></td>
//                 </tr>
//                 <tr>
//                   <td>Jack Bird</td>
//                   <td>24</td>
//                   <td>+404-447-3214</td>
//                   <td><span classname="badge bg-success">BBA</span></td>
//                 </tr>
//                 <tr>
//                   <td>Hughe L.</td>
//                   <td>22</td>
//                   <td>+404-447-2589</td>
//                   <td><span classname="badge bg-primary">MCA</span></td>
//                 </tr>
//                 <tr>
//                   <td>Jack Bird</td>
//                   <td>23</td>
//                   <td>+404-447-1478</td>
//                   <td><span classname="badge bg-secondary">M.COM</span></td>
//                 </tr>
//                 <tr>
//                   <td>Hughe L.</td>
//                   <td>22</td>
//                   <td>+404-447-7896</td>
//                   <td><span classname="badge bg-danger">M.COM</span></td>
//                 </tr>
//                 <tr>
//                   <td>Jack Bird</td>
//                   <td>24</td>
//                   <td>+404-447-3214</td>
//                   <td><span classname="badge bg-success">BBA</span></td>
//                 </tr>
//                 <tr>
//                   <td>Hughe L.</td>
//                   <td>22</td>
//                   <td>+404-447-2589</td>
//                   <td><span classname="badge bg-primary">MCA</span></td>
//                 </tr>
//                 <tr>
//                   <td>Jack Bird</td>
//                   <td>23</td>
//                   <td>+404-447-1478</td>
//                   <td><span classname="badge bg-info">M.COM</span></td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div> {/* .card end */}
// </div>

//   </div>
//     )
//   }
// }
