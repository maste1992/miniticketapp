// src/components/Dashboard/UserDashboard.js

import React, { useEffect, useState, useContext } from 'react';
import { fetchTickets, createTicket } from '../../api';
import { AuthContext } from '../../context';

const UserDashboard = () => {
  const { token } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const loadTickets = async () => {
    try {
      const response = await fetchTickets(token);
      setTickets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTickets();
  }, [token]);

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    try {
      await createTicket({ title, description }, token);
      setTitle('');
      setDescription('');
      loadTickets(); // Refresh tickets after creation
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Your Tickets</h2>
      <form onSubmit={handleCreateTicket} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="p-2 border rounded mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="p-2 border rounded mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Ticket</button>
      </form>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id} className="border p-2 mb-2">
            <h3 className="font-bold">{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;