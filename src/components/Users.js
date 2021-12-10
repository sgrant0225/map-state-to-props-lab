import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
      debugger
    return (
      <div>
        <ul>
          Users!
          <p> {users} </p>
          <p> {this.props.users.length} </p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  //debugger
  return { 
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
