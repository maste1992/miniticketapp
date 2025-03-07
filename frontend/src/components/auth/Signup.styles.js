import styled from 'styled-components';

// Container for the signup form
export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f3f4f6; /* Light gray background */
`;

// Form styling
export const Form = styled.form`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

// Form title
export const FormTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #1e293b; /* Dark gray text */
`;

// Input field styling
export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 0.375rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4f46e5; /* Indigo border on focus */
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2); /* Indigo shadow */
  }
`;

// Radio button container
export const RoleContainer = styled.div`
  margin-bottom: 1rem;
`;

// Radio button label
export const RadioLabel = styled.label`
  margin-right: 1rem;
  font-size: 1rem;
  color: #1e293b; /* Dark gray text */
`;

// Radio button input
export const RadioInput = styled.input`
  margin-right: 0.5rem;
`;

// Error message styling
export const ErrorMessage = styled.div`
  background-color: #fee2e2; /* Light red background */
  color: #dc2626; /* Dark red text */
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  text-align: center;
`;

// Success message styling
export const SuccessMessage = styled.div`
  background-color: #dcfce7; /* Light green background */
  color: #16a34a; /* Dark green text */
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  text-align: center;
`;

// Submit button styling
export const SubmitButton = styled.button`
  width: 100%;
  background-color: #4f46e5; /* Indigo background */
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca; /* Darker indigo on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2); /* Indigo shadow */
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  transition: color 0.2s;
  display: flex;

  
`;