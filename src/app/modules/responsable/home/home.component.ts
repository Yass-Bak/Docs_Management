import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private _local_storage: LocalStorageService) { }

  ngOnInit(): void {
    this.user = this._local_storage.retreiveUserDataObject().nom + " " + this._local_storage.retreiveUserDataObject().prenom

  }
  logout(){
    this._local_storage.clean();
    window.location.reload();
  }
}
