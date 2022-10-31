import React, {Component} from 'react';

import axios from 'axios';

import {SHOW_TIFFIN_LIST} from '../links/DeliveryLinks';


export default class DeliveryMainPage extends Component {
  state={

tiffins:[],
tiffin_VH:'',
tiffin_VN:'',
tiffin_NVH:'',
tiffin_NVN:'',

i:0,


  }


  componentDidMount() {

    axios.post(SHOW_TIFFIN_LIST,{userid: sessionStorage.getItem('userid'),},{ headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},})
      .then(res => {
        const tiffins = res.data;
      // console.log(tiffins.length)



      let count_category=[];
      let count_type=[];
      let count_tiffins=[];

                tiffins.map(data=>{
                  count_tiffins.push(data.tiffin_no);
                count_category.push(data.tiffin_cat);
                count_type.push(data.tiffin_type);

              })




              let VH=0;
              let VN=0;
              let NVH=0;
              let NVN=0;


              for(let i=0;i<=count_tiffins.length;i++){



                if(count_category[i]==='veg' && count_type[i] === 'heatable'){
                  VH=VH+1;
                }

                else if(count_category[i]==='veg' && count_type[i]==='nonheatable'){
                  VN=VN+1;
                }

                else if(count_category[i]==='nonveg' && count_type[i]==='heatable'){
                  NVH=NVH+1;
                }

                else if(count_category[i]==='nonveg' && count_type[i]==='nonheatable'){
                  NVN=NVN+1;
                }

              
              }
              this.setState({tiffin_VH:VH,
                            tiffin_VN:VN,
                          tiffin_NVH:NVH,
                        tiffin_NVN:NVN});

              console.log("VH",this.state.tiffin_VH);
              console.log("VN",this.state.tiffin_VN);
              console.log("NVH",this.state.tiffin_NVH);
              console.log("NVN",this.state.tiffin_NVN);


              

              })


    

  }


    render(props){
      const setBgColour="#fafafa";
        return (

<div className="main px-lg-5 px-md-2">
  {/* animation: Header */}
  <div className="bg-animation">
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="moving-waves">
        <use style={{fill: 'var(--primary-color)', opacity: '.1'}} xlinkHref="#gentle-wave" x={48} y={-1} />
        <use style={{fill: 'var(--primary-color)', opacity: '.2'}} xlinkHref="#gentle-wave" x={48} y={3} />
        <use style={{fill: 'var(--primary-color)', opacity: '.6'}} xlinkHref="#gentle-wave" x={48} y={5} />
        <use style={{fill: 'var(--primary-color)', opacity: '.8'}} xlinkHref="#gentle-wave" x={48} y={8} />
        <use style={{fill: 'var(--primary-color)'}} xlinkHref="#gentle-wave" x={48} y={13} />
        <use style={{fill: 'var(--body-color)'}} xlinkHref="#gentle-wave" x={48} y={16} />
      </g>
    </svg>
  </div>
  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a className="breadcrumb-item active" href="/DeliveryHomePage">Dashboard</a></li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
            <div className="progress" style={{height: 3, width: 170}}>
              <div className="progress-bar bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
            </div>
            <label className="text-left text-muted ms-3">Project Status</label>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  {/* Body: Body */}
  <div className="body d-flex py-lg-4 py-3">
    <div className="container">

{this.props.name}
<div><br></br></div>
{/* {console.log(this.state.tiffins)} */}
<div className="row g-2 mb-4 row-deck justify-content-center">

 <div className="col-xl-3 col-lg-4 col-md-6" className='bg-image hover-overlay' style={{ maxWidth: '15rem',color:"white" }}>
    <div className="card"className='mask'
        style={{
          background: 'linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(0,249,255,0.7791491596638656) 65%, rgba(30,213,213,0) 100%)',
        }}>
            {/* <i class="fa fa-th-large  fa-lg" aria-hidden="true"></i> */}
      <div className="card-body">
    
        <div className="mb-2 text-uppercase h6">Veg Heatable</div>
        <div><br></br></div>
        <div><span className="h4">{this.state.tiffin_VH}</span> </div>
     
      </div>
    </div>
  </div> 
  <div className="col-xl-3 col-lg-4 col-md-6" className='bg-image hover-overlay' style={{ maxWidth: '15rem',color:"white" }}>
    <div className="card"className='mask'
        style={{
          background: 'linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(0,249,255,0.7791491596638656) 65%, rgba(30,213,213,0) 100%)',
        }}>
      <div className="card-body">
     
       <div className="mb-2 text-uppercase h6">Veg NonHeatable</div>
        <div><br></br></div>
       <div><span className="h4">{this.state.tiffin_VN}</span> </div>
       
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-lg-4 col-md-6" className='bg-image hover-overlay' style={{ maxWidth: '15rem',color:"white" }}>

    <div className="card"className='mask'
        style={{
          background: 'linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(0,249,255,0.7791491596638656) 65%, rgba(30,213,213,0) 100%)',
        }}>
      <div className="card-body">
      
        <div className="mb-2 text-uppercase h6">NonVeg Heatable</div>
        <div><br></br></div>
        <div><span className="h4">{this.state.tiffin_NVH}</span> </div>
     
      </div>
    </div>
  </div> 
  <div className="col-xl-3 col-lg-4 col-md-6" className='bg-image hover-overlay' style={{ maxWidth: '15rem',color:"white" }}>
    <div className="card"className='mask'
        style={{
          background: 'linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(0,249,255,0.7791491596638656) 65%, rgba(30,213,213,0) 100%)',
        }}>
      <div className="card-body">
          
        <div className="mb-2 text-uppercase h6">NonVeg NonHeatable</div>
        <div><br></br></div>
       <div><span className="h4">{this.state.tiffin_NVN}</span> </div>
       
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
                <p className="font-size-sm mb-0">© AL-UI. <span className="d-none d-sm-inline-block"> ThemeMakker.</span></p>
              </div>
              <div className="col-auto">
                <ul className="list-inline d-flex justify-content-end mb-0">
                  <li className="list-inline-item"><a className="list-separator-link" href="https://www.thememakker.com/about/">About</a></li>
                  <li className="list-inline-item"><a className="list-separator-link" href="https://www.thememakker.com/hire-us/">Hire us</a></li>
                  <li className="list-inline-item"><a className="list-separator-link" href="https://www.thememakker.com/all-templates/">Template</a></li>
                  <li className="list-inline-item"><a className="list-separator-link" href="https://themeforest.net/licenses/standard" target="_blank">License</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 
)
}
}