import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IPeople } from '../shared/model/people';
import { PeopleParams } from '../shared/model/peopleParams';
import { PeopleService } from './people.service';

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

  constructor(private peopleService: PeopleService) { }

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
      console.log(this.people);
      console.log(this.totalCount);
      console.log(this.peopleParams.pageNumber);
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

}
