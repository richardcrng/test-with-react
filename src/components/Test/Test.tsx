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

const Block = styled.div`
`

const Indented = styled.div`
  margin-left: 2rem;
`

const ErrorMessage = styled.span`
  color: red;
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
      <Block>
        {blockDescription}
        <Indented>{children}</Indented>
      </Block>
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
            <ErrorMessage>{assertion.ifFalse}</ErrorMessage>
          </Indented>
        )}
      </div>
    )
  }

  return null
}

export default Test;