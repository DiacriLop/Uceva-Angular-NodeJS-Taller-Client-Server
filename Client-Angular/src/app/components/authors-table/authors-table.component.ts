import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { ZodiacSign, Author } from '../../interfaces/authors.interface';

/**
 * Componente de tabla de autores.
 *
 * Se utiliza para mostrar un listado de autores en una tabla,
 * mostrando información como nombre, signo zodiacal y un badge
 * visual que indica el signo zodiacal de cada autor.
 *
 * @remarks
 * Este componente recibe los autores desde un componente padre
 * a través del Input `authors` y utiliza el mapeo `zodiacSignMap`
 * para asignar colores a los badges según el signo zodiacal.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-authors-table [authors]="authorsList"></app-authors-table>
 * ```
 */

@Component({
  selector: 'app-authors-table',
  imports: [CommonModule, BadgeAtom],
  templateUrl: './authors-table.component.html',
})
export class AuthorsTableComponent {
/**
   * Listado de productos que se mostrarán en la tabla.
   * @type {Author[]}
   * @remarks
   * Este Input permite pasar un array de autores desde un componente padre,
   * generalmente `ListAuthorsComponent`. Cada autor debe cumplir la interfaz `Author`.
   */
  @Input() authors: Author[] = [];
  /**
   * Mapeo de categorías de productos a tipos de Badge.
   * @type {Record<ProductCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'Carnes' → 'danger' (rojo)
   * - 'Frutas' → 'warning' (amarillo)
   * - 'Lacteos' → 'primary' (azul)
   * - 'Verduras' → 'success' (verde)
   *
   * Esto permite que en la tabla cada producto tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
categoryMap: Record<ZodiacSign, BadgeType> = {
    'Aries': 'danger',       // Rojo/Fuego
    'Tauro': 'success',      // Verde/Tierra
    'Geminis': 'primary',    // Azul oscuro/Aire
    'Cancer': 'light',       // Blanco-Plata/Luna
    'Leo': 'warning',        // Amarillo-Naranja/Sol
    'Virgo': 'secondary',    // Gris/Pragmatismo
    'Libra': 'info',         // Celeste/Armonía
    'Escorpio': 'dark',      // Negro-Oscuro/Misterio
    'Sagitario': 'danger',   // Fuego (Repite)
    'Capricornio': 'secondary', // Tierra/Estructura (Repite)
    'Acuario': 'info',       // Aire/Cielo (Repite)
    'Piscis': 'success',     // Agua/Naturaleza (Repite)
  }

}
