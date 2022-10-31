
import React, { Component } from 'react'
import axios from 'axios';
import ReactLoading from "react-loading";
import {SHOWUSERCOMMENT,DELETESINGLEUSERCOMMENT,SENDEMAILFORUSERCOMMENT,DELETEMULUSERCOMMENT} from '../../../Components/admincomponent/links/superadminlinks';
import Footer from '../../../Components/admincomponent/Footer'
import Header from  '../../../Components/admincomponent/Header';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';   
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';


import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';


class ViewUsersComment extends React.Component {

  state = {

    usercommentlist:[],
   
    confirmation:false,
    openemailpopup:false,
    emailconfirmation:false,
    user_email:'',
    user_name:'',
    allchecked:false,
    ischeck:[],
    userlist: [],
    currentPage: 1,
    listPerPage: 5,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    pageBound: 3,
    selectedItem:[]
  }

  
  componentDidUpdate() {
        // $("ul li.active").removeClass('active');
        // $('ul li#'+this.state.currentPage).addClass('active');
  }

  componentDidMount=()=>{
    axios.post(SHOWUSERCOMMENT,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
    .then(res => {
      const userdata = res.data;
     
      userdata.map((data)=>{
          this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ id: data._id,  checked:false } ]}))

        });
      this.setState({ userlist: userdata});

     
    })
  
  
  }
  handleClick=(event)=> {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });

    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass=(listid)=> {
    let totalPage = Math.ceil(this.state.userlist.length / this.state.listPerPage);
    this.setState({isNextBtnActive: 'disabled'});
    this.setState({isPrevBtnActive: 'disabled'});
    if(totalPage === listid && totalPage > 1){
        this.setState({isPrevBtnActive: ''});
    }
    else if(listid === 1 && totalPage > 1){
        this.setState({isNextBtnActive: ''});
    }
    else if(totalPage > 1){
        this.setState({isNextBtnActive: ''});
        this.setState({isPrevBtnActive: ''});
    }
}
  btnIncrementClick=()=> {
      this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
      let listid = this.state.upperPageBound + 1;
      this.setState({ currentPage: listid});
      this.setPrevAndNextBtnClass(listid);
}
  btnDecrementClick=()=> {
    this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
    this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid});
    this.setPrevAndNextBtnClass(listid);
}
btnPrevClick=() =>{
    if((this.state.currentPage -1)%this.state.pageBound === 0 ){
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
}
btnNextClick=()=> {
    if((this.state.currentPage +1) > this.state.upperPageBound ){
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
}







handleClose = ()=>{
  this.setState({confirmation:false});
  this.setState({emailconfirmation:false})
}

handleSingleEmail = (email,name)=>{
  this.setState({openemailpopup:true});
  // this.setState({emailconfirmation:true});
 
  this.setState({user_name:name});
  this.setState({user_email:email});

}

handleclickclose=()=>{
  
  this.setState({openemailpopup:false});

}



handleCCinput=(event)=>{
  this.setState({cc:event.target.value});

}
handleBCCinput=(event)=>{
  this.setState({bcc:event.target.value});
  
}

handlemessageinput=(event)=>{

  this.setState({message:event.target.value});
}

handlenameinput=(event)=>{

  this.setState({user_name:event.target.value});
}

handleemailinput=(event)=>{
  this.setState({user_email:event.target.value});
  
}
handlesubjinput=(event)=>{
  this.setState({subject:event.target.value});
  
}

onconfirmclickemailsend =()=>{
  this.setState({emailconfirmation:true})

}

handleclicksubmit=(event)=>{
  
     
  fetch(SENDEMAILFORUSERCOMMENT, {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "bcc":this.state.bcc,
      "cc":this.state.cc,
      "user_name":this.state.user_name,
      "user_email":this.state.user_email,
      "subject":this.state.subject,
      "mgs":this.state.message,
      userid: sessionStorage.getItem('userid')
     })


  });



}



