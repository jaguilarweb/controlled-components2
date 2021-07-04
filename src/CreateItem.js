import React, { Component } from 'react';

class CreateItem extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addNewItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render(){
    return(
      <form 
        onSubmit={this.addNewItem}
      >
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button 
          disabled={this.inputIsEmpty()}
        >Add</button>
      </form>
    );
  }
}

export default CreateItem;