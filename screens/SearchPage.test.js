import React from 'react';
import { render } from '@testing-library/react-native';
import SearchPage from './SearchPage';

describe('<SearchPage />', () => {
  it('renders default elements', () => {
    const { getAllByText } = render(<SearchPage />);
    expect(getAllByText('Submit').length).toBe(1);
  });
});
