import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    getCategories: () => ipcRenderer.invoke('get-categories'),
    getImages: (category) => ipcRenderer.invoke('get-images', category),
    createPreset: (preset) => ipcRenderer.invoke('create-preset', preset),
    getPresets: () => ipcRenderer.invoke('get-presets'),
    shuffleCategories: () => ipcRenderer.invoke('shuffle-categories'),
    setDisplayTime: (time) => ipcRenderer.invoke('set-display-time', time),
    startSlideshow: () => ipcRenderer.invoke('start-slideshow'),
    stopSlideshow: () => ipcRenderer.invoke('stop-slideshow'),
});