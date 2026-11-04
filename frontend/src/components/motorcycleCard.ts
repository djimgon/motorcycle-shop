import type { Motorcycle } from '../types/motorcycle';

export function renderMotorcycleCard(motorcycle: Motorcycle): string {
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