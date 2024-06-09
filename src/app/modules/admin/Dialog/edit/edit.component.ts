import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Model } from 'src/app/Model/Model';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  user = new Model();
  UpdateUser: any;
  NewUser: FormGroup = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    motpasse: new FormControl(''),
    role: new FormControl(''),

  });
  response: any;
  error: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Model,
    private fb: FormBuilder,
    private ServicesService: ServicesService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.UpdateUser = this.fb.group({
      userId: [this.data.userId, Validators.required],
      nom: [this.data.nom, Validators.required],
      prenom: [this.data.prenom, Validators.required],
      email: [this.data.email, Validators.required],
      motpasse: [this.data.motpasse, Validators.required],
      role: [this.data.role, Validators.required],

    });
    //this.UpdateUser.patchValue(this.user);
  }
  EditUser(FormData: any) {

    this.ServicesService.EditUserById(
      FormData.value
    ).subscribe((respone: any) => {
      this.response = respone;
      if (this.response && this.response.error != null)
        this.error = this.response.error;
      else {
        window.location.reload();
        this.dialog.closeAll();
      }

    });

  }

}
