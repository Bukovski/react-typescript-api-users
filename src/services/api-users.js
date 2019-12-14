export default class ApiUsers {
  // _apiBase = "http://jsonplaceholder.typicode.com/";
  _apiBase = "./fakeData.json";
  
  getResource = async (url = "") => {
    const response = await fetch(`${this._apiBase}${url}`);
    
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }
    
    return await response.json();
  };
  
  getAllUsers = async () => {
    // const response = await this.getResource("users");
    const response = await this.getResource();
    
    return response.map(this._transformAllUsers);
  };
  
  getUser = async (id) => {
    // const response = await this.getResource(`users/${id}`);
    // return this._transformUser(response);
    
    const response = await this.getResource();
    return this._transformUser(response[id]);
  };
  
  
  _transformAllUsers = (user) => {
    return {
      "id": user.id,
      "email": user.email,
      "name": user.name,
      "username": user.username
    }
  };
  
  _transformUser = (user) => {
    const { address } = user;
    
    return {
      "street": address.street,
      "suite": address.suite,
      "city": address.city,
      "geocode": address.geo
    }
  };
}