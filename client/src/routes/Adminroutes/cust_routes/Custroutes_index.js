import React, { Component } from 'react'

import { Route, Switch, Link } from 'react-router-dom';


import Cust_profileroutes from'../../../Components/admincomponent/cust_support/Cust_profile/Cust_profileroutes';
// import ViewOneCustProfile from'../../../Components/admincomponent/cust_support/Cust_profile/ViewOneCustProfile';


export class Custroutes_index extends Component {
  render() {
    return (
      <div> 
          <Route path={`${this.props.match.path}/Cust_support`} component={Cust_profileroutes} />
          {/* <Route path={`${this.props.match.path}/OneCust_support`} component={ViewOneCustProfile } /> */}
         
      </div>
    )
  }
}

export default Custroutes_index