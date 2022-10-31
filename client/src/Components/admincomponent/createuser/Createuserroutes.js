import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Adduser from './Adduser';
import Viewuserlist from'./Viewuserlist';


export class Createuserroutes extends Component {
  render() {
    return (
      <div>
                  {/* <Route path={`${this.props.match.path}/Addrawmaterial`} component={Addrawmaterial} /> */}
                  <Route path={`${this.props.match.path}/Adduser`} component={Adduser} />
                  <Route path={`${this.props.match.path}/Viewuserlist`} component={Viewuserlist} />
                  {/* <Route path={`${this.props.match.path}/viewrawmaterial`} component={K_viewrawmaterial} />
                  <Route path={`${this.props.match.path}/Updaterawmaterial/:id`} component={UpdateRawmaterial} />
                  <Route path={`${this.props.match.path}/TodayRawmaterial`} component={TodayRawmaterial} /> */}
                  {/* <Route path={`${this.props.match.path}/K_Subcribtion`} component={Subscribetion} /> */}
      </div>
    )
  }
}

export default Createuserroutes