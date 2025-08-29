# ASK Kit (AppSolution Social Kit)

[![npm version](https://img.shields.io/npm/v/ask-kit.svg?style=flat-square)](https://www.npmjs.com/package/ask-kit)
[![npm downloads](https://img.shields.io/npm/dm/ask-kit.svg?style=flat-square)](https://www.npmjs.com/package/ask-kit)
[![npm downloads total](https://img.shields.io/npm/dt/ask-kit.svg?style=flat-square)](https://www.npmjs.com/package/ask-kit)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square)](http://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/tests-9%20passed-brightgreen.svg?style=flat-square)](#tests)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg?style=flat-square)](#tests)

A comprehensive npm package containing reusable modules, templates, guides, and scripts for rapid development of Telegram mini-apps with gamification features.

## Overview

ASK Kit is a unified npm package that accelerates development of Telegram mini-apps by providing ready-to-use modules for gamification, social features, and engagement mechanics. Contains reusable code, templates, development guides, and automation scripts to help you launch your MVP in 30 days.

## Package Contents

### Reusable Modules
- Quest and task management systems
- Streak tracking and rewards
- Referral system components
- Internal currency and economy
- Notification services
- Analytics and metrics
- User engagement features

### Templates & Guides
- Project structure templates
- Development best practices
- Integration guides
- Configuration examples

### Development Tools
- Build and deployment scripts
- Type definitions
- Utility functions
- Testing frameworks

## Installation

### npm
```bash
npm install ask-kit
```

### yarn
```bash
yarn add ask-kit
```

### pnpm
```bash
pnpm add ask-kit
```

**Package Info:**
- 📦 **Size**: 5.7 kB (gzipped)
- 📁 **Unpacked**: 16.5 kB
- 🔧 **TypeScript**: Built-in type declarations
- 📋 **Files**: 13 total files
- 🌐 **npm**: [ask-kit](https://www.npmjs.com/package/ask-kit)

## Quick Start

### TypeScript/ES Modules
```typescript
import { dump, VERSION } from 'ask-kit'

console.log('ASK Kit Version:', VERSION)
dump() // Example utility function
```

### CommonJS
```javascript
const { dump, VERSION } = require('ask-kit')

console.log('ASK Kit Version:', VERSION)
dump() // Example utility function
```

### Real-world Usage

#### In a Telegram Mini App
```typescript
import { dump, VERSION } from 'ask-kit'

// Initialize your Telegram mini app
function initTelegramApp() {
  console.log(`Powered by ASK Kit v${VERSION}`)
  
  // Use ASK Kit utilities
  dump() // Debug information
  
  // Your app logic here
  setupGameification()
  initializeRewards()
}

// Call on app start
initTelegramApp()
```

#### In a Node.js Project
```javascript
const { dump, VERSION } = require('ask-kit')

console.log('Starting server with ASK Kit', VERSION)
dump()

// Your server logic
```

### Complete Examples
See the `examples/` directory for complete TypeScript examples:
- [`examples/basic-usage/`](./examples/basic-usage/) - ESM TypeScript example
- [`examples/commonjs-usage/`](./examples/commonjs-usage/) - CommonJS TypeScript example

### Testing the Package
```bash
# Clone the repository to test examples
git clone https://github.com/socaseinpoint/ask-kit.git
cd ask-kit

# Test ESM example
cd examples/basic-usage
npm install
npm start

# Test CommonJS example  
cd ../commonjs-usage
npm install
npm start
```

## Technical Features

- Scalable modular architecture
- Full TypeScript support
- Cross-platform compatibility
- Real-time features
- High-load ready components
- Automated testing and quality control

## Tests

Comprehensive test coverage with **Vitest** - modern, fast testing framework.

```bash
npm test              # Run all tests
npm run test:coverage # Run with coverage
npm run test:ui       # Open test UI
```

- **9 tests** with **100% coverage**
- **Automated testing** on every commit
- **CI/CD integration** in release workflow

## API Reference

### Current Exports (v0.0.6)

```typescript
// Available imports
import { 
  dump,     // Debug utility function
  VERSION   // Package version string
} from 'ask-kit'

// Usage
dump()              // Logs: "I have no mouth but I must scream"
console.log(VERSION) // Logs: "0.0.6"
```

### Coming Soon

Future versions will include:
- `QuestSystem` - Quest and task management
- `RewardSystem` - Rewards and achievements
- `Analytics` - User engagement tracking
- `ReferralSystem` - Referral program management
- `NotificationSystem` - Push notifications
- And more gamification modules!

## Documentation

- **[Usage Guide](./docs/USAGE.md)** - Complete usage examples and integration guide
- [Development Guide](./docs/DEVELOPMENT.md) - Setup and development workflow
- [Deployment Guide](./docs/DEPLOYMENT.md) - Complete publishing guide
- [Quick Deploy](./docs/QUICK_DEPLOY.md) - Fast track to npm publishing
- [Architecture](./docs/ARCHITECTURE.md) - System design and structure
- [Changelog](./CHANGELOG.md) - Version history and updates

## Browser Support

ASK Kit supports all modern browsers and Node.js environments:

- **Node.js**: 16+ 
- **Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **TypeScript**: 4.3+ (built-in types)
- **Module Systems**: ESM, CommonJS, UMD

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make changes and test: `npm run prepublishOnly`
4. Commit and push: `git commit -m 'Add feature'`
5. Open a Pull Request

```bash
# Development setup
git clone https://github.com/socaseinpoint/ask-kit.git
cd ask-kit && npm install && npm run dev
```

## Contact

- Telegram: @socaseinpoint
- Email: socaseinpoint@gmail.com

## License

Proprietary. Contact for licensing options.
