import React from 'react';
import styled from 'styled-components';
import expect, { Assertion } from '../../../utils/expect';

interface Props {
  describe?: string
  it?: string
  actual?: any
  expected?: any
  to?: 'be' | 'equal'
  children?: React.ReactChildren
}

const Indented = styled.div`
  margin-left: 10px;
`

function Test({
  describe: blockDescription,
  it: testDescription,
  actual,
  expected,
  to = 'be',
  children
} : Props) {
  if (blockDescription) {
    return (
      <div>
        {blockDescription}
        <Indented>{children}</Indented>
      </div>
    )
  }

  if (testDescription) {
    // const expectation = expect(actual)
    let assertion: Assertion

    switch (to) {
      case 'be':
        assertion = expect(actual).toBe(expected); break
      case 'equal':
        assertion = expect(actual).toEqual(expected); break
      default :
        assertion = expect(actual).toBe(expected); break
    }

    return (
      <div>
        {assertion.result ? `✅` : `❌`}
        <span> </span>
        {testDescription}
      </div>
    )
  }

  return null
}

export default Test;