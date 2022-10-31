import React, { Component } from 'react'
import Contactus from  './Contactus';
import Subscribenow from  './Subscribenow';
import Sociallink from './Sociallink';
import Corporate_image from './Corporate_image';
import trackdelivery from './trackdelivery';
import registerDeliveryBoy from './registerDeliveryBoy';
import TexesandCharges from './TexesandCharges';
import Menuofferimage from './Menuofferimage';
import addTiffinPrice from './addTiffinPrice';
import { Route, Switch, Link } from 'react-router-dom';
import AppbarImage from './AppbarImage';
import updateAppbar_image from './updateAppbar_image.js';

export default class dashboardroute extends Component {
    render() {
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        <Route path={`${this.props.match.path}/contactus`} component={Contactus} />
        <Route path={`${this.props.match.path}/subscribenow`} component={ Subscribenow}  />
        <Route path={`${this.props.match.path}/sociallinks`} component={ Sociallink}  />
        <Route path={`${this.props.match.path}/corporate_order`} component={ Corporate_image}  />
        <Route path={`${this.props.match.path}/trackdelivery`} component={ trackdelivery}  />
        <Route path={`${this.props.match.path}/registerDeliveryBoy`} component={ registerDeliveryBoy}  />
        <Route path={`${this.props.match.path}/TexesandCharges`} component={ TexesandCharges}  />
        <Route path={`${this.props.match.path}/Menuofferimage`} component={ Menuofferimage}  />
        <Route path={`${this.props.match.path}/AppbarImage`} component={ AppbarImage}  />

        <Route path={`${this.props.match.path}/updateAppbar_image/:id`} component={ updateAppbar_image}  />

        <Route path={`${this.props.match.path}/addTiffinPrice`} component={ addTiffinPrice}  />
      
      </div>
    }
  }