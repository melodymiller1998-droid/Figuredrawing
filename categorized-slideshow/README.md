# Categorized Slideshow

## Overview
The Categorized Slideshow is a tool designed to display precompiled categorized image folders in a slideshow format. Users can customize display times, create presets, and shuffle categories for a dynamic viewing experience.

## Features
- **Categorized Image Display**: Organize images into categories for easy navigation.
- **Customizable Display Times**: Set the duration for each image displayed in the slideshow.
- **Presets Management**: Create and manage presets to save and load different slideshow configurations.
- **Shuffle Categories**: Randomize the order of categories for a varied viewing experience.

## Project Structure
```
categorized-slideshow
├── src
│   ├── main
│   │   ├── main.ts          # Entry point for the Electron main process
│   │   ├── preload.ts       # Sets up context bridge for secure communication
│   │   └── ipc.ts           # Manages inter-process communication
│   ├── renderer
│   │   ├── index.html       # Main HTML file for the renderer process
│   │   ├── index.tsx        # Entry point for the React application
│   │   ├── App.tsx          # Main App component managing state and layout
│   │   ├── components
│   │   │   ├── Slideshow.tsx # Component for displaying images in slideshow
│   │   │   ├── CategoryPanel.tsx # Component for selecting image categories
│   │   │   └── PresetManager.tsx  # Component for managing presets
│   │   └── styles
│   │       └── main.css     # CSS styles for the application
│   ├── common
│   │   ├── types.ts         # TypeScript types and interfaces
│   │   └── utils.ts         # Utility functions for common tasks
│   └── presets
│       └── default.json     # Default preset configuration
├── presets
│   └── sample-preset.json   # Sample preset configuration
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
├── electron-builder.yml      # Configuration for building the Electron app
├── .vscode
│   └── devcontainer.json     # Development container settings
└── README.md                 # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd categorized-slideshow
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

## Usage Guidelines
- Navigate through categories using the Category Panel.
- Adjust display times and create presets using the Preset Manager.
- Enjoy a customizable slideshow experience with shuffled categories. 

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.