import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { VERSION } from '@angular/core';
import { ServicesService } from 'src/app/Services/services.service';
import { AddComponent } from '../Dialog/add/add.component';
import { InfoComponent } from '../Dialog/info/info.component';
import { DeleteComponent } from '../Dialog/delete/delete.component';
import { EditComponent } from '../Dialog/edit/edit.component';
import { ViewComponent } from '../Dialog/view/view.component';
import { LocalStorageService } from '../../../Services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //employees: any[] = [];
  DataSource: MatTableDataSource<any> = new MatTableDataSource<any>(
  );
  resultsLength: number = 0;
  RefreshUsers = new BehaviorSubject<boolean>(true)
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  angularVersion = VERSION.full;
  users: any;
  user: any;

  constructor(
    private ServicesService: ServicesService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private _local_storage: LocalStorageService
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = this._local_storage.retreiveUserDataObject().nom + " " + this._local_storage.retreiveUserDataObject().prenom

    this.GetAllUsers();
    this.user = this._local_storage.retreiveUserDataObject().nom + " " + this._local_storage.retreiveUserDataObject().prenom
  }
  GetAllUsers() {
    this.ServicesService.GetAllUsers().subscribe(
      (Users: any) => {
        this.DataSource.data = Users;
        this.users = this.DataSource.connect();
        console.log(this.users);
        this.DataSource.paginator = this.paginator;
        this.resultsLength = this.DataSource.data.length;
        console.log(this.users);
      },
      (error: any) => {
        console.log('Error (GetAllData) :: ' + error);
      }
    );

  }
  AddNewUser() {
    this.dialog.open(AddComponent, { maxHeight: '90vh' });
  }
  GetInfo() {
    this.dialog.open(InfoComponent);
  }

  DeleteUser(User: any /*Model*/) {
    this.dialog.open(DeleteComponent, {
      data: {
        userId: User.userId,
        nom: User.nom,
        prenom: User.prenom,
        email: User.email,
        motpasse: User.motpasse,
        role: User.role,

      },
    });
    this.ref.detectChanges();

  }
  EditUser(User: any /*Model*/) {
    this.dialog.open(EditComponent, {
      data: {
        userId: User.userId,
        nom: User.nom,
        prenom: User.prenom,
        email: User.email,
        motpasse: User.motpasse,
        role: User.role,

      },
      maxHeight: '90vh'
    });
    // this.ref.detectChanges();

  }
  ViewUser(User: any) {
    this.dialog.open(ViewComponent, {
      data: {
        id: User.userId,
        nom: User.nom,
        prenom: User.prenom,
        email: User.email,
        motpasse: User.motpasse,
        role: User.role,

      },
    });
  }
  applyFilter(event: Event) {
    console.log("Filting")
    const filterValue = (event.target as HTMLInputElement).value;
    this.DataSource.filter = filterValue.trim().toLowerCase();

    if (this.DataSource.paginator) {
      this.DataSource.paginator.firstPage();
    }
  }
  logout() {
    this._local_storage.clean();
    window.location.reload();
  }
}
