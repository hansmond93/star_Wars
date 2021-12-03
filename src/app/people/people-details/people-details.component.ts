import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPeople } from 'src/app/shared/model/people';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  person: IPeople;

  constructor( private dialogRef: MatDialogRef<PeopleDetailsComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    if (data) {
      this.person = data;
    }

  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
