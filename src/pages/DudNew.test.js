import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DudNew from './DudNew'

Enzyme.configure({ adapter: new Adapter() })

describe("When DudNew renders", () => {
  it("displays a heading", () => {
    const dudNew = shallow(<DudNew />)
    const newheading = dudNew.find("h3")
    expect(newheading.text()).toEqual("Become A Dud's Bud")
  })
  it("displays a form", () => {
    const dudNew = shallow(<DudNew />)
    const formGroup = dudNew.find("FormGroup")
    expect(formGroup.length).toEqual(3)
    const label = dudNew.find("Label")
    expect(label.length).toEqual(3)
    const input = dudNew.find("Input")
    expect(input.length).toEqual(3)
  })
})