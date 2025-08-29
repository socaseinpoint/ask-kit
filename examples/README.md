# ASK Kit Examples

This directory contains TypeScript examples showing how to use the ask-kit package.

## Examples

### Basic Usage (ESM + TypeScript)
Location: `basic-usage/`

Shows how to import and use ask-kit with ES modules in TypeScript:

```bash
cd basic-usage
npm install
npm start
```

### CommonJS Usage (TypeScript)
Location: `commonjs-usage/`

Shows how to use ask-kit with CommonJS in TypeScript:

```bash
cd commonjs-usage
npm install
npm start
```

## Development

Each example includes:
- `src/index.ts` - TypeScript source code
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `dist/` - Compiled JavaScript output (generated)

### Build and Run Manually

```bash
# Build TypeScript
npm run build

# Run compiled JavaScript
node dist/index.js
```

## Running All Examples

From the examples directory:

```bash
# Test ESM TypeScript usage
cd basic-usage && npm install && npm start && cd ..

# Test CommonJS TypeScript usage
cd commonjs-usage && npm install && npm start && cd ..
```

Both examples should output:
```
=== ASK Kit TypeScript Example ===
Version: 0.0.1

Testing dump function:
I have no mouth but I must scream

=== TypeScript Example completed ===
```
