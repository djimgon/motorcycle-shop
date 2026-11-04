import type { Motorcycle } from '../types/motorcycle';
import { fetchMotorcycles } from '../api/motorcycles';
import { renderMotorcycleCard } from '../components/motorcycleCard';

export class MotorcycleGalleryApp {
    private allMotorcycles: Motorcycle[] = [];
    private filterTerm: string = '';

    constructor() {
        this.initializeSearch();
    }

    private initializeSearch(): void {
        const searchInput = document.querySelector<HTMLInputElement>(
            '#name-filter-input'
        );

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

        const searchTerm = this.filterTerm.toLowerCase();

        const filteredMotorcycles = this.allMotorcycles.filter((motorcycle) =>
            motorcycle.name.toLowerCase().includes(searchTerm)
        );

        grid.innerHTML = filteredMotorcycles
            .map(renderMotorcycleCard)
            .join('');

        resultsNumber.textContent = String(filteredMotorcycles.length);
    }
}