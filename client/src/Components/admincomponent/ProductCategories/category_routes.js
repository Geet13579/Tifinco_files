import React, { Component } from 'react'
import manageCategory from  './ManageCategory';

import { Route, Switch, Link } from 'react-router-dom';


export default class Category_routes extends Component {
    render() {
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        <Route path={`${this.props.match.path}/manageCategory`} component={manageCategory} />
         
      </div>
    }
  }