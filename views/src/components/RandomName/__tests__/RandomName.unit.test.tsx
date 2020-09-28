import React from 'react';
import renderer from 'react-test-renderer';

import { RandomName } from './../RandomName';

describe('RandomName', () => {
  test('Should render', () => {
    const component = renderer.create(<RandomName />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
