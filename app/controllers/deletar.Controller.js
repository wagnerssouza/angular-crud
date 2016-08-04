(
	function () {
		'use strict';

		angular.module('app').controller('deletarController', deletarController);

		deletarController.$inject = ['$scope', 'userService', '$state']

		function deletarController($scope, userService, $state) {
			
			var vm = this;

			vm.users = [];

			userService.listar().then(sucess, error);

			function sucess(retorno){
				vm.users = retorno.data;
			}

			function error(retorno){
				alert('Ops...ocorreu um erro');
			}

			vm.deletar = function (id) {

				userService.deletar(id).then(sucess, error);

				function sucess(retorno){
					alert('deletado');
					$state.go('layout.listar');

				}

				function error(retorno){
					alert('Ops...ocorreu um erro');
				}
				
			}

			

		}
	}
)();