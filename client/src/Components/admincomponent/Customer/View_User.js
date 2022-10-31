import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_CUSTOMER_DATA,CUSTOMER_FILTER,CUSTOMER_SEARCH,SEND_EMAIL_CUST,SEND_EMAIL_MULCUST,SEND_TEXTMSG_TOSINGLE,SEND_TEXTMSG_TOMULTIPLE} from '../../../Components/admincomponent/links/superadminlinks';
// import "./stylepop.css";
import {Button} from '@material-ui/core';
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import FlatButton from 'material-ui/FlatButton';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';



export default class View_User extends Component {
    

    state = {
          cust_list:[],
        Load:false,
        i:0,
        count:0,
        filter_a:[],
        notification: [  ],
        selectall:false,
        open:false,
        openforall:false,
        cust_name:'',
        cust_email:'',
        bcc:'',
        cc:'',
        message:'',
        subject:'',
        openconfirm:false,
        sendconfirm:false,
       
        allids:'',
        opensinglepopmgs:false,
        mgs:'',
        device_token:'',
        mgscut_name:'',
        sendDevice_Token:'',
        selectedItem:'',
        selecteddevicetoken:'',
        ischeck:[],
        itemcheck:false,
        allchecked:false,
        notificationforall:false,
        mulmgs:''
        
       
          }

          componentDidMount() {
            this.setState({
              Load:true,
            })
             fetch(
                GET_CUSTOMER_DATA,{
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
    
                    this.state.count =json.length;
                    json.map((data)=>{
                      this.setState(prevState => ({ notification: [...prevState.notification,{ id: data.token, user_id:'',value:false }]}))
    
                    });
    
                    json.map((data)=>{
                      this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ id: data.token, device_token:data.device_token, checked:false } ]}))
    
                    });
    
                    console.log(this.state.ischeck);
                   // console.log(this.state.count);
                   // console.log(REACT_APP_FILTER_LINK);
                    // this.state.count =105;
                    var c =0;
                     for(var j=0;j<this.state.count;j++){
                       if(c<this.state.count){
                         c= c+10;
                         this.setState({ filter_a: [...this.state.filter_a, c] })
                    /// this.state.filter_a = c;
                
                       }else{
                         console.log("break");
                         break;
                       }
                      }
                    // console.log( this.state.filter_a);
                
    
                // console.log(json);
                 this.setState({
                   cust_list :json
                 });
           
                    this.setState({
                      Load:false
                    });
                  
                })
    
          }




// ============================ Single text mgs ===========================================================================================================================


handlesinglemgsclickopen=(device_token,name)=>{
  this.setState({device_token:device_token});
  this.setState({mgscut_name:name})
  this.setState({opensinglepopmgs:true});
}

handlesinglemgsclickclose=()=>{
  this.setState({opensinglepopmgs:false});
}

handlemgsinput=(event)=>{

 
 this.setState({mgs:event.target.value});
//  console.log(this.state.mgs)


}



handlesendmgstosinglecust=(event)=>
{

      
  fetch(SEND_TEXTMSG_TOSINGLE,{
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "device_token":this.state.device_token,
      "mgs":this.state.mgs,
      userid: sessionStorage.getItem('userid')
      
     })
  });



}
 
// ########################################## for all send notification #######################################################################################################

openforsendallnotify  =(ids)=>{

  this.setState({notificationforall:true})
  var data=[];
  ids.map(i=>{

     return data.push(i.device_token);
     
  
 })
  this.setState({selecteddevicetoken:data})
   console.log(data)
}

handleallnotifyclickclose=()=>{
  this.setState({notificationforall:false})
}


handlemulmgsinput=(event)=>{

 
  this.setState({mulmgs:event.target.value});
 //  console.log(this.state.mgs)
 
 
 }


