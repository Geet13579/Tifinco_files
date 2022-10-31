import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Extraitem from './Extraitem';



export class Extraitemroutes extends Component {
  render() {
    return (
      <div>
                  
                  <Route path={`${this.props.match.path}/Extraitem/`} component={Extraitem} />
            
      </div>
    )
  }
}

export default Extraitemroutes