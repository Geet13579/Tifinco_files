import React, { Component } from 'react'
// import Addplan from  './AddPlan';
import Addplan2 from  './Addplan2';
import ViewPlan from'./ViewPlan';
import UpdatePlan from'./UpdatePlan';
import Addplandays from'./Addplandays';
import updatePlan_Bg_image from './updatePlan_Bg_image';

import { Route, Switch, Link } from 'react-router-dom';


export default class plan_routes extends Component {
    render() {
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        {/* <Route path={`${this.props.match.path}/insert`} component={Addplan} /> */}
        <Route path={`${this.props.match.path}/insert`} component={Addplan2} />
        <Route path={`${this.props.match.path}/show`} component={ViewPlan} />
        <Route path={`${this.props.match.path}/update/:id`} component={UpdatePlan} />
        <Route path={`${this.props.match.path}/addplandays`} component={Addplandays} />
        <Route path={`${this.props.match.path}/updatePlan_img`} component={updatePlan_Bg_image} />
         
      </div>
    }
  }