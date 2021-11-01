

describe("When DudIndex renders", () => {
  it("displays a heading", () => {
    const dudIndex = shallow(<DudIndex />)
    const indexHeading = dudIndex.find("h3")
    expect(indexHeading.text()).toEqual("Meet The Duds")
  })
})