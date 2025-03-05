import { render, screen } from '@testing-library/react';
import CodeJawnTab from './CodeJawnTab';

describe('HomeTab Component', () => {
  test('renders the "Welcome to My Portfolio" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-title')).toBeInTheDocument();
  });

  test('renders the paragraph with the text "Text"', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-external-link')).toBeInTheDocument();
  });

  test('renders the paragraph with the text "Text"', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-repo-link')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-text1')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-text2')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-list-title1')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-list1')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-list-title2')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-list2')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-ux-title')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-ux-subtitle')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<CodeJawnTab />);
    expect(screen.getByTestId('code-jawn-ux-gif')).toBeInTheDocument();
  });
});
