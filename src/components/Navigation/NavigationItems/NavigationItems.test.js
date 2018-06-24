import React from 'react';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()}); // connects enzyme

// describe() automatically made available by jest

describe('<NavigationItems/>', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems/>); // note we pass this as JSX
  })

  it('should render two navigation items if user not authenticated', () => {
    expect(wrapper.find(NavigationItem)) // note we don't pass JSX here just the imported function reference
      .toHaveLength(2)  
  });

  it('should render two navigation items if user not authenticated', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3)  
  });

});
