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

export default class UnsubscribePage extends Component {

  state={
    token:'',
    page:false
  }

  componentDidMount=()=>{


    console.log(this.props.match.params.id);
  
    var ans = window.confirm("Oh, no! Sorry to see you go. Those great offers and new product news will now be lost to you. Are you sure you want to unsubscribe?")

    if(ans){


      var sendId =
      {
          token:this.props.match.params.id,
         
      }
   
      try
      { 
 
        axios.post(`https://tifinco.com:5000/admin/unsubscribeuser`, sendId,{
        headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
        onUploadProgress: data => {
      
          this.setState({
          progress: Math.round((100 * data.loaded) / data.total)
  
          });
        },
  
      })
        .then(res => {
        
            if(res.data.msg=='success'){
            
            
          
              console.log("success");
             
            }
            else if(res.data.mgs=='unsubscribe'){
              alert("you have alerady unsubscribe");
  
            }
        
          
        })
      } 
      catch(error) 
      { 
              console.log(error)
              this.setState({
                  Load :false,
                  });
              console.log("internal server error");
        }
  
    }
    else{
      this.setState({page:true})
    }

   
  }



  

 

  render() {
    return (
      <div>
      {this.state.page ?<p> Hey there! We are glad that you have changed your mind and decided to remain with us.. we promise to bring great offers and news about our products to you. Thank you so much-Team Tifico-Tiffin Redefined.</p>:<p>
We have successfully accepted your unsubscribe request. If you change your mind, please subscribe again. Thank you - Team Tifinco: Tiffin Redefined
 <a href='https://tifinco.com/?#section'>Subscribe</a></p>}
      

      </div>
    )
  }
}
