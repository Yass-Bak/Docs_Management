import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../Services/local-storage.service';



@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private _baseUrl = "http://localhost:60982/";
    constructor(private _http: HttpClient, private _local_storage: LocalStorageService, private _router: Router) { }
    private _headers = { 'content-type': 'application/json' }

    sendRequest(reqForm: any) {
        return this._http.post(this._baseUrl + 'api/Demandes', reqForm,
            { 'headers': this._headers })
    }


    getMyRequests() {
        let userId = this._local_storage.retreiveUserId();
        console.log("ahouuu userID"+userId);
        console.log(this._local_storage.retreiveUserId());
        return this._http.get(this._baseUrl + 'api/Demandes/GetDemandeByUserId/' + userId);
    }

    downloadFile(id: any) {
        return this._http.get(`${this._baseUrl}FileManager/${id}`, { responseType: 'blob' });
    }
}
