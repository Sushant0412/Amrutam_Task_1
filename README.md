# Project: React + TypeScript + Vite Starter

## Overview

This project is a starter template for building React applications using TypeScript and Vite. It includes a minimal setup with Hot Module Replacement (HMR) for fast development, ESLint rules for code quality, and options to expand and configure ESLint for production-level applications. It supports both Babel and SWC for fast refresh during development.

---

## Features

- **Vite**: Blazing-fast build tool with a modern development server.
- **React**: Component-based UI library.
- **TypeScript**: Statically typed JavaScript for improved code quality.
- **HMR**: Hot Module Replacement for instant feedback during development.
- **ESLint**: Configurable linting rules to maintain consistent code quality.
- **SWC/Babel**: Options for fast and reliable code transformation.

---

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   Use npm or yarn to install the required packages:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**

   Run the development server to start coding:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be accessible at `http://localhost:5173`.

4. **Build the Project**

   Generate a production build:

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview the Build**

   Test the production build locally:

   ```bash
   npm run preview
   # or
   yarn preview
   ```

---

## ESLint Configuration

This template includes a basic ESLint setup. For production applications, follow these steps to enable type-aware lint rules:

1. Update the `parserOptions` in ESLint configuration:
   ```js
   export default tseslint.config({
       languageOptions: {
           parserOptions: {
               project: ['./tsconfig.node.json', './tsconfig.app.json'],
               tsconfigRootDir: import.meta.dirname,
           },
       },
   });
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Add additional stylistic rules (optional):
   ```js
   ...tseslint.configs.stylisticTypeChecked
   ```

4. Install the React ESLint plugin:
   ```bash
   npm install eslint-plugin-react --save-dev
   ```

5. Update the ESLint configuration:
   ```js
   import react from 'eslint-plugin-react';

   export default tseslint.config({
       settings: { react: { version: '18.3' } },
       plugins: { react },
       rules: {
           ...react.configs.recommended.rules,
           ...react.configs['jsx-runtime'].rules,
       },
   });
   ```

---

## Additional Notes

- For Babel-based fast refresh, use `@vitejs/plugin-react`.
- For SWC-based fast refresh, use `@vitejs/plugin-react-swc`.
- Modify `eslint.config.js` as needed for your application.

---

## License

This project is licensed under [Your License]. Replace this section with the appropriate license information.

---

Happy coding! 🚀
