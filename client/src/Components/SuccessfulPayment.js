import React, { Component } from 'react';
import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

export default class SuccessfulPayment extends Component {


  state={
    paymentmode:'',
    orderid:'',
    orderammount:'',
    referenceid:'',
    time:''
  }

  componentDidMount() {
    console.log(this.props.match.params);
    this.setState({paymentmode:this.props.match.params.paymentMode});
    this.setState({orderid:this.props.match.params.orderId});
    this.setState({orderammount:this.props.match.params.orderAmount});
    this.setState({referenceid:this.props.match.params.referenceId});
    this.setState({time:this.props.match.params.txTime});

    // console.log(this.props.match.params.paymentmode);
    // console.log(this.props.match.params.txtmgs);
    // console.log(this.props.match.params.txTime);
    // console.log(this.props.match.params.txTime);
    // console.log(this.props.match.params.orderId);
    // console.log(this.props.match.params.orderAmount);
    // console.log(this.props.match.params.referenceId);
  }



  render() {
    return (

<div>
        <Container sx={{height:500,width:600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop:10
}}>
        <Box sx={{boxShadow: 20,borderRadius:2}}>
   
   	{/* <p className='Snowflake'>
					*
				</p> */}
      
       
       <Grid container spacing={2}>
           <Grid item xs={12} md={12} sm={6}>
            <Paper sx={{textAlign: 'center',borderRadius:2 ,backgroundColor:"#D51058"}} elevation={5} >
                <Typography><CheckCircleOutlineIcon sx={{color:"white",fontSize:"80px",m:3}}/></Typography>
              <Typography sx={{color:"white",fontWeight:"bold"}} >
                <h2 style={{p:3}}>Payment Successfull</h2>
              </Typography>
              <Grid item xs={12} md={12} sm={8} sx={{backgroundColor:"transparent", }}>
              {/* <Typography sx={{color:"black",fontWeight:"bold"}} >
                <h5 style={{p:3}}>Payment Successfull : <span> order Id</span></h5>
              </Typography> */}
              <TableContainer sx={{marginTop:3}} >
              <Table sx={{ minWidth: 50, }} >
              <TableHead>

              <TableCell sx={{color:'white',paddingLeft:10}}>Order Id</TableCell>
              <TableCell sx={{color:'white'}}>{this.state.orderid}</TableCell>

              </TableHead>


              <TableHead>

              <TableCell sx={{color:'white',paddingLeft:10}}>Reference Id</TableCell>
              <TableCell sx={{color:'white'}}>{this.state.referenceid} </TableCell>

              </TableHead>

              <TableHead>

              <TableCell sx={{color:'white',paddingLeft:10}}>Payment Mode</TableCell>
              <TableCell sx={{color:'white'}}>{this.state.paymentmode}</TableCell>

              </TableHead>


               <TableHead>

              <TableCell sx={{color:'white',paddingLeft:10}}>Pay Ammount</TableCell>
              <TableCell sx={{color:'white'}}>{this.state.orderammount}</TableCell>
              
               </TableHead>

               <TableHead>

              <TableCell sx={{color:'white',paddingLeft:10}}>Payment Date</TableCell>
              <TableCell sx={{color:'white'}}>{this.state.time}</TableCell>

              </TableHead>
               


              </Table>




              </TableContainer>






              </Grid>



              <Typography sx={{color:"white",p:3}}>Thankyou !!</Typography>
             
            </Paper>
          </Grid>
  
        </Grid>
       
       
     
    </Box>

        </Container>
     



      </div>
    )
  }
}
