import { render, screen } from '@testing-library/react';
import HomeTab from './HomeTab';

describe('HomeTab Component', () => {
  test('renders the "Welcome to My Portfolio" heading', () => {
    render(<HomeTab />);
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
  });

  test('renders the paragraph with the text "Text"', () => {
    render(<HomeTab />);
    expect(screen.getByTestId('home-text')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<HomeTab />);
    expect(screen.getByTestId('contact-me')).toBeInTheDocument();
  });

  test('renders the email and the GitHub and LinkedIn links', () => {
    render(<HomeTab />);

    expect(screen.getByTestId('email')).toBeInTheDocument();
    
    expect(screen.getByTestId('github-repo-link')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-link')).toBeInTheDocument();
  });
});
