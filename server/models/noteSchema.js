var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
 content: String,
 created_at: { type: Date, required: true, default: Date.now }
});

var Note = mongoose.model('Note', NoteSchema);