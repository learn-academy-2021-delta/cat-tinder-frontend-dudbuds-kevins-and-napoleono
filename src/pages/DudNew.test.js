import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

describe("When DudIndex renders", () => {
    it("displays a form", () => {
      const dudNew = shallow(<DudNew />)
      const fromGroup = dudNew.find("formGroup")
      expect(fromGroup.text()).toEqual(3)
      const dudNew = shallow(<DudNew />)
      const fromGroup = dudNew.find("Label")
      expect(label.length()).toEqual(3)
      const dudNew = shallow(<DudNew />)
      const fromGroup = dudNew.find("Label")
      expect(label.length()).toEqual(3)
    })
  })