import { Component,inject } from '@angular/core';
import { MoviesTableComponent } from '../../components/movies-table/movies-table.component';
import { Movie } from '../../interfaces/movies.interface';
import { MoviesService } from '../../services/movies/movies.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';


/**
 * Componente contenedor de peliculas.
 *
 * Se utiliza para gestionar y mostrar un listado de peliculas
 * utilizando el componente `MoviesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `MoviesService`
 * para obtener las peliculas y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-movies',
  imports: [MoviesTableComponent, AlertComponent],
  templateUrl: './movies.page.html',
})
export class MoviesPage {
  /**
     * Listado de peliculas obtenidas desde el servicio.
     * @type {Movie[]}
     */
    movies: Movie[] = [];
    /**
       * Estado actual del componente.
       *
       * @default 'init'
       */
      state: State = 'init';
    
  
    /**
     * Servicio para obtener peliculas.
     * @remarks
     * Se inyecta utilizando la función `inject()` de Angular.
     */
    private moviesService = inject(MoviesService);
  
    /**
     * Inicializa el componente y carga las peliculas.
     * @remarks
     * Se suscribe al método `getAllMovies()` del servicio y
     * asigna los datos recibidos a la propiedad `products`.
     */
    ngOnInit(): void {
      this.state = 'loading';
      this.moviesService.getAllMovies(10).subscribe({
        next: (movies) => {
          this.movies = movies;
          this.state = 'success';
        },
        error: (error) => {
          console.error(error)
          this.state = 'error';
        },
      })
    }

}
