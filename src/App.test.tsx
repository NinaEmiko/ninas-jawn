import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./components/HomeTab', () => () => <div>Home Component</div>);
jest.mock('./components/CodeJawnTab', () => () => <div>Code Jawn Component</div>);
jest.mock('./components/BattleJawnTab', () => () => <div>Battle Jawn Component</div>);

describe('App', () => {
  test('renders navigation links correctly', () => {
    render(
      <App />
    );

    expect(screen.getByTestId('home-link')).toBeInTheDocument();
    expect(screen.getByTestId('code-jawn-link')).toBeInTheDocument();
    expect(screen.getByTestId('battle-jawn-link')).toBeInTheDocument();
  });

  test('navigates to the Home route when the Home link is clicked', () => {
    render(
      <App />
    );

    fireEvent.click(screen.getByTestId('home-link'));

    expect(screen.getByText(/Home Component/i)).toBeInTheDocument();
  });

  test('navigates to the Code Jawn route when the Code Jawn link is clicked', () => {
    render(
      <App />
    );

    fireEvent.click(screen.getByTestId('code-jawn-link'));

    expect(screen.getByText(/Code Jawn Component/i)).toBeInTheDocument();
  });

  test('navigates to the Battle Jawn route when the Battle Jawn link is clicked', () => {
    render(
      <App />
    );

    fireEvent.click(screen.getByTestId('battle-jawn-link'));

    expect(screen.getByText(/Battle Jawn Component/i)).toBeInTheDocument();
  });
});
