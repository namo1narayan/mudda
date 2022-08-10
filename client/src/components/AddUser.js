import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
  width: '300px',
  margin: '0 auto'
}

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: ''
    }
  }

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // To add new employee when user submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, mobile } = this.state;
    axios.post('http://localhost:3001/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Email
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Mobile No.
            <input
              name="mobile"
              type="text"
              value={this.state.mobile}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input
            type="submit"
            value="submit"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default AddUser;