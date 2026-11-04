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
        <article class="motorcycle-card">

            <img
                class="motorcycle-card-image"
                src="${motorcycle.image_url}"
                alt="${motorcycle.name}"
                loading="lazy"
            >

            <div class="motorcycle-card-content">

                <span class="motorcycle-card-year-badge">
                    ${motorcycle.year}
                </span>

                <h3 class="motorcycle-card-title">
                    ${motorcycle.name}
                </h3>

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
                    $${motorcycle.price.toLocaleString('en-US')}
                </p>

            </div>

        </article>
    `;
}

class MotorcycleGalleryApp {

    private allMotorcycles: Motorcycle[] = [];

    private filterTerm: string = '';

    constructor() {
        const searchInput = document.querySelector<HTMLInputElement>('#name-filter-input');

        if (!searchInput) {
            return;
        }

        searchInput.addEventListener('input', () => {
            this.filterTerm = searchInput.value;
            this.renderMotorcycles();
        });
    }

    public async loadData(): Promise<void> {
        this.allMotorcycles = await fetchMotorcycles();
    }

    public renderMotorcycles(): void {
        const grid = document.querySelector<HTMLElement>('#motorcycle-grid');
        const resultsNumber = document.querySelector<HTMLElement>('#results-number');

        if (!grid || !resultsNumber) {
            return;
        }

        const filteredMotorcycles = this.allMotorcycles.filter((motorcycle) =>
            motorcycle.name.toLowerCase().includes(this.filterTerm.toLowerCase())
        );

        grid.innerHTML = filteredMotorcycles
            .map((motorcycle) => renderMotorcycleCard(motorcycle))
            .join('');

        resultsNumber.textContent = String(filteredMotorcycles.length);
    }
}

const app = new MotorcycleGalleryApp();

await app.loadData();
app.renderMotorcycles();