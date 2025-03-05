import { render, screen } from '@testing-library/react';
import BattleJawnTab from './BattleJawnTab';

describe('HomeTab Component', () => {
  test('renders the "Welcome to My Portfolio" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-title')).toBeInTheDocument();
  });

  test('renders the paragraph with the text "Text"', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-repo-link')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-text1')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-text2')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-list-title')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-list')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-ux-title')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-ux-gif1')).toBeInTheDocument();
  });

  test('renders the "Contact Me!" heading', () => {
    render(<BattleJawnTab />);
    expect(screen.getByTestId('battle-jawn-ux-gif2')).toBeInTheDocument();
  });
});
