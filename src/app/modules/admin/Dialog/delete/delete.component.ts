import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Model } from 'src/app/Model/Model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  DeletedUser: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public User: Model,
    private ServicesService: ServicesService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.ServicesService.GetAllUsers;
  }
  DeleteUser(User: Model) {
    this.ServicesService.DeleteUserById(User.userId).subscribe(
      (Response: any) => {
        this.DeleteUser = Response;

      }
    );
    this.dialog.closeAll();
    this.refresh();
  }

  refresh() {
    location.reload();
  }
}
