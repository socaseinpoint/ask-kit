# Usage Guide

Complete guide on how to use ASK Kit in your projects.

## Installation

```bash
npm install ask-kit
```

## Basic Usage

### TypeScript/ESM
```typescript
import { dump, VERSION } from 'ask-kit'

console.log(`Using ASK Kit v${VERSION}`)
dump() // Utility function
```

### JavaScript/CommonJS
```javascript
const { dump, VERSION } = require('ask-kit')

console.log(`Using ASK Kit v${VERSION}`)
dump() // Utility function
```

### Browser (UMD)
```html
<script src="https://unpkg.com/ask-kit@latest/dist/ask-kit.umd.cjs"></script>
<script>
  console.log('ASK Kit Version:', AskKit.VERSION)
  AskKit.dump()
</script>
```

## Available Functions

### `dump()`
Debug utility function that outputs a test message.

```typescript
import { dump } from 'ask-kit'

dump() // Logs: "I have no mouth but I must scream"
```

### `VERSION`
Current version of the ASK Kit package.

```typescript
import { VERSION } from 'ask-kit'

console.log(VERSION) // "0.0.1"
```

## TypeScript Support

ASK Kit includes built-in TypeScript declarations:

```typescript
import { dump, VERSION } from 'ask-kit'

// TypeScript knows the types
const version: string = VERSION
dump() // Function is properly typed
```

## Integration Examples

### React Component
```tsx
import React from 'react'
import { VERSION } from 'ask-kit'

export function AppHeader() {
  return (
    <header>
      <h1>My Telegram Mini App</h1>
      <p>Powered by ASK Kit v{VERSION}</p>
    </header>
  )
}
```

### Express Server
```javascript
const express = require('express')
const { VERSION, dump } = require('ask-kit')

const app = express()

app.get('/health', (req, res) => {
  dump() // Debug log
  res.json({ 
    status: 'ok', 
    askKit: VERSION 
  })
})

app.listen(3000, () => {
  console.log(`Server running with ASK Kit v${VERSION}`)
})
```

### Vite Project
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { VERSION } from 'ask-kit'

export default defineConfig({
  define: {
    __ASK_KIT_VERSION__: JSON.stringify(VERSION)
  }
})
```

## Package Information

- **Size**: 5.7 kB (gzipped)
- **Bundle formats**: ESM, CommonJS, UMD
- **TypeScript**: Built-in declarations
- **Dependencies**: Zero runtime dependencies
- **Node.js**: 16+ supported
- **Browsers**: Modern browsers supported

## CDN Usage

### unpkg
```html
<!-- Latest version -->
<script src="https://unpkg.com/ask-kit@latest/dist/ask-kit.umd.cjs"></script>

<!-- Specific version -->
<script src="https://unpkg.com/ask-kit@0.0.1/dist/ask-kit.umd.cjs"></script>
```

### jsDelivr
```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/npm/ask-kit@latest/dist/ask-kit.umd.cjs"></script>

<!-- Specific version -->
<script src="https://cdn.jsdelivr.net/npm/ask-kit@0.0.1/dist/ask-kit.umd.cjs"></script>
```

## Troubleshooting

### Module Resolution Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Make sure you have TypeScript 4.3+ installed:
```bash
npm install -D typescript@latest
```

### ESM Import Issues
Ensure your `package.json` has:
```json
{
  "type": "module"
}
```

Or use `.mjs` file extension for ES modules.

## Support

- 📦 **npm**: https://www.npmjs.com/package/ask-kit
- 🐙 **GitHub**: https://github.com/socaseinpoint/ask-kit
- 📧 **Email**: socaseinpoint@gmail.com
- 💬 **Telegram**: @socaseinpoint
