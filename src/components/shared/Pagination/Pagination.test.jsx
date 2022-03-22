/**
 * @jest-environment jsdom
 */
import React from 'react'
import {mount} from "enzyme";
import Pagination from "./Pagination";
import CountBikes from "../../../services/countBikes";
import {act} from "react-dom/test-utils"

jest.mock('../../../services/countBikes')

describe('Test Pagination component', () => {

  const setup = ( props = {} ) => {
    return mount(
      <Pagination {...props} />
    );
  };

  const props = {
    setPage: jest.fn(),
    page: 1
  }

  it('Render component', async () => {
    let wrapper
    await act(async () => {
      await CountBikes.mockResolvedValue(1)
      wrapper = setup(props)
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('onClick in next ', async ()=>  {


    await CountBikes.mockResolvedValue(1000)
    const wrapper = setup(props)
    await act( async ()=>  {
      // global.fetch.mockImplementationOnce( ()=> JSON.stringify({stolen: 1000}))
      // wrapper.find('span').filterWhere((element)=> element.prop('data-testid') === 'next').simulate('click')
    })


  })

})