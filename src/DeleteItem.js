import React from 'react';

class DeleteItem extends React.Component{

  deleteLastItem = event => {
      this.props.onDelete();
  }

  render(){
    return(
      <button onClick={this.deleteLastItem} disabled={this.props.disabledBtn}>
        Delete Last Item
      </button>
    );
  }
}

export default DeleteItem;