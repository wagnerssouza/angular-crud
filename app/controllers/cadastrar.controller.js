(
	function () {
		'use strict';

		angular.module('app').controller('cadastrarController', cadastrarController);

		cadastrarController.$inject = ['$scope', 'userService', '$state'];

		function cadastrarController ($scope, userService, $state) {

			var vm = this;
			vm.user = {};

			vm.cadastrar = function () {
				userService.cadastrar(vm.user).then(sucesso, erro);
			}

			function sucesso(retorno) {
				alert('Usuario cadastrado com sucesso');
				$state.go('layout.listar');
			}

			function erro(retorno) {
				alert('Ops.. algo deu errado.');
			}

		}
	}
)();