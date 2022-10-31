import React, { Component } from 'react'
import ManageComboProduct from  './ManageComboProduct.js';
import Add_comboProduct from './Add_comboProduct.js';
import Show_comboProd from './Show_comboProd.js';
import UpdateProductlist from'./UpdateProductlist';
import { Route, Switch, Link } from 'react-router-dom';


export default class Category_routes extends Component {
    render() {
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        <Route path={`${this.props.match.path}/manage_comboproduct`} component={ManageComboProduct} />
         <Route path = {`${this.props.match.path}/add_comboproduct`} component = {Add_comboProduct} />
         <Route path = {`${this.props.match.path}/Show_comboProd`} component = { Show_comboProd} />
         <Route path={`${this.props.match.path}/update/:id`} component={UpdateProductlist} />
       

        
      </div>
    }
  }