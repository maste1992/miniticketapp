import React, { useEffect, useState, useContext } from 'react';
import { fetchTickets, createTicket } from '../../../api';
import { AuthContext } from '../../../context';
import {
  UserContainer,
  Header,
  UserTitle,
  ProfileContainer,
  ProfileName,
  DropdownMenu,
  DropdownItem,
  TicketForm,
  FormInput,
  FormTextarea,
  SubmitButton,
  TicketList,
  TicketItem,
  TicketTitle,
  TicketDescription,
  TicketStatus,
} from './User.styles';

const UserDashboard = () => {
  const { token, currentUser, logout } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

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

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
  };

  return (
    <UserContainer>
      {/* Header with title and profile section */}
      <Header>
        <UserTitle>Your Tickets</UserTitle>
        <ProfileContainer onClick={toggleDropdown}>
          <ProfileName>{currentUser?.username}</ProfileName>
          <DropdownMenu isOpen={isDropdownOpen}>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </ProfileContainer>
      </Header>

      {/* Ticket creation form */}
      <TicketForm onSubmit={handleCreateTicket}>
        <FormInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <FormTextarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <SubmitButton type="submit">Create Ticket</SubmitButton>
      </TicketForm>

      {/* Ticket list */}
      <TicketList>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id}>
            <TicketTitle>{ticket.title}</TicketTitle>
            <TicketDescription>{ticket.description}</TicketDescription>
            <TicketStatus>Status: {ticket.status}</TicketStatus>
          </TicketItem>
        ))}
      </TicketList>
    </UserContainer>
  );
};

export default UserDashboard;