import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule for the mat-table
import { MatPaginatorModule } from '@angular/material/paginator'; // Import MatPaginatorModule for the mat-paginator
import { PersonalDetailsTableComponent } from './personal-details-table.component';

describe('PersonalDetailsTableComponent', () => {
  let component: PersonalDetailsTableComponent;
  let fixture: ComponentFixture<PersonalDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalDetailsTableComponent], // Declare the component under test
      imports: [MatTableModule, MatPaginatorModule] // Import necessary Angular Material modules
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
