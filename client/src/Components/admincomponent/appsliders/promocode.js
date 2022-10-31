import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";

import {INSERT_PROMOCODE,SHOW_PROMOCODELIST,DELETE_PROMOCODE}  from '../../../Components/admincomponent/links/superadminlinks';
export class Offerslider extends Component {

    state = {
        
          Load:false,
          progress:'',
          invalidImage:'',
          i:0,
         
          value:'',
          prevProduct:[],
          discount:'',
          promocode:'',
          description:'',
          promocodes:[],
          promoheading:'',
          upto:'',
          minimum:'',
       
        }
      
        constructor() {
          super();
          this.state = {
            promocodes:[],
            // todos: ['a','b','c','d','e','f','g','h','i','j','k'],
            currentPage: 1,
            promoPerPage: 3,
            value:0,
            countlast:0
          }
        } 
     
        componentDidMount() {
  
          this.setState({
            Load:true
          }); 
  
          fetch(
            SHOW_PROMOCODELIST,{
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
              // console.log(json);
               this.setState({
                promocodes :json
               });
         
               this.setState({
                            Load:false
                          });


             })
  
        }

        headinginput=event=>{
          this.setState({promoheading: event.target.value});

        }
         
        promocodeinput = event =>{
      
       this.setState({promocode: event.target.value});
      
      }
          
       
      descriptioninput = event =>{
        this.setState({ description:event.target.value})
      }


        discountinput = event =>{
          this.setState({ discount:event.target.value})
        }
  
        uptoinput=event=>
        {
          this.setState({upto:event.target.value})
        }
        minimuminput=event=>
        {
          this.setState({minimum:event.target.value})
        }

  
      handleSubmit = event =>  {
          event.preventDefault();
          console.log(this.state.promocode);
        
          this.setState({
              Load :true,
             
              });
              const formData = {
                promocode:this.state.promocode,
                description: this.state.description,
                discount:this.state.discount,
                heading:this.state.promoheading,
                upto:this.state.upto,
                minimum:this.state.minimum,
                userid: sessionStorage.getItem('userid'),
              };

              console.log(formData)

            
              
              try{
                axios.post(INSERT_PROMOCODE, formData,{
                  headers:{'Content-Type': 'multipart/form-data','content-Type': 'application/json'},
                  onUploadProgress: data => {
                    //Set the progress value to show the progress bar
                 //  setProgress(Math.round((100 * data.loaded) / data.total))
                   this.setState({
                    progress: Math.round((100 * data.loaded) / data.total)
        
                   });
                  },
                
                })
                  .then(res => {
                   
                      if(res.data.msg=='success'){
                      
        
                    
                        console.log("success");
                        window.location.reload();
              
            
                      }
                      
                      else if(res.data.msg=='exist')
                      {
                  
                      alert("PromoCode Exists");
                      window.location.reload();

                      }

        
                  
                  })
                }  catch(error) {
                  
                        console.log(error)
                        this.setState({
                            Load :false,
                            });
                        console.log("internal server error");
                      }
          
   
        }
  
  
  //delete images code
  
  handledelete = (_id)=>{
   
  
    this.setState({
      Load :true,
    
      });
    var sendId ={
      _id:_id,
      userid: sessionStorage.getItem('userid'),
    }
    try{
      axios.post(DELETE_PROMOCODE, sendId , {
        headers:{'Content-Type': 'application/json'},
          })
        .then(res => {
            //alert(res.data);
            console.log(res.status);
            console.log(res.data);
          
            if(res.data.msg=='success'){
           
              console.log("success");
              window.location.reload();
    
  
            }else{
       
              console.log("failure");
             
            }
  
            this.setState({
              Load :false,
            
              });
        
        })
      }  catch(error) {
       
              console.log(error)
              this.setState({
                  Load :false,
                  });
              console.log("internal server error");
            }
  }


  handleClick=(event) =>{
    this.setState({
      currentPage: Number(event.target.id)
    });

    this.setState({value: this.state.value+1});
  }
  
