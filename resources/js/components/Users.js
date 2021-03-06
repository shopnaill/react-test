import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
 

class Users extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         users:[]
      }
      this.delta.bind(this);

   }

   delta() {
    axios.get('/getUsers')
    .then(function (response) {
 
         this.setState({
            users: response.data
        });
         console.log(this.users);

    })
    .catch(function (error) {
        console.log(error);
    });
   }

 

render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
            
                <button onClick={this.delta}>Get</button>
            </div>
        </div>
    )
}
 
}

export default Users;

if (document.getElementById('users')) {
    ReactDOM.render(<Users />, document.getElementById('users'));
}
