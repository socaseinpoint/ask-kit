# Development Guide

This document describes the development setup and workflow for ASK Kit.

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Setup

1. Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd ask-kit
npm install
```

2. Husky will automatically install git hooks during `npm install` via the `prepare` script.

## Code Quality

### ESLint

ESLint is configured to enforce code quality and consistency:

```bash
# Check for linting errors
npm run lint:check

# Fix auto-fixable linting errors
npm run lint
```

### Prettier

Prettier handles code formatting:

```bash
# Check formatting
npm run format:check

# Format code
npm run format
```

### TypeScript

TypeScript provides type safety:

```bash
# Type check without emitting files
npm run type-check
```

## Build

```bash
# Build the library
npm run build

# Development mode with hot reload
npm run dev
```

## Pre-commit Hooks

Husky is configured to run quality checks before each commit:

- `npm run lint:check` - ESLint validation
- `npm run format:check` - Prettier formatting validation  
- `npm run type-check` - TypeScript type checking

If any check fails, the commit will be rejected.

## Project Structure

```
ask-kit/
├── src/                    # Source code
│   ├── index.ts           # Main entry point
│   └── utils/             # Utility modules
├── examples/              # Usage examples
│   ├── basic-usage/       # ESM TypeScript example
│   └── commonjs-usage/    # CommonJS TypeScript example
├── dist/                  # Build output (generated)
├── docs/                  # Documentation
├── .husky/                # Git hooks
├── eslint.config.js       # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── package.json          # Package configuration
```

## Scripts

- `npm run dev` - Development mode
- `npm run build` - Build for production
- `npm run lint` - Fix linting issues
- `npm run lint:check` - Check linting without fixing
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting without fixing
- `npm run type-check` - Run TypeScript type checking
- `npm run prepublishOnly` - Pre-publish validation (runs automatically)

## Adding New Modules

1. Create your module in `src/modules/your-module/`
2. Export it from `src/index.ts`
3. Add TypeScript types if needed
4. Run `npm run build` to generate the distribution files
5. Test with the examples in `examples/`

## Release Process

1. Update version in `package.json`
2. Run `npm run build` to ensure everything builds
3. Run `npm run lint:check && npm run format:check && npm run type-check` to validate
4. Commit changes (pre-commit hooks will run automatically)
5. Create git tag: `git tag v0.0.2`
6. Push: `git push --tags`
7. Publish: `npm publish` (runs `prepublishOnly` automatically)
