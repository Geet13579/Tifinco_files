import React, { Component } from 'react'
import Addfoodproduct from  './Addfoodproduct';
import ViewProductlist from'./ViewProductlist';
import UpdateProductlist from'./UpdateProductlist';
import AddOptionals from'./AddOptionals.js';
import ShowOptionalitem from './ShowOptionalitems.js';
import UpdateOptionalitem from './UpdateOptionalitem.js'

import { Route, Switch, Link } from 'react-router-dom';


export default class product_routes extends Component {
    render() {
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        <Route path={`${this.props.match.path}/insert`} component={Addfoodproduct} />
        <Route path={`${this.props.match.path}/show`} component={ViewProductlist} />
        <Route path={`${this.props.match.path}/update/:id`} component={UpdateProductlist} />
        <Route path={`${this.props.match.path}/addoptionals`} component={AddOptionals} />
        <Route path={`${this.props.match.path}/showoptionalitem`} component={ShowOptionalitem}/>
        <Route path={`${this.props.match.path}/updateoptionalitem/:id`} component={UpdateOptionalitem}/>
      </div>
    }
  }