
import React, { Component } from 'react'
import axios from 'axios';
import ReactLoading from "react-loading";
import {SHOWNEWLETTER,SEARCHNEWSLETTER,SENDSIGLEUSERNEWSLETTER,SENDTOMULTIPLE} from '../../../Components/admincomponent/links/superadminlinks';
import Footer from '../../../Components/admincomponent/Footer'
import Header from  '../../../Components/admincomponent/Header';
import {Button} from '@material-ui/core';
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';



class NewsLetterList extends React.Component {
  state = {
    i: 0,
    Load: false,
    progress: '',
    userlist:[],
    currentPage:1,
    listperPage:5,
    openpopup:false,
    user_name:'',
    user_email:'',
    ischeck:[],
    allchecked:false,
    selectedItem:'',
    sendconfirm:false,
    openforall:false,
    message:'',
    cc:'',
    bcc:'',
    subject:'',
    sendconfirmforall:false,
    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    pageBound: 3

  }

  componentDidMount() {

    axios.post(SHOWNEWLETTER,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const userdata = res.data;
      
        userdata.map((data)=>{
            this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ id: data._id,  checked:false } ]}))

          });
        this.setState({ userlist: userdata});

       
      })
 


  }


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
      axios.post(SEARCHNEWSLETTER, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
       
          const userlist = res.data;
          this.setState({ userlist });
        
  
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




handleClick=(event)=> {
  let listid = Number(event.target.id);
  this.setState({
    currentPage: listid
  });
console.log(listid)
  this.setPrevAndNextBtnClass(listid);
}
setPrevAndNextBtnClass=(listid) =>{
  let totalPage = Math.ceil(this.state.userlist.length / this.state.listperPage);
  console.log(this.state.userlist.length);
  console.log(this.state.listperPage)

  console.log(totalPage)
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






  handleclickopen=(email)=>{

    this.setState({openpopup:true});
    // this.setState({user_name:name});
    this.setState({user_email:email});
    // alert(email);


  }

  handleclickclose =()=>{
      this.setState({openpopup:false})
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

  handleemailinput=(event)=>{
    this.setState({user_email:event.target.value})
    
  }
  handlesubjinput=(event)=>{
    this.setState({subject:event.target.value})
    
  }

  handleclicksubmit=(event)=>{
  
   
event.preventDefault();
    

 
var sendId = {
  "bcc":this.state.bcc,
  "cc":this.state.cc,
  "user_email":this.state.user_email,
  "subject":this.state.subject,
  "msg":this.state.message,
  // userid: sessionStorage.getItem('userid'),
}
   
try{
axios.post(SENDSIGLEUSERNEWSLETTER, sendId,{
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
        window.location = "/customer/ViewUsersComment"
        alert("email send")


      }
 
    
  })
}  catch(error) {
  
        console.log(error)
        this.setState({
            Load :false,
            });
        console.log("internal server error");
      }

// this.setState({
//   Load: true,

// });
// var sendId = {
//   "bcc":this.state.bcc,
//   "cc":this.state.cc,
//   "user_email":this.state.user_email,
//   "subject":this.state.subject,
//   "mgs":this.state.message,
//   // userid: sessionStorage.getItem('userid'),
// }


// console.log(sendId)
// // alert(sendId._id);
// try {
//   axios.post(SENDSIGLEUSERNEWSLETTER, sendId, {
//     headers: { 'Accept':'application/json','Content-Type': 'application/json' },
//   })
//     .then(res => {
//       //alert(res.data);
//       console.log(res.status);
//       console.log(res.data);

//       // window.location = "/customer/ViewUsersComment";
      
//       this.setState({
//         Load: false,

//       });

//     })
// } catch (error) {

//   console.log(error)
//   this.setState({
//     Load: false,
//   });
//   console.log("internal server error");
// }


    // fetch(SENDSIGLEUSERNEWSLETTER, {
    //    method: 'post',
    //    headers: {'Content-Type':'application/json'},
    //    body: JSON.stringify({
    //     "bcc":this.state.bcc,
    //     "cc":this.state.cc,
        
    //     "user_email":this.state.user_email,
    //     "subject":this.state.subject,
    //     "mgs":this.state.message,
        
    //    })


    // });
  
  

  }
  onconfirmclickemailsend = ()=>{

    this.setState({sendconfirm:true})
    this.setState({sendconfirmforall:true})
    this.setState({openforall:false})

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
        // console.log(data)
       
       
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
            // console.log(data);
  }


     }

     handleChangecheckbox = (index) => {
    // console.log(this.state.ischeck[index]['checked'])
        if(!this.state.ischeck[index]['checked']){

          let a = this.state.ischeck.slice(); //creates the clone of the state
              
              a[index]['checked'] = true;
              this.setState({ischeck: a});
              var data = [];

         a.map((item)=>{

        if(item.checked == true){
        return data.push(item);;
        
       
} 
// console.log(data)
      })
      
    //   console.log(data)
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
          // console.log(data)
  
}


    };



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
          var sendId = {
            "_id":this.state.allids,
            "bcc":this.state.bcc,
            "cc":this.state.cc,
            "subject":this.state.subject,
            "mgs":this.state.message,
            userid: sessionStorage.getItem('userid')
            // userid: sessionStorage.getItem('userid'),
          }
          
          
          console.log(sendId)
          // alert(sendId._id);
          try {
            axios.post(SENDTOMULTIPLE, sendId, {
              headers: { 'Accept':'application/json','Content-Type': 'application/json' },
            })
              .then(res => {
                //alert(res.data);
                console.log(res.status);
                console.log(res.data);
          
                // window.location = "/customer/ViewUsersComment";
                
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
          
       
          // fetch(SENDTOMULTIPLE,{
          //    method: 'post',
          //    headers: {'Content-Type':'application/json'},
          //    body: JSON.stringify({
              //  "_id":this.state.allids,
              // "bcc":this.state.bcc,
              // "cc":this.state.cc,
              // "subject":this.state.subject,
              // "mgs":this.state.message,
              // userid: sessionStorage.getItem('userid')
          //    })
             
          // });
          // event.preventDefault();

       
        }
  




  render() {

    const {userlist,currentPage,listperPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
    const LastIndexpage = currentPage * listperPage;
    //   5 = 1*5
    //  console.log(LastIndexpage);

     const FirstIndexPage = LastIndexpage - listperPage
    //  0 = 5-5
    //  console.log(FirstIndexPage);

    const currentList = userlist.slice(FirstIndexPage,LastIndexpage);
    //  currentList  = userlist.slice(0,5)
    // console.log(currentList)






    // const renderuserlist = 

     const pageNumber =[];
     const nextNumber = [];

     for(let i = 1; i<=Math.ceil(userlist.length/listperPage);i++){

            pageNumber.push(i);


     }

     const renderPageNumbers = pageNumber.map((number)=>{
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

     })

     let pageIncrementBtn = null;

    //  console.log("pagenumber"+ pageNumber);
    //  console.log("upperPageBound"+ upperPageBound);
 
     if(pageNumber.length > upperPageBound){
         pageIncrementBtn =  
                               
         <li  className="page-item" style={{padding:'3px'}}><a  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
     }
 
    //  console.log("lowerPageBound"+ lowerPageBound);

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
            <li className="breadcrumb-item active" aria-current="page">News Letter List</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">News Letter List</h1>
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
              
                {!this.state.Load ? (""
                ) : (<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                  height={100} width={50} /></div>)}

                {
                  this.state.progress && <h5> {
                    this.state.progress < 100 ?
                      `${this.state.progress}%` : "Photo Uploaded ,Please Wait Almost Done....!"}
                    {this.state.invalidImage && <h5 style={{ color: "red" }} className="error"> {this.state.invalidImage}</h5>}
                  </h5>

                }
                <div className="col-md-12">
                     
                  <div className="card">
                    <div className="card-body">

                    <div className="col-md-4"style={{float:"left"}}>
                       <lable><h4>Search User</h4></lable>
                    <input class="form-control" type="text" list="data" value={this.state.search_tiffins} onChange={this.handleinputSearch} placeholder='Search Tiffins'  id="searchdata"/>

                    <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                    {this.state.selectedItem==''?(""):(<div><button className="btn btn-primary" style={{marginTop:4}}  onClick={()=>this.EmailSendAll(this.state.selectedItem)}> SEND ALL  <ForwardToInboxIcon/></button></div>  )}

                          </div>


              <Dialog open={this.state.openforall} PaperProps={{ sx: { width: "50%", height: "100%",bgcolor:'#ffff ' } }} actions={[
        
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
            onSubmit={this.handleclicksubmitsendall } id="sendall1"
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

                                            
                                            {/* <Button variant="contained" color='secondary' onClick={this.handleclickclose}>Cancel</Button> */}
                                        
                                            <Button variant="contained"  color='secondary' form="sendall1" onClick={this.onconfirmclickemailsend } type="submit" >SEND</Button>
                                           
                                          
       </Dialog>
      
                                        <Snackbar open={this.state.sendconfirm} autoHideDuration={6000} onClose={this.handleClose}>
                                         
                                            <MuiAlert  onClose={this.handleClose} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled" >email send successfully!</MuiAlert>
                                            
                                        </Snackbar>

                          {/* <div className="col-md-4">
                    
                          </div> */}

                          <div className="col-md-4" style={{float:"right"}}>
                   
                                    
                      <div><br></br></div>

                          </div>
                        <div><br></br></div>
                        <table className="table myDataTable table-hover align-middle mb-0">
                             <thead align="center">
                                  <tr>
                                  <th scope="col"> 
                                         <input type="checkbox" style={{ fontSize: "20px" }} class="form-check-input" checked={this.state.allchecked}
                                        onClick={this.allselectCheckbox} /> Select All
                                     </th>
                                    <th scope="col">S.No</th>
                                    
                                    <th scope="col">Email</th>
                                    
      
        
                                   
                                  </tr>
                                </thead>
                                <tbody align="center">

                              {  currentList.map((users,index)=>{
                                    return(
                                        <tr key={(index+FirstIndexPage)}>
                                             <th scope="row"   style={{ verticalAlign: "middle" }}>   <input  class="form-check-input" style={{ fontSize: "20px" }} type="checkbox"
                                              checked={this.state.ischeck[(index+FirstIndexPage)]['checked']}
                                            onClick={this.handleChangecheckbox.bind(this, (index+FirstIndexPage))} 
                                            /></th>
                                        <th scope="row" style={{ verticalAlign: "center" }} >{(index+FirstIndexPage)+1} </th>     
                                           
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.user_email} </td>     
                                      
                                        <td scope="row" style={{ verticalAlign: "middle" }}> <button type="button"  onClick={()=>{this.handleclickopen(users.user_email)}}  className="btn btn-primary"><svg xmlns="http://www.w3.org/1500/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                        </svg></button>
                                        
                                        
                                            <Dialog open={this.state.openpopup} PaperProps={{ sx: { width: "50%", height: "100%",bgcolor:'#ffff ' } }} actions={[
                                           
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
                                                    onSubmit={this.handleclicksubmit } id="form1"
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
                                            
                                        
                                                <Button variant="contained" type="submit" color='secondary' onClick={this.onconfirmclickemailsend } form="form1" >SEND</Button>
                                              
                                                <Snackbar open={this.state.sendconfirm} autoHideDuration={6000} onClose={this.handleClose}>
                                              
                                                <MuiAlert  onClose={this.handleClose} severity="success" sx={{ width: '100%' }} elevation={6} variant="filled" >email send successfully!</MuiAlert>
                                                
                                            </Snackbar>
                                               
                                            </Dialog>
                                        
                                        
                                        </td> 

                                        </tr>
                                    )
                                    
                                })
                            
                            }
                                   
                              </tbody>
                            
                              </table>
                             
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
      
     
                  </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        
            
        </div>
     <Footer/>
      </>

    );
  }
}

export default NewsLetterList 