import React, { Component } from 'react'
import K_Header from '../K_Header';
import K_Footer from '../K_Footer';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import  {REACT_APP_FILTER_LINK} from './Filterlinks';
import swal from 'sweetalert';
import Pagination from './Pagination.css'
import QRCode from 'qrcode.react';
import ReactPaginate from 'react-paginate';
import jsPDF from 'jspdf';
import {SHOW_MENU ,SEARCHMENUS,DELETEMENUS,FILTERMENUS} from '../../../Components/admincomponent/links/Kitchenlinks';
export class Menulist extends Component {
  state = {

    menus: [],
    filter_a:[],
    i: 0,
    Load: false,
    progress: '',
    invalidImage: '',
    count :0,
    list: [],
    perPage: 3,
    page: 0,
  
    pages: 0,

  }


 
  componentDidMount() {
    this.makeHttpRequest();
  }
 
  makeHttpRequest = async() => {
    let res = await axios.post(SHOW_MENU,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},}).catch(err => console.log(err));
 
    const {perPage} = this.state;
    const menus = res.data;
    console.log(res.data)
    // alert(menus)
  //  this.state.count =menus.length;
    this.setState({
      menus,
      pages: Math.floor(menus.length / perPage)
    });
  };
 
  handlePageClick = (event) => {
    let page = event.selected;
    this.setState({page})
    // alert(page)
  }


  

  // componentDidMount() {
  //   axios.post(SHOW_MENU,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
  //     .then(res => {
  //       const menus = res.data;
  //       this.state.count =menus.length;
  //      // console.log("FILTER_LINK");
  //      // console.log(REACT_APP_FILTER_LINK);
  //       // this.state.count =105;
  //       var c =0;
  //        for(var j=0;j<this.state.count;j++){
  //          if(c<this.state.count){
  //            c= c+10;
  //            this.setState({ filter_a: [...this.state.filter_a, c] })
  //       /// this.state.filter_a = c;
    
  //          }else{
  //            console.log("break");
  //            break;
  //          }
  //         }

  //           const {perPage} = this.state;
  //   const list = res.data;
  //   this.setState({
  //     menus,
  //     pages: Math.floor(this.state.count / perPage)
   
  //    });
  //   //  alert(menus)
  //    console.log(menus)
  //   //  alert(list)
  //   //  console.log(list)
  //   //      console.log( this.state.filter_a);
  //   //     this.setState({ menus });
  //     })


  // }

 

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
    axios.post(SEARCHMENUS, sendId, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);
        const menus = res.data;
        this.setState({ menus });
        // if (res.data.msg == 'success') {

        //   console.log("success");
        //   window.location.reload();


        // } else {

        //   console.log("failure");

        // }

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






