import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { INSERT_APPBAR_IMAGES,SHOWAPPBAR_IMAGES, UPDATEAPP_BAR_IMAGE} from '../../../Components/admincomponent/links/superadminlinks';


export class Appbarimages extends Component {
    state=
    {
        appbar_bgimage:'',
        Invalidappbar_image:'',
        appbar_icon:'',
        Invalidicon_image:'',
        appbarimages:[],
        bgimage:false,
        iconimage:false

    }

    componentDidMount() 
    {
          this.setState
          ({
            Load:true
          }); 

          fetch(SHOWAPPBAR_IMAGES,{ method: 'POST', headers: {'Content-Type': 'application/json'},
          body: JSON.stringify
          ({
            userid: sessionStorage.getItem('userid'), // Use your own property name / key
          }),
        }).then((res) => res.json()).then((json) =>
         {
              console.log(json);
              this.setState
              ({
                appbarimages :json
              });
         })

    }

     bgimageinput = event =>
    {
        this.setState({ Invalidappbar_image: '' });
        const imageFile = event.target.files[0];

        var ImgSize = (imageFile.size)/(1024*1024);
    
       if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) 
       {
         this.setState({ Invalidappbar_image: 'Please select valid image.' });
         console.log(this.state.Invalidappbar_image);
         return false;
       }
       
