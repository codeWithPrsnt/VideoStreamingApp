import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from './utils/store';
import Header from './components/Header';
import Body from './components/Body';
import View from './components/View';
import MainContainer from './components/MainContainer';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('app',()=>{
  it("should render app component",()=>{
    const wrapper = mount(<App/>);
    expect(wrapper.contains(<Body
    />)).toBe(true);
  })
})

