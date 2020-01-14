import { equals } from 'ramda'

class Expectation {
  actual: any

  constructor(value: any) {
    this.actual = value
  }

  toBe(prediction: any) {
    return new Test(
      this.actual === prediction,
      `Expected ${this.actual} to be ${prediction}`
    )
  }

  toEqual(prediction: any) {
    return new Test(
      equals(this.actual, prediction),
      `Expected ${this.actual} to be ${prediction}`
    )
  }
}

class Test {
  result: boolean
  ifFalse?: string
  ifTrue?: string

  constructor(testBoolean: boolean, ifFalse?: string, ifTrue?: string) {
    this.result = testBoolean
    this.ifFalse = ifFalse
    this.ifTrue = ifTrue
  }
}

const expect = (value: any) => new Expectation(value)

export default expect