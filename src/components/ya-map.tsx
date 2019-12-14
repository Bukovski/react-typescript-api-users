import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";


interface IYaMapProps {
  geocode: {
    lng: number,
    lat: number
  }
}

interface IStyle {
  [key: string]: string
}


const style: IStyle = {
  position: "relative",
  left: "0",
  top: "0",
  width: '100%',
  height: '100%'
};

const YaMap = ({ geocode: { lng, lat } }: IYaMapProps): JSX.Element => {
  return (
    <YMaps>
      <Map
        defaultState={{ zoom: 4, center: [ lng, lat ], type: 'yandex#hybrid' }}
        style={ style }>
        { <Placemark geometry={[ lng, lat ]} /> }
      </Map>
    </YMaps>
  )
};


export default YaMap;
