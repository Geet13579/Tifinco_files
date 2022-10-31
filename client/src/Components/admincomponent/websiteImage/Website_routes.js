import React, { Component } from 'react'

import websiteImage from './Website_Bg_Image.js';
import updateImage from './Update_websiteImg.js';

import { Route, Switch, Link } from 'react-router-dom';


export default class Website_routes extends Component {
    render() {
      return <div>
          
        
        <Route path={`${this.props.match.path}/show`} component={websiteImage} />
        <Route path={`${this.props.match.path}/update/:id`} component={updateImage} />
        {
        /* <Route path={`${this.props.match.path}/addoptionals`} component={AddOptionals} />
        <Route path={`${this.props.match.path}/showoptionalitem`} component={ShowOptionalitem}/>
        <Route path={`${this.props.match.path}/updateoptionalitem/:id`} component={UpdateOptionalitem}/> */
        }
      </div>
    }
  }