       if (ImgSize >='4') 
       {
         this.setState({ Invalidappbar_image: 'File Size Is Large ! Select File Below  2MB ' });
         console.log(this.state.Invalidappbar_image);
         return false;
       }
       this.setState({  appbar_bgimage : event.target.files[0], bgimage: true});
    }


    iconimageinput = event =>
    {
        this.setState({ Invalidicon_image: '' });
        const imageFile = event.target.files[0];

        var ImgSize = (imageFile.size)/(1024*1024);
   
       if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) 
       {
         this.setState({ Invalidicon_image: 'Please select valid image.' });
         console.log(this.state.Invalidicon_image);
         return false;
       }
       
       if (ImgSize >='4') 
       {
         this.setState({ Invalidicon_image: 'File Size Is Large ! Select File Below  2MB ' });
         console.log(this.state.Invalidicon_image);
         return false;
       }
       this.setState({  appbar_icon : event.target.files[0], iconimage:true});
    }



    //   handleSubmit = event =>  
    //   {
    //     event.preventDefault();

    //     // if(this.state.invalidImage !=''){
    //     //   alert("Please Select Valid File !");
    //     //   return false;
    //     // }
    //     this.setState({
    //         Load :true,
           
    //         });
    //         const formData = new FormData();
    //         formData.append('appbar_bgimage', this.state.appbar_bgimage);
    //         formData.append('appbar_icon', this.state.appbar_icon);
            
    //         console.log(formData)
          
    //  try{
    //     axios.post(INSERT_APPBAR_IMAGES, formData , {userid: sessionStorage.getItem('userid')},{
    //       headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},
    //       onUploadProgress: data => {
    //         //Set the progress value to show the progress bar
    //      //  setProgress(Math.round((100 * data.loaded) / data.total))
    //        this.setState({
    //         progress: Math.round((100 * data.loaded) / data.total)

    //        });
    //       },
    //     })
    //       .then(res => {
    //           //alert(res.data);
    //           console.log(res.status);
    //           console.log(res.data);
            
    //           if(res.data.msg=='success'){
             

            
    //             console.log("success");
    //             window.location.reload();
      
    
    //           }else{
               
               
    //             console.log("failure");
               
    //           }

    //           this.setState({
    //             Load :false,
    //             // cname:'',
    //             // email:'',
    //             // mobile:'',
    //             // address:''
    //             });
            
    //         // console.log(res);
    //         // console.log(res.data);
    //       })
    //     }  catch(error) {
         
    //             console.log(error)
    //             this.setState({
    //                 Load :false,
    //                 });
    //             console.log("internal server error");
    //           }
 
    //   }

   handleupdate  = event =>
    {
        event.preventDefault();
          var appbar_bgimage ;
          var appbar_icon;
        if(this.state.bgimage == true)
        {
          if(this.state.iconimage == true)
          {
            appbar_bgimage = this.state.appbar_bgimage;
            appbar_icon = this.state.appbar_icon;
            console.log(appbar_bgimage);
            console.log(appbar_icon);
          }
          else
          {
            appbar_bgimage = this.state.appbar_bgimage;
            appbar_icon = this.state.appbarimages[0].appbar_icon;
            var appbar_icon = appbar_icon.substring(appbar_icon.lastIndexOf('/')+1);
            console.log(appbar_bgimage);
            console.log(appbar_icon);
          }
        }
        else
        {
          if(this.state.iconimage == true)
          {
            appbar_bgimage = this.state.appbarimages[0].appbar_bgimage;
            var appbar_bgimage = appbar_bgimage.substring(appbar_bgimage.lastIndexOf('/')+1);
            appbar_icon = this.state.appbar_icon;
            console.log(appbar_bgimage);
            console.log(appbar_icon);
          }
          // else
          // {
          //   appbar_bgimage = this.state.appbarimages[0].appbar_bgimage;
          //   appbar_icon = this.state.appbarimages[0].appbar_icon;
          // }
        }

        if(this.state.Invalidappbar_image !=''){
          alert("Please Select Valid File !");
          return false;
        }
        if(this.state.Invalidicon_image != '')
        {
          alert("Please Select Valid File !");
          return false;
        }
        console.log(appbar_bgimage);
        // console.log(appbar_icon.filename);
        // var filename = appbar_icon.substring(appbar_icon.lastIndexOf('/')+1);
          // alert(filename);
        // console.log(this.state.appbarimages[0].appbar_bgimage);
        // console.log(this.state.appbarimages[0].appbar_icon);
        
        this.setState
        ({
          Load :true,
          });

          const formData = new FormData();
          formData.append('appbar_bgimage', appbar_bgimage);
          formData.append('appbar_icon', appbar_icon);   
          formData.append('_id', "634f8f907e4205602ef177a8");
          
          console.log(formData);
     
          try{ axios.post(UPDATEAPP_BAR_IMAGE, formData , {userid: sessionStorage.getItem('userid')},{
            headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},
            onUploadProgress: data =>
            {             //Set the progress value to show the progress bar
                            //  setProgress(Math.round((100 * data.loaded) / data.total))
                this.setState
                ({
                  progress: Math.round((100 * data.loaded) / data.total)
                });
            },
          }).then(res => 
            {
                console.log(res.status);
                console.log(res.data);
              
                if(res.data.msg=='success')
                {
                  console.log("success");
                  window.location.reload();
                }
                else
                { 
                  console.log("failure");
                }

                this.setState
                ({
                  Load :false,
                  });

            })
          }catch(error) 
          {
                console.log(error)
                  this.setState
                  ({
                      Load :false,
                  });
                  console.log("internal server error");
          }


      // window.location = "/dashboard/updateAppbar_image/"+ _id;  


  }



    
  render() {
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
            <li className="breadcrumb-item active" aria-current="page">App Bar Images</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">App Bar Images</h1>
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
              <div className="row g-4">
           
        {/* { !this.state.Load ?( */}
             
                     
                  <form onSubmit={this.handleupdate} encType='multipart/form-data' >


                
                  
               
                 
                    <div className="col-lg-12">
                    <label className="form-label">Appbar Image</label>
                    <input type="file" className="form-control"   name="appbar_bgimage"   onChange={this.bgimageinput} />
                    </div>
                    <div ><br></br></div>
                    
                    <div className="col-lg-12">
                    <label className="form-label"> Appbar Icon</label>
                    <input type="file" className="form-control"   name="appbar_icon"   onChange={this.iconimageinput} />
                    </div>
                    <div ><br></br></div>
                   
                <div className="col-sm-12">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
                </form>

                <h3 >Show Appbar Images</h3>
                            <table className="table table-striped">
              <thead>
                <tr style={{color:"red"}}>
                  <th scope="col">S.No</th>
                  <th scope="col">Background Images</th>
                  <th scope="col">Icon</th>
                  <th scope="col">Action[UPDATE]</th>
                  {/* <th scope="col">Action[DELETE]</th> */}
                
                </tr>
              </thead>
              <tbody>
              {console.log(this.state.i=0)}
                {this.state.appbarimages.map(appbarimages_data =>(
                <tr>
                  <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
            
                <td><div style={{backgroundImage:`url(${appbarimages_data.appbar_bgimage})`,height:"50px",width:"300px",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}></div>
                 {/* <img src={appbarimages_data.appbar_bgimage}  height={"70px"} width={"70px"} alt="offer image"></img> */}
                 </td>
                <td><div style={{backgroundImage:`url(${appbarimages_data.appbar_icon})`,height:"50px",width:"300px",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}></div>
                   {/* <img src={appbarimages_data.appbar_icon}  height={"70px"} width={"70px"} alt="offer image"></img> */}
                   </td>
              
              
                 {/* <td style={{paddingLeft:"25px",verticalAlign: "middle" }}>                              
                 <button type="button" onClick={() => { if (window.confirm('Do you want to update?')) { this.handleupdate(appbarimages_data._id) } }} className="btn btn-sm btn-primary" ><i style={{    width: "23px", height: "20px"}} className="fa fa-edit"/></button>
                   </td> */}
            
                  <td style={{paddingLeft:"25px",verticalAlign: "middle" }}>
                    
            <button onClick={() => { if(window.confirm('Do you want to delete  image?')){this.handledelete(appbarimages_data._id)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg></button>
            
            
            </td>
              
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

export default Appbarimages