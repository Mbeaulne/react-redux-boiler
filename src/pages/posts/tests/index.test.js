/**
 * @jest-environment node
 */

import React from 'react';
import Component from '../components';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Component />);
});
