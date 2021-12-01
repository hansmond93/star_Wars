import { Component, OnInit } from '@angular/core';
import { IPeople } from '../shared/model/people';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: IPeople[];
  totalCount: number;
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.people = [];
    this.peopleService.getPeople().subscribe(p => {
      this.people = p.results;
      this.totalCount = p.count;
      console.log(this.people);
      console.log(this.totalCount);
    });

  }

}
