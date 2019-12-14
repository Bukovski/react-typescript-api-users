import React, { Component } from 'react';
import YaMap from "./ya-map";


class UserInfo extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  

  render() {
    // const { notes } = this.props;
    // const { title } = this.state;

    return(
      <div className="col-md-6 list-group list-group-item">
        <h2 className="my-3 text-center">Address</h2>
        <div className="row">
          <div className="col-md-5">
            <h5 className="my-1">
              Street: <small>Sincere@april.biz</small>
            </h5>
            <h5 className="my-1">
              Suite: <small>Apt. 556</small>
            </h5>
            <h5 className="my-1">
              City: <small>Gwenborough</small>
            </h5>
          </div>

          <div className="map col-md-7">
            <YaMap geolocation={geolocation} />
          </div>
        </div>
      </div>
    );
  }
}

UserInfo.defaultProps = {
  //notes: []
};


export default UserInfo;
