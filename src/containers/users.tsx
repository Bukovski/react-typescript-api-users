import React, { Component } from 'react';
import ApiUsers from "../services/api-users";
import { UserList } from "../components/user-list"
import { UserInfo } from "../components/user-info"
import { ErrorBoundry, ErrorButton } from "../components/error";
import "./users.css";


interface IUserState {
  selectedUser: null | number
}

class Users extends Component<object, IUserState> {
  apiService: ApiUsers;

  constructor(props: object) {
    super(props);

    this.state = {
      selectedUser: null
    };

    this.apiService = new ApiUsers();
  }

  handleUserSelected = (id: number) => () => {
    this.setState({
      selectedUser: id
    });
  };

  render() {
    const { selectedUser } = this.state;

    const userList = (
      <UserList
        getData={ this.apiService.getAllUsers }
        onUserSelected={ this.handleUserSelected }
      />
    );

    const userInfo = (
      <ErrorBoundry>
        <UserInfo
          getData={ this.apiService.getUser }
          userId={ selectedUser }
        />
      </ErrorBoundry>
    );

    return(
      <ErrorBoundry>
        <div className="header-title col-md-12 text-center">
          Users
        </div>

        <div className="col-md-12">
          <ErrorButton >
            Error for the entire project
          </ErrorButton>
        </div>

        <div className="row">

          <div className="col-md-6 list-group">
            { userList }
          </div>

          <div className="col-md-6 list-group list-group-item">
            { userInfo }
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}


export default Users;
