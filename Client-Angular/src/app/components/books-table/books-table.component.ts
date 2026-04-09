import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Book, BookGenre } from '../../interfaces/books.interface';

/**
 * Componente de tabla de libros.
 *
 * Muestra un listado de libros en una tabla con su
 * título, autor, editorial y género.
 *
 * Cada género se representa visualmente con un badge
 * de color usando el design system.
 *@remarks
  * Este componente recibe los libros desde un componente padre
 * @example
 * ```html
 * <app-books-table [books]="booksList"></app-books-table>
 * ```
 */
@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class BooksTableComponent {

  /**
   * Listado de libros que se mostrarán en la tabla.
   * @type {Book[]}
   * @remarks
   * Este Input permite pasar un array de libros desde un componente padre,
   * generalmente `ListBooksComponent`. Cada libro debe cumplir la interfaz `Book`.
   */
  @Input() books: Book[] = [];
/**
   * Mapeo de géneros de libros a tipos de Badge.
   * @type {Record<BookGenre, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada género:
   * - 'Fantasia' → 'primary' (azul)
   * - 'Ciencia Ficcion' → 'warning' (amarillo)
   * - 'Drama' → 'danger' (rojo)
   * - 'Misterio' → 'secondary' (gris)
   * - 'Romance' → 'info' (azul claro)
   *
   * Esto permite que en la tabla cada producto tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  genreMap: Record<BookGenre, BadgeType> = {
    'Fantasia': 'primary',
    'Ciencia Ficcion': 'warning',
    'Drama': 'danger',
    'Misterio': 'secondary',
    'Romance': 'info',
  };

}
