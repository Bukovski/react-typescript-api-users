import React, { Component } from 'react';
import InfoCard from "./info-card";
import { DotsRoller } from "../loader";
import { ErrorButton, ErrorMessage } from "../error";
import { ITransformUser } from "../../interfaces";
import { withLoadIndicator } from "../hoc-helpers";


interface IUserInfoStateState {
  cardInfo: object | ITransformUser
}

interface IUserInfoStateProps {
  userId: null | number,
  getData: (id: number) => Promise<ITransformUser>,
  onLoaded: () => void,
  onLoadStart: () => void,
  onError: () => void,
  hasData: boolean
}


class UserInfo extends Component<IUserInfoStateProps, IUserInfoStateState> {
  constructor(props: IUserInfoStateProps) {
    super(props);

    this.state = {
      cardInfo: {}
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
    this.props.onLoaded();

    this.setState({
      cardInfo
    });
  };

  _updateInfo = (): void => {
    const { userId, getData, onLoadStart, onError } = this.props;

    const id: number = userId || Math.floor(Math.random() * 5) + 1;

    onLoadStart();

    getData(id)
      .then(this._cardLoaded)
      .catch(onError)
  };

  render() {
    const { cardInfo } = this.state;
    const { hasData, children } = this.props;

    const content = hasData ? <InfoCard { ...cardInfo as ITransformUser }/> : null;
  
    return(
      <React.Fragment>
        { children }
        { content }
  
        <ErrorButton >
          Error for Address
        </ErrorButton>
      </React.Fragment>
    );
  }
}


export default withLoadIndicator(UserInfo);
