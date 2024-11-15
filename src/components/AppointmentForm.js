// AppointmentForm.js
import React, { useState } from 'react';
import './AppointmentForm.css';

export const AppointmentForm = ({ onRequest }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = { date, status: 'Pendiente' };
    localStorage.setItem('appointment', JSON.stringify(appointment));
    onRequest();
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <label>Fecha de la Cita:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Solicitar Cita</button>
    </form>
  );
};

export default AppointmentForm;
