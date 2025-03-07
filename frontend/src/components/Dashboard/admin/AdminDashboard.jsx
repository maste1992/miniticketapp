import React, { useEffect, useContext, useState } from 'react';
import { fetchTickets, updateTicketStatus } from '../../../api';
import { AuthContext } from '../../../context';
import {
  AdminContainer,
  AdminTitle,
  TicketList,
  TicketItem,
  TicketTitle,
  TicketDescription,
  TicketStatus,
  StatusButton,
  StatusOptions,
  StatusOptionButton,
} from './Admin.styles';

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
    const updatedTickets = tickets.map((ticket) => {
      if (ticket._id === id) {
        return { ...ticket, status: newStatus }; // Temporarily update the ticket's status for UI
      }
      return ticket;
    });
    setTickets(updatedTickets);

    // Make API call to update the status in the backend
    updateTicketStatus(id, newStatus, token)
      .then(() => {
        // Optionally reload tickets after status change
        loadTickets();
      })
      .catch((error) => {
        console.error(error);
        // Optionally revert the ticket status in case of failure here
      });
  };

  const toggleStatusOptions = (ticketId) => {
    // Toggle the visibility of the status options for the clicked ticket
    setStatusOptions((prevOptions) => ({
      ...prevOptions,
      [ticketId]: !prevOptions[ticketId], // Toggle true/false
    }));
  };

  return (
    <AdminContainer>
      <AdminTitle>All Tickets</AdminTitle>
      <TicketList>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id}>
            <TicketTitle>{ticket.title}</TicketTitle>
            <TicketDescription>{ticket.description}</TicketDescription>
            <TicketStatus>Status: {ticket.status}</TicketStatus>
            <StatusButton onClick={() => toggleStatusOptions(ticket._id)}>
              Change Status
            </StatusButton>
            {statusOptions[ticket._id] && ( // Render status options if toggle is true
              <StatusOptions>
                {ticket.status === 'Open' && (
                  <>
                    <StatusOptionButton
                      status="In Progress"
                      onClick={() => handleStatusChange(ticket._id, 'In Progress')}
                    >
                      In Progress
                    </StatusOptionButton>
                    <StatusOptionButton
                      status="Closed"
                      onClick={() => handleStatusChange(ticket._id, 'Closed')}
                    >
                      Closed
                    </StatusOptionButton>
                  </>
                )}
                {ticket.status === 'In Progress' && (
                  <>
                    <StatusOptionButton
                      status="Open"
                      onClick={() => handleStatusChange(ticket._id, 'Open')}
                    >
                      Open
                    </StatusOptionButton>
                    <StatusOptionButton
                      status="Closed"
                      onClick={() => handleStatusChange(ticket._id, 'Closed')}
                    >
                      Closed
                    </StatusOptionButton>
                  </>
                )}
                {ticket.status === 'Closed' && (
                  <StatusOptionButton
                    status="In Progress"
                    onClick={() => handleStatusChange(ticket._id, 'In Progress')}
                  >
                    Reopen
                  </StatusOptionButton>
                )}
              </StatusOptions>
            )}
          </TicketItem>
        ))}
      </TicketList>
    </AdminContainer>
  );
};

export default AdminDashboard;