import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './src/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React/i);
  expect(linkElement).toBeInTheDocument();
});