// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/user/signup`, data);
      return response.data; 
    } catch (error) {
      console.error("Signup Error: ", error); 
      throw error; 
    }
  };export const login = (data) => axios.post(`${API_URL}/user/login`, data);
  export const createTicket = async (data, token) => {
    try {
      const response = await axios.post(`${API_URL}/ticket/createTicket`, data, {
        headers: {
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json', // Ensure the content type is set correctly
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creating ticket:", error); 
      throw error;
    }
  };
export const fetchTickets = (token) => axios.get(`${API_URL}/ticket/gettikcet`, {
  headers: { Authorization: `Bearer ${token}` },
});
export const updateTicketStatus = (id, status, token) => axios.put(`${API_URL}/ticket/updatestatus/${id}`, { status }, {
  headers: { Authorization: `Bearer ${token}` },
});