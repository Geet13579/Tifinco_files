import React from 'react';
import axios from 'axios';
import   { useHistory,Link }  from 'react-router-dom'
// import { Loader } from "react-full-page-loader-overlay";
import Loader from "react-js-loader";
export default class Loginpage extends React.Component {
     

  state = {
    email: '',
    password:'',
    isLoad:false
  }

  emailinput = event => {
    this.setState({ email: event.target.value});
  }
  passwordinput = event => {
    this.setState({ password: event.target.value});
  }
  handleSubmit = event =>  {
    event.preventDefault();
      this.setState({
        isLoad : true,
      });
    const authdata = {
      userid:this.state.email,
      password: this.state.password
    };
    // alert(authdata.email);
    //this.setState({ email: '', password: '' });
    //const jsonauthdata = JSON.stringify({ email: this.state.email,password:this.state.password});
 try{
  //alert(jsonauthdata);
    axios.post(`https://tifinco.com:5000/admin/adminauth`,  authdata , {
      headers:{'Content-Type': 'application/json','Accept': 'application/json',"Access-Control-Allow-Origin" :"*"}
    })
      .then(res => {
          //alert(res.data);
          console.log(res.status);
          console.log(res.data);
          console.log(res.data.admintype);
        
          if(res.data.msg=='success'){
            this.setState({
              isLoad :false,
              
            });
			sessionStorage.setItem('pageRender', 1,);
           sessionStorage.setItem('userid', this.state.email,);
           sessionStorage.setItem('admintype', res.data.admintype,);
           // let data = sessionStorage.getItem('userid');
            //console.log(data+"session data");
          //  alert("User Auth success");
        
            console.log("success");
            if(res.data.admintype=='superadmin'){
              window.location = "/homepage" ;
              
            }
            else if(res.data.admintype=='kitchenadmin'){

              window.location = "/Kitchepannel" ;
         
            }
              else if(res.data.admintype=='deliveryadmin'){

                window.location = "/DeliveryHomePage" ;
           
              }
              else if(res.data.admintype=='CSAdmin'){

                window.location = "/Customerpannel" ;
           
              }
         

          }else{
              this.setState({
            isLoad :false,
            });
            console.log("failure");
            alert("User Auth Failed");
          }
          this.setState({ email: '', password: '' });
        // console.log(res);
        // console.log(res.data);
      })
    }  catch(error) {
      this.setState({
        isLoad : false,
      });
            console.log(error)
            alert(error);
            console.log("internal server error");
          }
//     const res = await axios.post('http://tifinco.com/register', jsonauthdata, {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
// alert(res.data.data);
//res.data.headers['Content-Type']; // 'application/json',
  }
  render() {
    return (
    <div>
       
       {/* <Loader show={this.state.isLoad}  design="6" fillin="false"/> */}
    <div className="main auth-div p-2 py-3 p-xl-5">
      {/* Body: Body */}
      <div className="body d-flex p-0 p-xl-5">
        <div className="container-fluid">
          <div className="row g-0" style={{justifyContent:"center"}}>
         
            <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
              <div className="w-100 p-4 p-md-5 card border-0" style={{maxWidth: '32rem'}}>
                {/* Form */}
                <form className="row g-1 p-0 p-md-4" onSubmit={this.handleSubmit} >
                  <div className="col-12 text-center mb-5">
                    <h1>Sign in</h1>
                    <span>Welcome Back :) </span>
                  </div>
                  {/* <div className="col-12 text-center mb-4">
                    <a className="btn btn-lg btn-outline-secondary btn-block" href="#">
                      <span className="d-flex justify-content-center align-items-center">
                        <img className="avatar xs me-2" src="../../assets/images/google.svg" alt="Image Description" />
                        Sign in with Google
                      </span>
                    </a>
                    <span className="dividers text-muted mt-4">OR</span>
                  </div> */}
                  <div className="col-12">
                    <div className="mb-2">
                      <label className="form-label">Email address</label>
                      <input type="email" name="email"  value={this.state.email} onChange={this.emailinput}  className="form-control form-control-lg" placeholder="xyz@example.com" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-2">
                      <div className="form-label">
                        <span className="d-flex justify-content-between align-items-center">
                          Password
                          <a className="text-primary" href="/sendemail">Forgot Password?</a>
                        </span>
                      </div>
                      <input type="password"  name="password"  value={this.state.password} onChange={this.passwordinput} className="form-control form-control-lg" placeholder="***************"  required/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className={"item"}>
              {this.state.isLoad == true ?(   <div className={"item"}>
                <Loader type="rectangular-ping" bgColor={"#0000FF"} title={"rectangular-ping"} size={100} />
            </div>):("")} 
            </div>
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-lg btn-block btn-dark lift text-uppercase">SIGN IN</button>
                  </div>
                  {/* <div className="col-12 text-center mt-4">
                    <span className="text-muted">Don't have an account yet? <a href="auth-signup.html">Sign up here</a></span>
                  </div> */}
                </form>
                {/* End Form */}
              </div>
            </div>
          </div> {/* End Row */}
        </div>
      </div>
    </div>
  </div>
    )
  }
}
// import React from 'react';
// import axios from 'axios';
// const Loginpage = () => {
//   const [formValue, setformValue] = React.useState({
//     email: '',
//     password: ''
//   });
//   // const handleSubmit = (event) => {
//   //   // we will fill this in the coming paragraph
//   //   event.preventDefault();
//   //   alert(formValue.password);
//   // }
//   const handleSubmit = async() => {
//     // store the states in the form data
//     // const loginFormData = new FormData();
//     // loginFormData.append("username", formValue.email)
//     // loginFormData.append("password", formValue.password)
//     try {
//       // make axios post request
//       const json = JSON.stringify({ email: formValue.email,password:formValue.password });
//       alert(json);
//       const response = await axios({
//         method: "post",
//         url: "/bj/jj",
//         data: json,
//         headers: { "Content-Type": "application/json" }
//       });
//       alert(response.status);
//     } catch(error) {
//       console.log(error)
//       alert(error);
//     }
//   }
//   const handleChange = (event) => {
//     setformValue({
//       ...formValue,
//       [event.target.name]: event.target.value
//     });
//   }
//   return (
//   )
// };
// export default Loginpage;