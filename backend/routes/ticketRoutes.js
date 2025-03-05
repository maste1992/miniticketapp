const express=require('express');
const { createTicket, getTickets, updateTicketStatus } = require('../controller/ticketController');
const authMiddleware = require('../middleware/authMiddleware');
const router=express.Router();
router.post('/createTicket',authMiddleware, createTicket);
router.get('/gettikcet',authMiddleware, getTickets);
router.put('/updatestatus/:id', authMiddleware,updateTicketStatus)
module.exports=router;