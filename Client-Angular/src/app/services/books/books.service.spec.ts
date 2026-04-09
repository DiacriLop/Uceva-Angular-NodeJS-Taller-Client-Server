import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let component: BooksService;
  let fixture: ComponentFixture<BooksService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
