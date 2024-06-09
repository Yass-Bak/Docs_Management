import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResponsableService } from '../services/responsable.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {

  public pageTitle = 'File Upload';
  fileForm = new FormGroup({
    description: new FormControl('')
  });
  fileToUpload: any;
  errorFile: any;
  errorDescription: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private _responsableService: ResponsableService) {
  }
  fileId: any;
  ngOnInit(): void {
  }

  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
    if (this.fileToUpload.type != "application/pdf") {
      this.errorFile = "Your file is not a PDF File";
      this.fileToUpload = null;
    }
    else {
      this.errorFile = '';
    }
    console.log(this.fileToUpload);
  }
  saveFileInfo(event: any) {
    event.preventDefault()
    const formData: FormData = new FormData();
    if (this.fileToUpload == null) {
      this.errorFile = "Missing File";
      return;
    }
    if (this.fileForm.value.description == "") {
      this.errorDescription = "Missing Description"
      return;
    }
    formData.append('myFile', this.fileToUpload);
    formData.append('description', this.fileForm.value.description);
    formData.append('demandeId', this.data.demandeId);
    this._responsableService.addFiles(formData).subscribe((response) => {
      if (response == null) {
        Swal.fire("File Exist")
      }
      else {
        this.dialog.closeAll()
      }
    })
  }
}
