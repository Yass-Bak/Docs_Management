import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  NewUser: FormGroup = new FormGroup({
    Nom: new FormControl(''),
    Prenom: new FormControl(''),
    Email: new FormControl(''),
    Motpasse: new FormControl(''),
    Role: new FormControl(''),

  });
  response: any;
  error: any;
  constructor(
    private fb: FormBuilder,
    private ServicesService: ServicesService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef
  ) { }
  User: any;
  ngOnInit() {
    this.NewUser = this.fb.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      Email: ['', Validators.required],
      Motpasse: ['', Validators.required],
      Role: ['', Validators.required],

    });
    // this.ref.detectChanges();

  }
  AddNewUser(FormData: any) {
    this.ServicesService.AddNewUser(FormData.value).subscribe((respone: any) => {
      this.response = respone;
      if (this.response.error)
        this.error = this.response.error;
      else {
        window.location.reload();
        this.dialog.closeAll();
      }

    })
    console.log(this.NewUser.value);
  }
}
