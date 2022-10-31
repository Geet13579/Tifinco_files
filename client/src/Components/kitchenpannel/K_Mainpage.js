import React, { Component } from 'react'

export class K_Mainpage extends Component {
    render(props){
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
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
      {/* <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Welcome back, Maxwell!</h1>
          <small className="text-muted">You have 12 new messages and 7 new notifications.</small>
        </div>
        <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
          <div className="p-2 me-md-3">
            <div><span className="h6 mb-0">8.18K</span> <small className="text-secondary"><i className="fa fa-angle-up" /> 4.33%</small></div>
            <small className="text-muted text-uppercase">Income</small>
          </div>
          <div className="p-2 me-md-3">
            <div><span className="h6 mb-0">1.11K</span> <small className="text-secondary"><i className="fa fa-angle-up" /> 4.33%</small></div>
            <small className="text-muted text-uppercase">Expense</small>
          </div>
          <div className="p-2 pe-lg-0">
            <div><span className="h6 mb-0">3.66K</span> <small className="text-danger"><i className="fa fa-angle-down" /> 4.33%</small></div>
            <small className="text-muted text-uppercase">Revenue</small>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  {/* Body: Body */}
  <div className="body d-flex py-lg-4 py-3">
    <div className="container">

{this.props.name}
        
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

export default K_Mainpage