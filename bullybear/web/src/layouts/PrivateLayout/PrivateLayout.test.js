import { render } from '@redwoodjs/testing/web'

import PrivateLayout from './PrivateLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivateLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivateLayout />)
    }).not.toThrow()
  })
})
