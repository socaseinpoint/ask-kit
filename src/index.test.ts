import { describe, it, expect, vi } from 'vitest'
import { dump, VERSION } from './index'

describe('ASK Kit main exports', () => {
  describe('VERSION export', () => {
    it('should export VERSION as a string', () => {
      expect(typeof VERSION).toBe('string')
    })

    it('should have a valid semver format', () => {
      // Check if VERSION matches semver pattern (e.g., 0.0.5)
      const semverRegex = /^\d+\.\d+\.\d+(-[\w.-]+)?$/
      expect(VERSION).toMatch(semverRegex)
    })

    it('should not be empty', () => {
      expect(VERSION).toBeTruthy()
      expect(VERSION.length).toBeGreaterThan(0)
    })
  })

  describe('dump export', () => {
    it('should export dump function', () => {
      expect(typeof dump).toBe('function')
    })

    it('should call dump function without errors', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

      expect(() => dump()).not.toThrow()
      expect(consoleSpy).toHaveBeenCalled()

      consoleSpy.mockRestore()
    })
  })

  describe('default export', () => {
    it('should have default export with VERSION', async () => {
      const defaultExport = (await import('./index')).default
      expect(defaultExport).toBeDefined()
      expect(defaultExport.VERSION).toBe(VERSION)
    })
  })
})
