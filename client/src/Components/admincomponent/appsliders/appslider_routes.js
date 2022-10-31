import React, { Component } from 'react'
import Addslider from  './Addslider';
import Offerslider from './Offerslider';
import OrderSlider from './OrderSlider'
import promocode from '../appsliders/promocode';

import { Route, Switch, Link } from 'react-router-dom';


export default class appslider_routes extends Component {
    render() {
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        <Route path={`${this.props.match.path}/addslider`} component={Addslider} />
        <Route path={`${this.props.match.path}/offer`} component={Offerslider} />
        <Route path={`${this.props.match.path}/orderNow`} component={OrderSlider} />
        <Route path={`${this.props.match.path}/promocode`} component={ promocode}  />
         
      </div>
    }
  }