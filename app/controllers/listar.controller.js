(
	function () {
		'use strict';

		angular.module('app').controller('listarController', listarController);

		listarController.$inject = ['$scope', 'userService']

		function listarController($scope, userService) {
			
			var vm = this;

			vm.users = [];

			userService.listar().then(sucess, error);

			function sucess(retorno){
				vm.users = retorno.data;
			}

			function error(retorno){
				alert('Ops...ocorreu um erro');
			}

		}
	}
)();