export interface ImageCategory {
    id: string;
    name: string;
    images: string[];
}

export interface SlideshowPreset {
    id: string;
    name: string;
    displayTime: number; // in milliseconds
    shuffle: boolean;
    categories: string[]; // array of category IDs
}