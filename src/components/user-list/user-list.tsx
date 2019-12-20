import React, { Component } from 'react';
import { ITransformAllUsers } from "../../interfaces";
import { withLoadIndicator } from "../hoc-helpers";


interface IUserListState {
  usersList: ITransformAllUsers[]
}

interface IUserListProps {
  onUserSelected: (id: number) => () => void,
  getData: () => Promise<ITransformAllUsers[]>,
  onLoaded: () => void,
  onLoadStart: () => void,
  onError: () => void,
  hasData: boolean
}

class UserList extends Component<IUserListProps, IUserListState> {
  constructor(props: IUserListProps) {
    super(props);
    
    this.state = {
      usersList: []
    }
  }
  
  componentDidMount() {
    this._getServerData();
  }
  
  _userLoaded = (usersList: ITransformAllUsers[]): void => {
    this.props.onLoaded();

    this.setState({
      usersList
    });
  };

  _getServerData = (): void => {
    const { getData, onLoadStart, onError } = this.props;

    onLoadStart();

    getData()
      .then(this._userLoaded)
      .catch(onError)
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
    const { usersList } = this.state;
    const { hasData, children } = this.props;

    const content = hasData
      ? <ul className="user-list list-group mb-3">{ this.renderItems(usersList) }</ul>
      : null;
  
    return(
      <React.Fragment>
        { children }
        { content }
      </React.Fragment>
    );
  }
}


export default withLoadIndicator(UserList);
