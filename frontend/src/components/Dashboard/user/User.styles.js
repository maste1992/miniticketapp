import styled from 'styled-components';

// Header container (to hold the title and profile section)
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

// Container for the user dashboard
export const UserContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

// Title for the user dashboard
export const UserTitle = styled.h2`
  font-size: 1.875rem; /* 30px */
  font-weight: bold;
  color: #1e293b; /* Dark gray text */
`;

// Profile container
export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// Profile name
export const ProfileName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b; /* Dark gray text */
  margin-right: 0.5rem;
`;

// Dropdown menu
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 0.375rem; /* 6px */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

// Dropdown item
export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  font-size: 0.875rem; /* 14px */
  color: #1e293b; /* Dark gray text */
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6; /* Light gray background */
  }
`;

// Form for creating a new ticket
export const TicketForm = styled.form`
  margin-bottom: 1.5rem;
`;

// Input field for the ticket title
export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 0.375rem; /* 6px */
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4f46e5; /* Indigo border on focus */
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2); /* Indigo shadow */
  }
`;

// Textarea for the ticket description
export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 0.375rem; /* 6px */
  font-size: 1rem;
  resize: vertical; /* Allow vertical resizing */

  &:focus {
    outline: none;
    border-color: #4f46e5; /* Indigo border on focus */
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2); /* Indigo shadow */
  }
`;

// Button to create a new ticket
export const SubmitButton = styled.button`
  background-color: #3b82f6; /* Blue-500 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* 6px */
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb; /* Blue-600 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* Blue-500 with opacity */
  }
`;

// List of tickets (using CSS Grid for 3-column layout)
export const TicketList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 1rem; /* Space between grid items */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column for mobile */
  }
`;

// Individual ticket item
export const TicketItem = styled.li`
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 0.375rem; /* 6px */
  padding: 1rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

// Ticket title
export const TicketTitle = styled.h3`
  font-size: 1.25rem; /* 20px */
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1e293b; /* Dark gray text */
`;

// Ticket description
export const TicketDescription = styled.p`
  font-size: 1rem; /* 16px */
  color: #4b5563; /* Gray-600 */
  margin-bottom: 0.5rem;
`;

// Ticket status
export const TicketStatus = styled.p`
  font-size: 1rem; /* 16px */
  color: #6b7280; /* Gray-500 */
`;