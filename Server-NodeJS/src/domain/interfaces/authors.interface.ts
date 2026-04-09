/**
 * Interfaz que representa un autor.
 *
 * Contiene la información básica necesaria para mostrar un autor
 * en una tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada autor debe tener un `id` único, un `fullName`,
 * un `gender`, una `bio`, una `birthdate` y un `zodiacSign`.
 *
 * @example
 * ```ts
 * const author: Author = {
 *   id: 1,
 *   fullName: 'Gabriel García Márquez',
 *   gender: 'Male',
 *   bio: 'Escritor colombiano...',
 *   birthdate: new Date('1927-03-06'),
 *   zodiacSign: 'Piscis'
 * };
 * ```
 */
export interface Author {

/** Identificador único del autor */
id: number;

  /** Nombre completo del autor */
fullName: string;

  /** Género del autor */
gender: string;

  /** Biografía corta */
bio: string;

  /** Fecha de nacimiento */
birthdate: Date;

  /** Signo zodiacal */
zodiacSign: ZodiacSign;
}


/**
 * Tipo de signo zodiacal.
 */
export type ZodiacSign =
| 'Aries'
| 'Tauro'
| 'Geminis'
| 'Cancer'
| 'Leo'
| 'Virgo'
| 'Libra'
| 'Escorpio'
| 'Sagitario'
| 'Capricornio'
| 'Acuario'
| 'Piscis';