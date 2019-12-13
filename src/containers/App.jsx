import React, { Component } from 'react';
import ApiUsers from "../services/api-users";
import YaMap from "../components/ya-map";


class App extends Component {
  constructor() {
    super();
    
    this.state = {
      data: {
        geolocation: {}
      }
    };
  
    this.apiService = new ApiUsers();
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
      data: {
        geolocation: geo,
      }
    });
  };
  
  render() {
    const { data: { geolocation } } = this.state;
  
    return(
      <React.Fragment>
        <div className="header-title col-md-12 text-center">
          Users
        </div>
  
        <div className="row">
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
  
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  //notes: []
};


export default App;
