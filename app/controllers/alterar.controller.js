(
	function () {
		'use strict';

		angular.module('app').controller('alterarController', alterarController);

		alterarController.$inject = ['$scope', 'userService', '$state', '$stateParams'];

		function alterarController ($scope, userService, $state, $stateParams) {

			var vm = this;
			vm.user = {};
			var id = $stateParams.id;

			userService.listar(id).then(sucesso, erro);

			function sucesso(retorno) {
				console.log(retorno.data);
				vm.user = retorno.data;
			}

			function erro(retorno) {
				alert('Ops.. algo deu errado.');
			}

			vm.alterar = function () {

				userService.alterar(vm.user).then(sucessoAlterar, erroAlterar);

				function sucessoAlterar(retorno) {
					$state.go('layout.listar');
				}

				function erroAlterar(retorno) {
					alert('Ops.. algo deu errado.');
				}
			}

		}
	}
)();