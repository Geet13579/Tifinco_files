import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Addrawmaterial from './Addrawmaterial';
import InsertRawmaterial from './InsertRawmaterial'
import K_viewrawmaterial from './K_viewrawmaterial';
import TodayRawmaterial from './TodayRawmaterial';
import UpdateRawmaterial from './UpdateRawmaterial';


export class Rawmaterialroutes extends Component {
  render() {
    return (
      <div>
                  {/* <Route path={`${this.props.match.path}/Addrawmaterial`} component={Addrawmaterial} /> */}
                  <Route path={`${this.props.match.path}/Addrawmaterial`} component={InsertRawmaterial} />
                  <Route path={`${this.props.match.path}/viewrawmaterial`} component={K_viewrawmaterial} />
                  <Route path={`${this.props.match.path}/Updaterawmaterial/:id`} component={UpdateRawmaterial} />
                  <Route path={`${this.props.match.path}/TodayRawmaterial`} component={TodayRawmaterial} />
                  {/* <Route path={`${this.props.match.path}/K_Subcribtion`} component={Subscribetion} /> */}
      </div>
    )
  }
}

export default Rawmaterialroutes