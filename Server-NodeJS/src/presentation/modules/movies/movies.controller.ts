import { Request, Response } from "express";
import { HandleError } from "../../../domain/errors/handle.error";
import { MoviesService } from "./movies.service";

/**
 * Controlador de peliculas.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con peliculas,
 * delegando la lógica de negocio al `MoviesService`.
 */
export class MoviesController {

/**
   * Servicio de peliculas.
   */
private readonly moviesService = new MoviesService();

/**
   * Maneja la petición HTTP para obtener un listado de peliculas.
   *
   * @remarks
   * El número de peliculas a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /movies/10
   * ```
   */
getAllMovies = (req: Request, res: Response): void => {
    const { countMovies } = req.params;

    setTimeout(() => {
    this.moviesService
    .getAllMovies(Number(countMovies))
    .then((movies) => res.status(201).json(movies))
    .catch((error) => HandleError.error(error, res));
    }, 3000);
};
}
