import './style.css';

import { MotorcycleGalleryApp } from './app/MotorcycleGalleryApp';

async function initializeApp(): Promise<void> {
    const app = new MotorcycleGalleryApp();

    try {
        await app.loadData();
        app.renderMotorcycles();
    } catch (error) {
        console.error('Failed to initialize motorcycle shop:', error);
    }
}

void initializeApp();