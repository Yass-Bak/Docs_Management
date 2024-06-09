import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Model } from '../Model/Model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  URL: string = 'http://localhost:60982/api/Users';
  Id: number = 0;
  constructor(private http: HttpClient) {

  }

  public GetAllUsers(): Observable<any> {
    return this.http.get(this.URL);
  }
  public GetUserById(Id: number): Observable<Model> {
    return this.http.get<Model>(this.URL + "/" + Id);
  }
  public AddNewUser(Form: Model): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Form);
    return this.http.post(this.URL, body, { 'headers': headers });
  }
  public DeleteUserById(idD: number): Observable<any> {
    this.Id = idD;
    return this.http.delete(this.URL + '/' + `${this.Id}`)
  }
  public EditUserById(UpdatUserForm: Model): Observable<Model> {
    const body = JSON.stringify(UpdatUserForm);
    const headers = { 'content-type': 'application/json' }
    return this.http.put<Model>(this.URL, body, { 'headers': headers });
  }
}
