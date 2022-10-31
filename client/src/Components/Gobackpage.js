import React, { Component } from 'react';
// import Box from '@mui/material/Box';
import axios from 'axios';
import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';
import { styled } from '@mui/material/styles';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor:  'linear-gradient(to right bottom, #430089, #82ffa1)',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default class gobackpage extends Component {

  state={
    token:'',
  }

  componentDidMount=()=>{


    console.log(this.props.match.params.id);
    this.setState({token:this.props.match.params.id});
   
  }


  gobackpage = ()=>{
    window.location = "/UnsubscribePage/"+this.state.token;


  }

  render() {
    return (
      <div>
        <Container sx={{p:3,}}>
        <Box 
     
  
    >
   
   
      
       
       <Grid container spacing={2}>
           <Grid item xs={12} md={12} sm={8}>
            <Paper sx={{textAlign: 'center',background: 'linear-gradient(to right bottom, #00bdaa, #537791)',borderRadius:5 }} elevation={8}>
              <Typography sx={{color:"white",fontSize:30,fontWeight:"bold"}}>
              Thanks for staying with us!
              </Typography>
              <Typography sx={{color:"white"}}>You will continue to receive our weekly newsletter. Yay!</Typography>
              <Fab size="medium" color="secondary" variant="extended" sx={{m:3}} onClick={this.gobackpage}> 
              Go Back
              </Fab>
             
            </Paper>
          </Grid>
  
        </Grid>
       
       
     
    </Box>

        </Container>
     



      </div>
    )
  }
}
