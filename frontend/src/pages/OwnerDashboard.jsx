import React, { useState } from 'react';

const OwnerDashboard = () => {
  const [tables, setTables] = useState({
    '2-seater': 5,
    '4-seater': 3,
    '6-seater': 2,
  });

  const handleChange = (type, value) => {
    setTables({ ...tables, [type]: parseInt(value) });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Manage Your Tables</h2>
      {Object.entries(tables).map(([type, count]) => (
        <div key={type} style={{ margin: '1rem 0' }}>
          <label>{type}: </label>
          <input
            type="number"
            value={count}
            onChange={(e) => handleChange(type, e.target.value)}
            style={{ padding: '0.5rem', width: '80px' }}
          />
        </div>
      ))}
      <p style={{ marginTop: '2rem' }}>Changes are automatically saved (simulated for now).</p>
    </div>
  );
};

export default OwnerDashboard;
