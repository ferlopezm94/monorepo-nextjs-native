import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons';
library.add(faApple, faLaptopCode, faRocket);

import HomePage from './../pages/index';

describe('HomePage', () => {
  test('Should render', () => {
    const component = renderer.create(<HomePage />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
