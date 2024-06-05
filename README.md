# My Blog Project

This is a simple blog project built with React and Tailwind CSS. The project includes basic pages like Home, About, BlogPost, and Comments.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/my-blog-project.git
   cd my-blog-project```
2. **Install dependencies:**
   ```sh
   npm install ```
3. **Set up Tailwind CSS:**

Ensure tailwindcss and postcss are installed and configured. You should have tailwind.config.js and postcss.config.js in the root directory. If not, create them with the following content:

**`tailwind.config.js`:**
```sh 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
**`postcss.config.js`:**
```sh
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
## Usage
**To start the development server, run:**
```sh 
npm start
```
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.
