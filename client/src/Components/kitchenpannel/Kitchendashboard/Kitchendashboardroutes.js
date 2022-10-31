import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
// import Userinfo from '../../admincomponent/Userinfo';
import K_Contactus from './K_Contactus';
import Subscribetion from './Subscribetion';
import SViewOneplan from './SViewOneplan';
import Dashboard from './Dashboard';
// import Tomorrowdashboard from './Tomorrowdashboard'

export class Kitchendashboardroutes extends Component {
  render() {
    return (
      <div>
                  <Route path={`${this.props.match.path}/K_Contactus`} component={K_Contactus} />
                  <Route path={`${this.props.match.path}/Dashboard`} component={Dashboard} />
                  {/* <Route path={`${this.props.match.path}/Tomorrowdashboard`} component={Tomorrowdashboard} /> */}
                  <Route path={`${this.props.match.path}/K_Subcribtion`} component={Subscribetion} />
                  <Route path={`${this.props.match.path}/K_oneplan/:id`} component={SViewOneplan} />
                  {/* <Route path={`${this.props.match.path}/Userinfo`} component={Userinfo} /> */}
      </div>
    )
  }
}

export default Kitchendashboardroutes