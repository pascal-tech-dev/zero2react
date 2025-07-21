# zero2react Monorepo

This repository is a npm Workspaces monorepo that houses multiple packages and apps:

## Structure

```
.
├── basics/           # Foundational HTML/CSS/JS packages
├── react/
│   └── core/
│       ├── cra/      # React app (Create React App)
│       ├── vite/     # React app (Vite, if present)
│       └── styling/  # Shared styling resources
├── projects/         # Example apps (todo, blog, shop-cart, etc.)
├── .devcontainer/    # VS Code dev container setup
├── package.json      # Monorepo root config
├── prettier.config.cjs
├── eslint.config.mjs
└── README.md         # This file
```

## Getting Started

### Prerequisites

- [VS Code](https://code.visualstudio.com/) (recommended for devcontainer support)
- Docker (for devcontainer)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/zero2react.git
   cd zero2react
   ```
2. Open the project in VS Code:
   ```bash
   code .
   ```
3. If using the devcontainer, VS Code will prompt you to reopen in the container.  
   Follow the prompts to set up the development environment.
4. After the devcontainer is set up, you can run the projects using npm scripts defined in root `package.json`.

## Notes

- The `basics/` directory contains foundational packages for HTML, CSS, and JavaScript.
- The `react/core/cra/` directory contains a Create React App setup. \
  To create a new React app with Create React App, you can run:
  ```bash
  npx create-react-app my-app
  ```
  If you want to create with TypeScript, use:
  ```bash
  npx create-react-app my-app --template typescript
  ```
