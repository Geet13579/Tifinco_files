import React, { Component } from 'react'
import AddNewTiffin from  './AddNewTiffin';
import axios from 'axios';
import ShowTiffinList from './ShowTiffinList';

// import TiffinList from './TiffinList';

import DiscardTiffin from './DiscardTiffin';

import ShowDiscardTiffin from './ShowDiscardTiffin';
// import AddTiffin_Price from './AddTiffin_Price';

import addAllocate from './AddAllocate_tiffin';
import View_user_Info from '../User List/View_userPlanInfo.js';


import TrackUsers from './TrackUsers';
import show from './Show';

// import sendemail from '../SendEmail';

// import  forgotPassword from '../ForgotPassword';

// import  sendpage from '../SendPage';




import { Route, Switch, Link } from 'react-router-dom';




export default class appslider_routes extends Component {

  


    render() 
    
   
    {
      
      return <div>
          {/* 
        <Route exact path={this.props.match.path} component={test} /> */}
        <Route path={`${this.props.match.path}/addtiffin`} component={AddNewTiffin} />

        <Route path={`${this.props.match.path}/showtiffin`} component={ShowTiffinList} />

        {/* <Route path={`${this.props.match.path}/TiffinList`} component={TiffinList} /> */}

        <Route path={`${this.props.match.path}/discardTiffin/:id`} component={DiscardTiffin} />
         
        <Route path={`${this.props.match.path}/showdiscardTiffin`} component={ShowDiscardTiffin} />

        {/* <Route path={`${this.props.match.path}/Tiffin_Price`} component={AddTiffin_Price} /> */}

        <Route path={`${this.props.match.path}/show`} component={show} />

        <Route path={`${this.props.match.path}/AllocateTiffins`} component={addAllocate} />
        <Route path={`${this.props.match.path}/View_userPlanInfo`} component={View_user_Info} />

        
        

        <Route path={`${this.props.match.path}/trackuser`} component={TrackUsers} />

    
   

      </div>
    }
  }