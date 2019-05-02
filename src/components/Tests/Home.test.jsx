import React, { Component } from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Home from "../Components/Home";

configure({ adapter: new Adapter() });

describe("Home Component Test Suite", () => {
  it("Home componenet should render", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<h2>Sign In Using</h2>)).toBe(true);
  });

  it("It should redirect to sign in page", () => {
    const mySpy = new MySpy();
    const mockCallBack = mySpy.fn();
    const button = shallow(<Home onClick={mockCallBack} />);
    button
      .find("a")
      .at(1)
      .simulate("click");
    expect(mySpy.calls).toEqual(1);
  });
});

function MySpy() {
  this.calls = 0;
}
MySpy.prototype.fn = function() {
  this.calls++;
  return () => this.calls;
};
