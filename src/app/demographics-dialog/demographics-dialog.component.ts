// demographics-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface DemographicDetails {
  age: number;
  gender: string;
  email: string;

}

@Component({
  selector: 'app-demographics-dialog',
  templateUrl: './demographics-dialog.component.html',
  styleUrls: ['./demographics-dialog.component.css']
})
export class DemographicsDialogComponent {
  demographics: DemographicDetails; 

  constructor(
    public dialogRef: MatDialogRef<DemographicsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.demographics = data.demographics;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
