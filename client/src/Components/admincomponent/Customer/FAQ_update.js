import React, { Component } from 'react'
import Header from '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';



import { FAQSHOW,FAQUPDATE,FAQONEID } from '../../../Components/admincomponent/links/superadminlinks';


export class FAQ_update extends Component {


  state = {
    question: '',
    answer: '',
 
    
    values: [],

    preraw: [],
    Load: false,
    progress: '',
    invalidImage: '',
    i: 0,
    taskList: [{ index: Math.random(), raw: "" }],
  }

  





 
  
  Questioninput = event => {
    this.setState({ question: event.target.value })
  }
  Answerinput = event => {
    this.setState({ answer: event.target.value })
  }
 

 

  componentDidMount() {
    this.setState({
      Load:true,
    })
     fetch(
        FAQSHOW,{
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
          preCat :json
         });
        
          fetch(FAQONEID,{
              headers:{'Content-Type': 'application/json','Accept': 'application/json'},
              method:'POST',
              body:JSON.stringify({
                _id:this.props.match.params.id,
                userid: sessionStorage.getItem('userid'),
              }),
             
            }).then((response)=>response.json()).then((json)=>{ 

              json.map(data=>{

                console.log(data.question);

                 this.setState({
              question:data.question,
            //  p_image:data.p_image,
             answer:data.answer
         
                              
              });
              });
              console.log(json);

              
             

              console.log(this.props.match.params.id);
               this.setState({
              Load:false
            });
             });//CLOSING OF SECOND FETCH
            
        })//CLOSING OF FIRST FETCH

  }







 


  handleSubmit = event =>  {
    // alert("handlesubmit call");
      event.preventDefault();

      this.setState({
          Load :true,
         
          });
         
        const formData = {
            question: this.state.question,
            answer:this.state.answer,
       
            _id:this.props.match.params.id
        };
          
      
        
   try{
      axios.post(FAQUPDATE, formData ,{userid: sessionStorage.getItem('userid')}, {
        headers:{'content-Type': 'application/json'},
        onUploadProgress: data => {
          //Set the progress value to show the progress bar
       //  setProgress(Math.round((100 * data.loaded) / data.total))
         this.setState({
          progress: Math.round((100 * data.loaded) / data.total)

         });
        },
      })
        .then(res => {
            //alert(res.data);
            console.log(res.status);
            console.log(res.data);

            swal({
                title: "Good job",
                text: " successfully updated !",
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
          
            if(res.data.msg=='success'){
           



              swal({
                title: "Good job",
                text: " successfully updated !",
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
             
          
              // console.log("success");
              // alert("Data Updated");
              // window.location.reload();
    
  
            }else if(res.data.msg=='exist'){
              this.setState({ invalidImage: '' });
             alert("Food Exists");
             window.location.reload();
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


  
  ////////////////////////////////////////////////////////////////////////////////////////////////////



  render() {
    let { taskList } = this.state
    return (
      <>
        <Header />
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
                    <li className="breadcrumb-item active" aria-current="page">Create User </li>
                  </ol>
                </div>
                <div className="col-auto">
                  <div className="d-md-flex d-none justify-content-lg-end align-items-center">

                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-auto">
                  <h1 className="fs-4 mt-1 mb-0">Update  FAQ</h1>
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

                        {
                          this.state.progress && <h5> {
                            this.state.progress < 100 ?
                              `${this.state.progress}%` : "Photo Uploaded ,Please Wait Almost Done....!"}

                          </h5>

                        }


                        {this.state.invalidImage && <h5 style={{ color: "red" }} className="error"> {this.state.invalidImage}</h5>}

<center>
                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'   >
                          <div ><br></br></div>



                          <div ><br></br></div>




                          <div className="col-lg-8">
                            <lable> Question</lable>

                            <input type="text" className="form-control"   value={this.state.question} name="question" placeholder="Name" onChange={this.Questioninput} required autoComplete='off' />
                          </div>



                          <div ><br></br></div>
                          <div ><br></br></div>


                          <div className="col-lg-8">
                            <lable>  Answer</lable>
                            <textarea rows="5" type="text"  className="form-control" name="answer"   value={this.state.answer}  placeholder="Answer" onChange={this.Answerinput} required autoComplete='off' ></textarea>

                            {/* <input type="text" rows="5" className="form-control" name="food_qr" placeholder="Email" onChange={this.emailinput} required autoComplete='off' /> */}
                          </div>



                          <div ><br></br></div>
                          <div ><br></br></div>


      


                     


                          <div ><br></br></div>

                         
                          <div className="col-lg-8">

                            <button type="submit" className="btn btn-primary">Update</button>
                          </div>
                        </form>


</center>

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
        <Footer />
      </>
    )
  }
}

export default FAQ_update