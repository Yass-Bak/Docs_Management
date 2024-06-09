import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { EmployeeService } from '../Services/employee.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  reqForm = new FormGroup({
    Type: new FormControl(''),
    Description: new FormControl(''),
    date: new FormControl(new Date()),
    etat: new FormControl('En Cours'),
    userId: new FormControl(this._local_storage.retreiveUserId())
  });

  constructor(private _local_storage: LocalStorageService,
    private _employeeService: EmployeeService,
    private router: Router) {
  }
  ngOnInit(): void {
  }
  pageTitle = "Send Document Request"

  sendreq() {
    console.log(this.reqForm.value);
    this._employeeService.sendRequest(this.reqForm.value).subscribe(() => {
      Swal.fire('well received');
      this.router.navigate(['employee/my-requests']);
    });
  }

}
