import { Router } from "express";
import { MoviesController } from "./movies.controller";

export class MoviesRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new MoviesController();

    /**
     * @openapi
     * /api/movies/{countMovies}:
     *   get:
     *     summary: Obtener listado de peliculas
     *     description: Retorna una lista de peliculas generadas dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Movies
     *     parameters:
     *       - in: path
     *         name: countMovies
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de peliculas a generar
     *     responses:
     *       200:
     *         description: Lista de peliculas generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Product'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countMovies", controller.getAllMovies);

    return router;
}
}