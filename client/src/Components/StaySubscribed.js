// import React, { Component } from 'react';

// import axios from 'axios';
// import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';
// import { styled } from '@mui/material/styles';

// export default class StaySubscribed extends Component {

//   state={
//     token:'',
//   }

//   componentDidMount=()=>{


//     console.log(this.props.match.params.id);
//     this.setState({token:this.props.match.params.id});
   
//   }


//   staySubscribed = ()=>{
//     window.location = "/UnsubscribePage/"+this.state.token;


//   }

//   render() {
//     return (
//       <div>
//         <Container sx={{p:3,}}>
//         <Box 
     
  
//     >
   
   
      
       
//        <Grid container spacing={2}>
//            <Grid item xs={12} md={12} sm={8}>
//             <Paper sx={{textAlign: 'center',background: 'linear-gradient(to right bottom, #00bdaa, #537791)',borderRadius:5 }} elevation={8}>
//               <Typography sx={{color:"white",fontSize:30,fontWeight:"bold"}}>
//               We're Sorry to see you go! You will no longer recieve Email from Tifinco. 
//               </Typography>
//               {/* If you have a moment , please let me know why you unsubscribed ? */}
//               <input type > If you have a moment , please let me know why you unsubscribed ?</input>
//               {/* <Typography sx={{color:"white"}}>You will continue to receive our weekly newsletter. Yay!</Typography>
//               <Fab size="medium" color="secondary" variant="extended" sx={{m:3}} onClick={this.gobackpage}> 
//               Go Back
//               </Fab>
//               */}
//             </Paper>
//           </Grid>
  
//         </Grid>
       
       
     
//     </Box>

//         </Container>
     



//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export class StaySubscribed extends Component {
  render() {
    return (
      <h3 style={{padding :"10px" ,textAlign :"center" ,marginTop :"25px"}}>We're Sorry to see you go! You will no longer recieve Email from Tifinco. <a href= "https://tifinco.com/">subscribe again</a> </h3>

    )
  }
}

export default StaySubscribed