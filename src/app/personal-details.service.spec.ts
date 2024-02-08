import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonalDetail } from './personal-detail.model';
import { PersonalDetailsService } from './personal-details.service'; // Adjusted import statement
import { Observable } from 'rxjs';

describe('PersonalDetailsService', () => { // Adjusted describe block name
  let service: PersonalDetailsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonalDetailsService] // Adjusted provider
    });
    service = TestBed.inject(PersonalDetailsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch personal details', () => {
    const mockPersonalDetails: PersonalDetail[] = [
      { id: 1, name: 'John Doe', email:'email123@gmail.com' },
      { id: 2, name: 'Jane Smith',email:'email123@gmail.com' }
    ];

    service.getPersonalDetails().subscribe((data: PersonalDetail[]) => {
      expect(data.length).toBe(2); // Adjust the length based on your mock data
      expect(data).toEqual(mockPersonalDetails);
    });

    const request = httpMock.expectOne('http://localhost:4200/'); // Adjust the URL
    expect(request.request.method).toBe('GET');

    request.flush(mockPersonalDetails);
  });
});
