import React, { useState} from 'react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: '2-seater',
    count: 1,
    email: '',
    phone: ''
  });

  const [availableTables, setAvailableTables] = useState({
    '2-seater': 5,
    '4-seater': 3,
    '6-seater': 2
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const type = formData.type;
    if (availableTables[type] >= formData.count) {
      setAvailableTables(prev => ({
        ...prev,
        [type]: prev[type] - parseInt(formData.count)
      }));
      alert('Reservation successful!');
    } else {
      alert('Not enough tables available!');
    }
  };

  return (
    <div id="reserve" style={{ padding: '2rem' }}>
      <h2 style={{ color: '#f57c00', textAlign: 'center' }}>Reserve Your Table</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: 'auto',
        gap: '1rem'
      }}>
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />

        <select name="type" value={formData.type} onChange={handleChange}>
          {Object.keys(availableTables).map(type => (
            <option key={type} value={type}>
              {type} (Available: {availableTables[type]})
            </option>
          ))}
        </select>

        <input
          type="number"
          name="count"
          min="1"
          placeholder="Number of Tables"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;
