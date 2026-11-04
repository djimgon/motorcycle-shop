import './style.css';

type Category =
    | "Sport"
    | 'Cruiser'
    | 'Touring'
    | 'Dirt'
    | 'Adventure'
    | 'Naked'
    | 'Electric';

interface Motorcycle {
    id: string;
    name: string;
    manufacturer: string;
    category: Category;
    price: number;
    image_url: string;
    created_at: Date;
    description: string;
    year: number;
}

async function fetchMotorcycles(): Promise<Motorcycle[]> {
    const response = await fetch(
        'https://cdn.freecodecamp.org/curriculum/labs/data/motorcycle-shop/motorcycles.json'
    );

    const motorcycles: Motorcycle[] = await response.json();

    return motorcycles;
}

const motorcycles = await fetchMotorcycles();

console.log(motorcycles);
console.log('Total motorcycles:', motorcycles.length);