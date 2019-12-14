import React, { Component } from 'react';


class UserList extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }
  
  componentDidMount() {
    this.updateCard();
  }
  
  updateCard = async () => {
    const id = 0;
    
    const res = await this.apiService.getResource();
    console.log(res);
    
    const { geo } = res[id].address;
    
    this.setState({
      // data: {
      //   geolocation: geo,
      // }
      
      data: res
    });
  };
  
  
  render() {
    // const { notes } = this.props;
    // const { title } = this.state;
    
    return(
      <div className="col-md-6">
        <ul className="user-list list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <span className="text-muted">Bret</span>
            <div>
              <h6 className="my-0">Leanne Graham</h6>
              <small className="text-middle">Sincere@april.biz</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <span className="text-muted">Bret</span>
            <div>
              <h6 className="my-0">Leanne Graham</h6>
              <small className="text-middle">Sincere@april.biz</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <span className="text-muted">Bret</span>
            <div>
              <h6 className="my-0">Leanne Graham</h6>
              <small className="text-middle">Sincere@april.biz</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <span className="text-muted">Bret</span>
            <div>
              <h6 className="my-0">Leanne Graham</h6>
              <small className="text-middle">Sincere@april.biz</small>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-condensed">
            <span className="text-muted">Bret</span>
            <div>
              <h6 className="my-0">Leanne Graham</h6>
              <small className="text-middle">Sincere@april.biz</small>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

UserList.defaultProps = {
  //notes: []
};


export default UserList;
