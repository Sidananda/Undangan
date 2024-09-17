import React from 'react';

const Button = ({ label, onClick, className, type = 'button', variant = 'primary' }) => {
    const baseClasses = "w-full py-3 px-4 text-white rounded focus:ring-2 focus:outline-none";
    const variantClasses = {
        primary: 'bg-primary hover:bg-opacity-80 focus:ring-primary',
        secondary: 'bg-secondary hover:bg-opacity-80 focus:ring-secondary',
        accent: 'bg-accent hover:bg-opacity-80 focus:ring-accent',
        light: 'bg-light text-primary hover:bg-opacity-80 focus:ring-light',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
