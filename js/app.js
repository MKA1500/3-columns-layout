var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.toggle = false;
    $scope.mainContent = [
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://c2.staticflickr.com/8/7233/7314543258_9a2570a55c_b.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem. Proin convallis tellus justo, sed mattis tortor posuere a."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/1/688/20612106292_df743e31cd_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem. Proin convallis tellus justo, sed mattis tortor posuere a."
        },
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://c1.staticflickr.com/9/8754/16211514544_080e43019a_b.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem. Proin convallis tellus justo, sed mattis tortor posuere a."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/1/688/20612106292_df743e31cd_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem. Proin convallis tellus justo, sed mattis tortor posuere a."
        }
    ];
    // $scope.leftAside = [];
    // $scope.rightAside = [];


}]);