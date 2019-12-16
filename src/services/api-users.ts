import { ITransformAllUsers, IApiData, ITransformUser } from "../interfaces"


export default class ApiUsers {
  private _apiBase: string = "http://jsonplaceholder.typicode.com/";
  // private _apiBase: string = "./fakeData.json";

  /**
   * Server data query designer
   *
   * @param url
   * @return Promise
   */
  getResource = async (url: string = ""): Promise<any> => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`)
    }

    return await response.json();
  };


  /**
   * Get all user data and delete redundant data fields
   *
   * @return Promise[]
   */
  getAllUsers = async (): Promise<ITransformAllUsers[]> => {
    const response = await this.getResource("users");
    // const response = await this.getResource();

    return response.map(this._transformAllUsers);
  };

  /**
   * Get data for only a single user
   *
   * @param id
   * @return Promise
   */
  getUser = async (id: number): Promise<ITransformUser> => {
    const response = await this.getResource(`users/${id}`);
    return this._transformUser(response);

    // const response = await this.getResource();
    // return this._transformUser(response[id]);
  };


  _transformAllUsers = (user: IApiData): ITransformAllUsers => {
    return {
      "id": user.id,
      "email": user.email,
      "name": user.name,
      "username": user.username
    }
  };

  _transformUser = (user: IApiData): ITransformUser => {
    const { address } = user;

    return {
      "street": address.street,
      "suite": address.suite,
      "city": address.city,
      "geocode": address.geo
    }
  };
}
