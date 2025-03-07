import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #4f46e5; /* Indigo-600 */
  color: white;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: #a5b4fc; /* Indigo-300 */
  }
`;