import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
// import Addmenu from './Addmenu';
import Menulist from './Menulist';
import Todaymenu from './Todaymenu';
import Insertmenu from './Insertmenu';
import  KitchenTodaymenu from './KitchenTodaymenu'
import AddMasterunlikefood from './AddMasterunlikefood'
// import RandomNo from './RandomNo';
// import FilterMenu from './FilterMenu'

// import Qrmenu from './Qrmenu';

// import Qrmenulist from './Qrmenulist'
import Mastermenuslist from './Mastermenuslist';

export class Menuroutes extends Component {
  render() {
    return (
      <div>
                  <Route path={`${this.props.match.path}/Todaymenu`} component={Todaymenu} />
                  {/* <Route path={`${this.props.match.path}/Addmenu`} component={Addmenu} /> */}
                  <Route path={`${this.props.match.path}/Addmenu`} component={Insertmenu} />
                  <Route path={`${this.props.match.path}/Menulist`} component={Menulist} />
                  <Route path={`${this.props.match.path}/KitchenTodaymenu`} component={KitchenTodaymenu} />
                  <Route path={`${this.props.match.path}/Mastermenuslist`} component={Mastermenuslist} />
                  <Route path={`${this.props.match.path}/AddMasterunlikefood`} component={AddMasterunlikefood} />
                  {/* <Route path={`${this.props.match.path}/RandomNo`} component={RandomNo} /> */}
              
              
      </div>
    )
  }
}

export default Menuroutes