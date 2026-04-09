import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { MovieGenre, Movie } from '../../interfaces/movies.interface';
/**
 * Componente de tabla de peliculas.
 *
 * Se utiliza para mostrar un listado de peliculas en una tabla,
 * mostrando información como nombre, género, año y un badge
 * visual que indica el género de cada película.
 *
 * @remarks
 * Este componente recibe las peliculas desde un componente padre
 * a través del Input `movies` y utiliza el mapeo `genreMap`
 * para asignar colores a los badges según el género.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-movies-table [movies]="moviesList"></app-movies-table>
 * ```
 */
@Component({
  selector: 'app-movies-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './movies-table.component.html',
})
export class MoviesTableComponent {
    /**
     * Listado de peliculas que se mostrarán en la tabla.
     * @type {Movie[]}
     * @remarks
     * Este Input permite pasar un array de peliculas desde un componente padre,
     * generalmente `ListProductsComponent`. Cada pelicula debe cumplir la interfaz `Movie`.
     */
    @Input() movies: Movie[] = [];
    /**
     * Mapeo de categorías de peliculas a tipos de Badge.
     * @type {Record<MovieGenre, BadgeType>}
     * @remarks
     * Se utiliza para asignar colores de badges a cada género:
     * - 'Accion' → 'danger' (rojo)
     * - 'Drama' → 'warning' (amarillo)
     * - 'Comedia' → 'primary' (azul)
     * - 'Ciencia Ficcion' → 'success' (verde)
     *
     * Esto permite que en la tabla cada pelicula tenga un badge visual que indique su categoría
     * de forma clara para el usuario.
     */
    genreMap: Record<MovieGenre, BadgeType> = {
      'Accion' : 'danger',
      'Drama': 'warning',
      'Comedia': 'primary',
      'Ciencia Ficcion': 'success',
    }

}
