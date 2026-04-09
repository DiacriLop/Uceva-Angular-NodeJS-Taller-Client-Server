/**
 * Interfaz que representa un libro.
 *
 * Contiene la información básica necesaria para mostrar un libro
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada libro debe tener un `id` único, un `title` descriptivo,
 * un `author`, un `genre` válido y un `publisher`.
 *
 * @example
 * ```ts
 * const book: Book = {
 *   id: 1,
 *   title: 'Cien años de soledad',
 *   author: 'Gabriel García Márquez',
 *   genre: 'Realismo Magico',
 *   publisher: 'Sudamericana'
 * };
 * ```
 */
export interface Book {

    /** Identificador único del libro */
    id: number;

    /** Título del libro */
    title: string;

    /** Autor del libro */
    author: string;

    /** Género literario del libro */
    genre: BookGenre;

    /** Editorial que publicó el libro */
    publisher: string;
}

/**
 * Tipo de género literario.
 *
 * @remarks
 * Este tipo restringe los géneros a valores predefinidos:
 * - 'Fantasia'
 * - 'Ciencia Ficcion'
 * - 'Drama'
 * - 'Misterio'
 * - 'Romance'
 *
 * Se utiliza principalmente para mostrar etiquetas o badges en la UI.
 *
 * @example
 * ```ts
 * const genero: BookGenre = 'Fantasia';
 * ```
 */
export type BookGenre =
    | 'Fantasia'
    | 'Ciencia Ficcion'
    | 'Drama'
    | 'Misterio'
    | 'Romance';