import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";


const style = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
};

const YaMap = ({ geolocation: { lng, lat } }) => {
  return (
    <YMaps
    >
      <Map
        defaultMapTypes='yandex#satellite'
        defaultState={{ zoom: 3, center: [ lng, lat ] }}
        style={ style }>
        { <Placemark geometry={[ lng, lat ]} /> }
      </Map>
    </YMaps>
  )
};


export default YaMap;
