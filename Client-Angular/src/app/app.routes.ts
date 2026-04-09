import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { Bookspage } from './pages/books/books.page';
import { MoviesPage } from './pages/movies/movies.page';
import { AuthorsPage } from './pages/authors/authors.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link Bookspage}
 * @see {@link MoviesPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de libros.
   *
   * @remarks
   * Renderiza el componente `BooksPage`, encargado
   * de mostrar y gestionar el listado de libros.
   */
  { path: 'books', component:  Bookspage },

/**
   * Ruta de peliculas.
   *
   * @remarks
   * Renderiza el componente `MoviesPage`, encargado
   * de mostrar y gestionar el listado de peliculas.
   */
  { path: 'movies', component:  MoviesPage },

/**
   * Ruta de autores.
   *
   * @remarks
   * Renderiza el componente `AuthorsPage`, encargado
   * de mostrar y gestionar el listado de autores.
   */
  { path: 'authors', component:  AuthorsPage },


  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];