import React from 'react';
import axios from 'axios';

export default class UserAuth extends React.Component {
    
  state = {
    name: '',
    email:''
  }

  nameinput = event => {
    this.setState({ name: event.target.value});
  }
  emailinput = event => {
    this.setState({ email: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();


    const user = {
      name: this.state.name,
      email:this.state.email
    };

    alert(user.email);

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
          alert(res.data);
        // console.log(res);
        // console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.nameinput} />
          </label>
          <label>
            Person Email:
            <input type="text" name="name" onChange={this.emailinput } />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
