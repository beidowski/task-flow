# TaskFlow - Task Manager

A modern, interactive task management application built with **React**, **Vite**, **Tailwind CSS**, and **JavaScript**
## Features

✨ **Modern UI**
- Clean, gradient-based design with smooth animations
- Fully responsive layout (mobile-friendly)
- Glassmorphism header with backdrop blur effects
- Hover interactions and smooth transitions

📋 **Task Management**
- Add new tasks with title, category, and priority
- Mark tasks as complete/incomplete with animated checkmarks
- Delete tasks with one click
- Task categories: Design, Development, Documentation
- Priority levels: High, Medium, Low

📊 **Progress Tracking**
- Real-time progress bar showing completion percentage
- Task counter in the header
- Visual indicators for completed tasks

🔍 **Smart Filtering**
- Filter tasks by status: All, Active, Completed
- Live counter badges on filter tabs
- Filtered view updates in real-time

## Tech Stack

- **React 19.2.3** - UI library with hooks
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **JavaScript (ES6+)** - No TypeScript required
- **clsx + tailwind-merge** - Utility functions for class merging

## Project Structure

```
├── src/
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   ├── index.css            # Tailwind CSS imports
│   └── utils/
│       └── cn.js            # Class name utility function
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port)

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The compiled files will be in the `dist/` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Usage

### Adding a Task
1. Fill in the task title in the input field
2. Select a category from the dropdown (Design, Dev, or Docs)
3. Select a priority level (High, Medium, or Low)
4. Click the "Add" button or press Enter

### Managing Tasks
- **Mark as Complete**: Click the circular checkbox next to any task
- **Delete a Task**: Hover over a task and click the X icon
- **Filter Tasks**: Use the filter tabs to view All, Active, or Completed tasks

### Tracking Progress
- The progress bar at the top shows your completion percentage
- The counter shows how many tasks you've completed vs. total tasks

## Key Components

### App Component (App.jsx)
The main component handling:
- State management with `useState`
- Task CRUD operations (Create, Read, Update, Delete)
- Filtering logic
- Conditional rendering

### Styling
- All styles use **Tailwind CSS** classes
- Custom utility function `cn()` for merging Tailwind classes
- Responsive design using Tailwind breakpoints
- Gradient effects and smooth animations

## Color Scheme

### Categories
- **Design**: Violet/Purple
- **Dev**: Blue
- **Docs**: Teal

### Priorities
- **High**: Red
- **Medium**: Amber
- **Low**: Emerald

### Accents
- Primary: Indigo/Violet gradient
- Backgrounds: Slate/Gray grayscale

## Browser Support

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Performance

- **Vite Single File Plugin**: Builds to a single HTML file for easy deployment
- **Optimized Production Build**: ~247KB total size with gzip compression at ~75KB
- **Fast Development**: Hot Module Replacement (HMR) for instant updates

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Built With 💜

- React - For building interactive UIs
- Vite - For blazing-fast development and builds
- Tailwind CSS - For beautiful, utility-first styling
- JavaScript ES6+ - For clean, modern code without TypeScript overhead

---

**Start your day organized with TaskFlow!** 🚀
