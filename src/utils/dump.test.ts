import { describe, it, expect, vi } from 'vitest'
import dump from './dump'

describe('dump utility', () => {
  it('should log the expected message', () => {
    // Mock console.log to capture output
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    // Call the dump function
    dump()

    // Verify it was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('I have no mouth but I must scream')
    expect(consoleSpy).toHaveBeenCalledTimes(1)

    // Restore the original console.log
    consoleSpy.mockRestore()
  })

  it('should be a function', () => {
    expect(typeof dump).toBe('function')
  })

  it('should not return anything', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const result = dump()

    expect(result).toBeUndefined()

    consoleSpy.mockRestore()
  })
})
