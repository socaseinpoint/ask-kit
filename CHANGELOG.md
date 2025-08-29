# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4] - 2024-12-28

### Technical
- Clean release with updated documentation
- All automation workflows tested and working correctly
- Git repository synchronized with npm registry

## [0.0.3] - 2024-12-28

### Fixed
- Fixed VERSION export to correctly show package version (now shows 0.0.3 instead of hardcoded 0.0.1)
- Added automatic version synchronization between package.json and src/index.ts

### Added
- `scripts/update-version.cjs` - Automatic version sync script
- `preversion` and `postversion` npm hooks for automated workflow
- ESLint ignore for .cjs files in scripts directory

### Technical
- Now when running `npm version patch/minor/major`, the VERSION constant is automatically updated
- Improved release workflow with automatic version management

## [0.0.2] - 2024-12-28

### Added
- Enhanced README.md with comprehensive usage examples
- npm badges (version, downloads, TypeScript)
- Real-world integration examples (Telegram mini-apps, Node.js servers)
- Complete API reference documentation
- Browser compatibility information
- CDN usage examples
- Comprehensive Usage Guide (`docs/USAGE.md`)
- CHANGELOG.md for version tracking
- Development setup instructions
- Troubleshooting section

### Improved
- Better package information display (size, files count, etc.)
- Enhanced Quick Start section with practical examples
- More detailed installation instructions (npm, yarn, pnpm)
- Contributing guidelines with development setup
- Documentation structure and navigation

### Technical
- Added CHANGELOG.md to published package files
- Verified package works correctly in both ESM and CommonJS environments
- Tested installation and usage from npm registry

## [0.0.1] - 2024-12-28

### Added
- Initial release of ASK Kit
- Basic TypeScript setup with Vite build system
- ESM and CommonJS module support  
- UMD build for browser compatibility
- Built-in TypeScript type declarations
- Example utility functions (`dump`, `VERSION`)
- Complete development toolchain:
  - ESLint configuration with TypeScript support
  - Prettier code formatting
  - Husky git hooks for pre-commit validation
- Comprehensive documentation:
  - Development guide
  - Deployment guide  
  - Quick deploy reference
- Working examples:
  - ESM TypeScript example
  - CommonJS TypeScript example
- npm package published at https://www.npmjs.com/package/ask-kit

### Technical Details
- Package size: 5.7 kB (gzipped)
- Unpacked size: 16.5 kB
- Total files: 13
- TypeScript support: Built-in declarations
- Node.js compatibility: 16+
- Browser support: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## [Unreleased]

### Planned
- Quest system module
- Reward system module  
- Analytics module
- Referral system module
- Notification system module
- Enhanced documentation
- More examples and templates
