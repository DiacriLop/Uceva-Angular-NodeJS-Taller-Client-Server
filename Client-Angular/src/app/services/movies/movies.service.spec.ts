import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let component: MoviesService;
  let fixture: ComponentFixture<MoviesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
