/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount } from "enzyme";
import ListBike from "./ListBikes";


describe("Test ListBike component", () => {


  const bikesList = [{
    id: 1222,
    title: 'Bike 1',
    thumb: '',
    description: 'Description 1'
  }]

  it('Render component', () => {
    const wrapper = mount( <ListBike bikes={bikesList} /> )

    expect( wrapper ).toMatchSnapshot()
  });
})