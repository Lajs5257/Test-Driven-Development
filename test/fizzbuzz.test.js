import { describe, expect, it } from 'vitest'

/*
Write a funtion that receives a number and returns:
- "fizz" if the number is divisible by 3
- "buzz" if the number is divisible by 5
- "fizzbuzz" if the number is divisible by 3 and 5
- the number if it is not divisible by 3 or 5
*/
const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Argument must be a number')
  if (Number.isNaN(number)) throw new Error('Argument must be a number')

  return 1
}

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })
  it('should throw an error if the argument is not a number', () => {
    expect(() => fizzbuzz()).toThrow()
  })
  it('should throw a specific error message if the argument is not a number', () => {
    expect(() => fizzbuzz()).toThrow('Argument must be a number')
  })
  it('should throw a specific error message if the argument is not a number', () => {
    expect(() => fizzbuzz(NaN)).toThrow('Argument must be a number')
  })
  it('should return 1 if the argument is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
})
