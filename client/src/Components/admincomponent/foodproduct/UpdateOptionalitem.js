import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';
import axios from 'axios';
import Footer from '../../../Components/admincomponent/Footer'

import ReactLoading from "react-loading";
import {UPDATE_OPTIONAL_ITEM,SHOW_OPTIONAL_ITEM} from '../../../Components/admincomponent/links/superadminlinks';


export default class updateoptional extends Component {


    state = {

        invalidImage_item:'',
        invalidImage_feacher:'',

        i:0,
       
        optionals :[{id: Math.random(),options:'',price:''}],
        plan_description:[{id: Math.random(),heading_desc:''}],

      
        Load:false,
        tiffintype:'',
       title:'',
       optionalitme:'',
       optionsprice:'',
       fatchoptionals:'',
       type:''
      

      }

      componentDidMount() 
      {
        // console.log(this.props.match.params.id)
            console.log(this.props)
              //  alert("hello")
              fetch(SHOW_OPTIONAL_ITEM,{
                headers:{'Content-Type': 'application/json','Accept': 'application/json'},
                method:'POST',
                body:JSON.stringify({
                  _id:this.props.match.params.id,
                  userid: sessionStorage.getItem('userid'),
                }),
              
              }).then((response)=>response.json()).then((json)=>{ 

                // console.log("response");
                console.log(json);


                json.map(data=>{

                  // console.log(data.tiffin_no);

                  this.setState({
                type:data.tiffintype,
                title:data.title,
                optionals:data.optionals,                 
                });
                });
                console.log(json);


                // alert(this.props.match.params.id);
                this.setState({
                Load:false
              });
              });
                
    
      }

      createOptionsItem(){

      return this.state.optionals.map((row, i) =>
          <div key={i}>
            <label> Optional {i+1}</label><br></br>
           
         
           <input type="text" className="form-control"  name="options" placeholder='options'  onChange={this.handleChangeInputForoptions.bind(this, row.id)} value={row.options} required></input><br></br>
           <label> Price {i+1}</label><br></br>
           <input type="text" className="form-control"  name="price" placeholder='price'  onChange={this.handleChangeInputForoptions.bind(this, row.id)} value={row.price} required></input><br></br>

         {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.handleRemoveFieldsForItem.bind(this, row.id)}/>):("")}
                  <br></br><br></br>
          </div>


      )
   }




handleChangeInputForoptions(id, event){
  const option = this.state.optionals.map(i => {
    if(id === i.id) {



        i[event.target.name] = event.target.value


    }
    return i;
  })

  this.setState({ option });
//  console.log(option)

}

handletiffintype=(event)=>{

  this.setState({tiffintype:event.target.value});

  // console.log(this.state.tiffintype)


}
handleinputtitle=(event)=>{

  this.setState({title:event.target.value});

  // console.log(this.state.title)

}

handleAddFieldsForItem(){

  this.setState(prevState => ({ optionals: [...prevState.optionals,{ id: Math.random(),options:'',price:'' }]}));

}

handleRemoveFieldsForItem(id){
  let optionals= [...this.state.optionals];
  optionals.splice(optionals.findIndex(value =>value.id===id),1);
  this.setState({ optionals });

}



handleSubmit = (event) =>  {
  event.preventDefault();

  // this.setState({
  //     Load :true,

  //     });
 
      const data = {
        tiffintype: this.state.tiffintype,
        title: this.state.title,
        optionals:this.state.option,
        _id:this.props.match.params.id,
        userid:sessionStorage.getItem('userid')
        
      };
console.log(data)

try{
  axios.post(UPDATE_OPTIONAL_ITEM, data , {
    headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},
    onUploadProgress: data => {

     this.setState({
      progress: Math.round((100 * data.loaded) / data.total)

     });
    },
  })
    .then(res => {
        //alert(res.data);
        console.log(res.status);
        console.log(res.data);

        if(res.data.msg=='success'){



          console.log("success");
          alert("Data updated");
           window.location.reload();


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




  render() {

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
            <li className="breadcrumb-item active" aria-current="page">Add Optional</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">

          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Add Optional</h1>
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
                `${this.state.progress}%` :"Photo Uploaded ,Please Wait Almost Done....!"}

                 </h5>

              }

              {this.state.invalidImage && <h5 style={{ color: "red" }}  className="error"> {this.state.invalidImage}</h5>}

                  <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >
                        <br></br>

                
                        <div>
                    
                        {this.state.type =="veg"?   <div>
                   
                   <div className="form-check form-check-inline">
                     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={this.handletiffintype} defaultValue="veg" defaultChecked />
                     <label className="form-check-label" htmlFor="inlineRadio1">Veg</label>
                   </div>
                   <div className="form-check form-check-inline">
                     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={this.handletiffintype} defaultValue="nonveg"  />
                     <label className="form-check-label" htmlFor="inlineRadio2">Non Veg</label>
                   </div>
                 
                 </div>:   <div>
                   
                   <div className="form-check form-check-inline">
                     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={this.handletiffintype} defaultValue="veg" />
                     <label className="form-check-label" htmlFor="inlineRadio1">Veg</label>
                   </div>
                   <div className="form-check form-check-inline">
                     <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={this.handletiffintype} defaultValue="nonveg" defaultChecked/>
                     <label className="form-check-label" htmlFor="inlineRadio2">Non Veg</label>
                   </div>
                 
                 </div>}

                 

<br></br>
<label><b>Title</b></label>
<br></br>
                        <input type="text" className="form-control" value={this.state.title} name="itemheading" placeholder='Title' onChange={this.handleinputtitle} required></input><br></br>
                      {this.createOptionsItem()}

                    <button type="button" className="btn btn-primary"  onClick={this.handleAddFieldsForItem.bind(this)} >Add Items</button>
                         <span>&nbsp;&nbsp;</span>

                      </div>
                      <br></br>


                 



                        <br></br>

                       
                <div className="col-sm-12">
                {/* <button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Row</button>  <span>&nbsp;&nbsp;</span> */}
                <center>  <button type="submit" className="btn btn-primary">Insert</button></center>
                </div>

              


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
