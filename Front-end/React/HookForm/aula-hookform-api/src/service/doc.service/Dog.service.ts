import api from "../../config/api";

export default class DogService{

    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await this.response.json();
    return data
}
