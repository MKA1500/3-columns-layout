var myApp = angular.module('myApp', []);

myApp.directive('backgroundImageDirective', function () {
    return function (scope, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.backgroundImageDirective + ')',
            'background-repeat': 'no-repeat',
        });
    };
});

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.toggle = false;
    $scope.mainContent = [
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://c2.staticflickr.com/8/7233/7314543258_9a2570a55c_b.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/3/2898/32492068383_b292724e65_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem. Proin convallis."
        },
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/330px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/1/688/20612106292_df743e31cd_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem. Proin convallis tellus justo."
        },
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://c1.staticflickr.com/1/685/31915688963_bba4a93303_b.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/3/2898/32492068383_b292724e65_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem.."
        },
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://c1.staticflickr.com/1/685/31915688963_bba4a93303_b.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/1/688/20612106292_df743e31cd_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem."
        },
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/330px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/3/2898/32492068383_b292724e65_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem."
        },
        {
            "title": "Maecenas tempor in lectus a fermentum",
            "pic": "https://c1.staticflickr.com/1/685/31915688963_bba4a93303_b.jpg",
            "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non."
        },
        {
            "title": "Nam vel neque congue",
            "pic": "https://c1.staticflickr.com/1/688/20612106292_df743e31cd_b.jpg",
            "lead": "Dolor sit amet, consectetur adipiscing elit. Nam vel neque congue, pretium nulla non, convallis lorem."
        }
    ];
     $scope.leftAside = [
         {
             "title": "Nam vel neque",
             "pic": "https://c1.staticflickr.com/9/8455/7944486832_467cd9b664_b.jpg",
             "lead": "Nam vel neque congue, pretium nulla non, convallis lorem."
         },
         {
             "title": "Maecenas tempor",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Rogale_%C5%9Bwi%C4%99tomarci%C5%84skie_RB1.JPG/345px-Rogale_%C5%9Bwi%C4%99tomarci%C5%84skie_RB1.JPG",
             "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         },
         {
             "title": "Maecenas tempor",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/330px-Felis_catus-cat_on_snow.jpg",
             "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         },
         {
             "title": "Nam vel neque",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/D%C3%B6ner_kebab.jpg/330px-D%C3%B6ner_kebab.jpg",
             "lead": "Nam vel neque congue, pretium nulla non, convallis lorem."
         },
         {
             "title": "Nam vel neque",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/330px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
             "lead": "Nam vel neque congue, pretium nulla non, convallis lorem."
         },
         {
             "title": "Maecenas tempor",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/330px-Felis_catus-cat_on_snow.jpg",
             "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         }
     ];
     $scope.rightAside = [
         {
             "title": "Maecenas tempor",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Stary_Rynek_w_Poznaniu_widok6.JPG/718px-Stary_Rynek_w_Poznaniu_widok6.JPG",
             "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         },
         {
             "title": "Nam vel neque",
             "pic": "https://c1.staticflickr.com/1/685/31915688963_bba4a93303_b.jpg",
             "lead": "Nam vel neque congue, pretium nulla non, convallis lorem."
         },
         {
             "title": "Maecenas tempor",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/330px-Felis_catus-cat_on_snow.jpg",
             "lead": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
         },
         {
             "title": "Nam vel neque",
             "pic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/D%C3%B6ner_kebab.jpg/330px-D%C3%B6ner_kebab.jpg",
             "lead": "Nam vel neque congue, pretium nulla non, convallis lorem."
         },
         {
             "title": "Nam vel neque",
             "pic": "https://c1.staticflickr.com/9/8397/8669452579_a783b7745a_b.jpg",
             "lead": "Nam vel neque congue, pretium nulla non, convallis lorem."
         }
     ];
}]);