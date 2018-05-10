(function () {
    'use strict';

    angular
        .module('app')
        .controller('userCtrl', ['$scope', 'dataService', function ($scope, dataService) {
            $scope.users = [];
           
            getData();

            //display user data
            function getData() {
                dataService.getUsers().then(function (result) {
                   
                    $scope.users = result;
                });
            }

            //delete user based on id
            $scope.deleteUser = function (id) {
                dataService.deleteUser(id).then(function () {
                    toastr.success('User deleted successfully');
                    getData();
                }, function () {
                    toastr.error('Error in deleting user with Id: ' + id);
                });
            };

            
        }])

        //add user controller
        .controller('userAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createUser = function (user) {
                dataService.addUser(user).then(function () {
                    toastr.success('User created successfully');
                    $location.path('/');
                }, function () {
                    toastr.error('Error in creating user');
                });
            };
        }])

        //edit user controller
        .controller('userEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
            $scope.user = {};
            $scope.states = {
                showUpdateButton: false
            };

            dataService.getUserById($routeParams.id).then(function (result) {
                $scope.user = result;
                $scope.states.showUpdateButton = true;
            }, function () {
                toastr.error('Error in fetching user with Id: ' + $routeParams.id);
            });

            $scope.updateUser = function (user) {
                dataService.editUser(user).then(function () {
                    toastr.success('User updated successfully');
                    $location.path('/');
                }, function () {
                    toastr.error('Error in updating user');
                });
            };
        }]);
})();