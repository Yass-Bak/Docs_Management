import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFilesComponent } from '../add-files/add-files.component';
import { ResponsableService } from '../services/responsable.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private _responsableService: ResponsableService, private dialog: MatDialog) { }
  requests: any;
  disableQrCode: any = false;
  ngOnInit(): void {
    this.getRequests();
  }
  getRequests() {
    this._responsableService.getRequests().subscribe((response) => this.requests = response)
  }
  addFile(demandeId: any) {
    this.dialog.open(AddFilesComponent, {
      data: { demandeId },
      maxHeight: '120vh'
    }).afterClosed().subscribe((response) => window.location.reload());
  }
  addQr(fileId: any) {
    this.disableQrCode = true;
    this._responsableService.createQR(fileId).subscribe((response) => window.location.reload());
  }
  refuser(demandeId: any) {
    this._responsableService.refuserRequest(demandeId).subscribe((response) => window.location.reload());
  }
}
