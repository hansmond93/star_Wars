import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPeople } from '../shared/model/people';
import { PeopleParams } from '../shared/model/peopleParams';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;

  people: IPeople[];
  totalCount: number;
  peopleParams = new PeopleParams();

  displayedColumns: string[] = ['id', 'name', 'birth_year', 'gender', 'url'];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople();
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
    console.log('EVENT', event);
    if (this.peopleParams.pageNumber !== event.pageIndex) {
      this.peopleParams.pageNumber = event.pageIndex;
      this.getPeople();
    }
  }

  onSearch(): void {
    this.peopleParams.search = this.searchTerm.nativeElement.value;
    this.searchTerm.nativeElement.value = '';
    console.log('search', this.peopleParams.search);
    this.peopleParams.pageNumber = 1;
    this.getPeople();
  }

}
