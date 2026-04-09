import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../../interfaces/authors.interface';

/**
 * Servicio encargado de la gestión de autores.
 *
 * Proporciona métodos para obtener información de autores
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private authorsService: AuthorsService) {}
 *
 * this.authorsService.getAllAuthors(10).subscribe(authors => {
 *   console.log(authors);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de productos desde el backend.
   *
   * @param countAuthors Número de autores a obtener.
   * @returns Observable que emite un array de productos.
   *
   * @example
   * ```ts
   * this.authorsService.getAllAuthors(5).subscribe(authors => {
   *   console.log(authors);
   * });
   * ```
   */
  getAllAuthors(countAuthors: number): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`api/authors/${countAuthors}`);
  }
  
}
