/**
 * Interfaz que representa una película.
 *
 * Contiene la información básica necesaria para mostrar una película
 * en una tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada película debe tener un `id` único, un `title` descriptivo,
 * un `director`, un `genre` válido y un `year` de lanzamiento.
 *
 * @example
 * ```ts
 * const movie: Movie = {
 *   id: 1,
 *   title: 'Inception',
 *   director: 'Christopher Nolan',
 *   genre: 'Ciencia Ficcion',
 *   year: 2010
 * };
 * ```
 */
export interface Movie {
  /** Identificador único de la película */
id: number;

  /** Título de la película */
title: string;

  /** Director de la película */
director: string;

  /** Género de la película */
genre: MovieGenre;

  /** Año de lanzamiento */
year: number;
}

/**
 * Tipo de género de película.
 *
 * @remarks
 * Este tipo restringe los géneros a los valores predefinidos:
 * - 'Accion'
 * - 'Drama'
 * - 'Comedia'
 * - 'Ciencia Ficcion'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const genre: MovieGenre = 'Accion';
 * ```
 */
export type MovieGenre =
| 'Accion'
| 'Drama'
| 'Comedia'
| 'Ciencia Ficcion';