'use strict';

/* Controllers */

var AppCtrl = angular.module('AppCtrl', []);

AppCtrl.controller('homeCtrl', ['$scope', 'User', '$location',
  function(scope, User, location) {

  	scope.isAccount=true;
  	scope.isConfirm=true;
  	scope.isLogin=false;

  	scope.login=function(){
		User.auth({account: scope.account, password: scope.password}, function(resp){
			debug(resp);
			if (resp.result){				
			 	location.path('/new/table1.json'); 
			}else{
				debug('login failed');
				scope.isLogin=true;
			}			
		});
	};
  	scope.check=function(){
		User.get({account: scope.newAccount}, function(resp){
			debug(resp);
			if (resp.result){
				scope.isAccount=true;
			}else{
				scope.isAccount=false;
			}			
		});
	};
	scope.confirmPw=function(){
		debug(scope.newAccount);
		debug(scope.newPassword);
		debug(scope.conPassword);
		if (scope.conPassword==scope.newPassword){
			scope.isConfirm=true;
		}else{
			scope.isConfirm=false;
		}
	};
	scope.register=function(){
		User.save({
			account: scope.newAccount, 
			password:scope.newPassword
		}, function(resp){
			debug(resp);
			location.path('/new'); 
		});
	};
}]);

AppCtrl.controller('newCtrl', ['$scope', 'Table', '$routeParams',
  function(scope,  Table, routeParams) {
  	scope.table=Table.query({name: routeParams.name});
}]);
