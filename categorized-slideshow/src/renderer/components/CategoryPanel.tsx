import React from 'react';

interface CategoryPanelProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const CategoryPanel: React.FC<CategoryPanelProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-panel">
            <h2>Select a Category</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category} className={selectedCategory === category ? 'active' : ''}>
                        <button onClick={() => onSelectCategory(category)}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPanel;