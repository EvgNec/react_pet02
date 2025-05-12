import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
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
        <label>
          Last Name
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
