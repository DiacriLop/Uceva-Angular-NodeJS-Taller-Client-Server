import { faker } from '@faker-js/faker';
import { Author,ZodiacSign } from '../../../domain/interfaces/authors.interface.js';

/**
 * Servicio encargado de la generación y gestión de autores.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar productos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class AuthorsService {

  /**
   * Zignos disponibles para los autores.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente un signo
   * a cada autor generado.
   * Se mapea el signo zodiacal de faker al tipo ZodiacSign definido en la interfaz Author.
   */
private mapZodiacSign(sign: string): ZodiacSign {

  const map: Record<string, ZodiacSign> = {
    Aries: 'Aries',
    Taurus: 'Tauro',
    Gemini: 'Geminis',
    Cancer: 'Cancer',
    Leo: 'Leo',
    Virgo: 'Virgo',
    Libra: 'Libra',
    Scorpio: 'Escorpio',
    Sagittarius: 'Sagitario',
    Capricorn: 'Capricornio',
    Aquarius: 'Acuario',
    Pisces: 'Piscis',
  };

  

  return map[sign] ?? 'Aries';
}

  /**
   * Obtiene un listado de autores generados dinámicamente.
   *
   * @param countAuthors Cantidad de autores a generar
   * @returns Promesa que resuelve un arreglo de autores
   *
   * @example
   * ```ts
   * const authors = await authorsService.getAllAuthors(10);
   * ```
   */
  public async getAllAuthors(countAuthors: number): Promise<Author[]> {
    const authors: Promise<Author>[] = [];

    for (let i = 1; i <= countAuthors; i++) {
      authors.push(this.generateAuthor(i));
    }

    return Promise.all(authors);
  }

  /**
   * Genera un autor ficticio.
   *
   * @param id Identificador único del autor
   * @returns Promesa que resuelve un autor generado
   */

  private generateAuthor(id: number): Promise<Author> {

  const fakerGender = faker.person.gender();
  const fakerZodiac = faker.person.zodiacSign();

  return Promise.resolve({
    id,
    fullName: faker.person.fullName(),

    gender: faker.person.gender(),

    bio: faker.person.bio(),

    birthdate: faker.date.birthdate({
      min: 1920,
      max: 2000,
      mode: 'year',
    }),
    zodiacSign: this.mapZodiacSign(fakerZodiac),
  });
}


}
