import React, { Component } from 'react';
import InfoCard from "./info-card";
import { DotsRoller } from "../loader";
import { ErrorButton, ErrorMessage } from "../error";
import { ITransformUser } from "../../interfaces";


interface IUserInfoStateState {
  cardInfo: object | ITransformUser,
  loading: boolean,
  error: boolean
}

interface IUserInfoStateProps {
  userId: null | number,
  getData: (id: number) => Promise<ITransformUser>
}


class UserInfo extends Component<IUserInfoStateProps, IUserInfoStateState> {
  constructor(props: IUserInfoStateProps) {
    super(props);

    this.state = {
      cardInfo: {},
      loading: true, // load indicator
      error: false, // show error
    }
  }
  
  componentDidMount() {
    this._updateInfo();
  }
  
  componentDidUpdate(prevProps: IUserInfoStateProps) {
    if (this.props.userId !== prevProps.userId) {
      this._updateInfo();
    }
  }
  
  _cardLoaded = (cardInfo: ITransformUser): void => {
    this.setState({
      cardInfo,
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
  
  _updateInfo = (): void => {
    this.setState({
      loading: true
    });
    
    // const id: number = -44; // create error for test error message
    const id: number = this.props.userId || Math.floor(Math.random() * 5) + 1;
    
    const { getData } = this.props;
    
    getData(id)
      .then(this._cardLoaded)
      .catch(this._onError)
  };

  render() {
    const { cardInfo, loading, error } = this.state;
  
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <DotsRoller /> : null;
  
    const hasData = !(loading || error);
    const content = hasData ? <InfoCard { ...cardInfo as ITransformUser }/> : null;
  
    return(
      <React.Fragment>
        { errorMessage }
        { spinner }
        { content }
  
        <ErrorButton >
          Error for Address
        </ErrorButton>
      </React.Fragment>
    );
  }
}


export default UserInfo;
