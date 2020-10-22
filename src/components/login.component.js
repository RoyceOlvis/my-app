import React, { Component } from 'react';



class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError(username, password) {
    this.setState({ error: '',
                    success:'' });

  }

  handleSubmit(evt) {
    evt.preventDefault();

     if (!this.state.username) {
       console.log("Username is required");
      // return this.setState({ error: 'Username is required' });
    }


    if (!this.state.password) {

    console.log('Password is required');
      // return this.setState({ error: 'Password is required' });
     }
    if (this.state.username ==="Mary" && this.state.password==="123") {
      console.log("You are in ")
        window.location = '/welcome';
    }
    else{
      console.log("You are not in")

    }

}


  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
    console.log(this.state.username);
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
    console.log(this.state.username);

  }

  render() {


    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError()}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}


export default LoginPage;
