(
	function(){
		'use strict';

		angular.module('app').service('userService', userService)

		userService.$inject = ['$http', 'url'];

		function userService($http, url) {

			this.listar = function () {
				return $http({
					url : url,
					method: 'GET'
				})
			}

			this.cadastrar = function(user) {
				return $http({
					url: url,
					method:  'POST',
					data: user
				})
			}

			this.deletar = function(id) {
				return $http({
					url: url + id,
					method:  'DELETE',
					
				})
			}

		}
	}
)();