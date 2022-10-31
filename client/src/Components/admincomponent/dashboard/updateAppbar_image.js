// import React, { Component } from 'react'

// export class updateAppbar_image extends Component {
//   render() {
//     return (
//       <div>updateAppbar_image</div>
//     )
//   }
// }

// export default updateAppbar_image








import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import {SHOWAPPBAR_IMAGES} from '../../../Components/admincomponent/links/superadminlinks';
export class updateAppbar_image extends Component {

  state = 
  {
    appbarimages:[]
      
  }

 componentDidMount=(event) =>
 {
     this.setState
     ({
     Load:true,
     })



          console.log(this.props.match.params.id);
          fetch( SHOWAPPBAR_IMAGES,{
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
              console.log(json);
               this.setState({
                appbarimages :json
               });
         
           
    
             }) 

 }
 
    

handleupdate=(userid)=> 
{

    // try{
    //     axios.post("https://tifinco.com:5000/admin/updateCust_Data", formData ,{ userid: sessionStorage.getItem('userid')}, {
    //       headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
    //     })
    //       .then(res => {
    //           //alert(res.data);
    //           console.log(res.status);
    //           console.log(res.data);
            
    //           if(res.data.msg=='success'){
             

            
    //             console.log("success");
    //             window.location.reload();
    
    //           }
    //           else
    //           {
    //              console.log("failure");
               
    //           }

    //           this.setState({
    //             Load :false,
    //             });
    //       })
    //     }  catch(error) {
         
    //             console.log(error)
    //             this.setState({
    //                 Load :false,
    //                 });
    //             console.log("internal server error");
    //           }
       
        
}


render() 
{
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
           <li className="breadcrumb-item active" aria-current="page">Update AppBar Image</li>
         </ol>
       </div>
       <div className="col-auto">
         <div className="d-md-flex d-none justify-content-lg-end align-items-center">
          
         </div>
       </div>
     </div>
     <div className="row align-items-center">
       <div className="col-auto">
         <h1 className="fs-4 mt-1 mb-0">Update </h1>
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
                 
           

            
                <>
                <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >

                   <div ><br></br></div>

                    <div className="col-lg-12">
                    <label>Appbar_bgimage</label><div><br></br></div>
                    <input type="text" className="form-control" value={this.state.appbarimages.appbar_bgimage}   name="cust_name"  placeholder=" Name" onChange={this.cust_nameinput}  required autoComplete='off'/>
                    </div>

                    <div ><br></br></div>

                    <div className="col-lg-12">
                    <label>Icon Image </label><div><br></br></div>
                    <input type="text" className="form-control" value={this.state.appbarimages.appbar_icon}  name="plantype"   placeholder="plantype " onChange={this.plan_typeinput}   autoComplete='off'/>
                    </div>
                    <div ><br></br></div>
               
                    <button type="button" onClick={() => { if (window.confirm('Do you want to update?')) {this.handleupdate(this.state.userid)  } }} className="btn btn-primary" >Update  </button>
                    <div ><br></br></div>
                </form>
                
                </>
                 {/* ))}          */}
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

export default updateAppbar_image



