
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '', type = 'button', href }) => {
  const baseStyles = 'inline-block text-center px-8 py-3 font-semibold rounded-lg tracking-wider transition-all duration-300 ease-out-expo transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50';

  const styles = {
    primary: 'bg-primary text-white shadow hover:bg-opacity-90 hover:shadow-md hover:-translate-y-0.5',
    secondary: 'bg-transparent text-secondary border border-secondary hover:bg-accent',
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href) {
      window.location.hash = href;
    }
  };

  if (href) {
    return (
      <a href={href} onClick={handleNavClick} className={`${baseStyles} ${styles[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
