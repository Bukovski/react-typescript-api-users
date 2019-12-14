import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";


interface IYaMapProps {
  geolocation: {
    lng: number,
    lat: number
  }
}

interface IStyle {
  [key: string]: string
}


const style: IStyle = {
  width: '100%',
  height: '100%'
};

const YaMap = ({ geolocation: { lng, lat } }: IYaMapProps): JSX.Element => {
  return (
    <YMaps>
      <Map
        MapType={'yandex#hybrid'}
        defaultState={{ zoom: 3, center: [ lng, lat ] }}
        style={ style }>
        { <Placemark geometry={[ lng, lat ]} /> }
      </Map>
    </YMaps>
  )
};


export default YaMap;
