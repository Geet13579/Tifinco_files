

import React, { Component } from 'react'
import axios from 'axios';
import ReactLoading from "react-loading";
import {SHOW_DISCARD_TIFFIN,SEARCH_DISCARD_TIFFINS,DELETEONE_DISCARD_TIFFIN,DELETMul_DISCARD_TIFFIN} from '../../links/DeliveryLinks';
import Header from  '../DeliveryHeader';

import Footer from '../DeliveryFooter'




class SHOWDISCRARDTIFFINS extends React.Component {
  state = {
    i: 0,
    Load: false,
    progress: '',
    tiffinlist:[],
    currentPage:1,
    listperPage:5,
 
   
    ischeck:[],
    allchecked:false,
    selectedItem:'',

    upperPageBound: 3,
    lowerPageBound: 0,
    isPrevBtnActive: 'disabled',
    isNextBtnActive: '',
    pageBound: 3

  }

  componentDidMount() {

    axios.post(SHOW_DISCARD_TIFFIN,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const tiffindata = res.data;
        // console.log(tiffindata)
        tiffindata.map((data)=>{
            this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ id: data._id,  checked:false } ]}))

          });
        this.setState({ tiffinlist: tiffindata});

       
      })
 


  }

  handledelete = (_id) => {


    this.setState({
      Load: true,

    });
    var sendId = {
      _id: _id,
      userid: sessionStorage.getItem('userid'),
    }
    try {
      axios.post(DELETEONE_DISCARD_TIFFIN, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          // console.log(res.data);

          if (res.data.msg == 'success') {

            console.log("success");
            window.location.reload();


          } else {

            console.log("failure");

          }

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

 
  handleSearch = ()=>{

    var searchdata = document.getElementById('searchdata').value;
    // alert(searchdata);
  



    this.setState({
      Load: true,
  
    });
    var sendId = {
      _id: searchdata,
      userid: sessionStorage.getItem('userid')
    }
    try {
      axios.post(SEARCH_DISCARD_TIFFINS, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          // alert(res.data);
          console.log(res.status);
          console.log(res.data);
          const tiffins = res.data;
         
          this.setState({ tiffinlist:tiffins });
        
  
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
  


  handledelete = (_id) => {


    this.setState({
      Load: true,

    });
    var sendId = {
      _id: _id,
      userid: sessionStorage.getItem('userid'),
    }
    try {
      axios.post(DELETEONE_DISCARD_TIFFIN, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          // console.log(res.data);

          if (res.data.msg == 'success') {

            console.log("success");
            window.location.reload();


          } else {

            console.log("failure");

          }

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
  let totalPage = Math.ceil(this.state.tiffinlist.length / this.state.listperPage);
  console.log(this.state.tiffinlist.length);
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
      axios.post(DELETMul_DISCARD_TIFFIN, sendId, {
        headers: { 'Accept':'application/json','Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);
    
          window.location = "/Delivery/showdiscardTiffin";
          
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

    const {tiffinlist,currentPage,listperPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
    const LastIndexpage = currentPage * listperPage;
    //   5 = 1*5
    //  console.log(LastIndexpage);

     const FirstIndexPage = LastIndexpage - listperPage
    //  0 = 5-5
    //  console.log(FirstIndexPage);

    const currentList = tiffinlist.slice(FirstIndexPage,LastIndexpage);
    //  currentList  = tiffinlist.slice(0,5)
    // console.log(currentList)






    // const rendertiffinlist = 

     const pageNumber =[];
     const nextNumber = [];

     for(let i = 1; i<=Math.ceil(tiffinlist.length/listperPage);i++){

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
            <li className="breadcrumb-item active" aria-current="page">Discrad Tiffin List</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Discrad Tiffin List</h1>
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
                    {this.state.selectedItem==''?(""):(<div><button className="btn btn-primary" style={{marginTop:3}}  onClick={()=>this.deleteAll(this.state.selectedItem)}> delete ALL </button></div>  )}

                          </div>


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
                                   
                            <th>Tiffin No</th>
                            <th>Tiffin Category</th>
                            <th>Tiffin Type</th>
                            <th>Tiffin Discard Date</th>
                            {/* <th>Action[Update]</th> */}
                            <th>Discard Tiffin</th>
      
        
                                   
                                  </tr>
                                </thead>
                                <tbody align="center">

                              {  currentList.map((tiffin,index)=>{
                                    return(
                                        <tr key={(index+FirstIndexPage)}>
                                             <th scope="row"   style={{ verticalAlign: "middle" }}>   <input  class="form-check-input" style={{ fontSize: "20px" }} type="checkbox"
                                              checked={this.state.ischeck[(index+FirstIndexPage)]['checked']}
                                            onClick={this.handleChangecheckbox.bind(this, (index+FirstIndexPage))} 
                                            /></th>
                                                <td >{tiffin.tiffin_no}</td>
                                            <td>{tiffin.tiffin_cat}</td>
                                            <td>{tiffin.tiffin_type}</td>
                                            {/* <td>{tiffin.updatedAt}</td> */}
                                            <td>{tiffin.updatedAt.slice(0,-14)}</td>
                                            <td>
                                   
                                    <button type="button" onClick={() => {{ this.handledelete(tiffin._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
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

export default SHOWDISCRARDTIFFINS 