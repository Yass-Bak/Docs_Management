import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../../../Services/local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class ResponsableService{
  
    private _baseUrl = "http://localhost:60982/";
    constructor(private _http: HttpClient,private _local_storage: LocalStorageService) { }
    private _headers = { 'content-type': 'application/json' }

    getRequests(){
        return this._http.get(this._baseUrl+'api/Demandes');
    }

    refuserRequest(demandeId: any) {
        return  this._http.delete(this._baseUrl+'api/Demandes/'+demandeId) 
      }
    addFiles(formData:any){
        return  this._http.post(this._baseUrl+'FileManager', formData,
        {
          headers: new HttpHeaders()
        }) 
    }

    downloadFile(id:any){
        return this._http.get(`${this._baseUrl}FileManager/${id}`, { responseType: 'blob' });
    }

    createQR(id:any){
        return this._http.get(`${this._baseUrl}api/Qrcode/${id}`);
    }
}