// handle limits

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
    axios.post(FILTERMENUS, sendId, {
      headers:{'content-Type': 'application/json'},
    })
      .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);
        const menus = res.data;
        this.setState({ menus });
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


  //delete images code

  handledelete = (_id) => {


    this.setState({
      Load: true,

    });
    var sendId = {
      _id: _id,
      userid: sessionStorage.getItem('userid'),
    }
    try {
      axios.post(DELETEMENUS, sendId, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);

          if (res.data.msg == 'success') {

            console.log("success");

            swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this imaginary  file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {

                  icon: "success",
                         buttons: [
                'NO',
                'YES'
              ],
            }).then(function(isConfirm) {
              if (isConfirm) {
                window.location.reload();
              } else {
                //if no clicked => do something else
              }
         
                 
                
                });
              } else {
                swal("Your imaginary file is safe!");
              }
            });



            // window.location.reload();


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


  print = (p_name,_id) => {


    swal("Are you sure you want  print  QR Scanner?", {
      title: "Are you sure?",
    })
      .then(function(isConfirm) {
          if (isConfirm) {
            // buttons: [window.location = "/KitchenRoutes/Menuroutes/Qrscanner/"+_id]
            // window.location = "/KitchenRoutes/Menuroutes/Qrscanner/"+_id;
  
  
            const canvas = document.getElementById("qrcode"+_id);
      
     
          
            var doc = new jsPDF();
            let width = doc.internal.pageSize.getWidth()
            let height = doc.internal.pageSize.getHeight()
            
            let widthRatio = width / canvas.width
            let heightRatio = height / canvas.height
            
            let ratio = widthRatio > heightRatio ? heightRatio : widthRatio
            
        
            doc.addImage(canvas, 'JPEG', 90,60,);
            doc.text(95, 60, p_name);
            doc.autoPrint()
            doc.save(p_name+ ".pdf");
         
            // location.reload();
          } else {
            //if no clicked => do something else
          }
    
      
      
  
        }); 
     
    }

    downloadQRCode = (p_name,_id) => {
      // Generate download with use canvas and stream
      const canvas = document.getElementById("qrcode"+_id);
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `${p_name}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

  render() {
    const {page, perPage, pages, menus} = this.state;
  this.state. items = menus.slice(page * perPage, (page + 2) * perPage);

// alert( this.state. items);

 
    return (
      <>
               <K_Header/>
      {/* main body area */}
<div className="main px-lg-5 px-md-2">

  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    {console.log(this.state.percentage)}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Menus List</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Menus List</h1>
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
                       <lable><h4>Search Product</h4></lable>
                       <input class="form-control" type="text" list="data"  id="searchdata"/>

<datalist id="data">
  {this.state.menus.map(productlist =>
    <option  value={productlist.p_name} />
    
  )}
</datalist>
<div><br></br></div>
<button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                          </div> 


                     

                          <div className="col-md-4" style={{float:"right"}}>
                          {/* <lable><h4>Filter</h4></lable> */}
                  
                   
               
                 
                   {/* <select class="form-control" id= "lmt_val" onChange = {this.handleLimit} tabindex="-90" required>
                  <option value="">Choose Limit</option>
                
                  {this.state.filter_a. map(val => <option value={val-10}>
                  {val == 10?("0-"+val):((val-10)+1 +"-"+(val) )}
                    
                    </option>)}
         
            
                  <option value="all">All</option>
               
                  </select>  */}
                                  
                                    
                      <div><br></br></div>

                          </div>
                        <div><br></br></div>
                      {/* {this.state.menuss !="" ?( */}
                      <table className="table myDataTable table-hover align-middle mb-0">
                        <thead>
                          <tr style={{backgroundColor: "pink"}}>
                            <th>S.No</th>
                            {/* <th>FOOD ID</th> */}
                            <th> Product Name</th>
                            {/* <th>Product Image</th> */}
                            {/* <th>Product quantity</th> */}
                            <th>Product Type </th>
                        
                            <th> Food  Qr code </th>
                            <th> Date and Time</th>
                        
                            {/* <th> QR Scanner </th> */}
                            {/* <th>Action[Update]</th> */}
                            <th>Action[Delete]</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            this.state.items
                              .map(menuslist =>


                                <tr >
                                  {/* <td>{this.state.i = this.state.i + 1}</td> */}
                                  <td>{menuslist._id}</td>

                      
                                  <td id={"p_name"+menuslist._id}>{menuslist.p_name}</td>

                                  <td > 
                          
                          {/* <QRCode id={'qrcode'+tiffinslist.tiffin_no} value={tiffinslist.tiffin_cat+"\n"+tiffinslist.tiffin_type+"\n"+tiffinslist.tiffin_no} size={100} level={"H"}  includeMargin={true}/> */}
                          <QRCode id={"qrcode"+menuslist._id} value={menuslist.p_name} size={192} level={"H"}  includeMargin={true}/>                        
                       <center> <p>  <button  className="btn btn-sm btn-primary" 
                      //  onClick={() => {  { this.print(menuslist.p_name,menuslist._id) } }} >print
                          
                       onClick={() => {  { this.downloadQRCode(menuslist.p_name,menuslist._id)}}}>
          Download QR Code
          </button></p></center>
                                           </td>
                                  
                                   {/* <td  >
                                     
                                     <img id={"qrcode"+menuslist._id} src={menuslist.p_foodqr} className="form-control form-control-lg" height={"200px"} width={"150px"} alt="corporate image" >
                                       
                                       </img>
                                       <br></br>
                                       <p hidden={true}>{menuslist.p_name}</p>
                                     
                              <center>       <button  className="btn btn-sm btn-primary" onClick={() => {  { this.print(menuslist.p_name,menuslist._id) } }} >print</button> </center>  
                                       </td> */}
                                   {/* <td>{menuslist.p_price}</td> */}
                                   <td>{menuslist.p_foodtype}</td>
                                   <td>{menuslist.p_date}</td>
                                   {/* <td>  <Popup trigger={<button className="btn btn-sm btn-primary"> View </button>}   position="top">
                                      {menuslist.food_rawmaterial.split('@').map(function (value, index, array) {
                                          return <h6>{index+1}. {value}</h6>
                                        })
                                      }
                                    
                                                                        </Popup></td> */}

                                  <td>
                                    {/* <button type="button" className="btn btn-sm btn-primary"components={Link} to={`/UpdateCreateuser/${menuslist._id}`}><i className="fa fa-pencil" /></button> */}
                                    <button type="button" onClick={() => {  { this.handledelete(menuslist._id) } }} className="btn btn-sm btn-danger" ><i className="fa fa-trash" /></button>
                                  </td>
                                </tr>
                             
                              )}
              
                        </tbody>
                      </table>
                      {/* ):"No Data"} */}

                    </div>
                  </div>
                </div>
              </div> {/* .row end */}
            </div>
          </div>
        </div>
        {/* //////////////////////////////////////////////// */}
    


        {/* <div className="pagination-txt">Display  {this.state.menus} relevant
                      jobs
                  </div> */}

{/* -------------------------------------------###########3 pagination start */}


<ReactPaginate

         previousLabel={'previous'}
         nextLabel={'next'}
         breakLabel={'...'}
         pageCount={pages}
    
         marginPagesDisplayed={2}
         pageRangeDisplayed={3}
         onPageChange={this.handlePageClick}

         containerClassName={'pagination justify-content-center'}
       
         pageClassName={'page-item'}
         pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
         previousClassName={'page-item'}
         nextClassName={'page-item'}
         nextLinkClassName={'page-link'}
         breakClassName={'page-item'}
         breakLinkClassName={'page-link'}
         activeClassName={'active'}
       />
 


    

        <K_Footer />
      </>
    )
  }
}

export default Menulist