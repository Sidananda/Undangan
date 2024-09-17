
import React from 'react';

const Input = ({ type, placeholder, value, onChange, icon }) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {icon && <span className="absolute right-3 top-3 text-gray-500">{icon}</span>}
        </div>
    );
};

export default Input;