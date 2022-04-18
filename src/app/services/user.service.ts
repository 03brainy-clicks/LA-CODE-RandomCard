import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = "https://randomuser.me/api/";

  getUser() {
    return this.http.get(this.url);
  }
}
