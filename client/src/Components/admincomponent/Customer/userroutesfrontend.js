import React, { Component } from 'react'
import View_User from  './View_User';
import CustomerPlanView from  './CustomerPlanView';
import ViewOnePlan from  './ViewOnePlan';
import Manageuserextrafood from  './Manageuserextrafood';
import ActiveUser from './ActiveUser';
import Expaireuser from './Expaireuser';
import Faq from './Faq'
import FAQ_View from './FAQ_View'
import FAQ_update from './FAQ_update'
import  Contantcheckbox from './Contantcheckbox'
import Contantcheckbox_View  from  './Contantcheckbox_View'
import prebooklist  from  './Prebooktiffinlist';
import ViewUsersComment  from  './ViewUsersComment';
// import Paymentsuccessmsg from './Paymentsuccessmsg';

import ViewNewsLetter from './ViewNewsLetter.js';

import Corporate_Order_list from './Corporate_Order_list.js';

import showmoreCorporate from './showmoreCorporate.js';


import ViewuserPaymentdetails from './ViewuserPaymentdetails'

import ViewPaymentsuccessmsg from './ViewPaymentsuccessmsg';
// import  Paymentsuccessmsg_update from './Paymentsuccessmsg_update';
import Staticpaymentsuccessmsg from './Staticpaymentsuccessmsg';
import { Route, Switch, Link } from 'react-router-dom';


export default class frontenduser_routes extends Component {
    render() {
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        <Route path={`${this.props.match.path}/viewuser`} component={View_User} />
        <Route path={`${this.props.match.path}/viewcustomerplan`} component={CustomerPlanView} />
        <Route path={`${this.props.match.path}/viewoneplan/:id`} component={ViewOnePlan} />
        <Route path={`${this.props.match.path}/manageuserextrafood`} component={Manageuserextrafood} />
        <Route path={`${this.props.match.path}/ActiveUser`} component={ActiveUser} />
        <Route path={`${this.props.match.path}/Expaireuser`} component={Expaireuser} />
        <Route path={`${this.props.match.path}/FAQ`} component={Faq} />
        <Route path={`${this.props.match.path}/FAQ_View`} component={FAQ_View} />
        <Route path={`${this.props.match.path}/FAQviewoneplan/:id`} component={FAQ_update} />
        <Route path={`${this.props.match.path}/contantcheckbox`} component={Contantcheckbox} />
        <Route path={`${this.props.match.path}/Contantcheckbox_View`} component={Contantcheckbox_View} />
        <Route path={`${this.props.match.path}/prebooklist`} component={prebooklist} />
        <Route path={`${this.props.match.path}/viewUsersComment`} component={ ViewUsersComment} />
        <Route path={`${this.props.match.path}/ViewNewsLetter`} component={ ViewNewsLetter} />
        {/* <Route path={`${this.props.match.path}/Paymentsuccessmsg`} component={ Paymentsuccessmsg} /> */}
        <Route path={`${this.props.match.path}/ViewPaymentsuccessmsg`} component={ ViewPaymentsuccessmsg} />
        {/* <Route path={`${this.props.match.path}/Paymentsuccessmsg_update/:id`} component={ Paymentsuccessmsg_update} /> */}
        <Route path={`${this.props.match.path}/Staticpaymentsuccessmsg`} component={ Staticpaymentsuccessmsg} />
        <Route path={`${this.props.match.path}/ViewuserPaymentdetails/:id`} component={ ViewuserPaymentdetails} />
        <Route path={`${this.props.match.path}/Corporate_Order_list`} component={Corporate_Order_list} />
        <Route path={`${this.props.match.path}/showmoreCorporate/:id`} component={showmoreCorporate} />
        
        




 
        
       
        

        
       
         
      </div>
    }
  }