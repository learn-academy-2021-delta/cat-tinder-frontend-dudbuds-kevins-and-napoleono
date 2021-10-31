import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DudShow from './DudShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When DudShow renders", () => {
  it("displays a heading", () => {
    const dudShow = shallow(<DudShow />)
    const showHeading = dudShow.find("h3")
    expect(showHeading.text()).toEqual("I am the Dud Show")
  })
})