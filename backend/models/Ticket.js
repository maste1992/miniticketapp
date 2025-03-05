const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',  // Reference to User model
        required: true 
    }, 
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Open', 'In Progress', 'Closed'], 
        default: 'Open' 
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Ticket', ticketSchema);