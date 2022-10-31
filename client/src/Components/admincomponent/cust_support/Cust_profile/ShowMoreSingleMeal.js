import React, { Component } from 'react'
import Header from '../C_Header';

import Footer from '../C_Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
// import {GET_PLAN_BY_ID } from '../../../Components/admincomponent/links/superadminlinks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class ViewOneSingleMeal extends Component {
    

    state = {
         userdetails :[],
        Load:false,
        items:[],
        ischeck:[],
        ischeck2:[],
        itemsdetails:[],
        adderss:[],
        userprofile:[]
    
      }

    

      componentDidMount() {
        this.setState({
          Load:true,
        })

        fetch(
          "https://tifinco.com:5000/admin/showuserprofile",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: sessionStorage.getItem('userid'),
          userid:this.props.match.params.userid // Use your own property name / key
        }),
      })
          .then((res) => res.json())
          .then((json) => {
          // console.log(json);
          this.setState({userprofile:json})
          })






         fetch(
            "https://tifinco.com:5000/admin/showsinglemealcustomerdetails",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userid: sessionStorage.getItem('userid'),
            _id:this.props.match.params.id // Use your own property name / key
          }),
        })
            .then((res) => res.json())
            .then((json) => {
            // console.log(json);
             this.setState({
                userdetails :json
             });
            
            //  this.setState({items:json.item})
            const item = json.item

            this.setState({adderss:json.address})

           
       
            const arrayitem=[]
            for(var i=0;i<item.length;i++){
             for(var j=0;j<item[i].extra.length;j++){

              arrayitem.push(item[i].extra[j].extra_items)
               
             }
            }

            // console.log(arrayitem)

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


            // console.log(arrayitem)



            // console.log(extra_itemarray)
             
            extra_itemarray.map((data)=>{
              this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ name:data.name,price: data.price, id:data.id, checked:false } ]}))

            });

            item.map((data)=>{
              this.setState(prevState => ({ ischeck2: [...prevState.ischeck2,{ price: data.price, id:data._id, name:data.name,checked:false } ]}))

            });

           

          // sum of exta item price

            const ages = this.state.ischeck.reduce((a, {id, price}) => (a[id] = (a[id] || 0) + +price, a), {});

            // console.log(ages);

            var itemprice = [];
            for(var i =0; i<this.state.ischeck2.length;i++){

              itemprice.push({price:this.state.ischeck2[i].price-ages[`${this.state.ischeck2[i].id}`],name:this.state.ischeck2[i].name,id:this.state.ischeck2[i].id})

            }

            // console.log(itemprice.concat(this.state.ischeck))
            this.setState({itemsdetails:itemprice.concat(this.state.ischeck)})




                 this.setState({
                    Load:false
                  });
                
            })//CLOSING OF FIRST FETCH

      }




  render() {

    const date  = this.state.userdetails.createdAt

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
            <li className="breadcrumb-item active" aria-current="page">Update Food Product</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto" style={{display:"flex",width:"100%",alignItems:"center"}}>
          <h3 style={{width:"90%"}}>{this.state.userprofile.name}</h3>
          <h1 className="fs-4 mt-1 mb-0" style={{backgroundImage:`url(${this.state.userprofile.profileimage})`,height:"80px",width:"80px",borderRadius:"50%",backgroundPosition:'center',backgroundSize:'cover'}}></h1>
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




        <div style={{    display: "flex", flexDirection: "row",justifyContent: "center"}}>
                 <>
                    <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >


                      <div ><br></br></div>

                      <div className="col-lg-12">
                      <b><label>Customer Name</label></b> &nbsp; : &nbsp;&nbsp;{this.state.userprofile.name}<div><br></br></div>

                      </div>
                      <div ><br></br></div>

                      <div className="col-lg-12">
                      <b><label>Email Id</label></b> &nbsp; : &nbsp;&nbsp;{this.state.userprofile.email}<div><br></br></div>

                      </div>
                      <div ><br></br></div>

                      <div className="col-lg-12">
                      <b><label>Mobile Number</label></b> &nbsp; : &nbsp;&nbsp;{this.state.userprofile.mobile}<div><br></br></div>

                      </div>
                      <div ><br></br></div>

                      <div className="col-lg-12">
                      <b><label>Refferal Code</label></b> &nbsp; : &nbsp;&nbsp;{this.state.userprofile.referral}<div><br></br></div>

                      </div>
                      <div ><br></br></div>

                      <div className="col-lg-12">


                      <b><label> Address</label></b> &nbsp; : &nbsp;&nbsp;<br></br><br/>
                      {console.log(this.state.adderss.address1)}
                      <b><label></label></b>  Address1&nbsp;: &nbsp;&nbsp;{this.state.adderss.address1}<div><br></br></div>
                      <b><label></label></b>  Address2&nbsp;: &nbsp;&nbsp;{this.state.adderss.address2}<div><br></br></div>

                      </div>
                      <div ><br></br></div>

                      <div className="col-lg-12">
                      <b><label>Order Of Items</label></b>  : &nbsp;&nbsp;<br></br><br/>

                      {console.log(this.state.itemsdetails)}
                      {this.state.itemsdetails.map(data =>(<> 
                      <table>

                      {data.name} &nbsp; : &nbsp;&nbsp;{data.price}<br></br>

                      
                      </table>




                      </>))}<div><br></br></div>

                      </div>


                      <div className="col-lg-12">
                      <b><label>Final Price</label></b> &nbsp; : &nbsp;&nbsp;{this.state.userdetails.finalprice}<div><br></br></div>

                      </div>
                      <div ><br></br></div>




                      <div className="col-lg-12">
                      <b><label>Payment Method</label></b> &nbsp; : &nbsp;&nbsp;{this.state.userdetails.paymentmethod}<div><br></br></div>

                      </div>
                      <div ><br></br></div>




                      <div className="col-lg-12">
                      <b><label>Order Id</label></b>  : &nbsp;&nbsp;{this.state.userdetails.cf_orderid}<div><br></br></div>

                      </div>
                      <div ><br></br></div>


                      <div ><br></br></div>


                      <div className="col-lg-12">
                      <b><label>Date</label></b> &nbsp; :&nbsp;&nbsp;{date}





                      <div><br></br></div>

                      </div>

                      <div ><br></br></div>
                      </form>


                 
                 </>
           
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


