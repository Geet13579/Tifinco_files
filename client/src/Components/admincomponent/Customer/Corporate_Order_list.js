
import React, { Component } from 'react'
import axios from 'axios';
import ReactLoading from "react-loading";
import {ShOWUSERSINFO,SEARCHUSERS,SENDSINGLEUSERS,SENDTOMULTIPLE} from '../../../Components/admincomponent/links/superadminlinks';
import Footer from '../../../Components/admincomponent/Footer'
import Header from  '../../../Components/admincomponent/Header';
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
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import SendIcon from '@mui/icons-material/Send';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';



class PREBOOKLIST extends React.Component {
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
    pageBound: 3,


    openpopupforpayment:false,
    existinglink:true,
    newlink:false,
    openpaymentpage:false,


    userorder_email:'',
    orderid:'',
    userorder_number:'',
    userorder_name:'',
    plan_type:'',
    orderAmmount:'',


    paymentname:'',
    paymentemail:'',
    paymenmobile:'',
    paymentplantype:'',
    paymentammount:'',
   




  }

  componentDidMount() {

    axios.post("https://tifinco.com:5000/admin/show_Corporate_orders",{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const userdata = res.data;
        console.log(userdata)
        userdata.map((data)=>{
            this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ id: data._id,  checked:false } ]}))

          });
        this.setState({ userlist: userdata});

      

        //   console.log(this.state.ischeck[1]['checked']);
          // this.receivedData()
       
      })
 


  }

  handleinputSearch=(event)=>{

    // var searchdata = document.getElementById('searchdata').value;

    

    // var tiffin_data = searchdata.split('-')
    // // alert(tiffin_data[0]);


    // if(tiffin_data[0]==='nonvegheatableNVH'){
    // var NVH = searchdata.split('nonvegheatable');
    // this.setState({ search_tiffins:NVH[1] });
    // // alert(NVH[1]);
    // }

    // else if(tiffin_data[0]==='vegheatableVH'){
    //   var VH = searchdata.split('vegheatable');
    //   this.setState({ search_tiffins:VH[1] });
    //   // alert(VH[1]);
      
    // }

    // else if(tiffin_data[0]==='nonvegnonheatableNVN'){
    //   var NVN = searchdata.split('nonvegheatable');
    //   this.setState({search_tiffins: NVN[1] });
    //   // alert(NVN[1]);
      
    // }

    // else if(tiffin_data[0]==='vegnonheatableVN'){
    //   var VN = searchdata.split('vegnonheatable');
    //   this.setState({search_tiffins: VN[1] });
    //   // alert(VN[1]);
      
    // }
    // else{

    //   this.setState({search_tiffins: searchdata });
    // }
    


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
      axios.post(SEARCHUSERS, sendId, {
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






  handleclickopen=(email,name)=>{

    this.setState({openpopup:true});
    this.setState({user_name:name});
    this.setState({user_email:email});

  }

  handleclickclose =()=>{
      this.setState({openpopup:false});
      this.setState({openforall:false});
      this.setState({openpaymentpage:false})
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

    this.setState({user_name:event.target.value})
  }

  handleemailinput=(event)=>{
    this.setState({user_email:event.target.value})
    
  }
  handlesubjinput=(event)=>{
    this.setState({subject:event.target.value})
    
  }

  handleclicksubmit=(event)=>{
  
     
    fetch(SENDSINGLEUSERS, {
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

       
          fetch(SENDTOMULTIPLE,{
             method: 'post',
             headers: {'Content-Type':'application/json'},
             body: JSON.stringify({
               "_id":this.state.allids,
              "bcc":this.state.bcc,
              "cc":this.state.cc,
              "subject":this.state.subject,
              "mgs":this.state.message,
              userid: sessionStorage.getItem('userid')
             })
             
          });
          event.preventDefault();

       
        }
        handleclickcloseforpayment=()=>{
          this.setState({openpopupforpayment:false})
        }

        handlesendpaymentlink=(orderid,email,name,number,plan_type,ammount)=>{
        this.setState({openpopupforpayment:true});
        this.setState({orderid:orderid});
        this.setState({userorder_email:email});
        this.setState({userorder_number:number});
        this.setState({userorder_name:name});
        this.setState({plan_type:plan_type});
        this.setState({orderAmmount:ammount})
      

            
            // const data = {

            //   orderId: orderid,
            //   user_email:email,
            
            // };
              
            // try{
            // axios.post('https://tifinco.com:5000/admin/getpaymentlinkforexisting', data,{
            //   headers:{'content-Type': 'application/json'},
             

            // })
            //   .then(res => {
              
              
            //         window.location.reload();
            //         alert("data send")


                  
                 
                
            //   })
            // }  catch(error) {
              
            //         console.log(error)
            //         this.setState({
            //             Load :false,
            //             });
            //         console.log("internal server error");
            //       }



                        }
                       
                        existingLink=(event)=>{
                          // console.log(event.target.value);
                          this.setState({existinglink:true})
                          this.setState({newlink:false})

                        }
                        newLink =(event)=>{
                          this.setState({newlink:true})
                          this.setState({existinglink:false})
                        }

                        onclicksendbutton =(event)=>{

                          // console.log(this.state.existinglink);
                          // console.log(this.state.newlink)

                          if(this.state.existinglink == true){

                                            
                            const data = {

                              orderId: this.state.orderid,
                              user_email:this.state.userorder_email,
                            
                            };
                              
                            try{
                            axios.post('https://tifinco.com:5000/admin/getpaymentlinkforexisting', data,{
                              headers:{'content-Type': 'application/json'},
                            

                            })
                              .then(res => {
                              
                              
                                    window.location.reload();
                                    alert("data send")


                                  
                                
                                
                              })
                            }  catch(error) {
                              
                                    console.log(error)
                                    this.setState({
                                        Load :false,
                                        });
                                    console.log("internal server error");
                                  }



                          }


                          else if(this.state.newlink== true){

                            console.log("send new link");
                            this.setState({openpaymentpage:true})

                          }

                        }

        
// for new payment link
                      

                        handlepaymentnameinput=(event)=>{
                          this.setState({userorder_name:event.target.value});

                        }
                        handlepaymentemailinput=(event)=>{
                          this.setState({userorder_email:event.target.value});

                        }
                        handlepaymentmobile=(event)=>{
                          this.setState({userorder_number:event.target.value});

                        }
                        handlepaymentplantype=(event)=>{
                          this.setState({plan_type:event.target.value});

                        }

                        handlepaymentammount=(event)=>{
                          this.setState({orderAmmount:event.target.value});
                          // console.log(this.state.paymentammount)

                        }
                        
                        onsubmitpaymentLink=(event)=>{
                         
                          // event.preventDefault()
                        //  console.log(this.state.userorder_name);
                        //  console.log(this.state.userorder_email);
                        //  console.log(this.state.userorder_number);
                        //  console.log(this.state.plan_type);
                        //  console.log(this.state.orderAmmount);

                        const data = {

                          
                          
                          
                          plan_type:this.state.plan_type,
                          user_name: this.state.userorder_name,
                          user_number:this.state.userorder_number,
                          user_email:this.state.userorder_email,
                          orderAmount:this.state.orderAmmount

                        
                        };
                               
               try{
                axios.post('https://tifinco.com:5000/admin/getorderNewlink', data,{
                  headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
                  onUploadProgress: data => {
                 
                    this.setState({
                    progress: Math.round((100 * data.loaded) / data.total)
        
                    });
                  },
                
                })
                  .then(res => {
                   
                    
        
                    
                        console.log("success");
                        window.location.reload();
                        alert("Data Send")
              
            
                      
                    
                  })
                }  catch(error) {
                  
                        console.log(error)
                        this.setState({
                            Load :false,
                            });
                        console.log("internal server error");
                      }
                        
                        }


                        handleviewuserdetails=(_id)=>{
                          window.location = '/customer/showmoreCorporate/'+_id
  
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
 
     console.log("lowerPageBound"+ lowerPageBound);

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
            <li className="breadcrumb-item active" aria-current="page">Corporate Order List</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Corporate Order List</h1>
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

                    {/* <div className="col-md-4"style={{float:"left"}}>
                       <lable><h4>Search User</h4></lable>
                       <input class="form-control" type="text" list="data" value={this.state.search_tiffins} onChange={this.handleinputSearch} placeholder='Search Tiffins'  id="searchdata"/>

                    <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                    {this.state.selectedItem==''?(""):(<div><button className="btn btn-primary" style={{marginTop:4}}  onClick={()=>this.EmailSendAll(this.state.selectedItem)}> SEND ALL  <ForwardToInboxIcon/></button></div>  )}

                          </div> */}


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
           
            inputProps={{style: {fontSize: 15,color:'#d63384'}}} 
            InputLabelProps={{style: {fontSize: 15}}}
          
           
          />
    
  </form>
        </DialogContent>
        <DialogActions >
                                            
                                            {/* <Button variant="contained" color='secondary' onClick={this.handleclickclose}>Cancel</Button> */}
                                        
                                            <Button variant="contained"  color='secondary' form="sendall" onClick={this.onconfirmclickemailsend } type="submit" >SEND</Button>
                                           
                                            </DialogActions>
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
                                  {/* <th scope="col"> 
                                         <input type="checkbox" style={{ fontSize: "20px" }} class="form-check-input" checked={this.state.allchecked}
                                        onClick={this.allselectCheckbox} /> Select All
                                     </th> */}
                                                    <th scope="col">S.No</th>
                                                    <th>Order Id</th>
                                                    <th>GST No</th>
                                                    <th>nameOfinstitude_Or_Compony</th>
                                                    <th scope="col">contactperson_name</th>
                                                    <th scope="col">Show More</th>
                                                    {/* <th scope="col">Email</th>
                                                    <th scope="col">Mobile</th>                                                    
                                                    <th>address</th>                                                    
                                                    <th scope="col">plantype</th>
                                                    <th scope="col">Date</th> */}
                                                    {/* <th>meal_prefrence</th>
                                                    <th>no_of_vegpeople</th>
                                                    <th>no_of_nonvegpeople</th>
                                                    <th>starting_date</th>
                                                    <th>ending_date</th>
                                                    <th>deliverytime</th>                                                   
                                                    <th scope="col">Amount</th>                                                    */}
                                                    {/* <th scope="col">Send Payment Link</th>
                                                    
                                                    <th scope="col">Send Email</th> */}
                                                    {/* <th>status</th> */}
                    
        
                                   
                                  </tr>
                                </thead>
                                <tbody align="center">

                              {  currentList.map((users,index)=>{
                                    return(
                                        <tr key={(index+FirstIndexPage)}>
                                        {/* <th scope="row"   style={{ verticalAlign: "middle" }}>   <input  class="form-check-input" style={{ fontSize: "20px" }} type="checkbox"
                                         checked={this.state.ischeck[(index+FirstIndexPage)]['checked']}
                                          onClick={this.handleChangecheckbox.bind(this, (index+FirstIndexPage))} 
                                            /></th> */}
                                        <th scope="row" style={{ verticalAlign: "center" }} >{(index+FirstIndexPage)+1} </th>  
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.orderId} </td>  
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.gst} </td>  
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.nameOfinstitude_Or_Compony} </td>
                                          
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.contactperson_name} </td>     
                                        {/* <td scope="row" style={{ verticalAlign: "center" }} >{users.email} </td>   
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.contact_number} </td>    
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.address} </td> 
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.plan_type} </td>
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.createdAt.replace('T',' ')} </td>  */}


                                          
                                        {/* <td scope="row" style={{ verticalAlign: "center" }} >{users.meal_prefrence} </td>
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.no_of_vegpeople} </td> 
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.no_of_nonvegpeople} </td>   
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.starting_date} </td>  
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.ending_date} </td>  
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.deliverytime} </td>  
                                        
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.amount} </td>
                                        
                                       
                                        <td scope="row" style={{ verticalAlign: "center" }} >{users.status} </td> */}

                                        {/* <td scope="row" style={{ verticalAlign: "middle" }}> <button type="button"  onClick={()=>{this.handlesendpaymentlink(users.orderId,users.user_email)}}  className="btn btn-primary"><SendIcon sx={{fontSize:15}}/></button>
                                        </td> */}
                                        <td scope="row" style={{ verticalAlign: "middle" }}> <button type="button"  onClick={()=>{this.handleviewuserdetails(users._id)}}  className="btn btn-primary"><VisibilityIcon sx={{fontSize:20}}/></button>
                                        </td>
                                        {/* <td scope="row" style={{ verticalAlign: "middle" }}> <button type="button"  onClick={()=>{this.handlesendpaymentlink(users.orderId,users.user_email,users.user_name,users.user_number,users.plan_type,users.orderAmount)}}  className="btn btn-primary"><SendIcon sx={{fontSize:15}}/></button>
                                        </td> */}

                                        <Dialog open={this.state.openpopupforpayment} PaperProps={{ sx: { width: "50%", height: "50%",bgcolor:'#ffff ' } }} actions={[
                                           
                                          ]}>
                                          <Box
                                              m={1}
                                         
                                              display="flex"
                                              justifyContent="flex-end"
                                              alignItems="flex-end"
                                              
                                          >
                                              <Button color="secondary" sx={{ height: 40 }} onClick={this.handleclickcloseforpayment}>
                                              <CloseIcon/>
                                              </Button>
                                           </Box>
                                          
                                              <DialogTitle><center><strong style={{color: '#00000'}} >Choose For Payment Link </strong></center></DialogTitle>
                                              
                                                <center>
                                                <FormControl>
                                                <RadioGroup
                                              aria-labelledby="demo-radio-buttons-group-label"
                                              defaultValue="existing"
                                              name="radio-buttons-group"
                                              
                                            >
                                              <FormControlLabel value="existing" onChange={this.existingLink} control={<Radio sx={{color: "red",'&.Mui-checked': {color: "red",},}}/>} label="Send Existing Payment Link" sx={{p:2, }}/>

                                              <FormControlLabel value="newpayment" onChange={this.newLink}  control={<Radio sx={{color: "red",'&.Mui-checked': {color: "red",},}} />} label="Send New Payment Link"  sx={{p:2}}/>
                                              
                                            </RadioGroup>
                                            </FormControl>

                                          
                                                </center>
                                                <center>

                                                <Button variant="contained" sx={{m:6}}  color='secondary'  onClick={this.onclicksendbutton}  >Ok</Button>
                                          

                                                </center>
   
                                               
                                          
                                         
                                          </Dialog>


                                          {/* for new payment popup */}

                                          <Dialog open={this.state.openpaymentpage} PaperProps={{ sx: { width: "50%", height: "80%",bgcolor:'#ffff ' } }} actions={[
                                           
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
                                          
                                              <DialogTitle><center><strong style={{color: '#00000'}} >SEND New Payment Link</strong></center></DialogTitle>
                                              
                                              <DialogContent>
                                              <form
                                                  onSubmit={this.onsubmitpaymentLink} id="paymentform"
                                              >


                  
                                                  <TextField
                                                  autoFocus
                                                  margin="dense"
                                                  id="name"
                                                  label="Your Name"
                                                  type="text"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={this.handlepaymentnameinput}
                                                  value={this.state.userorder_name}
                                                 
                                                  inputProps={{readOnly:true, style: {fontSize: 15,color:'#d63384'}}} 
                                                  InputLabelProps={{style: {fontSize: 15}}}
                                                  required
                                                  
                                              
                                                  defaultValue={this.state.userorder_name}
                                              />
                                              <TextField
                                                  autoFocus
                                                  margin="dense"
                                                  id="name"
                                                  label="Email Address"
                                                  type="email"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={this.handlepaymentemailinput}
                                                  value={this.state.userorder_email}
                                                 
                                                  inputProps={{ readOnly: true, style: {fontSize: 15,color:'#d63384'}}} 
                                                  InputLabelProps={{style: {fontSize: 15}}}
                                                  required
                                                  
                                              
                                                  defaultValue={this.state.userorder_email}
                                                  
                                              />
                                                <TextField
                                                  autoFocus
                                                  margin="dense"
                                                  id="name"
                                                  label="Mobile Number"
                                                  type="text"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={this.handlepaymentmobile}
                                                  value={this.state.userorder_number}
                                                 
                                                  inputProps={{ readOnly: true, style: {fontSize: 15,color:'#d63384'}}} 
                                                  InputLabelProps={{style: {fontSize: 15}}}
                                                  required
                                                  
                                              
                                                  defaultValue={this.state.userorder_number}
                                                  
                                              />
                                              <TextField
                                                  autoFocus
                                                  margin="dense"
                                                  id="name"
                                                  label="Plan Type"
                                                  type="text"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={this.handlepaymentplantype}
                                                  value={this.state.plan_type}
                                                 
                                                  inputProps={{ readOnly: true, style: {fontSize: 15,color:'#d63384'}}} 
                                                  InputLabelProps={{style: {fontSize: 15}}}
                                                  required
                                                  
                                              
                                                  defaultValue={this.state.plan_type}
                                                  
                                              />
                                              <TextField
                                                  autoFocus
                                                  margin="dense"
                                                  id="name"
                                                  label="Ammount to pay"
                                                  type="text"
                                                  fullWidth
                                                  variant="standard"
                                                  onChange={this.handlepaymentammount}
                                                  value={this.state.orderAmmount}
                                                 
                                                  inputProps={{ style: {fontSize: 15,color:'#d63384'}}} 
                                                  InputLabelProps={{style: {fontSize: 15}}}
                                                  required
                                                  
                                              />
                                              
                                              {/* <TextField
                                                  autoFocus
                                                  margin="dense"
                                                  id="name"
                                                  label="Message"
                                                  type="text"
                                                  fullWidth
                                                  multiline
                                                  variant="standard"
                                                  onChange={this.handlemessageinput}
                                                 
                                                  inputProps={{style: {fontSize: 15,color:'#d63384'}}} 
                                                  InputLabelProps={{style: {fontSize: 15}}}
                                              
                                              
                                              /> */}
                                              
                                      
                                      </form>
                                              </DialogContent>
                                          
                                              <DialogActions >
                                          
                                             
                                              <Button variant="contained"  color='secondary' form="paymentform"  type="submit" >SEND</Button>
                                            
                                              </DialogActions>
                                          </Dialog>
                                         
                                          





                                        {/* <td scope="row" style={{ verticalAlign: "middle" }}> <button type="button"  onClick={()=>{this.handleclickopen(users.user_email,users.user_name)}}  className="btn btn-primary"><svg xmlns="http://www.w3.org/1500/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"> */}
                                        {/* <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                        </svg> */}
                                        {/* </button> */}
                                        
                                        
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
                                                    value={this.state.user_name}
                                                   
                                                    inputProps={{readOnly:true, style: {fontSize: 15,color:'#d63384'}}} 
                                                    InputLabelProps={{style: {fontSize: 15}}}
                                                    required
                                                    
                                                
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
                                                   
                                                    inputProps={{ readOnly: true, style: {fontSize: 15,color:'#d63384'}}} 
                                                    InputLabelProps={{style: {fontSize: 15}}}
                                                    required
                                                    
                                                
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
                                        
                                        
                                        {/* </td>  */}

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
                        {/* {pageNumber.map(number => {
                                return (
                                <li className="page-item" style={{padding:'3px'}} ><a id={number}
                                onClick={this.handleClick}  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#" key={number}> {number}</a>       </li>
                            
                                
                        
                        
                                );
                            })}

                    {nextNumber.map((number,i) => {
                            return (
                    
                    
                            <li className="page-item" style={{padding:'3px'}} > 
                            
                            <a id={number}
                                onClick={this.handleClick}  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#" key={number} >Next </a> 
                            
                                </li>
                        
                            
                    
                    
                            );
                        })} */}
                            
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

export default PREBOOKLIST 