handlesendmgstomulticust=(event)=>{
  // event.preventDefault();
// console.log(this.state.selecteddevicetoken)
 
  fetch(SEND_TEXTMSG_TOMULTIPLE,{
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
       "device_token":this.state.selecteddevicetoken,
      "mgs":this.state.mulmgs,
      userid: sessionStorage.getItem('userid')
      
     })
  });



}



// #########################           for All Send email    ##########################################################################
          onconfirmclick = ()=>{

           this.setState({openconfirm:true})

          }

          onconfirmclickemailsend = ()=>{

            this.setState({sendconfirm:true})
 
           }
          handleClose=()=>{
            this.setState({openconfirm:false})
          }
          

          SelectAll = (e) => {
           
         this.setState({checked:true})
         
            this.state.selectall = !(this.state.selectall);
           
          };
         
          DeSelectAll =()=>{

            this.setState({checked:false})
          }




          EmailSendAll = (ids)=>{
         this.setState({openforall:true})
         var data=[];
         ids.map(i=>{

            return data.push(i.id);
            
         
        })
         this.setState({allids:data})
          console.log(data)

          }



     handleforallCCinput=(event)=>{
        this.setState({cc:event.target.value})
      
      }
     handleforallBCCinput=(event)=>{
        this.setState({bcc:event.target.value})
        
      }

     handleforallmessageinput=(event)=>{

        this.setState({message:event.target.value})
      }


  
     handleforallsubjinput=(event)=>{
        this.setState({subject:event.target.value})
        
      }

      handleclicksubmitsendall=(event)=>{

   
        fetch(SEND_EMAIL_MULCUST,{
           method: 'post',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({
             "token":this.state.allids,
            "bcc":this.state.bcc,
            "cc":this.state.cc,
            "subject":this.state.subject,
            "mgs":this.state.message,
            userid: sessionStorage.getItem('userid')
           })
        });
      
      

      }



     allselectCheckbox=(event)=>{
   
    if(!this.state.allchecked){


        this.setState({allchecked:true})
        
        console.log(this.state.ischeck)
        var data = [];
        var set = this.state.ischeck.map(i=>{

          i.checked=true;


          if(i.checked == true){
            return data.push(i);
               }
        })
        this.setState({selectedItem:data})  
       
       
  }
  else{
          this.setState({allchecked:false})
          var data = [];
          var set = this.state.ischeck.map(i=>{

            i.checked=false;
            if(i.checked == true){
              return data.push(i);
              }
           
          })
       
            this.setState({selectedItem:data})
  }


     }


     handleChangecheckbox = (index) => {
    
        if(!this.state.ischeck[index]['checked']){

          let a = this.state.ischeck.slice(); //creates the clone of the state
              
              a[index]['checked'] = true;
              this.setState({ischeck: a});
              var data = [];

         a.map((item)=>{

        if(item.checked == true){
        return data.push(item);;
}
      })
      
   
     this.setState({selectedItem:data})
     this.setState({itemcheck:true})

   
   
  
        
}
else{
        let a = this.state.ischeck.slice(); //creates the clone of the state
            
            a[index]['checked'] = false;
            this.setState({ischeck: a});
          
            var data = [];
            a.map((item)=>{
      if(item.checked == true){
      return data.push(item);
      }
            })
            
            // console.log(this.state.ischeck[index]['checked']==false)
          this.setState({selectedItem:data})
  
}


    };
  // #########################         close  for All Send email    ##########################################################################
  
  

       
      
      handleSearch = ()=>{

        var searchdata = document.getElementById('searchdata').value;
        // alert(searchdata);
      
        this.setState({
          Load: true,
      
        });
        var sendId = {
          _id: searchdata,
          userid: sessionStorage.getItem('userid'),
        }
        try {
          axios.post(CUSTOMER_SEARCH, sendId, {
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => {
           
              const cust_list = res.data;
              this.setState({ cust_list });
            
      
              this.setState({
                Load: false,
      
              });
      
            })
        } catch (error) {
      
          console.log(error)
          this.setState({
            Load: false,
          });
          console.log("internal server error");
        }
      
      }
      
      
      //handle limits
      
      handleLimit = ()=>{
      
        var limit_val = document.getElementById('lmt_val').value;
        // alert(searchdata);
       // alert(limit_val);
        this.setState({
          Load: true,
      
        });
        var sendId = {
          limit_val: limit_val,
          userid: sessionStorage.getItem('userid'),
        }
        try {
          axios.post(CUSTOMER_FILTER, sendId, {
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => {
            
              const cust_list = res.data;
              this.setState({ cust_list });
            
      
              this.setState({
                Load: false,
      
              });
      
            })
        } catch (error) {
      
          console.log(error)
          this.setState({
            Load: false,
          });
          console.log("internal server error");
        }
      
      }
      
      
      handleclickopen=(name,email)=>{
        this.setState({open:true});
     
        this.setState({cust_name:name});


        this.setState({ cust_email:email})
        this.setState({openconfirm:true})
      }
      handleclickclose=()=>{
        this.setState({open:false});
        this.setState({openforall:false})
      }




      handleCCinput=(event)=>{
        this.setState({cc:event.target.value})
      
      }
      handleBCCinput=(event)=>{
        this.setState({bcc:event.target.value})
        
      }

      handlemessageinput=(event)=>{

        this.setState({message:event.target.value})
      }

      handlenameinput=(event)=>{

        this.setState({cust_name:event.target.value})
      }

      handleemailinput=(event)=>{
        this.setState({cust_email:event.target.value})
        
      }
      handlesubjinput=(event)=>{
        this.setState({subject:event.target.value})
        
      }
     
      handleclicksubmit=(event)=>{
       
     
        fetch(SEND_EMAIL_CUST, {
           method: 'post',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({
            "bcc":this.state.bcc,
            "cc":this.state.cc,
            "cust_name":this.state.cust_name,
            "email":this.state.cust_email,
            "subject":this.state.subject,
            "mgs":this.state.message,
            userid: sessionStorage.getItem('userid')
           })
        });
      
      

      }




  render() {
  
    const emails =  this.state.cust_list.map(cust =>{
      return cust.email
    })
     
    return (
      <>
       <Header/>
      {/* main body area */}
<div className="main px-lg-5 px-md-2">

  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    {/* {console.log(this.state.percentage)} */}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">User list</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">User List</h1>
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
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="row g-4 px-5">
                  
              { !this.state.Load ?(""
                 ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                 height={100} width={50} /></div>)}


  <div className="col-md-4"style={{float:"left"}}>
                       <lable><h4>Search Customer</h4></lable>
                       <input class="form-control" type="text" list="data"  id="searchdata"/>

<datalist id="data">
  {this.state.cust_list.map(cust =>
    <option  value={cust.name} />
  )}
</datalist>
<div><br></br></div>
<button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                          </div>



                          <div className="col-md-4" style={{float:"right"}}>
                       <lable><h4>Filter</h4></lable>
                  
                   
               
                                        {/* <label class="form-label">Select</label> */}
                                        <select class="form-control" id= "lmt_val" onChange = {this.handleLimit} tabindex="-90" required>
                                        <option value="">Choose Limit</option>
                                      
                                        {this.state.filter_a. map(val => <option value={val-10}>
                                        {val == 10?("0-"+val):((val-10)+1 +"-"+(val) )}
                                          
                                          </option>)}
                               
                                  
                                        <option value="all">All</option>
                                     
                                        </select>
                                  
                                    
                      <div><br></br></div>

                          </div>
                  
           
    
        <h5>Customer List</h5>
      
      {/* <div>    {this.state.itemcheck == false?( ):(<div><button className="btn btn-primary"  onClick={this.DeSelectAll}> Deselect all</button>
      <span>    </span></div>)} */}

      
      <div>
     
        {this.state.selectedItem==''?(""):(<div><button className="btn btn-primary"  onClick={()=>this.EmailSendAll(this.state.selectedItem)}> SEND ALL  <ForwardToInboxIcon/></button> 
       
       <span>   </span><button className="btn btn-primary" onClick={()=>this.openforsendallnotify(this.state.selectedItem)} > SEND ALL  <NotificationsActiveIcon/></button>
       <Snackbar open={this.state.sendconfirm} autoHideDuration={6000} onClose={this.handleClose}>
      
      <MuiAlert  onClose={this.handleClose} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled" > send successfully!</MuiAlert>
      
    </Snackbar>
      
        </div>
        
        )}
    </div>

    {/* --------------------------------------------------------------------------------------------popup  for send all email ---------------------------------------------------------------- */}
      <div > 
 
      <Dialog open={this.state.openforall} PaperProps={{ sx: { width: "50%", height: "100%",bgcolor:'#ffff ' } }} actions={[
      <Button type="submit" form="my-form-id" label="Submit" />
    ]}>
      <Box
        m={1}
      //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        
      >
        <Button color="secondary" sx={{ height: 40 }} onClick={this.handleclickclose}>
          <CloseIcon/>
        </Button>
      </Box>
      
        <DialogTitle><center><strong style={{color: '#00000'}} >SEND EMAIL</strong></center></DialogTitle>
        
        <DialogContent>
        <form
            onSubmit={this.handleclicksubmitsendall } id="sendall"
          >


          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handleforallsubjinput}
            margin="normal"
            inputProps={{style: {fontSize: 15 ,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           
          />
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="CC"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handleforallCCinput}
            margin="normal"
            inputProps={{style: {fontSize: 15 ,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="BCC"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handleforallBCCinput}
            margin="normal"
            inputProps={{style: {fontSize: 15,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           / >
          
      
           
            
          {/* /> */}
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="text"
            fullWidth
            multiline
            variant="standard"
            onChange={this.handleforallmessageinput}
            margin="normal"
            inputProps={{style: {fontSize: 15,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          
           
          />
    
  </form>
        </DialogContent>
      
        <DialogActions >
       
          {/* <Button variant="contained" color='secondary' onClick={this.handleclicksubmitsendall}>Cancel</Button>
      */}
         
          <Button variant="contained"  color='secondary' form="sendall" onClick={this.onconfirmclickemailsend } type="submit" >SEND</Button>
          <Snackbar open={this.state.sendconfirm} autoHideDuration={6000} onClose={this.handleClose}>
      
        <MuiAlert  onClose={this.handleClose} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled" >email send successfully!</MuiAlert>
        
      </Snackbar>
        </DialogActions>
      </Dialog>
      
      
       </div> 
  {/* -------------------------------------------------------------------------------------------- End popup  for send all email ---------------------------------------------------------------- */}     
  
  
  

 {/* --------------------------------------------------------------------------------------------  popup  for all send notification ---------------------------------------------------------------- */}     
  <Dialog open={this.state.notificationforall} PaperProps={{ sx: { width: "50%", height: "50%",bgcolor:'#ffff ' } }} actions={[
      <Button type="submit" form="my-form-id" label="Submit" />
    ]}>
      <Box
        m={1}
      //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        
      >
        <Button color="secondary" sx={{ height: 40 }} onClick={this.handleallnotifyclickclose}>
          <CloseIcon/>
        </Button>
      </Box>
      
        <DialogTitle><center><strong style={{color: '#00000'}} >SEND TEXT MESSAGE</strong></center></DialogTitle>
        
        <DialogContent>
        <form
            onSubmit={this.handlesendmgstomulticust } id="sendall"
          >

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="text"
            multiline
            fullWidth
            variant="standard"
            onChange={this.handlemulmgsinput}
            margin="normal"
            inputProps={{style: {fontSize: 15 ,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           
          />

  </form>
        </DialogContent>
      
        <DialogActions >
       

     
          <Button variant="contained"  color='secondary' form="sendall" onClick={this.onconfirmclickemailsend } type="submit">SEND MESSAGE</Button>
       
        </DialogActions>
      </Dialog>


 {/* --------------------------------------------------------------------------------------------End  popup  for all send notification ---------------------------------------------------------------- */} 
  
  <table className="table table-striped ">
  <thead>

    <tr>
      <th scope="col"> 
              <input type="checkbox" style={{ fontSize: "20px" }} class="form-check-input" checked={this.state.allchecked}
              onClick={this.allselectCheckbox} /> Select All
           </th>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Photo</th>
      <th scope="col">Send Email</th>
      <th scope="col">Push Notification</th>

    </tr>
  </thead>
  <tbody>
  {/* {console.log(this.state.i=0)} */}
    {this.state.cust_list.map((cust,index)=>(
    <tr>
       <th scope="row"   style={{ verticalAlign: "middle" }}>   <input  class="form-check-input" style={{ fontSize: "20px" }} type="checkbox" checked={this.state.ischeck[index]['checked']}
           onClick={this.handleChangecheckbox.bind(this, index)} /></th>
          

       <th scope="row" style={{ verticalAlign: "middle" }} >{index+1 } </th>     
      <td scope="row" style={{ verticalAlign: "middle" }}> {cust.name}</td>
      <td scope="row" style={{ verticalAlign: "middle" }}> {cust.email}</td>
      <td scope="row" style={{ verticalAlign: "middle" }}> {cust.mobile}</td>
      <td> <img src={cust.profileimage} alt="profile img" height={70} width={70}></img></td>


      <td scope="row" style={{ verticalAlign: "middle" }}> <button    onClick={()=>this.handleclickopen(cust.name,cust.email)}  type="button" className="btn btn-primary"><svg xmlns="http://www.w3.org/1500/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
  </svg></button></td>



 {/* --------------------------------------------------------------------------------------------popup  for single send  email ---------------------------------------------------------------- */}




{this.state.cust_email==''?


<Snackbar open={this.state.openconfirm} autoHideDuration={6000} onClose={this.handleClose}>
{/* <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
EMAIL ID DOSEN'T EXIST! 
</Alert> */}
<MuiAlert  onClose={this.handleClose} severity="error" sx={{ width: '100%' }} elevation={6} variant="filled" >EMAIL ID DOESN't EXIST!</MuiAlert>
</Snackbar>
      
      
      :



<Dialog open={this.state.open} PaperProps={{ sx: { width: "50%", height: "100%",bgcolor:'#ffff ' } }} actions={[
      <Button type="submit" form="my-form-id" label="Submit" />
    ]}>
      <Box
        m={1}
      //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        
      >
        <Button color="secondary" sx={{ height: 40 }} onClick={this.handleclickclose}>
          <CloseIcon/>
        </Button>
      </Box>
      
        <DialogTitle><center><strong style={{color: '#00000'}} >SEND EMAIL</strong></center></DialogTitle>
        
        <DialogContent>
        <form
            onSubmit={this.handleclicksubmit } id="form"
          >


          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handlesubjinput}
            margin="normal"
            inputProps={{style: {fontSize: 15 ,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           
          />
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="CC"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handleCCinput}
            margin="normal"
            inputProps={{style: {fontSize: 15 ,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           
          />
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="BCC"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handleBCCinput}
            margin="normal"
            inputProps={{style: {fontSize: 15,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           / >
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={this.handlenameinput}
            value={this.state.cust_name}
            margin="normal"
            inputProps={{readOnly:true, style: {fontSize: 15,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
            required
            id="filled-read-only-input"
          
            defaultValue={this.state.cust_name}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={this.handleemailinput}
            value={this.state.cust_email}
            margin="normal"
            inputProps={{ readOnly: true, style: {fontSize: 15,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
            required
            id="filled-read-only-input"
          
            defaultValue={this.state.cust_email}
            
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="text"
            fullWidth
            multiline
            variant="standard"
            onChange={this.handlemessageinput}
            margin="normal"
            inputProps={{style: {fontSize: 15,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          
           
          />
   
  </form>
        </DialogContent>
      
        <DialogActions >
       
          {/* <Button variant="contained" color='secondary' onClick={this.handleclickclose}>Cancel</Button> */}
     
          <Button variant="contained"  color='secondary' form="form" onClick={this.onconfirmclickemailsend } type="submit" >SEND</Button>
          <Snackbar open={this.state.sendconfirm} autoHideDuration={6000} onClose={this.handleClose}>
        {/* <Alert variant="filled" onClose={this.handleClose} severity="success" sx={{ width: '100%' }}>
          email send successfully!
        </Alert> */}
        <MuiAlert  onClose={this.handleClose} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled" >email send successfully!</MuiAlert>
        
      </Snackbar>
        </DialogActions>
      </Dialog>

    }

 {/* -------------------------------------------------------------------------------------------- END popup  for send all email ---------------------------------------------------------------- */}









{/* ---------------------------------------------------------------For Signle SEND  TEXT MESSAGE ------------------------------------------------------------------------------------------------- */}


      <td scope="row" style={{ verticalAlign: "middle" }}><button type="button" onClick={()=>this.handlesinglemgsclickopen(cust.device_token,cust.name)} className="btn btn-success"><svg xmlns="http://www.w3.org/1500/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.153-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg></button></td>


<Dialog open={this.state.opensinglepopmgs} PaperProps={{ sx: { width: "50%", height: "50%",bgcolor:'#ffff ' } }} actions={[
      <Button type="submit" form="my-form-id" label="Submit" />
    ]}>
      <Box
        m={1}
      //margin
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        
      >
        <Button color="secondary" sx={{ height: 40 }} onClick={this.handlesinglemgsclickclose}>
          <CloseIcon/>
        </Button>
      </Box>
      
        <DialogTitle><center><strong style={{color: '#00000'}} >SEND TEXT MESSAGE</strong></center></DialogTitle>
        
        <DialogContent>
        <form
            onSubmit={this.handlesendmgstosinglecust } id="sendmgstosingle"
          >


          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            value={this.state.mgscut_name}
            fullWidth
            
            variant="standard"
            onChange={this.handlesubjinput}
            margin="normal"
            inputProps={{style: {fontSize: 15 ,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
            id="filled-read-only-input"
          
            defaultValue={this.state.mgscut_name}
          />
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            type="text"
            multiline
            fullWidth
            variant="standard"
            onChange={this.handlemgsinput}
            margin="normal"
            inputProps={{style: {fontSize: 15 ,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
           
          />

  </form>
        </DialogContent>
      
        <DialogActions >
       

     
          <Button variant="contained"  color='secondary' form="sendmgstosingle" onClick={this.onconfirmclickemailsend } type="submit" >SEND MESSAGE</Button>
       
        </DialogActions>
      </Dialog>

{/* ---------------------------------------------------------------End For Signle SEND  TEXT MESSAGE ------------------------------------------------------------------------------------------------- */}

  
    </tr>
    ))}
  
  </tbody>
</table>




              
              </div>
            </div>
          </div>
        </div>
     
      </div> {/* .row end */}
    </div>
  </div>
  {/* Body: Footer */}
  <div className="body-footer d-flex">
    <div className="container">
      <div className="col-12">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <p className="font-size-sm mb-0">© Tifinco <span className="d-none d-sm-inline-block"> Prixso Product.</span></p>
              </div>
              <div className="col-auto">
                <ul className="list-inline d-flex justify-content-end mb-0">
                  <li className="list-inline-item"><a className="list-separator-link" href="">About</a></li>
                  <li className="list-inline-item"><a className="list-separator-link" href="" target="_blank">License</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
      </>
    )
  }
}