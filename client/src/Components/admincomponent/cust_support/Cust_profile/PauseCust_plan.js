import React, { Component } from 'react'
import Header from '../C_Header';

import Footer from '../C_Footer'
import axios from 'axios';
export class PauseCust_plan extends Component 
{
    state = 
    {
     Load :false,
     Pause_plan:[],
     starting_date:'',
     ending_date:'',
     dayscount:'',
     meal_time:'',
     activation_date:''

    }

componentDidMount()
{
    this.setState({
        Load:true,
      })

        console.log(this.props.match.params.token);
        fetch( "https://tifinco.com:5000/admin/getCust_pausePlan",
        {
            method: 'POST',
            headers: 
              {
              'Content-Type': 'application/json',
              },
            body: JSON.stringify
            ({
              userid: sessionStorage.getItem('userid'),
              token:this.props.match.params.token // Use your own property name / key
            }),
       })
           .then((res) => res.json()).then((json) => {
             console.log(json);
              // console.log(json);
              // alert(json);

              

                var starting_date= json.starting_date;
                var ending_date= json.ending_date;
                var dayscount=json.dayscount;
                var activation_date=json.activation_date;
                var meal_time=json.meal_time;
                console.log(starting_date);
                console.log(ending_date);
                console.log(dayscount);
                console.log(activation_date);
                console.log(meal_time);

                // console.log(con_data.cname);
              
              this.setState
              ({
                Pause_plan :json
               });
          
               this.setState ({ starting_date: starting_date, ending_date:ending_date, dayscount:dayscount, activation_date:activation_date,  meal_time:meal_time  });

                this.setState
                ({
                   Load:false,
                 });
               
           })//CLOSING OF FIRST FETCH
}
starting_dateinput = event => {
  this.setState({ starting_date: event.target.value});
  console.log(this.state.starting_date);
}

ending_dateinput = event => {
  this.setState({ending_date: event.target.value});
  console.log(this.state.ending_date);
}

dayscountinput = event => {
  this.setState({ dayscount: event.target.value});
  console.log(this.state.dayscount);

}

activation_dateinput = event => {
  this.setState({ activation_date: event.target.value});
  console.log(this.state.activation_date);
}

meal_timeinput = event =>{
  this.setState({ meal_time: event.target.value});
  console.log(this.state.meal_time);
}

handleupdate=()=> 
{
  // console.log(userid);

  // event.preventDefault();
        this.setState({
            Load :true,
            });
    
   
        const formData = 
        {
            starting_date: this.state.starting_date,
            ending_date:this.state.ending_date,
            activation_date:this.state.activation_date,
            meal_time:this.state.meal_time,
            dayscount : this.state.dayscount,
            token:this.state.Pause_plan.userid,
            // userid: sessionStorage.getItem('userid'),

        };
         
  
     try{
        axios.post("https://tifinco.com:5000/admin/updateCustPausedPlan", formData ,{ userid: sessionStorage.getItem('userid')}, {
          headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
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
                // cname:'',
                // email:'',
                // mobile:'',
                // address:''
                });
            
            // console.log(res);
            // console.log(res.data);
          })
        }  catch(error) {
         
                console.log(error)
                this.setState({
                    Load :false,
                    });
                console.log("internal server error");
              }
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
              <li className="breadcrumb-item active" aria-current="page">customer plan Pause</li>
            </ol>
          </div>
          <div className="col-auto">
            <div className="d-md-flex d-none justify-content-lg-end align-items-center">
             
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-auto">
            <h1 className="fs-4 mt-1 mb-0">Customer Plan Pause </h1>
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
  

              <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >


                   <div ><br></br></div>

                   <div className="col-lg-12">
                 <label>Pause Starting date</label><div><br></br></div>
                <input type="text" className="form-control" value={this.state.starting_date}   name="starting_date"  placeholder="starting Date" onChange={this.starting_dateinput}  required autoComplete='off'/>
                </div>

                <div ><br></br></div>
                <div className="col-lg-12">
              <label>Pause Ending date</label><div><br></br></div>
                <input type="text" className="form-control" value={this.state.ending_date}  name="ending_date"   placeholder="Ending Date " onChange={this.ending_dateinput}   autoComplete='off'/>
              </div>
              <div ><br></br></div>


                <div className="col-lg-12">
                <label>Meal Time </label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.meal_time}   name="meal_time" placeholder="Meal Time"  onChange={this.meal_timeinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>


                <div className="col-lg-12">
                <label>Pause Days Count </label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.dayscount}   name="dayscount" placeholder="Dayscount "  onChange={this.dayscountinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>

                <div className="col-lg-12">
                <label>Plan Activation date </label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.activation_date}   name="activation_date"   placeholder="Activation Date" onChange={this.activation_dateinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>

                {/* <div>
                <label>Pause Your Plan <span>&nbsp;&nbsp;</span></label>
                <div ><br></br></div>
                {this.state.usr_plan.plan_pause ==='1'?(
                    <div className="form-check-inline">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="yes" placeholder="MealPreference " onChange={this.foodtypeinput}  defaultChecked  />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                    <span>&nbsp;&nbsp;</span>   Yes 
                    </label>
                  </div>)
                :(
                  <div className="form-check-inline">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="yes" placeholder="MealPreference " onChange={this.foodtypeinput}   />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                  <span>&nbsp;&nbsp;</span> Yes
                  </label>
                </div>)}
                {this.state.usr_plan.plan_pause ==='0'?(
                <div className="form-check-inline">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onChange={this.foodtypeinput}  defaultValue="no"  defaultChecked  />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                  <span>&nbsp;&nbsp;</span> No
                  </label>
                </div>):(

              <div className="form-check-inline">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onChange={this.foodtypeinput}  defaultValue="no" />
              <label className="form-check-label" htmlFor="exampleRadios2">
              <span>&nbsp;&nbsp;</span> No
              </label>
              </div>


                )}
              
              </div>    */}
                <div ><br></br></div>

                <button type="button" onClick={() => { if (window.confirm('Do you want to update?')) { this.handleupdate(this.state.Pause_plan.userid) } }} className="btn btn-primary" >Update  </button>
                </form>
        
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

export default PauseCust_plan