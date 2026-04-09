/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       description: Representa un libro del sistema
 *       required:
 *         - id
 *         - title
 *         - author
 *         - genre
 *         - publisher
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Cien años de soledad
 *         author:
 *           type: string
 *           example: Gabriel García Márquez
 *         genre:
 *           type: string
 *           enum:
 *             - Fantasia
 *             - Ciencia Ficcion
 *             - Drama
 *             - Misterio
 *             - Romance
 *           example: Drama
 *         publisher:
 *           type: string
 *           example: Sudamericana
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       description: Representa un autor del sistema
 *       required:
 *         - id
 *         - fullName
 *         - gender
 *         - bio
 *         - birthdate
 *         - zodiacSign
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         fullName:
 *           type: string
 *           example: Gabriel García Márquez
 *         gender:
 *           type: string
 *           example: Male
 *         bio:
 *           type: string
 *           example: Escritor colombiano, premio Nobel de Literatura
 *         birthdate:
 *           type: string
 *           format: date
 *           example: 1927-03-06
 *         zodiacSign:
 *           type: string
 *           enum:
 *             - Aries
 *             - Tauro
 *             - Geminis
 *             - Cancer
 *             - Leo
 *             - Virgo
 *             - Libra
 *             - Escorpio
 *             - Sagitario
 *             - Capricornio
 *             - Acuario
 *             - Piscis
 *           example: Piscis
 */
export {};