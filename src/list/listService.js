var listService = angular.module('listService', []);

listService.factory('List', ['$timeout',function($timeout){
    return {
        get: function(){
            return $timeout(function(){
                return [
                    {'name': '20%'},
                    {'name': 'X'},
                    {'name': 'Y'}
                ];
            },1000)
        }
    }
}]);