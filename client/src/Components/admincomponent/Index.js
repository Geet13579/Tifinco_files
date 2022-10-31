import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import test from './Test';

export default class Index extends Component {
    render() {
      return <div>
        <Route exact path={this.props.match.path} component={test} />
        <Route path={`${this.props.match.path}/one`} component={Header} />
      
      </div>
    }
  }