import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AUTHORS_MOCK } from '../../mocks/authors.mocks';
import { AuthorsTableComponent } from './authors-table.component';

describe('AuthorsTableComponent', () => {
  let component: AuthorsTableComponent;
  let fixture: ComponentFixture<AuthorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada autor', () => {
    component.authors = AUTHORS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.authors.length);
  });

  it('debería mostrar los datos del autor en cada columna', () => {
    component.authors = AUTHORS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const author = component.authors[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(author.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(author.fullName);
      expect(columns[2].nativeElement.textContent.trim()).toBe(author.gender);
      expect(columns[3].nativeElement.textContent.trim()).toBe(author.bio);
      const expectedDate = index === 0 ? 'Mar 5, 1927' : 'Dec 15, 1775';
      expect(columns[4].nativeElement.textContent.trim()).toBe(expectedDate);
      expect(columns[5].nativeElement.textContent.trim()).toBe(author.zodiacSign);
    });
  });

  it('debería mapear cada signo zodiacal a su BadgeType correcto', () => {
    expect(component.zodiacSignMap['Aries']).toBe('danger');
    expect(component.zodiacSignMap['Tauro']).toBe('success');
    expect(component.zodiacSignMap['Geminis']).toBe('primary');
    expect(component.zodiacSignMap['Cancer']).toBe('light');
    expect(component.zodiacSignMap['Leo']).toBe('warning');
    expect(component.zodiacSignMap['Virgo']).toBe('secondary');
    expect(component.zodiacSignMap['Libra']).toBe('info');
    expect(component.zodiacSignMap['Escorpio']).toBe('dark');
    expect(component.zodiacSignMap['Sagitario']).toBe('danger');
    expect(component.zodiacSignMap['Capricornio']).toBe('secondary');
    expect(component.zodiacSignMap['Acuario']).toBe('info');
    expect(component.zodiacSignMap['Piscis']).toBe('success');
  });
});
