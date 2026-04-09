import { Author } from "../interfaces/authors.interface";

export const AUTHORS_MOCK: Author[] = [
{
    id: 1,
    fullName: 'Gabriel García Márquez',
    gender: 'Male',
    bio: 'Escritor colombiano, premio Nobel de literatura.',
    birthdate: new Date('1927-03-06'),
    zodiacSign: 'Piscis',
},
{
    id: 2,
    fullName: 'Jane Austen',
    gender: 'Female',
    bio: 'Novelista inglesa conocida por sus obras románticas.',
    birthdate: new Date('1775-12-16'),
    zodiacSign: 'Sagitario',
}
];