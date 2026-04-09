import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookspage } from './books.page';

describe('Bookspage', () => {
  let component: Bookspage;
  let fixture: ComponentFixture<Bookspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
