import React from 'react';
import styled from 'styled-components';
import expect, { Assertion } from '../../utils/expect';

interface Props {
  describe?: string
  it?: string
  actual?: any
  expected?: any
  to?: 'be' | 'equal'
  children?: React.ReactNode
}

const Indented = styled.div`
  margin-left: 2rem;
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
        {assertion.result && assertion.ifTrue && (
          <Indented>
            {assertion.ifTrue}
          </Indented>
        )}
        {!assertion.result && assertion.ifFalse && (
          <Indented>
            {assertion.ifFalse}
          </Indented>
        )}
      </div>
    )
  }

  return null
}

export default Test;