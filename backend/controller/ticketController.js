const Ticket =require('../models/Ticket')
const jwt=require('jsonwebtoken');

exports.createTicket=[
    async(req,res)=>{
        try {
            const { title, description } = req.body;
            const userId = req.user.id ;
                
            // make the filed are required
            if( ! title || ! description){
                return res.status(400).json({ message: "Title and description are required." });
            }
            const newTicket = new Ticket({
                userId:req.user.userId,
                title,
                description,
              });  
              await newTicket.save();
              res.status(201).json({ message: "Ticket created successfully", ticket: newTicket });

            } catch (error) {
                res.status(500).json({ message: "Server Error", error: error.message });

            
        }
    }
]
// Get all tickets (Admins) or only user’s tickets (Users)
exports.getTickets = async (req, res) => {
    try {
        let tickets;
        if (req.user.role === "admin") {
            tickets = await Ticket.find().populate("userId", "username email");
        } else {
            tickets = await Ticket.find({ userId: req.user.userId }).populate("userId", "username email"); 
        }
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};
exports.updateTicketStatus = async (req, res) => {
    try {
      if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Unauthorized: Admins only" });
      }
  
      const { id } = req.params;
      const { status } = req.body;
  
      if (!["Open", "In Progress", "Closed"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
      }
  
      const updatedTicket = await Ticket.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
  
      if (!updatedTicket) {
        return res.status(404).json({ message: "Ticket not found" });
      }
  
      res.status(200).json({ message: "Ticket updated successfully", ticket: updatedTicket });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  