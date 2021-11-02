import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
 

class Users extends Component {
   constructor(props) {
      super(props);
      this.state = {
         users:[]
      }
   }


   componentDidMount () {
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
                {users.map((user,id ) => (
                       <div className="col-md-12">
                       <h1>{user.name}</h1>
                      </div>
                ))}
                
            </div>
        </div>
    )
}
 
}

export default Users;

if (document.getElementById('users')) {
    ReactDOM.render(<Users />, document.getElementById('users'));
}
