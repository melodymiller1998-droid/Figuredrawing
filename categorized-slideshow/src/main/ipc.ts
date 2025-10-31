import { ipcMain, IpcMainEvent } from 'electron';
import { ImageCategory, SlideshowPreset } from '../common/types';
import { getPresets, savePreset } from '../common/utils';

const categories: ImageCategory[] = []; // Array to hold image categories
let currentPreset: SlideshowPreset | null = null; // Currently selected preset

// Handle request to get image categories
ipcMain.on('request-categories', (event: IpcMainEvent) => {
    event.reply('response-categories', categories);
});

// Handle request to get current preset
ipcMain.on('request-current-preset', (event: IpcMainEvent) => {
    event.reply('response-current-preset', currentPreset);
});

// Handle request to save a new preset
ipcMain.on('save-preset', (event: IpcMainEvent, preset: SlideshowPreset) => {
    savePreset(preset);
    currentPreset = preset;
    event.reply('preset-saved', true);
});

// Handle request to load presets
ipcMain.on('load-presets', (event: IpcMainEvent) => {
    const presets = getPresets();
    event.reply('response-presets', presets);
});

// Handle request to shuffle categories
ipcMain.on('shuffle-categories', (event: IpcMainEvent) => {
    const shuffledCategories = categories.sort(() => Math.random() - 0.5);
    event.reply('response-shuffled-categories', shuffledCategories);
});