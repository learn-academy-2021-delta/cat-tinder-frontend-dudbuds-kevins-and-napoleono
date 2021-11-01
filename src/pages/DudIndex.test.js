import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DudIndex from './DudIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When DudIndex renders", () => {
  it("displays a heading", () => {
    const dudIndex = shallow(<DudIndex />)
    const indexHeading = dudIndex.find("h3")
    expect(indexHeading.text()).toEqual("Meet The Duds")
  })
})