import type { Motorcycle } from '../types/motorcycle';

const API_URL =
    'https://cdn.freecodecamp.org/curriculum/labs/data/motorcycle-shop/motorcycles.json';

export async function fetchMotorcycles(): Promise<Motorcycle[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch motorcycles: ${response.status}`);
    }

    const motorcycles: Motorcycle[] = await response.json();

    return motorcycles;
}