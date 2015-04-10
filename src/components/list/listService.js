angular.module('listModule')
    .factory('List', ['$timeout',function($timeout){
        return {
            get: function(token){
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