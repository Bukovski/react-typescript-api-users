import React, { Component } from 'react';
import InfoCard from "./info-card";


class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      cardInfo: {},
      loading: true, // индикатор загрузки
      error: false, // вывод ошибок
    }
  }
  
  componentDidMount() {
    this._updateInfo();
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this._updateInfo();
    }
  }
  
  _cardLoaded = (cardInfo) => {
    this.setState({
      cardInfo,
      loading: false,
      error: false
    });
  };
  
  _onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };
  
  _updateInfo = () => {
    this.setState({
      loading: true
    });
    
    // const id = -4; // создать ошибку при загрузке
    const id = this.props.userId || Math.floor(Math.random() * 10) + 1;
    
    const { getData } = this.props;
    
    getData(id)
      .then(this._cardLoaded)
      .catch(this._onError)
  };

  render() {
    // const { notes } = this.props;
    const { cardInfo, loading } = this.state;
  
    const spinner = loading ? "Loading..." : null;
    const content = !loading ? <InfoCard { ...cardInfo }/> : null;
  
    return(
      <div className="col-md-6 list-group list-group-item">
        { spinner }
        { content }
      </div>
    );
  }
}

UserInfo.defaultProps = {
  //notes: []
};


export default UserInfo;
