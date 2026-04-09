import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movies.interface';
/**
 * Servicio encargado de la gestión de peliculas.
 *
 * Proporciona métodos para obtener información de peliculas
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private moviesService: MoviesService) {}
 *
 * this.moviesService.getAllMovies(10).subscribe(movies => {
 *   console.log(movies);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de peliculas desde el backend.
   *
   * @param countMovies Número de peliculas a obtener.
   * @returns Observable que emite un array de peliculas.
   *
   * @example
   * ```ts
   * this.moviesService.getAllMovies(5).subscribe(movies => {
   *   console.log(movies);
   * });
   * ```
   */
  getAllMovies(countMovies: number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`api/movies/${countMovies}`);
  }
}

