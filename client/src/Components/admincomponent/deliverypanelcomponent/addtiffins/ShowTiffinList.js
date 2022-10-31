
import React, { Component } from 'react'
import Header from  '../DeliveryHeader';
import QRCode from 'qrcode.react';
import Footer from '../DeliveryFooter'
import axios from 'axios';
import ReactLoading from "react-loading";
import jsPDF from 'jspdf';

import {SHOW_TIFFIN_LIST,SEARCH_TIFFINS} from '../../links/DeliveryLinks';


class TodoApp extends React.Component {
  state = {

    userlist: [],
    filter_a:[],
    i: 0,
    Load: false,
    progress: '',
    invalidImage: '',
    count :0,
    offset: 0,
 
    search_tiffins:''

  }
  constructor() {
    super();
    this.state = {
      userlist: [],
      currentPage: 1,
      listPerPage: 3,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
      pageBound: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);

  
  }
  componentDidMount() {

    axios.post(SHOW_TIFFIN_LIST,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const userlist = res.data;
      
        this.setState({ userlist });

     
          // this.receivedData()
       
      })


  }

  handleinputSearch=(event)=>{

    var searchdata = document.getElementById('searchdata').value;

    

    var tiffin_data = searchdata.split('-')
    // alert(tiffin_data[0]);


    if(tiffin_data[0]==='nonvegheatableNVH'){
    var NVH = searchdata.split('nonvegheatable');
    this.setState({ search_tiffins:NVH[1] });
    // alert(NVH[1]);
    }

    else if(tiffin_data[0]==='vegheatableVH'){
      var VH = searchdata.split('vegheatable');
      this.setState({ search_tiffins:VH[1] });
      // alert(VH[1]);
      
    }

    else if(tiffin_data[0]==='nonvegnonheatableNVN'){
      var NVN = searchdata.split('nonvegheatable');
      this.setState({search_tiffins: NVN[1] });
      // alert(NVN[1]);
      
    }

    else if(tiffin_data[0]==='vegnonheatableVN'){
      var VN = searchdata.split('vegnonheatable');
      this.setState({search_tiffins: VN[1] });
      // alert(VN[1]);
      
    }
    else{

      this.setState({search_tiffins: searchdata });
    }
    


  }




