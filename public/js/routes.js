app.config(function ($routeProvider) {
	$routeProvider
		.when("/",{
			templateUrl: "templates/home.html",
			controller: "homeController"
		})
		.when("/aboutus",{
			templateUrl: "templates/aboutus.html",
			controller: "aboutusController"
		})
		.when("/contactus",{
			templateUrl: "templates/contactus.html",
			controller: "contactusController"
		})
});

// create the controller and inject Angular's $scope
    app.controller('homeController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('aboutusController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactusController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
