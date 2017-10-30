angular.module('appModule').component('gasList', {
	templateUrl : "app/appModule/gasList/gasList.component.html",
	controller : function(gasService, $filter, $routeParams, $location) {

		var vm = this;
		vm.editGas = null;
		vm.showAll = false;
		vm.selected = null;
		vm.gasses = [];
		var reload = function() {
			var found;
			todoService.index().then(function(res) {
				vm.loading=0;
				vm.todos = res.data;
				
				if (!vm.selected && parseInt($routeParams.id)) {
					console.log('in for each')
					  vm.gasses.forEach(function(gas, idx, arr){
						  if(gas.id == $routeParams.id){
							  vm.selected = gas;
							  found = true;
							 
						  }
						  
					  })
					  if (!found){
							$location.path('not-found')
						}
					}
				
			});
		}
		
		

		reload();

		vm.addGas = function(newGas) {
			console.log('hello')
			gasService.create(newGas).then(function(res) {
				reload();
			});
		}
		
		vm.updateShowAll = function() {
			vm.showAll=(!vm.showAll)

		}

		vm.getNumItems = function() {
			var num = $filter('gasFilter')(vm.gasses).length
			return num;

		}
		vm.select = function(id) {
			gasService.show(id).then(function(res){
				vm.selected = res.data;
			})
		}
	
		vm.displayTable = function(todo) {
			
			vm.selected = null
		}

		vm.setEditGas = function() {
			vm.editGas = angular.copy(vm.selected);
		}

		vm.updateGas = function(gas) {
			gasService.update(gas).then(function(res){
				vm.editTodo = null;
				vm.displayTable();
				reload();
			});
		}

		vm.cancel = function() {
			vm.editTodo = null;
		}

		vm.destroy = function(id) {
			todoService.destroy(id).then(function(res) {
				reload();
			})
		}

	},

	controllerAs : 'vm'
})