    render() {

      const { promocodes, currentPage, promoPerPage } = this.state;
      const indexOfLastpromo = currentPage * promoPerPage;
      const indexOfFirstpromo = indexOfLastpromo - promoPerPage;

      // console.log(indexOfLastpromo);
      // console.log(indexOfFirstpromo)
      const currentTodos = promocodes.slice(indexOfFirstpromo, indexOfLastpromo);

      // console.log(currentTodos)
      const renderlist = currentTodos.map((promcodes_data, index) => {
        return (
  
        
        <tr key={index}>
                                      
     
        <td> {index+1}</td>
       <td> {promcodes_data.promocode}</td>
       <td>{promcodes_data.heading} </td>
       <td>{promcodes_data.description} </td>
       <td>{promcodes_data.discount} </td>
       <td>{promcodes_data.upto} </td>
       <td>{promcodes_data.minimum} </td>
     
  
        <td style={{ verticalAlign: "middle" }}>
          
   <button onClick={() => { if(window.confirm('Do you want to delete?')){this.handledelete(promcodes_data._id)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg></button>
  
  
  </td>
    

                  
                                          </tr>
                                      
          
        );
      });

      const pageNumbers = [];
 
      const NextNumber = [];
   
      for (let i = 1; i <= Math.ceil(promocodes.length / promoPerPage); i++) {
  
 
        // console.log(i)
  
  
          if(i<=5){
       pageNumbers.push(i);
    
        }
        else {
        NextNumber.push(i);
     
  
        
  
  
        }
      }
      // console.log("page",pageNumbers)
      // console.log("previ",preNum)
      // console.log("next",NextNum)
  
     
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className="page-item" style={{padding:'3px'}} ><a id={number}
        onClick={this.handleClick}  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#" key={number}> {number}</a>       </li>
   
        


      );
    });

  
  
  
      const NextPage = NextNumber.map((number,i) => {
        return (
  
  
          <li className="page-item" style={{padding:'3px'}} > 
                 
          {/* {console.log(this.state.countlast)} */}
  
  
          {/* {todos.length/ todosPerPage ?console.log(right):console.log(wrong)} */}
          {/* {this.state.value>=count? <a id={number} */}
           <a id={number}
          onClick={this.handleClick}  className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#" key={number} >Next </a> 
         
             </li>
     
          
  
  
        );
      });

     
      return (
        <>
         <Header/>
        {/* main body area */}
  <div className="main px-lg-5 px-md-2">
  
    {/* Body: Header */}
    <div className="body-header d-flex text-light border-top py-3">
     
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <ol className="breadcrumb bg-transparent mb-0">
              <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">offer slider</li>
            </ol>
          </div>
          <div className="col-auto">
            <div className="d-md-flex d-none justify-content-lg-end align-items-center">
             
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-auto">
            <h1 className="fs-4 mt-1 mb-0">Offer Slider</h1>
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
             
                {
                this.state.progress && <h5> {
                  this.state.progress<100?
                  `${this.state.progress}%` :"Please Wait Almost Done....!"}
                  
                   </h5>
               
                }
             
               
                    <form onSubmit={this.handleSubmit} encType='multipart/form-data' >
  

                    <div ><br></br></div>
                      <div className="col-lg-12">
                      <input class="form-control" type="text"  onChange={this.headinginput} placeholder='Heading' id="P_code" autoComplete='off' required/>
                  </div>
                      <div ><br></br></div>
                      <div className="col-lg-12">
                      <input class="form-control" type="text"  onChange={this.promocodeinput} placeholder='Promo Code' id="P_code" autoComplete='off' required/>
                  </div>
                   
                  <div ><br></br></div>
  
           

                      <input class="form-control" type="text"  onChange={this.descriptioninput} placeholder='Discription' id="p_name" autoComplete='off' required/>

                      <div><br></br></div>
                      <div className="col-lg-12">
                    <input type="number" className="form-control" placeholder='Discount'  name="offerimages"  onChange={this.discountinput} autoComplete='off' required/>
                  </div>

                   
           
                    <div ><br></br></div>
               
  
           

  <input class="form-control" type="number"  onChange={this.uptoinput} placeholder='upto' id="upto" autoComplete='off' required/>

  <div><br></br></div>
  <div className="col-lg-12">
<input type="number" className="form-control" placeholder='minimum'  name="minimum"  onChange={this.minimuminput} autoComplete='off' required/>
</div>



<div ><br></br></div>
   




                  <div className="col-sm-12">
                   <center> <button type="submit" className="btn btn-primary">Insert</button></center>
                  </div>
                  </form>
          <h3 > Promocode  List </h3>
                  <table className="table table-striped">
    <thead>
      <tr style={{color:"red"}}>
        <th scope="col">S.No</th>
        <th scope="col">PromoCode</th>
        <th scope="col">Heading</th>
        <th scope="col">Discription</th>
        <th scope="col">Discount[%]</th>
        <th scope="col">Upto[%]</th>
        <th scope="col">Minimum</th>
        <th scope="col">Action</th>
      
      </tr>
    </thead>
    <tbody>
      {renderlist}
    {/* {console.log(this.state.i=0)} */}
      {/* {this.state.promocodes.map(promcodes_data =>(
      <tr>
        <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
  
       <td> {promcodes_data.promocode}</td>
       <td>{promcodes_data.description} </td>
       <td>{promcodes_data.discount} </td>
     
  
        <td style={{ verticalAlign: "middle" }}>
          
   <button onClick={() => { if(window.confirm('Do you want to delete?')){this.handledelete(promcodes_data._id)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg></button>
  
  
  </td>
    
      </tr>
      ))} */}
    
    </tbody>
  </table>
  <div className="center">
                      

                  
                      <div><br></br></div>
                      <nav aria-label="Page navigation example">
                                 <ul className="pagination justify-content-center" >
                                 {/* <li className="page-item" style={{padding:'3px'}} ><a className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#">&laquo;</a></li> */}
                                 
                                 {/* {previousPage} */}
                              {renderPageNumbers}
                              {NextPage}
                                {/* <li className="page-item" style={{padding:'3px'}} ><a className="page-link" style={{color:'white', backgroundColor:"#323A45"}} href="#">&raquo;</a></li> */}
                              </ul>
                      
                              </nav>
                              </div>
  
  
  
                
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

export default Offerslider