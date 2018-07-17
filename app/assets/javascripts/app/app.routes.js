app.config(["$routeProvider", function($routeProvider)
{
  $routeProvider.when("/", {
    controller: "CatalogsController",
    templateUrl: "../templates/catalogs.template.html"
  });
    .when("/catalogs/:catalogId/areas", {
      controller: "AreasController",
      templateUrl: "../templates/areas.template.html"
    })
    .when("/catalogs", {
      controller: "CatalogsController",
      templateUrl: "../templates/catalogs.template.html"
    })
    .otherwise({redirectTo: "/catalogs"});
}]);