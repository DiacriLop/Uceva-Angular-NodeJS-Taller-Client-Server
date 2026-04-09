import { faker } from '@faker-js/faker';
import { Book, BookGenre } from '../../../domain/interfaces/books.interface';

/**
 * Servicio encargado de la generación y gestión de libros.
 *
 * Utiliza faker para generar datos ficticios.
 */
export class BooksService {

/**
   * Categorías disponibles para los libros.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una categoría
   * a cada libro generado.
   */
private genres: BookGenre[] = [
    'Fantasia',
    'Ciencia Ficcion',
    'Drama',
    'Misterio',
    'Romance'
];

/**
   * Obtiene un listado de libros generados dinámicamente.
   *
   * @param countBooks Cantidad de libros a generar
   * @returns Promesa con el arreglo de libros
   */
public async getAllBooks(countBooks: number): Promise<Book[]> {

    const books: Promise<Book>[] = [];

    for (let i = 1; i <= countBooks; i++) {
    books.push(this.generateBook(i));
    }

    return Promise.all(books);
}

/**
   * Genera un libro ficticio.
   */
private generateBook(id: number): Promise<Book> {

    return Promise.resolve({
    id,
    title: faker.book.title(),
    author: faker.book.author(),
    publisher: faker.book.publisher(),
    genre: faker.helpers.arrayElement(this.genres),
    });

}

}