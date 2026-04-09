import { faker } from '@faker-js/faker';
import { Movie, MovieGenre } from '../../../domain/interfaces/movies.interface.js';
/**
 * Servicio encargado de la generación y gestión de peliculas.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar peliculas
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class MoviesService {

/**
   * Géneros disponibles para las películas.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un genero
   * a cada pelicula generado.
   */
private genres : MovieGenre[] = [
    'Accion',
    'Drama',
    'Comedia',
    'Ciencia Ficcion'
];

/**
   * Obtiene un listado de películas generadas dinámicamente.
   *
   * @param countMovies Cantidad de películas a generar
   * @returns Promesa que resuelve un arreglo de películas
   *
   * @example
   * ```ts
   * const movies = await moviesService.getAllMovies(10);
   * ```
   */
public async getAllMovies(countMovies: number): Promise<Movie[]> {
    const movies: Promise<Movie>[] = [];

    for (let i = 1; i <= countMovies; i++) {
    movies.push(this.generateMovie(i));
    }

    return Promise.all(movies);
}

/**
   * Genera una película ficticia.
   *
   * @param id Identificador único de la película
   * @returns Promesa que resuelve una película generada
   */
private generateMovie(id: number): Promise<Movie> {

    return Promise.resolve({
    id,
    title: faker.lorem.words({ min: 2, max: 4 }), 
    director: faker.person.fullName(), 
    year: faker.date.past({ years: 30 }).getFullYear(),
    genre: faker.helpers.arrayElement(this.genres), 
    });

}
}

