import React, { Component } from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import Data from "../Components/Data";

configure({ adapter: new Adapter() });

describe("Data Component Test Suite", () => {
  const wrapper = shallow(<Data />);
  it("Data component should render", () => {
    expect(
      wrapper.contains(
        <h1 className="marg">Please find your details fetched from LinkedIn</h1>
      )
    ).toBe(true);
  });

  it("Data component state check", () => {
    expect(wrapper.state("language")).toBe("");
  });
});
