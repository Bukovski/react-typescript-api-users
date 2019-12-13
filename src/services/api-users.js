export default class ApiUsers {
  // _apiBase = "http://jsonplaceholder.typicode.com/users";
  _apiBase = "./fakeData.json";
  
  getResource = async (url = "") => {
    const resource = await fetch(`${this._apiBase}${url}`);
    
    if (!resource.ok) {
      throw new Error(`Could not fetch ${url}, received ${resource.status}`)
    }
    
    return await resource.json();
  }
  
  
}