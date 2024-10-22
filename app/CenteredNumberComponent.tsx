"use client";

import React, { useState } from 'react';

const CenteredNumber: React.FC = () => {
  const [value, setValue] = useState<number | string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Allow empty string for clearing the input
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setValue(value);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.number}>{value || "Enter a number"}</div>
      <input
        type="text"
        style={styles.input}
        placeholder="Enter an integer"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center' as const,
  },
  number: {
    fontSize: '48px',
    fontWeight: 'bold' as const,
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
};

export default CenteredNumber;