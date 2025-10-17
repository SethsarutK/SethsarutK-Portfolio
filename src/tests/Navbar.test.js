import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import { ThemeProvider, LanguageProvider } from '../contexts/AppContext';

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          {component}
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('Navbar Component', () => {
  test('renders navigation links', () => {
    renderWithProviders(<Navbar />);
    
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    renderWithProviders(<Navbar />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    
    expect(screen.getByRole('navigation')).toHaveClass('active');
    
    fireEvent.click(menuButton);
    expect(screen.getByRole('navigation')).not.toHaveClass('active');
  });

  test('closes menu when link is clicked', () => {
    renderWithProviders(<Navbar />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    
    const aboutLink = screen.getByText(/about/i);
    fireEvent.click(aboutLink);
    
    expect(screen.getByRole('navigation')).not.toHaveClass('active');
  });
});