handleSearch = ()=>{

  // alert(this.state.search_tiffins);

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
axios.post(SEARCH_TIFFINS, sendId, {
headers: { 'Content-Type': 'application/json' },
})
.then(res => {
//alert(res.data);
console.log(res.status);
console.log(res.data);
const todos = res.data;
this.setState({ todos });


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




handlemove =(_id)=>{

window.location = "/Delivery/discardTiffin/"+_id;
}


print = (tiffin_no) => {
alert("are you print QRcode")
const canvas = document.getElementById("qrcode"+tiffin_no);
// console.log(canvas)


// const pngUrl = canvas
//   .toDataURL("image/png")
//   .replace("image/png", "image/octet-stream");
// let downloadLink = document.createElement("a");
// downloadLink.href = pngUrl;
// downloadLink.download = `hghj.png`;
// document.body.appendChild(downloadLink);
// downloadLink.click();
// document.body.removeChild(downloadLink);

var doc = new jsPDF('p', 'mm', [canvas.width-50, canvas.height-50]);
// let width = doc.internal.pageSize.getWidth()
// let height = doc.internal.pageSize.getHeight()

// let widthRatio = width / canvas.width
// let heightRatio = height / canvas.height

// let ratio = widthRatio > heightRatio ? heightRatio : widthRatio

doc.addImage(
canvas.toDataURL('image/jpeg', 1.0),
'JPEG',
0,
0,
canvas.width-50,
canvas.height-50,
)

doc.autoPrint()
doc.save("Tiffin_No" +"-"+ tiffin_no + ".pdf");




}

// renderContent() {
//   var i = 0;
//   return this.state.data.map((d) => {
//       return (<p key={d + i++}>{i} - {d}</p>)
//   });
// }

 downloadQRCode = (tiffin_no) => {
  // Generate download with use canvas and stream
  console.log(tiffin_no);
  const canvas =  document.getElementById("qrcode"+tiffin_no);
  console.log(canvas);
  const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  let downloadLink = document.createElement("a");
  downloadLink.href = pngUrl;
  downloadLink.download = `${tiffin_no}.png`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

handleClick(event) {
  let listid = Number(event.target.id);
  this.setState({
    currentPage: listid
  });

  this.setPrevAndNextBtnClass(listid);
}

setPrevAndNextBtnClass(listid) {
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
btnIncrementClick() {
    this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
    this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid});
    this.setPrevAndNextBtnClass(listid);
}
btnDecrementClick() {
  this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
  this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
  let listid = this.state.upperPageBound - this.state.pageBound;
  this.setState({ currentPage: listid});
  this.setPrevAndNextBtnClass(listid);
}
btnPrevClick() {
  if((this.state.currentPage -1)%this.state.pageBound === 0 ){
      this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
  }
  let listid = this.state.currentPage - 1;
  this.setState({ currentPage : listid});
  this.setPrevAndNextBtnClass(listid);
}
btnNextClick() {
  if((this.state.currentPage +1) > this.state.upperPageBound ){
      this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
  }
  let listid = this.state.currentPage + 1;
  this.setState({ currentPage : listid});
  this.setPrevAndNextBtnClass(listid);
}





  render() {
  
    const { userlist, currentPage, listPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;
    
    console.log(currentPage)
    const indexOfLastTodo = currentPage * listPerPage;
    // console.log(indexOfLastTodo);
    //  5 = 1*5
    // 

    const indexOfFirstTodo = indexOfLastTodo - listPerPage;
    // console.log(indexOfFirstTodo);
    //  0 = 5-5



    const currentList = userlist.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log(currentList);


    const renderTodos = currentList.map((tiffinslist, index) => {
      return (

      
                                        <tr key={index}>
                                          {/* <td>{this.state.i = this.state.i + 1}</td> */}
        
                                          {/* <td>{tiffinslist.tiffin_no.replace("-","")}</td> */}
                                          <td id="tiffin_no">{tiffinslist.tiffin_no}</td>
                                          <td>{tiffinslist.tiffin_cat}</td>
                                          <td>{tiffinslist.tiffin_type}</td>
        
                                          <td > 
                          
                         {/* <QRCode id={'qrcode'+tiffinslist.tiffin_no} value={tiffinslist.tiffin_cat+"\n"+tiffinslist.tiffin_type+"\n"+tiffinslist.tiffin_no} size={100} level={"H"}  includeMargin={true}/> */}
                         <QRCode id={'qrcode'+tiffinslist.tiffin_no} value={tiffinslist.tiffin_no} size={192} level={"H"}  includeMargin={true}/>                        
                           <p> <button  className="btn btn-primary" 
                           onClick={() => {{ this.downloadQRCode(tiffinslist.tiffin_no)} }}>
                           Download QR Code
                         </button></p>
                           {/* onClick={() => {{ this. print(tiffinslist.tiffin_no) } }}>Print</button></p> */}
                         
                      
                       
                                          </td>
                                         
                                  
        
                                          <td>
                                            {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${productlist._id}`}><i className="fa fa-pencil" /></button> */}
                                            <button type="button" onClick={() => {{ this. handlemove(tiffinslist._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
                                          </td>
                                          
                
                                        </tr>
                                    
        
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(userlist.length / listPerPage); i++) {
      pageNumbers.push(i);
    }

    console.log(pageNumbers);

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

    console.log("pagenumber"+ pageNumbers);
    console.log("upperPageBound"+ upperPageBound);

    if(pageNumbers.length > upperPageBound){
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
            <li className="breadcrumb-item active" aria-current="page">View Tiffin List</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">View Tiffin List</h1>
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
                       <lable><h4>Search Tiffin</h4></lable>
                       <input class="form-control" type="text" list="data" value={this.state.search_tiffins} onChange={this.handleinputSearch} placeholder='Search Tiffins'  id="searchdata"/>


                  <div><br></br></div> 
                  <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                  {console.log(this.state.searchinputdata)}

                          </div>


                          {/* <div className="col-md-4">
                    
                          </div> */}

                          <div className="col-md-4" style={{float:"right"}}>
                   
                                    
                      <div><br></br></div>

                          </div>
                        <div><br></br></div>
                        <table className="table myDataTable table-hover align-middle mb-0">
                             <thead align="center">
                                  <tr>
                                    <th>Tiffin No</th>
                                    <th>Tiffin Category</th>
                                    <th>Tiffin Type</th>
                                    {/* <th>Action[Update]</th> */}
                                    <th>QR Code </th>
                                    <th>Discard Tiffin</th>
        
                                   
                                  </tr>
                                </thead>
                                <tbody align="center">
     {renderTodos}
  
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
              </div> {/* .row end */}
            </div>
          </div>
        
            
        </div>
     <Footer/>
      </>

    );
  }
}

export default TodoApp