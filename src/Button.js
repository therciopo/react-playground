import React, { Component } from 'react';

class MyButton extends Component {  

   handleClick= () => {
     this.props.onFooFunction(this.props.incValue);
   };
  
  render() {
    return (
          <button onClick={this.handleClick}>
                    {this.props.incValue}
          </button>
    );
  }
}

export default MyButton;
