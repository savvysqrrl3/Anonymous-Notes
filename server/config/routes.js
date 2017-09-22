var mongoose = require('mongoose');
var notes = require('../controllers/notes.js');

module.exports = function(app){
    
    app.post('/notes', (req, res, next)=>{
        notes.new(req, res)
      });

    app.get('/notes', function(req, res, next) {  
        notes.getAll(req, res) 
	})

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./Anonymous-notes/dist/index.html"))
    });
}

