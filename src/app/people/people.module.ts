import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { PeopleDetailsComponent } from './people-details/people-details.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    MatDialogModule,
    NgxSpinnerModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    CommonModule
  ]
})
export class PeopleModule { }
