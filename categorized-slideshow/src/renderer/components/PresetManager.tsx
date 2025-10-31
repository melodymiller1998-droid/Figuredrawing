import React, { useState } from 'react';

const PresetManager = () => {
    const [presets, setPresets] = useState([]);
    const [newPresetName, setNewPresetName] = useState('');

    const addPreset = () => {
        if (newPresetName.trim()) {
            setPresets([...presets, { name: newPresetName, images: [] }]);
            setNewPresetName('');
        }
    };

    const removePreset = (presetName) => {
        setPresets(presets.filter(preset => preset.name !== presetName));
    };

    return (
        <div className="preset-manager">
            <h2>Preset Manager</h2>
            <input
                type="text"
                value={newPresetName}
                onChange={(e) => setNewPresetName(e.target.value)}
                placeholder="New Preset Name"
            />
            <button onClick={addPreset}>Add Preset</button>
            <ul>
                {presets.map((preset, index) => (
                    <li key={index}>
                        {preset.name}
                        <button onClick={() => removePreset(preset.name)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PresetManager;