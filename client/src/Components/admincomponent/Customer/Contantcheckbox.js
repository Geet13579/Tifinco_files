import React, { Component } from 'react'
import Header from '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import swal from 'sweetalert';
// import Checkbox from 'rc-checkbox';
// import 'rc-checkbox/assets/index.css';


import { CONTANTCHECKBOXINSERT, CONTANTCHECKBOXLIST } from '../../../Components/admincomponent/links/superadminlinks';


export class Contantcheckbox extends Component {

   

    state = {
        singlemeal: false,
        corporate: false,
        defaultChecked: '',
        Checked: false,

        values: [{id: Math.random(),item:'',itemheading:'',}],
        addmeals:  false,
        preraw: [],
        Load: false,
        progress: '',
        invalidImage: '',
        taskList: [{ index: Math.random(), itemheading: "" }],
        i: 0,
        // taskList: [{ index: Math.random(), raw: "" }],
    }
 
  
  
    // handleChange(i, event) {
    //     let values = [...this.state.values];
    //     values[i] = event.target.value;
    //     this.setState({ values:!this.state.isChecked });
              
    // // const values = this.state.values.map(a => {
    // //     if(i===a.i)
    // //     {
    // //         a[event.target.name] = event.target.value
    // //     }
       
    // //     // values[i] = event.target.value;
        
    // // })
    // // this.setState({ values });



    
    //   }


      handleChange(id, event){
     
        const values = this.state.values.map(i => {
            
          if(id === i.id) {
            // event.target.value= !this.state.isChecked,
            // if (!event.target.isChecked) {
            //   this.setState({ ...values, [event.target.name]: false });
            //   } else if (event.target.isChecked) {
            //   this.setState({ ...values, [event.target.name]: true });
            //   }
            // // console.log('Checkbox checked:', (event.target.isChecked));
          
            // const { isChecked } = event.target
            //   event.target.checked, event.target.id
         
              i[event.target.name] =  event.target.value
      
      
          }
          return i;
        })

        this.setState({ values});
      //  console.log(option)
      
      }
      addClick(){
        // this.setState(prevState => ({ values: [...prevState.values,'']}))
        
        this.setState(prevState => ({ values: [...prevState.values,{ id: Math.random(),item:'',itemheading:'' }]}));
      }
      removeClick(i){
        // let values = [...this.state.values];
        // values.splice(i,1);
        // this.setState({ values });

        let values= [...this.state.values];
        values.splice(values.findIndex(value =>value.i===i),1);
        this.setState({ values });
   
         
          
          
      }
 

    createUI(){
        return this.state.values.map((row, i) =>
            <div key={i}  style={{
                display: "flex",
                flexDirection:'column',
            
                justifyContent: "space-between"
              }}>
           
             <div class="container">
  <div class="row">
    <div class="col-sm-6 bg-success">
    <input type="text"  className="form-control"   name="itemheading" placeholder='Heading..'   onChange={this.handleChange.bind(this, row.id)}  required></input>
    </div>
    <div class="col-sm-6 bg-light">
    <input type='checkbox' className="btn btn-success"  name="item" onChange={this.handleChange.bind(this, row.id)}   defaultChecked={this.state.Checked }  />
    {/* {this.state.isChecked.toString()} */}
  
    </div>
  </div>
</div>
        
             <br></br>
          
             {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.removeClick.bind(this, row.id)}/>):("")}

