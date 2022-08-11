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
    const { firstName, lastName, email, mobile,gender,designation,doj,rm,salary,ecode,location,rajya,country,department,deletedAt } = this.state;
    axios.post('http://localhost:3001/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      gender: gender,
      designation: designation,
      doj: doj,
      rm:rm,
      salary: salary,
      ecode: ecode,
      location: location,
      rajya: rajya,
      country: country,
      department: department,
      deletedAt: deletedAt
    })
      .then((response) => {
        console.log(response);
        this.props.navigate.push('/');
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
          <label>
            Gender
            <input
              name="gender"
              type="text"
              value={this.state.gender}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Designation
            <input
              name="designation"
              type="text"
              value={this.state.designation}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Date Of Joining
            <input
              name="doj"
              type="date"
              value={this.state.date}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Reporting Manager
            <input
              name="rm"
              type="text"
              value={this.state.rm}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Salary
            <input
              name="salary"
              type="number"
              value={this.state.salary}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Employee Code
            <input
              name="ecode"
              type="number"
              value={this.state.ecode}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Location
            <input
              name="location"
              type="text"
              value={this.state.location}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            State
            <input
              name="rajya"
              type="text"
              value={this.state.rajya}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Country
            <input
              name="country"
              type="text"
              value={this.state.country}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Department
            <input
              name="department"
              type="text"
              value={this.state.department}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Deleted At
            <input
              name="deletedAt"
              type="date"
              value={this.state.deletedAt}
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