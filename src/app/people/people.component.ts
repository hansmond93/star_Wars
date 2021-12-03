import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IPeople } from '../shared/model/people';
import { PeopleParams } from '../shared/model/peopleParams';
import { PeopleService } from './people.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { PeopleDetailsComponent } from './people-details/people-details.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;

  people: IPeople[];
  totalCount: number;
  peopleParams = new PeopleParams();

  displayedColumns: string[] = ['id', 'name', 'birth_year', 'gender', 'url'];

  constructor(private peopleService: PeopleService, private dialog: MatDialog) { }

  ngOnInit(): void {
    const pageNumber = localStorage.getItem('pageNumber');
    if (pageNumber) {
      this.peopleParams.pageNumber = +pageNumber;
    }
    this.getPeople();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('pageNumber');
  }

  getPeople(): void {
    this.people = [];
    this.peopleService.getPeople(this.peopleParams).subscribe(p => {
      this.people = p.results;
      this.totalCount = p.count;
    });
  }

  onPageChanged(event: any): void {
    if (this.peopleParams.pageNumber !== (event.pageIndex + 1)) {
      this.peopleParams.pageNumber = (event.pageIndex + 1);
      localStorage.setItem('pageNumber', this.peopleParams.pageNumber.toString());
      this.getPeople();
    }
  }

  onSearch(): void {
    this.peopleParams.search = this.searchTerm.nativeElement.value;
    this.searchTerm.nativeElement.value = '';
    this.peopleParams.pageNumber = 1;
    this.getPeople();
  }

  viewDetails(person): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.height = '500px';
    dialogConfig.maxHeight = '500px';
    dialogConfig.maxWidth = '800px';
    dialogConfig.data = person;
    this.dialog.open(PeopleDetailsComponent, dialogConfig);
  }

}
