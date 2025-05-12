import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experence: 'junior',
    licence: false,
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked)
    this.setState({licence: e.currentTarget.checked})
  }

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br/>
        <label>
          Last Name
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
<br/>
        <p>Your level</p>
        <label>
          <input
            type="radio"
            name="experence"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experence === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experence"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experence === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experence"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experence === 'senior'}
          />
          Senior
        </label>
        <br/>
        <label>
          <input
            type="checkbox"
            name="licence"
            onChange={this.handleLicenceChange}
            checked={this.state.licence}
          />
          Agree licence
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
