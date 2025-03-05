// src/components/Dashboard/AdminDashboard.js

import React, { useEffect, useContext, useState } from 'react';
import { fetchTickets, updateTicketStatus } from '../../api';
import { AuthContext } from '../../context';

const AdminDashboard = () => {
  const { token } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const [statusOptions, setStatusOptions] = useState({}); // Holds current status options for each ticket

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

  const handleStatusChange = (id, newStatus) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket._id === id) {
        return { ...ticket, status: newStatus }; // Temporarily update the ticket's status for UI
      }
      return ticket;
    });
    setTickets(updatedTickets);

    // Make API call to update the status in the backend
    updateTicketStatus(id, newStatus, token).then(() => {
      // Optionally reload tickets after status change
      loadTickets();
    }).catch(error => {
      console.error(error);
      // Optionally revert the ticket status in case of failure here
    });
  };

  const toggleStatusOptions = (ticketId) => {
    // Toggle the visibility of the status options for the clicked ticket
    setStatusOptions(prevOptions => ({
      ...prevOptions,
      [ticketId]: !prevOptions[ticketId], // Toggle true/false
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">All Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket._id} className="border p-2 mb-2">
            <h3 className="font-bold">{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <button 
              onClick={() => toggleStatusOptions(ticket._id)} 
              className="bg-blue-500 text-white p-1 rounded"
            >
              Change Status
            </button>
            {statusOptions[ticket._id] && ( // Render status options if toggle is true
              <div className="mt-2">
                {ticket.status === 'Open' && (
                  <>
                    <button
                      onClick={() => handleStatusChange(ticket._id, 'In Progress')}
                      className="bg-yellow-500 text-white p-1 rounded mr-2"
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => handleStatusChange(ticket._id, 'Closed')}
                      className="bg-red-500 text-white p-1 rounded"
                    >
                      Closed
                    </button>
                  </>
                )}
                {ticket.status === 'In Progress' && (
                  <>
                    <button
                      onClick={() => handleStatusChange(ticket._id, 'Open')}
                      className="bg-green-500 text-white p-1 rounded mr-2"
                    >
                      Open
                    </button>
                    <button
                      onClick={() => handleStatusChange(ticket._id, 'Closed')}
                      className="bg-red-500 text-white p-1 rounded"
                    >
                      Closed
                    </button>
                  </>
                )}
                {ticket.status === 'Closed' && (
                  <button
                    onClick={() => handleStatusChange(ticket._id, 'In Progress')}
                    className="bg-yellow-500 text-white p-1 rounded"
                  >
                    Reopen
                  </button>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;