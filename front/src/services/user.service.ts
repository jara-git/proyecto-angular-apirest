import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'http://localhost:4000/api/users'
  

  sex_values = ['Mujer', 'Hombre',
    'No binario', 'No me identifico con ninguno de los descritos'];
  
  users: Array<User> = [];

    
  selectedUser: User = {
    name: "",
    surname: "",
    age: 0,
    dni: "",
    // bday: new Date().toISOString().slice(0, 10),
    bday: new Date(),
    favColor: "",
    sex: "",
    _id: ""
  };

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.URL_API);
  }

  createUsers(user: User) {
    return this.http.post(this.URL_API, user);
  }

  updateUser(user: User) {
    return this.http.put(`${this.URL_API}/${user._id}`, user);
  }

  deleteUsers(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }


}
