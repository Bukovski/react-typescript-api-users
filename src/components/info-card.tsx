import React from "react";
import YaMap from "./ya-map";


interface IInfoCardProps {
  street: string,
  suite: string,
  city: string,
  geocode: {
    lat: number,
    lng: number
  }
}

const InfoCard = ({ street, suite, city, geocode }: IInfoCardProps): JSX.Element => (
  <React.Fragment>
    <h2 className="my-3 text-center">Address</h2>
    <div className="row">
      <div className="col-md-5">
        <h5 className="my-1">
          Street: <small>{ street }</small>
        </h5>
        <h5 className="my-1">
          Suite: <small>{ suite }</small>
        </h5>
        <h5 className="my-1">
          City: <small>{ city }</small>
        </h5>
      </div>
      
      <div className="map col-md-7">
        <YaMap geocode={ geocode } />
      </div>
    </div>
  </React.Fragment>
);


export default InfoCard;
