'use  strict';

app.factory('User', function(DS) {

	var User = DS.defineResource({
		basePath: '/api',
		name: 'users',
		idAttribute: '_id'

	})
	return User;
	
  /*
    create a User jsdata resource 
  */

}).run(function(User){})

