// import React from 'react';
import {connect} from 'react-redux';
import {createUserAction} from 'redux/actions/userActions';
let userData = {
  name: 'Muhammad Anas Habib',
  mobile: '0123456789',
  address: 'Dhaka, Bangladesh',
};

import React, {Component} from 'react';

class index extends Component {
  handleCreateUser = () => {
    console.log('object');
    this.props.createUser(userData);
  };

  render() {
    console.log(this.props.userData.peoples);

    return (
      <div className="dataBox">
        <h2 className="register">Register a user</h2>
        <h2>
          <button onClick={this.handleCreateUser}>Click</button>
        </h2>
        <div>
          <p>
            Name:{' '}
            {this.props.userData.peoples
              ? this.props.userData.peoples.name
              : ''}
          </p>
          <p>
            Mobile:{' '}
            {this.props.userData.peoples
              ? this.props.userData.peoples.mobile
              : ''}
          </p>
          <p>
            Address:{' '}
            {this.props.userData.peoples
              ? this.props.userData.peoples.address
              : ''}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createUser: (userData) => {
    console.log(userData);
    dispatch(createUserAction(userData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
