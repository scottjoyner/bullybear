import { render } from '@redwoodjs/testing/web'

import AssetPage from './AssetPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AssetPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssetPage />)
    }).not.toThrow()
  })
})
