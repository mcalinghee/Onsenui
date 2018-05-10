app.controller('NotifCtrl', function($scope,$http){
	var url = "https://reqres.in/api/users/2";
	
	$http.get(url)
	.then(function(response){
		var result = response.data.data;
		$scope.notifContent = result.first_name + ' ' + result.last_name;
	})
	.catch(function(){
		alert('Cannot to retrieve data');
	})
})