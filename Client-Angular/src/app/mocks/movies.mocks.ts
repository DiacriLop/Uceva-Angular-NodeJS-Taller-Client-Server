import { Movie } from "../interfaces/movies.interface";

/**
 * Mock data for movies.
 *
 * @remarks
 * This array contains sample movie data used for testing and development purposes.
 * Each movie object includes id, title, director, genre, and year.
 *
 * @example
 * ```ts
 * import { MOVIES_MOCK } from './mocks/movies.mocks';
 * console.log(MOVIES_MOCK[0].title); // 'La lista de Schindler'
 * ```
 */
export const MOVIES_MOCK: Movie[] = [
    {
        id: 1,
        title: 'La lista de Schindler',
        director: 'Steven Spielberg',
        genre: 'Drama',
        year: 1993,
    },
    {
        id: 2,
        title: 'El padrino',
        director: 'Francis Ford Coppola',
        genre: 'Drama',
        year: 1972,
    }
];