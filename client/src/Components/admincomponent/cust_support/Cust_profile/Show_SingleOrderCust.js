import React, { Component } from 'react'
import Header from '../C_Header';

import Footer from '../C_Footer'
import axios from 'axios';
import { Paper, Button ,Box,Typography,Container,Stack ,AppBar,Toolbar,Link,Grid,Fab} from '@mui/material';

import {refund_amount, show_single_order, showsinglemealcustomerdetails, searchsinglemealsuser } from '../../links/CustomerSupportLink';

import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import CloseIcon from '@mui/icons-material/Close';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export class Customer_list extends Component {

  state=
  {
    cust_list_plan:[],
    Load:false,
    i:0,
    count:0,
    filter_a:[],
    list_plan:'',
    userdata:[],
    ordersdetails:[],
    name:'',
    email:'',
    phone:'',
    openpop:false,
    item:[],
    ischeck2:[],ischeck:[],extraitems:[],
    totalPrice:'',
    totalrefundAmount :0,
    totalitemprice:0,
    totalextraprice:0,
    refundAmountprice:0,
    ischeckfinal:[],
    todos:[]

  }
  componentDidMount()
  {
    this.setState({
      Load:true,
    })
     fetch(show_single_order,{
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
              //  console.log(json);

               const userdata = json;

              //  console.log(userdata)

             




               this.setState({userdata})

          
        })
  }

   handleMore  = (_id,userid) =>
   {
   
      window.location = `/CustmerRoutes/Cust_support/ShowMoreSingleMeal/${ _id}/${userid}`;  
    


   }

   handlerefundcash=(_id)=>{
    //  console.log(_id)
     this.setState({openpop:true})
     const data = {
      _id:_id
    };

                axios.post(showsinglemealcustomerdetails,data,{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
                .then(res => {
                  const userlist = res.data;
                  // console.log(userlist)

                  const item = userlist.item

                  console.log(item)
                  this.setState({item:userlist.item})
             
                  const arrayitem=[]
                  for(var i=0;i<item.length;i++){
                   for(var j=0;j<item[i].extra.length;j++){

                    arrayitem.push(item[i].extra[j].extra_items)
                     
                   }
                  }

                var extra_itemarray = [];
                for (var i = 0; i < arrayitem.length; i++) {
                    extra_itemarray = extra_itemarray.concat(arrayitem[i]);
                }


                var extra_iray = [];
                for (var i = 0; i < arrayitem.length; i++) {
                  for(var j=0;j<arrayitem[i].length;j++){
                    arrayitem[i][j]['id'] = item[i]._id
                  }
                }

      

                // console.log(extra_itemarray)
             
                  extra_itemarray.map((data)=>{
                    this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ price: data.price, id:data.id, checked:false } ]}))
  
                  });

                  item.map((data)=>{
                    this.setState(prevState => ({ ischeck2: [...prevState.ischeck2,{ price: data.price, id:data._id, name:data.name,checked:false } ]}))
  
                  });

                 

                // sum of exta item price

                  const ages = this.state.ischeck.reduce((a, {id, price}) => (a[id] = (a[id] || 0) + +price, a), {});

                  // console.log(ages);

                  var itemprice = [];
                  for(var i =0; i<this.state.ischeck2.length;i++){

                    itemprice.push({price:this.state.ischeck2[i].price-ages[`${this.state.ischeck2[i].id}`],name:this.state.ischeck2[i].name})

                  }

                  // console.log(itemprice)

                  itemprice.map((data)=>{
                    this.setState(prevState => ({ischeckfinal : [...prevState.ischeckfinal,{ price: data.price, name:data.name,checked:false } ]}))
  
                  });



                  // console.log(this.state.ischeckfinal)

                  // console.log(this.state.ischeck)

                


                    this.setState({extraitems:extra_itemarray})
              

                    this.setState({totalPrice:userlist.totalPrice})
                    this.setState({Orderid:userlist.cf_orderid})
                 
                    this.setState( {paymentmethod:userlist.paymentmethod} )
                      
              
          
          
                })
                              }

                              handleClose=()=>{
                                this.setState({openpop:false})
                                window.location.reload();
                              }




                            handleChangecheckboxforitem = (index) => {


                              // console.log(index)
                              if(!this.state.ischeckfinal[index]['checked']){

                                let a = this.state.ischeckfinal.slice(); //creates the clone of the state
                                    
                                    a[index]['checked'] = true;
                                    this.setState({ischeckfinal: a});
                                    var data = [];
                              
                              a.map((item)=>{

                              if(item.checked == true){
                              return data.push(item);

                              
                              }
                            })


                            var sum = 0
                            const total= data.map(p=>{
                              return  p.price
                            })
                             console.log(total)

                            

                            // sum= sum+total

                            for(var i=0;i<=total.length-1;i++){
                              sum =parseInt(sum)+parseInt(total[i])
                            }

                             console.log(sum)
                            this.setState({totalitemprice:sum})
                             console.log(this.state.totalextraprice+sum)
                            this.setState({totalrefundAmount:this.state.totalextraprice+sum})





                              
                            }
                            else{
                              let a = this.state.ischeckfinal.slice(); //creates the clone of the state
                                  
                                  a[index]['checked'] = false;
                                  this.setState({ischeckfinal: a});
                                
                                  var data = [];
                                  a.map((item)=>{
                                    if(item.checked == true){
                                    return data.push(item);
                                    }
                                  })
                                  console.log(data)


                                
                            // for total refund


                                  var sum = 0
                                  const total= data.map(p=>{
                                    return  p.price
                                  })
                                   console.log(total)

                                  

                                  // sum= sum+total

                                  for(var i=0;i<=total.length-1;i++){
                                    sum =parseInt(sum)+parseInt(total[i])
                                  }


                                this.setState({totalitemprice:sum})
                                console.log(this.state.totalextraprice+sum);
                                this.setState({totalrefundAmount:this.state.totalextraprice+sum})


                            }


                            };





                            handleChangecheckboxforextra = (index) => {


                            // console.log(index)
                            if(!this.state.ischeck[index]['checked']){

                              let a = this.state.ischeck.slice(); //creates the clone of the state
                                  
                                  a[index]['checked'] = true;
                                  this.setState({ischeck: a});
                                  var data = [];
                              var sum=0
                            a.map((item)=>{

                            if(item.checked == true){
                            return data.push(item);


                            }
                            })
                            var sum = 0
                            const total= data.map(p=>{
                            return  p.price
                            })
                             console.log(total)



                            // sum= sum+total

                            for(var i=0;i<=total.length-1;i++){
                            sum =parseInt(sum)+parseInt(total[i])
                            }
                             console.log(sum)
                            this.setState({totalextraprice:sum})
                             console.log(this.state.totalitemprice+sum)

                            this.setState({totalrefundAmount:this.state.totalitemprice+sum})
                            // this.setState({selectedItem:data})





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
                                var sum = 0
                                const total= data.map(p=>{
                                  return  p.price
                                })
                                 console.log(total)

                                

                                // sum= sum+total

                                for(var i=0;i<=total.length-1;i++){
                                  sum =parseInt(sum)+parseInt(total[i])
                                }

                                 console.log(sum)
                                this.setState({totalextraprice:sum})
                                 console.log(this.state.totalitemprice+sum)

                                this.setState({totalrefundAmount:this.state.totalitemprice+sum})
                            
                            }


                            };


                            handlerefundinput=(event)=>{
                              console.log();
                              this.setState({refundAmountprice:event.target.value})
                            }


                            handlesubmitrefund=(event)=>{


                            //  alert(this.state.totalrefundAmount)
                            //   alert(this.state.refundAmountprice)

                            // refund_amount

                            event.preventDefault()

                            if(this.state.totalrefundAmount==0 && this.state.refundAmountprice==0){

                              alert("select or write refund amount")

                            }






                            else if(this.state.totalrefundAmount==0)
                            {
                              console.log(this.state.refundAmountprice)
                               console.log(this.state.Orderid)
                              const data = {
                                refund_amount:this.state.refundAmountprice,
                                orderId: this.state.Orderid,
                                
                                userid: sessionStorage.getItem('userid'),
                              };
                              // alert(this.state.food_name);

                            try{
                            axios.post(refund_amount, data,{
                            headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
                            onUploadProgress: data => {

                              this.setState({
                              progress: Math.round((100 * data.loaded) / data.total)

                              });
                            },

                            })
                            .then(res => {
                            
                                if(res.data.msg=='refund'){
                                

                              
                                  alert("success");
                                  window.location.reload();


                                }
                                else if(res.data.msg=='err'){
                                

                              
                                alert("error");
                                  window.location.reload();


                                }
                            


                            })
                            }  catch(error) {

                                  // console.log(error)
                                  this.setState({
                                      Load :false,
                                      });
                                  // console.log("internal server error");
                                }


                            }







                            else if(this.state.refundAmountprice==0)
                            {
                              console.log(this.state.totalrefundAmount)
                              console.log(this.state.Orderid)
                              const data = {
                                refund_amount:this.state.totalrefundAmount,
                                orderId: this.state.Orderid,
                                
                                userid: sessionStorage.getItem('userid'),
                              };
                              // alert(this.state.food_name);

                            try{
                            axios.post(refund_amount, data,{
                            headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
                            onUploadProgress: data => {

                              this.setState({
                              progress: Math.round((100 * data.loaded) / data.total)

                              });
                            },

                            })
                            .then(res => {
                            
                              if(res.data.msg=='refund'){
                                

                              
                                alert("success");
                                window.location.reload();


                              }
                              else if(res.data.msg=='err'){
                              


                              alert("error");
                                window.location.reload();


                              }
                            


                            })
                            }  catch(error) {

                                  // console.log(error)
                                  this.setState({
                                      Load :false,
                                      });
                                  // console.log("internal server error");
                                }


                            }

                            else{
                              alert("please choose one options")
                            }





                            }



                            handleSearch = ()=>{

                              // alert(this.state.search_tiffins);

                            var searchdata = document.getElementById('searchdata').value;
                            alert(searchdata);

                            this.setState({
                            Load: true,

                            });


                            var sendId = {
                            _id: searchdata,
                            userid: sessionStorage.getItem('userid')
                            }


                            try {
                            axios.post(searchsinglemealsuser, sendId, {
                            headers: { 'Content-Type': 'application/json' },
                            })
                            .then(res => {
                            //alert(res.data);
                            // console.log(res.status);
                            // console.log(res.data);
                            const todos = res.data;

                            var orderdetails=[]

                            orderdetails.push(todos)

                            // console.log(orderdetails)
                            // this.setState({todos})
                            


                            this.setState({
                              Load: false,

                            });

                            })
                            } catch (error) {

                            console.log(error)
                            this.setState({
                            Load: false,
                            });
                            // console.log("internal server error");
                            }

                            }

                              








  render() {
    
    return (
      <>
       <Header/>
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
            <li className="breadcrumb-item active" aria-current="page">Single Meal Order</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Single Meal Order</h1>
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
                  
              {/* { !this.state.Load ?(""
                 ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                 height={100} width={50} /></div>)} */}


                            <div className="col-md-4"style={{float:"left"}}>
                                                <lable><h4>Search Customer</h4></lable>
                                                <input class="form-control" type="text" list="data"  id="searchdata"/>

                          <datalist id="data">
                            {/* {this.state.cust_list_plan.map(cust =>
                              <option  value={cust.name} />
                            )} */}
                          </datalist>
                          <div><br></br></div>
                          <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                                                    </div>


                          {/* <div className="col-md-4">
                    
                          </div> */}

                          <div className="col-md-4" style={{float:"right"}}>
                       <lable><h4>Filter</h4></lable>
                  
                   
               
                                        {/* <label class="form-label">Select</label> */}
                                        <select class="form-control" id= "lmt_val" onChange = {this.handleLimit} tabindex="-90" required>
                                        <option value="">Choose Limit</option>
                                      
                                        {/* {this.state.filter_a. map(val => <option value={val-10}>
                                        {val == 10?("0-"+val):((val-10)+1 +"-"+(val) )}
                                          
                                          </option>)} */}
                               
                                  
                                        <option value="all">All</option>
                                     
                                        </select>
                                  
                                    
                     </div>
           
    
        <h5>Single Order List</h5>
                <table className="table table-striped">
  <thead align="center">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Profile</th>
      <th scope="col">Name</th>
      <th scope="col">Order Id</th>
      {/* <th scope="col">Mobile</th> */}
      <th scope="col">Item</th>
      <th scope="col">Total Price</th>
      <th scope="col">Order Date</th>
     
      <th scope="col">Action </th>

    </tr>
  </thead>
  <tbody align="center">
  {/* {console.log(this.state.i=0)} */}
    {this.state.userdata.map(cust =>(

    
    <tr style={{verticalAlign:"middle"}}>
      <th scope="row"  >{this.state.i = this.state.i+1}</th>
      <td>{cust.orderdetails.map(p=>{return(<p style={{backgroundImage:`url(${p.profileimage})`,height:"80px",width:"80px",borderRadius:"50%",backgroundPosition:'center',backgroundSize:'cover'}}></p>)})}</td>
    
      <td>{cust.orderdetails.map(p=>{return(<p>{p.name}</p>)})}</td>
      <td> {cust.cf_orderid}</td>
      {/* <td>{cust.orderdetails.map(p=>{return(<p>{p.mobile}</p>)})}</td> */}
      {/* <td> {cust.Orderid}</td> */}
      <td>{cust.item.map(p=>{return <span>{(p.name)},</span>})}</td>
      <td>{cust.totalPrice}</td>
      <td> {cust.createdAt.replace("T","  ")}</td>
      {cust.refund==1?<td><button type="button" onClick={() => {  { this.handlerefundcash(cust._id )}}} className="btn btn-sm btn-danger" disabled>Refund<span><i class="fa fa-check" aria-hidden="true"></i></span></button> </td>
      :<td><button type="button" onClick={() => {  { this.handlerefundcash(cust._id )}}} className="btn btn-sm btn-danger" >Refund</button> </td>}

{/* <td><button type="button" onClick={() => {  { this.handlerefundcash(cust._id )}}} className="btn btn-sm btn-danger" >Refund</button></td> */}
      

      <Dialog open={this.state.openpop} PaperProps={{ sx: { width: "50%", height: "100%",bgcolor:'#ffff ' } }} actions={[
                        <Button type="submit" form="my-form-id" label="Submit" />
                      ]}>
                        <Box
                          m={1}
                        //margin
                          display="flex"
                          justifyContent="flex-end"
                          alignItems="flex-end"
                          
                        >
                          <Button color="secondary" sx={{ height: 40 }} onClick={this.handleClose}>
                            <CloseIcon/>
                          </Button>
                        </Box>
                        
                          <DialogTitle><center><strong style={{color: '#00000'}} >Refund</strong></center></DialogTitle>
                          
                          <DialogContent>
                         
                                <h4 style={{fontFamily: "system-ui"}}>Item</h4>
                          <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Select</th>
                            
                            </tr>
                          </thead>
               
              
                    <tbody>
                    {this.state.ischeckfinal.map((p,index)=>{
                    return(
                      <tr>
                        <th scope="row">{index+1}</th>
                        
                        
                        
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td><input  onClick={this.handleChangecheckboxforitem.bind(this, index)}  class="form-check-input" style={{ fontSize: "15px" }} type="checkbox"  /></td>
                      
                      </tr>
                  
                      )})}
                    
                    </tbody>
              

                  </table>
                      
                        <div class="form-group">
                        
                          <input type="number" onChange={this.handlerefundinput.bind(this)} style={{backgroundColor:"antiquewhite",color:"black"}} class="form-control" id="exampleInputEmail1"  placeholder="Enter Refund Amount"/>
                  
                        </div>
   
                   

                  <br/>
                  <h4 style={{fontFamily: "system-ui"}}>Extra Item</h4>
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Select</th>
                        
                      </tr>
                    </thead>
                    <tbody>

                      {
                        this.state.extraitems.map((p,index)=>{
                          return( <tr>
                            <th scope="row">{index+1}</th>
                            <td>{ p.name}</td>
                            <td>{ p.price}</td>
                            <td><input  class="form-check-input" style={{ fontSize: "15px" }} type="checkbox" checked={this.state.ischeck[index]['checked']}
                                      onClick={this.handleChangecheckboxforextra.bind(this, index)} /></td>
                            
                          </tr>)

                        })
                      }
                  
                    
                    
                    </tbody>
                
                  </table>
                  <ol   class="list-group ">
                    <li  class="list-group-item d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <div style={{fontFamily: "system-ui"}} class="fw-bold">Total Price</div>
                      
                      </div>
                      <span  style={{color:"black",fontFamily: "system-ui"}}><input style={{backgroundColor:"white",border:"none"}} type="button"  value={this.state.totalPrice}/></span>
                    </li>
                    </ol>

                    <ol   class="list-group " >
                    <li  class="list-group-item d-flex justify-content-between align-items-start" style={{backgroundColor:"antiquewhite"}}>
                      <div class="ms-2 me-auto">
                        <div style={{fontFamily: "system-ui"}} class="fw-bold">Total Refund</div>
                      
                      </div>
                      <span  style={{color:"black",fontFamily: "system-ui"}}><input style={{backgroundColor:"antiquewhite",border:"none"}} type="button"  value={this.state.totalrefundAmount}/></span>
                    </li>
                    </ol>

                

                    
                            
                          </DialogContent>
                          
                        
                          <DialogActions style={{display: "flex",  justifyContent:"center"}}>
                        
                          <form onSubmit={this.handlesubmitrefund } id="form" encType='multipart/form-data'>
                      
                          <center><Button variant="contained" style={{backgroundColor:'#db3a5a'}} form="form"  type="submit" >Refund</Button></center> 
                          </form>
                          </DialogActions>
                          
                        
                        </Dialog>



      <td><button type="button" onClick={() => { if (window.confirm('Do you want to see?')) { this.handleMore(cust._id,cust.userid )}}} className="btn btn-sm btn-danger" ><i className="fa fa-eye" /></button>     </td>
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

export default Customer_list
