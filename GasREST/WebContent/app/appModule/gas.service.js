angular.module('appModule')
.factory('todoService', function($http, $filter) {
  var service = {};

  var gasses = [];	
	
  service.index = function() {
    return $http({
    	method: 'GET',
    url: 'rest/user/1/gas'});
  };
  
 


  service.create = function(newGas) {
	  return $http({
		  method: 'POST',
		  url: 'rest/user/1/gas',
			  headers: {
				  'Content-Type': 'application/json'
			  },
			  data: newGas
	  })
  };
  
  service.update = function(editGas){
	 var copy = angular.copy(editGas);
	 return $http({
		 method: 'PUT',
		 url: 'rest/user/1/gas/' +editGas.id,
		 headers: {
			 'Content-Type': 'application/json'
		 },
		 data :copy
	 });
		
  }
  
  service.destroy= function(id){
	  return $http({
		  method: 'DELETE',
		  url: 'rest/user/1/gas/' + id
	  })
  }
  service.delete = function(id){
	  gasses.forEach(function(val, idx){
			if(id == val.id){
				console.log(val.id);
				gasses.splice(idx,1);
			
			}
		})
		
  }
  
  service.show = function(id) {
	  return $http({
		  method: 'GET',
		  url: 'rest/user/1/todo/' + id
	  })
  }

  return service;
})