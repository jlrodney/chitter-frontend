import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import PeepsContainer from '../PeepsContainer';
import Peep from '../Peep';
import NewPeepForm from '../NewPeepForm';
import NewUserForm from '../NewUserForm'
import SignInForm from '../SignInForm';

describe('Peeps Container', () => {
  let comp
  beforeEach(() => {
    // let mockSessionKey = 'testKey';
    // let mockUserID = 1;
    global.fetch = jest.fn()
    comp = shallow(<PeepsContainer />)
  })

  describe('rendering', () => {
    it('renders User Sign up, sign in and post forms', () => {
      expect(comp.containsMatchingElement(NewUserForm))
      expect(comp.containsMatchingElement(SignInForm))
      expect(comp.containsMatchingElement(NewPeepForm))
    })
  })

  describe('userSignIn', () => {
    it('calls fetch', () => {
      comp.instance().addNewUser('test')
      expect(fetch).toHaveBeenCalled()
    });
  });

  describe('addNewUser', () => {
    it('calls fetch', () => {
      comp.instance().addNewUser('test')
      expect(fetch).toHaveBeenCalled()
    });
  });

  describe('get peeps', () => {
    it('calls fetch', () => {
      comp.instance().getPeeps('test')
      expect(fetch).toHaveBeenCalled()
    });
  });

  describe('remove peep', () => {
    it('calls fetch', () => {
      comp.instance().onRemovePeep('test')
      expect(fetch).toHaveBeenCalled()
    });
  });

  describe('addNewPeep', () => {
    it('calls fetch', () => {
      comp.instance().addNewPeep('test')
      expect(fetch).toHaveBeenCalled()
    })
  })
})
