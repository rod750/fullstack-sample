app.config(["$routeProvider", function($routeProvider)
{
  $routeProvider.when("/", {
    controller: "CatalogsController",
    templateUrl: "../templates/catalogs.template.html"
  });
}]);