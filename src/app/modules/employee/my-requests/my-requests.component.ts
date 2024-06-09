import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  constructor(private _employeeService: EmployeeService) { }

  userRequests: any;
  ngOnInit(): void {
    this.getMyrequests()
  }
  getMyrequests() {
    this._employeeService.getMyRequests().subscribe((response) => {
      this.userRequests = response

    });
  }

  downloadFile(fileId: any) {
    return this._employeeService.downloadFile(fileId)
      .subscribe((result: Blob) => {
        const blob = new Blob([result], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const element = document.createElement('a');
        element.href = url;
        element.download = "out" + fileId + ".pdf";
        document.body.appendChild(element);
        element.click();
      });
  }
}