var data = require("../data.json");

exports.addFriend = function(request, response) {    
	//add friends data
	var name = request.query.name;
	var description = request.query.description;
	var newFriend = {
		"name": name,
		"description" : description, 
		"ImageURL":"http://lorempixel.com/400/400/people"
	}
	//render index handlebars in addfriend function
	data.friends.push(newFriend);
	response.render('index', data);
	

 }