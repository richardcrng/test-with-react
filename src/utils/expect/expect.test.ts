import customExpect from './index'

describe('expect', () => {
  describe('toBe matcher', () => {
    describe('matches for strict equality', () => {
      test('with arrays', () => {
        const arrOne = [1, 2, 3]
        const arrTwo = [1, 2, 3]
        expect(customExpect(arrOne).toBe(arrOne).result).toBe(true)
        expect(customExpect(arrOne).toBe(arrTwo).result).toBe(false)
      })

      test('with numbers', () => {
        expect(customExpect(4).toBe(4).result).toBe(true)
        expect(customExpect(3).toBe(4).result).toBe(false)
      })

      test('with strings', () => {
        expect(customExpect('foobar').toBe('foobar').result).toBe(true)
        expect(customExpect('foobar').toBe('Foobar').result).toBe(false)
      })
    })
  })

  describe('toEqual matcher', () => {
    describe('matches for deep value equality', () => {
      test('with arrays', () => {
        const arrOne = [1, 2, 3]
        const arrTwo = [1, 2, 3]
        expect(customExpect(arrOne).toEqual(arrOne).result).toBe(true)
        expect(customExpect(arrOne).toEqual(arrTwo).result).toBe(true)
      })

      test('with numbers', () => {
        expect(customExpect(4).toEqual(4).result).toBe(true)
        expect(customExpect(3).toEqual(4).result).toBe(false)
      })

      test('with strings', () => {
        expect(customExpect('foobar').toEqual('foobar').result).toBe(true)
        expect(customExpect('foobar').toEqual('Foobar').result).toBe(false)
      })
    })
  })
})