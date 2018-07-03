import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    state = { userName:'' }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event: Form Submit', this.state.userName);

        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({userName:''})
        })
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' 
                // ref={(input) => this.userNameInput = input}
                value={this.state.userName}
                onChange={(event) => this.setState({userName: event.target.value})}
                placeholder='Git hub username' required/>
                <button type='submit'>Add card</button>
            </form>
        );
    };
}

export default Form;