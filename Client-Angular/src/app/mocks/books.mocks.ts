import { Book } from "../interfaces/books.interface";

/**
 * Mock data for books.
 *
 * @remarks
 * This array contains sample book data used for testing and development purposes.
 * Each book object includes id, title, author, genre, and publisher.
 *
 * @example
 * ```ts
 * import { BOOKS_MOCK } from './mocks/books.mocks';
 * console.log(BOOKS_MOCK[0].title); // 'Cien años de soledad'
 * ```
 */
export const BOOKS_MOCK: Book[] = [
    {
        id: 1,
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        genre: 'Fantasia',
        publisher: 'Sudamericana',
    },
    {
        id: 2,
        title: 'El nombre del viento',
        author: 'Patrick Rothfuss',
        genre: 'Ciencia Ficcion',
        publisher: 'DAW Books',
    }
];