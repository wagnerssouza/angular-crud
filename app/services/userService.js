(
	function(){
		'use strict';

		angular.module('app').service('userService', userService)

		userService.$inject = ['$http', 'url'];

		function userService($http, url) {

			this.listar = function (id) {
				if((id == null) || (id == "")){
					id = "";
					return id
				}
				return $http({
					url : url + id,
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

			this.alterar = function(user) {
				return $http({
					url: url,
					method:  'PUT',
					data: user
					
				})
			}

		}
	}
)();