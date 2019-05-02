import React, { Component } from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import LinkedInData from "../Components/LinkedInData";
import { create } from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("LinkedInData Component Test Suite", () => {
  const wrapper = shallow(<LinkedInData />);
  const component = create(<LinkedInData />);
  const instance = component.getInstance();
  it("LinkedInData component should render", () => {
    expect(instance.state.id).toBe("");
  });

  it("Data component state check", () => {
    expect(wrapper.state("language")).toBe("");
  });
});
