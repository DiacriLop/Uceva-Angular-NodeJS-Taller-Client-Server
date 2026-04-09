import { User } from "../interfaces/users.interface";

/**
 * Mock data for users.
 *
 * @remarks
 * This array contains sample user data used for testing and development purposes.
 * Each user object includes id, name, lastName, age, email, and engineering.
 *
 * @example
 * ```ts
 * import { USERS_MOCK } from './mocks/users.mocks';
 * console.log(USERS_MOCK[0].name); // 'Carlos'
 * ```
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];