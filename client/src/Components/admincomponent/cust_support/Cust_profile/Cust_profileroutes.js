import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
// import Addmenu from './Addmenu';
import Customer_list from './Customer_list';
import ViewOneCustProfile from './ViewOneCustProfile';
import Show_SingleOrderCust from './Show_SingleOrderCust';
import ShowMoreSingleMeal from './ShowMoreSingleMeal';
import PauseCust_plan from './PauseCust_plan.js';

// import second from './AAAAAA.js'

export class Cust_profileroutes extends Component {
  render() {
    return (
      <div>
                  <Route path={`${this.props.match.path}/Customer_list`} component={Customer_list} />
                  <Route path={`${this.props.match.path}/ViewOneCustProfile/:token`} component={ViewOneCustProfile} />
                  <Route path={`${this.props.match.path}/Show_SingleOrderCust`} component={Show_SingleOrderCust} />
                  <Route path={`${this.props.match.path}/ShowMoreSingleMeal/:id/:userid`} component={ShowMoreSingleMeal} />
                  <Route path={`${this.props.match.path}/PauseCust_plan/:token`} component={PauseCust_plan} />

                 
                  {/* <Route path={`${this.props.match.path}/second`} component ={second} /> */}
                 
              
              
      </div>
    )
  }
}

export default Cust_profileroutes