import React, { Component } from 'react';


class UserList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      usersList: null
    }
  }
  
  componentDidMount() {
    this._getServerData();
  }
  
  _getServerData = () => {
    this.props.getData()
      .then((usersList) => {
        this.setState({
          usersList
        });
      });
  };
  
  renderItems(arr) {
    const { onUserSelected } = this.props;
    
    return arr.map(({ id, email, name, username }) => {
      return (
        <li
          key={id}
          className="list-group-item d-flex justify-content-between lh-condensed"
          onClick={ onUserSelected(id) }
        >
          <span className="text-muted">{ username }</span>
          <div>
            <h6 className="my-0 text-right">{ name }</h6>
            <small className="text-middle">{ email }</small>
          </div>
        </li>
      );
    });
  }
  
  
  render() {
    // const { notes } = this.props;
    const { usersList } = this.state;
    
    if (!usersList) {
      return "Loading...";
      // return <Spinner />;
    }
    
    const listItems = this.renderItems(usersList);
    
    return(
      <div className="col-md-6">
        <ul className="user-list list-group mb-3">
          { listItems }
        </ul>
      </div>
    );
  }
}


export default UserList;
