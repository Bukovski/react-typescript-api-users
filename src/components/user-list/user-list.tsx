import React, { Component } from 'react';
import { DotsRoller } from "../loader";
import { ErrorMessage } from "../error";
import { ITransformAllUsers, ITransformUser } from "../../interfaces";


interface IUserListState {
  usersList: ITransformAllUsers[],
  loading: boolean,
  error: boolean
}

interface IUserListProps {
  onUserSelected: (id: number) => () => void,
  getData: () => Promise<ITransformAllUsers[]>
}

class UserList extends Component<IUserListProps, IUserListState> {
  constructor(props: IUserListProps) {
    super(props);
    
    this.state = {
      usersList: [],
      loading: true, // load indicator
      error: false, // show error
    }
  }
  
  componentDidMount() {
    this._getServerData();
  }
  
  _userLoaded = (usersList: ITransformAllUsers[]): void => {
    this.setState({
      usersList,
      loading: false,
      error: false
    });
  };
  
  _onError = (): void => {
    this.setState({
      error: true,
      loading: false
    });
  };
  
  _getServerData = (): void => {
    const { getData } = this.props;
    
    getData()
      .then(this._userLoaded)
      .catch(this._onError)
  };
  
  renderItems(arr: ITransformAllUsers[]): JSX.Element[] {
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
    const { usersList, loading, error } = this.state;
  
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <DotsRoller /> : null;
  
    const hasData = !(loading || error);
    const content = hasData
      ? <ul className="user-list list-group mb-3">{ this.renderItems(usersList) }</ul>
      : null;
  
    return(
      <React.Fragment>
        { errorMessage }
        { spinner }
        { content }
      </React.Fragment>
    );
  }
}


export default UserList;
