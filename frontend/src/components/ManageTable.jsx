import React, { useState, useEffect } from 'react';
import '../styles/ManageTable.css';

const ManageTable = () => {
  const [tables, setTables] = useState({});
  const [updatedTable, setUpdatedTable] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current table counts from backend
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/tables');
        const data = await res.json();
        const formatted = {};
        data.forEach((table) => {
          formatted[table.type] = table.count;
        });
        setTables(formatted);
      } catch (err) {
        console.error('Error fetching tables:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTables();
  }, []);

  const handleChange = (type, value) => {
    setTables({ ...tables, [type]: parseInt(value) });
  };

  const handleUpdate = async (type) => {
    try {
      await fetch(`http://localhost:5000/api/tables/${type}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ count: tables[type] }),
      });

      setUpdatedTable(type);
      setTimeout(() => setUpdatedTable(null), 2000);
    } catch (err) {
      console.error('Error updating table:', err);
    }
  };

  return (
    <div className="manage-table-container">
      <h2 className="manage-table-title">Manage Your Tables</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-form">
          {Object.entries(tables).map(([type, count]) => (
            <div key={type} className="table-row">
              <label className="table-label">{type}</label>
              <input
                type="number"
                value={count}
                min={0}
                onChange={(e) => handleChange(type, e.target.value)}
                className="table-input"
              />
              <button onClick={() => handleUpdate(type)} className="update-button">
                Update
              </button>
              {updatedTable === type && (
                <span className="update-msg">Updated!</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageTable;
