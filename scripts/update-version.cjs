#!/usr/bin/env node

/**
 * Script to update VERSION in src/index.ts from package.json
 */

const fs = require('fs')
const path = require('path')

// Read package.json
const packageJsonPath = path.join(__dirname, '../package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
const version = packageJson.version

// Read src/index.ts
const indexPath = path.join(__dirname, '../src/index.ts')
const indexContent = fs.readFileSync(indexPath, 'utf8')

// Update VERSION export
const updatedContent = indexContent.replace(
  /export const VERSION = '[^']*'/,
  `export const VERSION = '${version}'`
)

// Write updated content
fs.writeFileSync(indexPath, updatedContent, 'utf8')

console.log(`✅ Updated VERSION to ${version} in src/index.ts`)
