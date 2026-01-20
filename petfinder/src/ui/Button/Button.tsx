import React from 'react';
import { ButtonProps } from './Button.interface';

const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white border-transparent',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 border-transparent',
  ghost: 'bg-transparent hover:bg-gray-100 text-white border-transparent',
  outline: 'bg-transparent hover:bg-gray-50 text-white border border-gray-300',
  danger: 'bg-red-600 hover:bg-red-700 text-white border-transparent',
};

const sizeClasses = {
  sm: 'text-xs py-1.5 px-3 rounded-md',
  md: 'text-sm py-2 px-4 rounded-md',
  lg: 'text-base py-2.5 px-5 rounded-lg',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  circle,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors cursor-pointer focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    circle ? '' : sizeClasses[size],
    fullWidth ? 'w-full' : '',
    circle ? 'rounded-full w-10 h-10' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
