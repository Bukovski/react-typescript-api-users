export interface ITransformAllUsers {
  "id": number,
  "email": string,
  "name": string,
  "username": string
};

export interface IAPIGeocode {
  "lat": number,
  "lng": number
};

export interface ITransformUser {
  "street": string;
  "suite": string;
  "city": string;
  "geocode": IAPIGeocode;
};

export interface IAPIAddress {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": IAPIGeocode
};

export interface IApiData extends ITransformAllUsers {
  "phone": string,
  "website": string,
  "company": object,
  "address": IAPIAddress
};
