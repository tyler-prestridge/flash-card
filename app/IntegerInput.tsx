"use client";

import React, { useState } from 'react';

const IntegerInput: React.FC = () => {
  const [value, setValue] = useState<number | string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Allow empty string for clearing the input
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setValue(value);
    }
  };

  return (
    <div>
      <label htmlFor="integerInput">Enter an integer:</label>
      <input
        type="text"
        id="integerInput"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default IntegerInput;