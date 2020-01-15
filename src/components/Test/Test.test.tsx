import React from 'react';
import { render } from '@testing-library/react';
import Test from './index'

describe('Test', () => {
  describe('Description block', () => {
    it('shows the description text', () => {
      const { container } = render(<Test describe='Some test description' />);
      expect(container).toHaveTextContent(/some test description/i);
    })
  })

  describe('Test block', () => {
    it('shows the test description', () => {
      const { container } = render((
        <Test
          it='Says 4 is equal to 4'
        />
      ));
      expect(container).toHaveTextContent(/says 4 is equal to 4/i);
    })

    it('shows a tick emoji when test is passed', () => {
      const { container } = render((
        <Test
          it='Says 4 is equal to 4'
          actual={4}
          expected={4}
        />
      ));
      expect(container).toHaveTextContent(/says 4 is equal to 4/i);
      expect(container).toHaveTextContent(`✅`);
    })

    it('shows a cross emoji when test is passed', () => {
      const { container } = render((
        <Test
          it='Says 4 is equal to 5'
          actual={4}
          expected={5}
        />
      ));
      expect(container).toHaveTextContent(/says 4 is equal to 5/i);
      expect(container).toHaveTextContent(`❌`);
    })

    it('matches for strict equality by default', () => {
      const { container } = render((
        <Test
          it='Says [1, 2, 3] is equal to [1, 2, 3]'
          actual={[1, 2, 3]}
          expected={[1, 2, 3]}
        />
      ));
      expect(container).toHaveTextContent(`❌`);
    })

    it("can match for value equality when passed to = 'equal' prop", () => {
      const { container } = render((
        <Test
          it='Says [1, 2, 3] is equal to [1, 2, 3]'
          actual={[1, 2, 3]}
          expected={[1, 2, 3]}
          to='equal'
        />
      ));
      expect(container).toHaveTextContent(`✅`);
    })

    it("explains the discrepancy by default", () => {
      const { container } = render((
        <Test
          it='Says 4 is equal to 5'
          actual={4}
          expected={5}
        />
      ));
      expect(container).toHaveTextContent(/expected 4 to be 5/i)
    })
  })
})