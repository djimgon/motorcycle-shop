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

function renderMotorcycleCard(motorcycle: Motorcycle): string {
    return `
        <div class="motorcycle-card">
            <img
                class="motorcycle-card-image"
                src="${motorcycle.image_url}"
                alt="${motorcycle.name}"
            >

            <span class="motorcycle-card-year-badge">
                ${motorcycle.year}
            </span>

            <h2 class="motorcycle-card-title">
                ${motorcycle.name}
            </h2>

            <p class="motorcycle-card-manufacturer">
                ${motorcycle.manufacturer}
            </p>

            <span class="motorcycle-card-category">
                ${motorcycle.category}
            </span>

            <p class="motorcycle-card-description">
                ${motorcycle.description}
            </p>

            <p class="motorcycle-card-price">
                ${motorcycle.price}
            </p>
        </div>
    `;
}

const motorcycles = await fetchMotorcycles();

console.log(renderMotorcycleCard(motorcycles[0]));