handleSingledelete = (_id) => {

this.setState({confirmation:true})
  this.setState({
    Load: true,

  });
  var sendId = {
    _id: _id,
    userid: sessionStorage.getItem('userid'),
  }
  // alert(sendId._id);
  try {
    axios.post(DELETESINGLEUSERCOMMENT, sendId, {
      headers: { 'Accept':'application/json','Content-Type': 'application/json' },
    })
      .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);

        window.location = "/customer/ViewUsersComment";
        
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

allselectCheckbox =(event)=>{
  // console.log(event.target.checked)
  if(!this.state.allchecked){
    this.setState({allchecked:true});

    console.log(this.state.ischeck);
    var data = [];
    var setchecked = this.state.ischeck.map((item)=>{
      item.checked = true

      if(item.checked == true){
        return data.push(item);
           }
    })
    this.setState({selectedItem:data}) 

    
    // console.log(setchecked)

  }

  else{
    this.setState({allchecked:false});

    console.log(this.state.ischeck);
    var data = [];
    var set = this.state.ischeck.map(item=>{

      item.checked=false;
      if(item.checked == true){
        return data.push(item);
        }
     
    })
 
      this.setState({selectedItem:data})
  }


}
handleChangecheckbox=(index)=>{
// console.log(this.state.ischeck[index]['checked'])
          if(!this.state.ischeck[index]['checked']){

            let a = this.state.ischeck.slice(); //creates the clone of the state
                        
            a[index]['checked'] = true;
            this.setState({ischeck: a});
            // console.log(this.state.ischeck)
            var data = [];
            a.map((item)=>{

              if(item.checked == true){
              return data.push(item);;
              
            
          } 
            // console.log(data)
            this.setState({selectedItem:data})
              this.setState({itemcheck:true})

          })
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
                  
        this.setState({selectedItem:data})
  
  // console.log(this.state.ischeck)
}
}

deleteAll = (event)=>{

  
  // this.setState({openforall:true})
  var data=[];
  this.state.selectedItem.map(i=>{

     return data.push(i.id);
     
  
 })


 this.setState({
  Load: true,

});
var sendId = {
  _id: data,
  userid: sessionStorage.getItem('userid'),
}
// alert(sendId._id);
try {
  axios.post(DELETEMULUSERCOMMENT, sendId, {
    headers: { 'Accept':'application/json','Content-Type': 'application/json' },
  })
    .then(res => {
      //alert(res.data);
      console.log(res.status);
      console.log(res.data);

      window.location = "/customer/ViewUsersComment";
      
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


  render() {
 
    const { userlist, currentPage, listPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
    
    // console.log(currentPage)
    const indexOfLastTodo = currentPage * listPerPage;
    // console.log(indexOfLastTodo);
    //  5 = 1*5
    // 

    const indexOfFirstTodo = indexOfLastTodo - listPerPage;
    // console.log(indexOfFirstTodo);
    //  0 = 5-5



    const currentList = userlist.slice(indexOfFirstTodo, indexOfLastTodo);
    // console.log(currentList);
    // todos.slice(0,5)


    const renderTodos = currentList.map((users, index) => {
      return  (
      
        <Accordion  key={(index+indexOfFirstTodo)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        > 
        <Checkbox   checked={this.state.ischeck[(index+indexOfFirstTodo)]['checked']}  onClick={this.handleChangecheckbox.bind(this, (index+indexOfFirstTodo))}   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 },color:"red", '&.Mui-checked': {
          color: "red",}}}/>

          <Typography sx={{ width: '50%', flexShrink: 0,  }}>
           <AccountCircleIcon sx={{height:"50px",width:"50px"}}/>
          </Typography>
          <Typography sx={{ color: 'text.secondary',height:"auto" }} >{users.user_name}</Typography>

        
          </AccordionSummary>
          <AccordionDetails>

             <Typography>
             <h5>{users.subject}</h5><span>{users.comment}</span>
            </Typography>

              <Typography className="float-end" sx={{p:3}}>


              <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab color="error" aria-label="add" onClick={()=>this.handleSingledelete(users._id)}>
              <  DeleteIcon/>
              <Snackbar open={this.state.confirmation} autoHideDuration={6000} onClose={this.handleClose}>

              <MuiAlert  onClose={this.handleClose} severity="danger" sx={{ width: '100%' }} elevation={6} variant="filled" >Delete successfully!</MuiAlert>

              </Snackbar>

              </Fab>

              </Box>


              </Typography>
         
                <Typography className="float-end" sx={{p:3}}>


                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="secondary" aria-label="add" onClick={()=>this.handleSingleEmail(users.user_email,users.user_name)}>
                  < EmailIcon/>
                

                </Fab>

                </Box>


                </Typography>
           
  
                  <Dialog open={this.state.openemailpopup} PaperProps={{ sx: { width: "50%", height: "100%",bgcolor:'#ffff ' } }} actions={[
                                           
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
                      <form  onSubmit={this.handleclicksubmit } id="form"
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
                       />
                          <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Your Name"
                          type="text"
                          fullWidth
                          variant="standard"
                          onChange={this.handlenameinput}
                          value={this.state.user_name}
                          margin="normal"
                          inputProps={{readOnly:true, style: {fontSize: 15,color:'#d63384'}}} 
                          InputLabelProps={{style: {fontSize: 15}}}
                          required
                          id="filled-read-only-input"
                      
                          defaultValue={this.state.user_name}
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
                          value={this.state.user_email}
                          margin="normal"
                          inputProps={{ readOnly: true, style: {fontSize: 15,color:'#d63384'}}} 
                          InputLabelProps={{style: {fontSize: 15}}}
                          required
                          id="filled-read-only-input"
                      
                          defaultValue={this.state.user_email}
                          
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
                  
                     
                    
                  
                      <Button variant="contained"  color='secondary' form="form" onClick={this.onconfirmclickemailsend } type="submit" >SEND</Button>
                      <Snackbar open={this.state.emailconfirmation} autoHideDuration={6000} onClose={this.handleClose}>
                    
                      <MuiAlert  onClose={this.handleClose} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled" >email send successfully!</MuiAlert>
                      
                  </Snackbar>
                 
                  </Dialog>
        </AccordionDetails>
        </Accordion>
      )

      
    })


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(userlist.length / listPerPage); i++) {
      pageNumbers.push(i);
    }

    // console.log(pageNumbers);

    const renderPageNumbers = pageNumbers.map(number => {
        if(number === 1 && currentPage === 1){
          // ((1-5=== 1) && (1 ===1) )
            return(
                <li key={number}  style={{padding:'3px'}} className='active' id={number}><a className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href='#' id={number} onClick={this.handleClick}>{number}</a></li>
            )
        }
        else if((number < upperPageBound + 1) && number > lowerPageBound){

          // ((1-5 <3 +1 ) && (1-5>0))
            return(
                <li key={number} id={number}  style={{padding:'3px'}}><a className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href='#' id={number} onClick={this.handleClick}>{number}</a></li>
            )
        }
    });
    let pageIncrementBtn = null;

    // console.log("pagenumber"+ pageNumbers);
    // console.log("upperPageBound"+ upperPageBound);

    if(pageNumbers.length > upperPageBound){
        pageIncrementBtn =  
                              
        <li  className="page-item" style={{padding:'3px'}}><a  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
    }

    // console.log("lowerPageBound"+ lowerPageBound);

    let pageDecrementBtn = null;
    if(lowerPageBound >= 1){
        pageDecrementBtn = <li  className="page-item" style={{padding:'3px'}}><a className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href='#' onClick={this.btnDecrementClick}> &hellip; </a></li>
    }
    let renderPrevBtn = null;
    if(isPrevBtnActive === 'disabled') {
        renderPrevBtn = <li className={isPrevBtnActive} style={{padding:'3px'}}><span className="page-link btn btn-primary disabled"  id="btnPrev"> Prev </span></li>
    }
    else{
        renderPrevBtn = <li className={isPrevBtnActive} style={{padding:'3px'}}><a  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a></li>
    }
    let renderNextBtn = null;
    if(isNextBtnActive === 'disabled') {
        renderNextBtn = <li className={isNextBtnActive} style={{padding:'3px'}}><span className="page-link btn btn-primary disabled"  id="btnNext"> Next </span></li>
    }
    else{
        renderNextBtn = <li className={isNextBtnActive} style={{padding:'3px'}}><a  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href='#' id="btnNext" onClick={this.btnNextClick}> Next </a></li>
    }
    return (

      <> <Header/>
       
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
          <li className="breadcrumb-item active" aria-current="page">User Comment List</li>
        </ol>
      </div>
      <div className="col-auto">
        <div className="d-md-flex d-none justify-content-lg-end align-items-center">
         
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-auto">
        <h1 className="fs-4 mt-1 mb-0">User Comment List</h1>
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
          <Typography sx={{color:"white"}}> Select All</Typography>
          <Checkbox checked={this.state.allchecked} onClick={this.allselectCheckbox}   sx={{ '& .MuiSvgIcon-root': { fontSize: 28 },color:"red", '&.Mui-checked': {
            color: "red",},marginLeft:2}}/>
          
          {this.state.selectedItem==''?(""):(
          
          <div>  <Fab color="error" aria-label="add" onClick={this.deleteAll}  sx={{marginLeft:2}}>
              <  DeleteIcon  />
              <Snackbar open={this.state.confirmation} autoHideDuration={6000} onClose={this.handleClose}>

              <MuiAlert  onClose={this.handleClose} severity="danger" sx={{ width: '100%' }} elevation={6} variant="filled" >Delete successfully!</MuiAlert>

              </Snackbar>

              </Fab></div>  )}
    
           
            

          
          <div className="row g-6">
        
          <ul>
          {renderTodos}
        </ul>

        <div className="center">
                      
                      <div><br></br></div>
                     <nav aria-label="Page navigation example">
                     <ul className="pagination justify-content-center" >
                         
                     {renderPrevBtn}
                      {pageDecrementBtn}
                      {renderPageNumbers}
                      {pageIncrementBtn}
                      {renderNextBtn}
                      
                        </ul>
                
                        </nav>
                  </div>
    
        {/* <ul id="page-numbers" className="pagination">
         
        </ul> */}
      </div>
      </div>
    
           
    </div>
  </div>


      <Footer/>
      </>
     
    );
  }
}
export default ViewUsersComment 

