/**
 * @jest-environment jsdom
 */
import React from 'react'
import {mount} from "enzyme";
import CardBike from "./CardBike";
import {IMAGE_NOT_AVAILABLE} from "../../../constants/settings";

describe('Test CardBike component', () => {

  const propsComponent = {
    id: 1222,
    title: 'Bike 1',
    thumb: null,
    description: 'Description 1'
  }

  const setup = ( props = {} ) => {
    const wrapper = mount(
        <CardBike {...props} />
    );
    return {wrapper};
  };

  it('Render component', () => {
    const { wrapper } = setup( propsComponent )

    expect( wrapper ).toMatchSnapshot()
  });

  it( 'Thumbnail is null', () => {
    const { wrapper } = setup(propsComponent)

    const img = wrapper.find('img')

    expect( img.prop('src') ).toEqual(IMAGE_NOT_AVAILABLE)

  })

  it(' Thumbnail is not null', () => {
    const url = 'https://files.bikeindex.org/uploads/Pu/483316/small_1632414461457259416312921088994.jpg'

    const { wrapper } = setup({ ...propsComponent, thumb: url })

    const img = wrapper.find('img')

    expect( img.prop('src') ).toEqual(url)


  })

})
