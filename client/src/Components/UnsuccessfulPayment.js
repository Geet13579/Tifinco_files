import React, { Component } from 'react';
import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

export default class SuccessfulPayment extends Component {


  componentDidMount() {
    console.log(this.props.match.params);
    // console.log(this.props.match.params.paymentmode);
    // console.log(this.props.match.params.txtmgs);
    // console.log(this.props.match.params.txTime);
    // console.log(this.props.match.params.txTime);
    // console.log(this.props.match.params.orderId);
    // console.log(this.props.match.params.orderAmount);
    // console.log(this.props.match.params.referenceId);

    

    // try{
     
    //     axios.post("https://tifinco.com:5000/admin/getsuccess", {
    //       headers:{'Content-Type': 'application/json','Accept': 'application/json'}
    //     })
    //       .then(res => {
              
    //         alert("ok")
    //           console.log(res.data)

         
              
              
   
         
    //       })
    //     }  catch(error) {
         
    //             console.log(error)
    //             this.setState({
    //                 Load :false,
    //                 });
    //             console.log("internal server error");
    //           }
  

  }



  render() {
    return (
<div>
        <Container sx={{height:500,width:600,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}}>
        <Box sx={{boxShadow: 20,borderRadius:2}}>
   
   
      
       
       <Grid container spacing={2}>
           <Grid item xs={12} md={12} sm={8}>
            <Paper sx={{textAlign: 'center',borderRadius:2 ,backgroundColor:"#D51058"}} elevation={5} >
                <Typography><CancelIcon sx={{color:"white",fontSize:"80px",m:3}}/></Typography>
              <Typography sx={{color:"white",fontWeight:"bold"}} >
                <h2 style={{p:3}}>Payment Failed</h2>
              </Typography>
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
