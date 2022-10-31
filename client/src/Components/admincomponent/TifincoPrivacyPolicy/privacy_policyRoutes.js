import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import tifinco_privacy_policy from './tifinco_privacy_policy';
import Return_Refund_Policy from'./Return_Refund_Policy';
import EndUser_License_Agreement from './EndUser_License_Agreement'
import Disclaimer from './Disclaimer';
import Cookie_Policy from './Cookie_Policy';
import Terms_Conditions from './Terms_Conditions';

export class privacy_policyRoutes extends Component {
  render() {
    return (
      <div>
               
                  <Route path={`${this.props.match.path}/privacy_policy`} component= {tifinco_privacy_policy} />
                  <Route path={`${this.props.match.path}/Return_Refund_Policy`} component={Return_Refund_Policy} />
                  <Route path = {`${this.props.match.path}/EndUser_License_Agreement`} component = {EndUser_License_Agreement} />
                  <Route path={`${this.props.match.path}/Disclaimer`} component = {Disclaimer} />
                  <Route path={`${this.props.match.path}/Cookie_Policy`} component = {Cookie_Policy} />
                  <Route path ={`${this.props.match.path}/Terms_Conditions`} component = {Terms_Conditions} />
      </div>
    )
  }
}

export default privacy_policyRoutes