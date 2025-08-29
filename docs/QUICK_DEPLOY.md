# Quick Deploy Guide

## 🚀 Fast Track to npm Publishing

### Prerequisites
```bash
# 1. Login to npm (one time setup)
npm login
```

### Deploy Commands
```bash
# 1. Test everything works
npm run prepublishOnly

# 2. Check what will be published
npm pack --dry-run

# 3. Publish to npm
npm publish
```

### For Updates
```bash
# 1. Update version
npm version patch    # 0.0.1 -> 0.0.2
# or
npm version minor    # 0.0.1 -> 0.1.0
# or  
npm version major    # 0.0.1 -> 1.0.0

# 2. Push to git (if using)
git push --follow-tags

# 3. Publish
npm publish
```

### Verification
- Check: https://www.npmjs.com/package/ask-kit
- Test install: `npm install ask-kit`

### Troubleshooting
```bash
# If package name is taken
npm info ask-kit

# If authentication fails
npm logout
npm login

# If build fails
rm -rf dist/ node_modules/
npm install
npm run build
```

That's it! 🎉
