import React from 'react';

const colors = {
  darkNavy: '#020c1b',
  navy: '#0a192f',
  lightNavy: '#112240',
  navyShadow: '#020c1bb3',
  darkSlate: '#495670',
  slate: '#8892b0',
  lightSlate: '#a8b2d1',
  green: '#64ffda',
  glowColor: '#09b9ad',
};

const ExpenseList = () => {
  return (
    <div style={{ backgroundColor: colors.darkNavy, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: colors.green, marginBottom: '1rem', textAlign: 'center', width: '100%' }}>Your Expense List</h1>
      <div style={{ backgroundColor: colors.lightNavy, padding: '1.5rem', borderRadius: '6px', boxShadow: '0px 4px 10px rgba(2, 12, 27, 0.7)', textAlign: 'center', maxWidth: '700px', width: '100%', marginBottom: '1rem', marginTop:'1rem' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ color: colors.green }}>Item</th>
              <th style={{ color: colors.green }}>Expense Description</th>
              <th style={{ color: colors.green }}>Amount</th>
              <th style={{ color: colors.green }}>Shared with</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 9 }).map((_, index) => (
              <tr key={index}>
                <td>
                  <input type="text" style={{ backgroundColor: colors.navy, color: colors.green, borderColor: colors.darkNavy, padding: '0.7rem', borderRadius: '4px', width: '100%' }} />
                </td>
                <td>
                  <input type="text" style={{ backgroundColor: colors.navy, color: colors.green, borderColor: colors.darkNavy, padding: '0.7rem', borderRadius: '4px', width: '100%' }} />
                </td>
                <td>
                  <input type="text" style={{ backgroundColor: colors.navy, color: colors.green, borderColor: colors.darkNavy, padding: '0.7rem', borderRadius: '4px', width: '100%' }} />
                </td>
                <td>
                  <input type="text" style={{ backgroundColor: colors.navy, color: colors.green, borderColor: colors.darkNavy, padding: '0.7rem', borderRadius: '4px', width: '100%' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
