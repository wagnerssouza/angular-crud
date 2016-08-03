(
	function(){
		'use strict';

		angular.module('app').config(config);

		config.$inject = ['$stateProvider', '$urlRouterProvider'];

		function config ($stateProvider, $urlRouterProvider) {

			// route default
			$urlRouterProvider.otherwise('/listar');

			$stateProvider
				.state('layout',
					{
						templateUrl: 'app/views/layout.html',
						abstract: true
					})
				.state('layout.cadastrar',
					{
						templateUrl: 'app/views/cadastrar.html',
						url: '/cadastrar',
						cache: false
					})
				.state('layout.listar',
					{
						templateUrl: 'app/views/listar.html',
						url: '/listar',
						cache: false
					});
		}
	}

)();