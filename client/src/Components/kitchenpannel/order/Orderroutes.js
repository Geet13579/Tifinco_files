import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import CurrentOrder from './CurrentOrder';
import Orderlist from './Orderlist';
import ViewOrder from './ViewOrder'

import ViewOneOrder from './ViewOneOrder'

export class Orderroutes extends Component {
  render() {
    return (
      <div>
                  <Route path={`${this.props.match.path}/Orderlist`} component={Orderlist} /> 
                   <Route path={`${this.props.match.path}/CurrentOrder`} component={CurrentOrder} />
  
                  <Route path={`${this.props.match.path}/ViewOrder`} component={ViewOrder} />
                  <Route path={`${this.props.match.path}/ViewOneOrder/:token`} component={ViewOneOrder} />
      </div>
    )
  }
}

export default Orderroutes