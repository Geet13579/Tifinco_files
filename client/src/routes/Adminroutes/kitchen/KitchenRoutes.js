
import React, { Component } from 'react'
// import Rawmaterialroutes from '../../../Components/kitchenpannel/Rawmaterial/Rawmaterialroutes'
import { Route, Switch, Link } from 'react-router-dom';
import Kitchendashboardroutes from '../../../Components/kitchenpannel/Kitchendashboard/Kitchendashboardroutes';
import Menuroutes from '../../../Components/kitchenpannel/menus/Menuroutes';
import Orderroutes from '../../../Components/kitchenpannel/order/Orderroutes';
import Addrawmaterial from '../../../Components/kitchenpannel/Rawmaterial/Addrawmaterial';
import Rawmaterialroutes from '../../../Components/kitchenpannel/Rawmaterial/Rawmaterialroutes';
import Extraitemroutes from '../../../Components/kitchenpannel/extraitem/Extraitemroutes';

export class KitchenRoutes extends Component {
  render() {
    return (
      <div> 
          <Route path={`${this.props.match.path}/Addrawmaterial`} component={Addrawmaterial} />
          <Route path={`${this.props.match.path}/Menuroutes`} component={Menuroutes} />
          <Route path={`${this.props.match.path}/Kitchedashboard`} component={Kitchendashboardroutes} />
          <Route path={`${this.props.match.path}/Rawmaterialroutes`} component={Rawmaterialroutes} />
          <Route path={`${this.props.match.path}/Extraitemroutes`} component={Extraitemroutes} />
          <Route path={`${this.props.match.path}/Orderroutes`} component={Orderroutes} />
           {/* <Route path="/Rawmaterialroutes " component={ Rawmaterialroutes }  />   */}
      </div>
    )
  }
}

export default KitchenRoutes