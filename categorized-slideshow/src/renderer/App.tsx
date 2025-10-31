import React, { useState, useEffect } from 'react';
import Slideshow from './components/Slideshow';
import CategoryPanel from './components/CategoryPanel';
import PresetManager from './components/PresetManager';
import { ImageCategory, SlideshowPreset } from '../common/types';
import { getPresets } from '../common/utils';

const App: React.FC = () => {
    const [categories, setCategories] = useState<ImageCategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentPreset, setCurrentPreset] = useState<SlideshowPreset | null>(null);

    useEffect(() => {
        // Load categories and presets on component mount
        const loadCategories = async () => {
            // Fetch or define categories here
            const fetchedCategories: ImageCategory[] = await fetchCategories();
            setCategories(fetchedCategories);
        };

        loadCategories();
        setCurrentPreset(getPresets()[0]); // Set default preset
    }, []);

    const fetchCategories = async (): Promise<ImageCategory[]> => {
        // Implement fetching logic for categories
        return [];
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
    };

    const handlePresetChange = (preset: SlideshowPreset) => {
        setCurrentPreset(preset);
    };

    return (
        <div className="app">
            <h1>Categorized Slideshow</h1>
            <CategoryPanel categories={categories} onSelect={handleCategorySelect} />
            <PresetManager presets={getPresets()} onChange={handlePresetChange} />
            {selectedCategory && currentPreset && (
                <Slideshow category={selectedCategory} preset={currentPreset} />
            )}
        </div>
    );
};

export default App;