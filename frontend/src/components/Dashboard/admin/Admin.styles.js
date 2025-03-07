import styled from 'styled-components';

// Container for the admin dashboard
export const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

// Title for the admin dashboard
export const AdminTitle = styled.h2`
  font-size: 1.875rem; /* 30px */
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1e293b; /* Dark gray text */
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
  margin-bottom: 0.5rem;
`;

// Button to toggle status options
export const StatusButton = styled.button`
  background-color: #3b82f6; /* Blue-500 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* 6px */
  border: none;
  cursor: pointer;
  font-size: 0.875rem; /* 14px */
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb; /* Blue-600 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* Blue-500 with opacity */
  }
`;

// Container for status options
export const StatusOptions = styled.div`
  margin-top: 0.5rem;
`;

// Button for status options (e.g., Open, In Progress, Closed)
export const StatusOptionButton = styled.button`
  background-color: ${(props) =>
    props.status === 'Open'
      ? '#10b981' // Green-500
      : props.status === 'In Progress'
      ? '#f59e0b' // Yellow-500
      : '#ef4444'}; /* Red-500 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem; /* 6px */
  border: none;
  cursor: pointer;
  font-size: 0.875rem; /* 14px */
  margin-right: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.status === 'Open'
        ? '#059669' // Green-600
        : props.status === 'In Progress'
        ? '#d97706' // Yellow-600
        : '#dc2626'}; /* Red-600 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* Blue-500 with opacity */
  }
`;