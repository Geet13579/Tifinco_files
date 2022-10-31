import React, { Component } from 'react'

import View_User_List from  './View_User_List';
import View_userPlanInfo from './View_userPlanInfo';

import { Route, Switch, Link } from 'react-router-dom';
export default class PlanDetail_routes extends Component {
  render() {
    return (
      <div>
          <Route path={`${this.props.match.path}/View_User_List`} component={View_User_List} />
          <Route path={`${this.props.match.path}/View_userPlanInfo`} component={View_userPlanInfo} />
      </div>
    )
  }
}
