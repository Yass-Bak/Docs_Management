import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../Model/role';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class Auth {
  private _baseUrl = "http://localhost:60982/";
  isLogin!: boolean;

  constructor(private _http: HttpClient,private _local_storage: LocalStorageService,private _router: Router) { }
  
  public async authenticate(loginRequest: any) {
    const headers = new HttpHeaders(); 
     
    return this._http.post(`${this._baseUrl}authenticate?email=${loginRequest.email}&password=${loginRequest.password}`, loginRequest, { headers })
      .toPromise()
      .then(
        (response : any) => {
          if(response){
            console.log(response);
            this._local_storage.storeToken(response.token.token);
            this._local_storage.storeUserData(JSON.stringify(response.user));
            this._local_storage.storeRole(Role[response.user.role]);
          }
          return response;  
        },
        (error) => {
        }
      )
  }
  public async logout() {
    this._local_storage.clean();
  }

  isLoggedIn() {
    const role = this._local_storage.retreiveRole();
    if (role == '')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }
}