var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {

    getAll: function(req, res) {
        console.log(1)
		Note.find({}, function(err, notes) {
            console.log(2)
            res.json(notes);
            console.log(3);
	  }) 
    },

    
    new: function(req, res) {
        console.log("Here's what we got from the front end:", req.body);
        let newNote = new Note(req.body);
        console.log(4, "Before we save...", newNote)
	  	newNote.save(function(err) {
	    	if(err) {
                  console.log('something went wrong when creating new Note');
                  return res.json();

	    	} 
	    	else {
                console.log(5, "Note added to database:", newNote)
	      		return res.json();
	    	}
	  	})
	}
}