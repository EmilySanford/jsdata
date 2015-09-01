'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController'
		// resolve: {
		// 	users: function(User){
		// 		return User.findAll(); 
		// 	}
		// }
	})
})

app.controller('MainController', function($scope, Post, User) {

	// console.log('u: ', users)

 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
 	 Post.findAll().then(function(posts){
 	 	console.log('posts: ', posts)
 		$scope.allPosts = posts;
 	});

 	  User.findAll().then(function(users){
 		$scope.author = users;
 		console.log("the users", users);
 	});


})


