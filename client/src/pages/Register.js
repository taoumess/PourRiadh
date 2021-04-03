import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from "../utils/API";

export class Signup extends React.Component {
  state = {
    firstname:"",
    lastname:"",
    phone:"",
    email: "",
    password: "",
    cpassword: ""
  };
  send = async () => {
    const { firstname,lastname,phone, email, password, cpassword } = this.state;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({firstname,lastname,phone, email, password});
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { firstname,lastname,phone,email, password, cpassword } = this.state;
    return (
      <div className="Login">
        <FormGroup controlId="firstname" bsSize="large">
          <ControlLabel>Prénom</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={firstname}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="lastname" bsSize="large">
          <ControlLabel>Nom</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={lastname}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="phone" bsSize="large">
          <ControlLabel>Numéro de Téléphone</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={phone}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="cpassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button onClick={this.send} block bsSize="large" type="submit">
          Inscription
        </Button>
      </div>
    );
  }
}