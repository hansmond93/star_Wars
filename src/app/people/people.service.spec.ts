import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeopleParams } from '../shared/model/peopleParams';

import { PeopleService } from './people.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// describe('PeopleService', () => {
//   let service: PeopleService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(PeopleService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

// does not work
// let httpClientSpy: jasmine.SpyObj<HttpClient>;
// let peopleService: PeopleService;

// beforeEach(() => {
  
//   httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
//   peopleService = new PeopleService(httpClientSpy);
// });

// it('people should have the expected properties', (done: DoneFn) => {

//   let properties: string[] = ['name', 'birth_year', 'gender', 'height', 'mass', 'eye_color', 'url'];
//   let params = new PeopleParams();

//   peopleService.getPeople(params).subscribe(
//     people => {
//       console.log(people);
//       people.results.forEach(p => {
//         expect(Object.keys(p)).toContain(properties[0]);
//         expect(Object.keys(p)).toContain(properties[1]);
//         expect(Object.keys(p)).toContain(properties[2]);
//         expect(Object.keys(p)).toContain(properties[3]);
//         expect(Object.keys(p)).toContain(properties[4]);
//         expect(Object.keys(p)).toContain(properties[5]);
//         expect(Object.keys(p)).toContain(properties[6]);
//       });
//       done();
//     },
//     done.fail
//   );
// });

// not fine
// describe('#PeopleHasRightProperties', () => {
//   let service: PeopleService;
//   let properties: string[] = ['name', 'birth_year', 'gender', 'height', 'mass', 'eye_color', 'url'];
//   let params = new PeopleParams();

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       providers: [PeopleService]
//     });
//     service = TestBed.inject(PeopleService);
//     //httpMock = TestBed.inject(HttpTestingController);
//   });

  
//   service.getPeople(params).subscribe(people => {
//     console.log(people);
//     people.results.forEach(p => {
//       expect(Object.keys(p)).toContain(properties[0]);
//       expect(Object.keys(p)).toContain(properties[1]);
//       expect(Object.keys(p)).toContain(properties[2]);
//       expect(Object.keys(p)).toContain(properties[3]);
//       expect(Object.keys(p)).toContain(properties[4]);
//       expect(Object.keys(p)).toContain(properties[5]);
//       expect(Object.keys(p)).toContain(properties[6]);
//     });
//   });

// });
