# Deployment Guide

This guide explains how to deploy the ask-kit package to npm.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm CLI**: Make sure you have npm installed and are logged in
3. **Repository**: Push your code to GitHub (optional but recommended)

## Pre-deployment Checklist

### 1. Login to npm
```bash
npm login
```
Enter your npm username, password, and email.

### 2. Verify Package Configuration
Check that `package.json` has all required fields:
- ✅ `name` - unique package name
- ✅ `version` - semantic version
- ✅ `description` - clear description
- ✅ `main`, `module`, `types` - correct entry points
- ✅ `files` - what to include in package
- ✅ `keywords` - for discoverability
- ✅ `author` - your information
- ✅ `license` - license type
- ✅ `repository` - GitHub URL (optional)

### 3. Test Build Process
```bash
# Clean previous builds
rm -rf dist/

# Test the full build process
npm run prepublishOnly
```

This runs:
- `npm run lint:check` - ESLint validation
- `npm run type-check` - TypeScript type checking
- `npm run build` - Build the package

### 4. Test Package Installation
Test your package locally before publishing:

```bash
# In ask-kit directory
npm pack

# This creates ask-kit-0.0.1.tgz
# Test installing it in another project:
cd ../test-project
npm install ../ask-kit/ask-kit-0.0.1.tgz
```

### 5. Check Package Contents
```bash
# See what will be published
npm pack --dry-run

# Or check the actual tarball contents
tar -tzf ask-kit-0.0.1.tgz
```

## Deployment Steps

### 1. Update Version
Update version in `package.json` following [semantic versioning](https://semver.org/):

```bash
# Patch version (0.0.1 -> 0.0.2)
npm version patch

# Minor version (0.0.1 -> 0.1.0)
npm version minor

# Major version (0.0.1 -> 1.0.0)
npm version major
```

This automatically:
- Updates `package.json`
- Creates a git commit
- Creates a git tag

### 2. Push to Git (if using version control)
```bash
git push --follow-tags
```

### 3. Publish to npm

#### First-time Publishing
```bash
npm publish
```

#### Publishing Updates
```bash
npm publish
```

#### Publishing Beta/Alpha Versions
```bash
# For beta versions
npm version prerelease --preid=beta
npm publish --tag beta

# Users install with: npm install ask-kit@beta
```

### 4. Verify Publication
- Check your package at: `https://www.npmjs.com/package/ask-kit`
- Test installation: `npm install ask-kit`

## Automated Deployment (Optional)

### GitHub Actions
Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests and build
        run: npm run prepublishOnly
        
      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add `NPM_TOKEN` to your GitHub repository secrets.

## Post-Deployment

### 1. Update Documentation
- Update README with installation instructions
- Add changelog entry
- Update version badges if any

### 2. Announce Release
- GitHub Release notes
- Social media
- Community channels

## Troubleshooting

### Package Name Already Exists
```bash
# Check if name is available
npm info ask-kit

# If taken, try scoped package
npm init --scope=@yourusername
# Results in @yourusername/ask-kit
```

### Version Already Published
```bash
# Increment version and try again
npm version patch
npm publish
```

### Build Errors
```bash
# Clean and rebuild
rm -rf dist/ node_modules/
npm install
npm run build
```

### Authentication Issues
```bash
# Re-login
npm logout
npm login

# Check current user
npm whoami
```

## Quick Deploy Commands

```bash
# Complete deployment workflow
npm run lint:check && npm run type-check && npm run build
npm version patch
git push --follow-tags
npm publish
```

## Testing Before Publishing

```bash
# 1. Test build process
npm run prepublishOnly

# 2. See what will be published
npm pack --dry-run

# 3. Create test package
npm pack

# 4. Test in another project
cd ../test-project
npm install ../ask-kit/ask-kit-0.0.1.tgz
```
