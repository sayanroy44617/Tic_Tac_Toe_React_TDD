import React from "react";
import { shallow } from "enzyme";
import Square from "./Square";

describe("Basic rendering of Square", () => {
  it("renders a button", () => {
    const component = shallow(<Square />);
    expect(component.find("button").length).toBe(1);
  });

  it('Square displays correct value', () => {
    const correctValueComponent = shallow(<Square value="X" onSquareClick={() => {}} />);
    expect(correctValueComponent.text()).toBe('X');
  });
});
