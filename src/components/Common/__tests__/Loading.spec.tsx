import React from 'react'
import { shallow } from 'enzyme'
import LoadingComponent from 'components/Common/Loading'

it('Loading renders correctly', () => {
  const tree = shallow(<LoadingComponent />)
  expect(tree).toMatchSnapshot()
})
