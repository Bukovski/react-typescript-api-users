import React, { Component } from 'react';
import ApiUsers from "../services/api-users";
import UserList from "../components/user-list"
import UserInfo from "../components/user-info"


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedUser: null
    };
  
    this.apiService = new ApiUsers();
  }
  
  handleUserSelected = (id) => () => {
    this.setState({
      selectedUser: id
    });
  };
  
  render() {
    const { selectedUser } = this.state;
    
    return(
      <React.Fragment>
        <div className="header-title col-md-12 text-center">
          Users
        </div>
  
        <div className="row">
          <UserList
            getData={ this.apiService.getAllUsers }
            onUserSelected={ this.handleUserSelected }
          />
          
          <UserInfo
            getData={ this.apiService.getUser }
            userId={ selectedUser }
          />
        </div>
      </React.Fragment>
    );
  }
}


export default App;