             <div ><br></br></div>
            </div>
            

        )
     }



   

     
    componentDidMount() {

        this.setState({
            Load: true
        });

        fetch(
            CONTANTCHECKBOXLIST, {
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
                json.map(con_data => {

                    if (con_data.singlemeal == 'true') {
                        this.setState({
                            singlemeal: con_data.singlemeal,



                        })

                    }
                    else {
                        this.setState({
                            singlemeal: [],



                        })

                    }


                    if (con_data.corporate == 'true') {
                        this.setState({

                            corporate: con_data.corporate,


                        })
                    }
                    else {
                        this.setState({
                            corporate: [],



                        })

                    }

                    if (con_data.corporate == 'false' && con_data.singlemeal == 'false') {
                        this.setState({
                            corporate: [],
                            singlemeal: [],



                        })
                    }
                    // else{
                    //     this.setState({
                    //         singlemeal: con_data.singlemeal,

                    //         corporate: con_data.corporate,



                    //     })

                    // }
                }




                );
                console.log("data load");
                this.setState({
                    Load: false
                });

            })



    }




    singlemealsinput = event => {
        this.setState({ singlemeal: event.target.checked })
        // console.log(event.target.checked)
    }
    corporateinput = event => {
        this.setState({ corporate: event.target.checked })
    }
    mealsinput=event=>
    {
        this.setState({ addmeals: event.target.checked })
    }

    // o = object
    // get(o) { 

    //     ( $(o).val() == 0 ) ? $(o).val(1) : $(o).val(0);

    //     alert( $(o).val() );

    //     console.log( $(o).val() );

    //   }






    handleSubmit = event => {
        event.preventDefault();


        this.setState({
            Load: true,

        });
   
        var auth =
        {
            'singlemeal': this.state.singlemeal,
            'corporate': this.state.corporate,
           
        }
        // formData.append('question', this.state.question);
        // formData.append('answer', this.state.answer);





        try {
            axios.post(CONTANTCHECKBOXINSERT, auth,{userid: sessionStorage.getItem('userid')}, {
                headers: { 'content-Type': 'application/json' },
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

                    console.log("success");
                    swal({
                        title: "Good job",
                        text: " successfully updated !",
                        icon: "success",
                        buttons: [
                            'NO',
                            'YES'
                        ],
                    }).then(function (isConfirm) {
                        if (isConfirm) {
                            window.location.reload();
                        } else {
                            //if no clicked => do something else
                        }
                    });

                    if (res.data.msg == 'success') {



                        // window.location.reload();


                    } else {


                        console.log("failure");

                    }

                    this.setState({
                        Load: false,
                        // cname:'',
                        // email:'',
                        // mobile:'',
                        // address:''
                    });

                    // console.log(res);
                    // console.log(res.data);
                })
        } catch (error) {

            console.log(error)
            this.setState({
                Load: false,
            });
            console.log("internal server error");
        }

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////


    handleSubmit2 = event => {
        event.preventDefault();


        this.setState({
            Load: true,

        });
     
     
        var auth2 =
        {
            addmeals:  this.state.values,
            // 'corporate': this.state.corporate,
          
        }
        // // formData.append('question', this.state.question);
        // formData.append('answer', this.state.answer);

// alert(formData)



        try {
            axios.post(`https://tifinco.com:5000/admin/createmeals`, auth2,{userid: sessionStorage.getItem('userid')}, {
                headers: { 'content-Type': 'application/json' },
                onUploadProgress: data => {
                    //Set the progress value to show the progress bar
                    //  setProgress(Math.round((100 * data.loaded) / data.total))
                    this.setState({
                        progress: Math.round((100 * data.loaded) / data.total)

                    });
                },
            })
                .then(res => {
                    // alert(res.data);
                    console.log(res.status);
                    console.log(res.data);

                    console.log("success");
                    swal({
                        title: "Good job",
                        text: " successfully inserted !",
                        icon: "success",
                        buttons: [
                            'NO',
                            'YES'
                        ],
                    }).then(function (isConfirm) {
                        if (isConfirm) {
                            window.location.reload();
                        } else {
                            //if no clicked => do something else
                        }
                    });
                  
                    if (res.data.msg == 'success') {


                       
    
                        // window.location.reload();


                    } else {


                        console.log("failure");

                    }

                    this.setState({
                        Load: false,
                        // cname:'',
                        // email:'',
                        // mobile:'',
                        // address:''
                    });

                    // console.log(res);
                    // console.log(res.data);
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
                                        <li className="breadcrumb-item active" aria-current="page"> Contantcheckbox </li>
                                    </ol>
                                </div>
                                <div className="col-auto">
                                    <div className="d-md-flex d-none justify-content-lg-end align-items-center">

                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <h1 className="fs-4 mt-1 mb-0">  Contantcheckbox</h1>
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



                                                <center>
                                                    <form onSubmit={this.handleSubmit} encType='multipart/form-data'   >
                                                        <div ><br></br></div>



                                                        <div ><br></br></div>




                                                        <div className="col-lg-8" >
                                                            <lable>  Single Meals </lable>
                                                            <input type="checkbox" id="singlemealsinput" checked={this.state.singlemeal.toString()} onChange={this.singlemealsinput} name="singlemeal"></input>

                                                        </div>



                                                        <div ><br></br></div>
                                                        <div ><br></br></div>


                                                        <div className="col-lg-8">
                                                            <lable>  Corporate Meals </lable>
                                                            <input type="checkbox" id="corporateinput" checked={this.state.corporate.toString()} name="corporate" onChange={this.corporateinput}   ></input>

                                                        </div>



                                                        <div ><br></br></div>
                                                        <div ><br></br></div>








                                                        <div ><br></br></div>


                                                        <div className="col-lg-8">

                                                            <button type="submit" className="btn btn-primary">Update</button>
                                                        </div>
                                                    </form>

<div><hr></hr></div>

{/*   ------------------------------------------------------------------------------------   extra item ---------------------------------------------------- */}
                                                </center>
                                                <center>
                                                <form onSubmit={this.handleSubmit2}  >
                                                    <div className="col-lg-8">
                                                            <lable style={{color:"blue"}} > Add Meals </lable>
                                                          
                                                            {/* {this.createPlanItem()} */}
                                                            {this.createUI()}
                                                        </div>
                                                    
                                                    <div className="col-sm-12">
                <button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Row</button>  <span>&nbsp;&nbsp;</span>
                  <button type="submit" className="btn btn-primary">Insert</button>
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

export default Contantcheckbox