import React, { Component } from 'react';
import axios from 'axios';

export default class PersionList extends Component {

    state = {
        persons:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const persons = res.data;
            this.setState({persons});
        })

    }

  render() {
    return (
   <>  <h1> List</h1>
      <ul>
          {
        this.state.persons
        .map(person =>
        <li key={person.id}>{person.name}</li>

        )

        }
      </ul>
      </>
    )
  }
}
