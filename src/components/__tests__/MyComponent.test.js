
import React from 'react';
import { shallow, mount } from 'enzyme';
import  App from '../../App.js';
import PeepsContainer from '../PeepsContainer.js'

describe('should render title', () => {

  it('should render correctly with no props', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });


  it('should have title', () => {
    const component = shallow(<App/>);
    var node = component.find('h1')
    expect(node.hasClass('App-title')).toBeTruthy();
    expect(node.html()).toEqual('<h1 class="App-title">Chitter Challenge!</h1>')
  });
})

describe('should render posts', () => {
  it('creates todo', () => {
  const wrapper = shallow(<PeepsContainer />);
  wrapper.find('input').simulate('change', {
    target: { value: 'hello' }
  })
  wrapper.find('button').simulate('click');

  });

  it('can add peep', () => {
    const message = 'hmmm'
    const component = mount(<App/>);
    var node = component.find('.body').setValue(message)
    component.find('.submess').onClick()
    const actual = component.find('.Peeps-container').getText()
    expect(actual).to.equal(message)
  })
})
