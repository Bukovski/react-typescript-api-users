import React, { Component } from 'react';
import ApiUsers from "../services/api-users";
import UserList from "../components/user-list"
import UserInfo from "../components/user-info"


class App extends Component {
  constructor() {
    super();
    
    this.state = {};
  
    this.apiService = new ApiUsers();
  }
  
  
  render() {
    const { data } = this.state;
  
    return(
      <React.Fragment>
        <div className="header-title col-md-12 text-center">
          Users
        </div>
  
        <div className="row">
          <UserList />
          
          <UserInfo/>
        </div>
      </React.Fragment>
    );
  }
}


export default App;
