import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../Services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user?: String;
  personne: any;
  loginForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private auth: Auth,
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  login() {
    if (this.loginForm.value.email != null && this.loginForm.value.password != null) {
      this.auth.authenticate(this.loginForm.value)
        .then(
          (loginResponse: any) => {
            if (loginResponse && loginResponse.token != null) {
              if (loginResponse.user.role == 0) {
                this.router.navigate(['/admin'])
              }
              if (loginResponse.user.role == 1) {
                this.router.navigate(['/responsable'])
              }
              if (loginResponse.user.role == 2) {
                this.router.navigate(['/employee'])
              }

            }
            else
              Swal.fire('Incorrect data!', 'error');
          });
    }
  }
}


