app.controller("AreasController", ["$scope", "$mdDialog", "$routeParams", "$location", "AreaService", function($scope, $mdDialog, $routeParams, $location, AreaService)
{
  $scope.areas = [];

  $scope.loadData = function()
  {
    AreaService.setCatalogId($routeParams.catalogId);
    AreaService.fetchAll().then(function(areas)
    {
      $scope.areas = areas;
    },
    function(error)
    {

    });
  };

  $scope.loadData();

  $scope.goBack = function()
  {
    $location.url("/catalogs");
  };

  $scope.viewItems = function(area)
  {
    $location.url("/catalogs/"+AreaService.catalogId+"/areas/"+area.id+"/items");
  };

  $scope.openCreate = function(e)
  {
    $mdDialog.show(
    {
      controller: CreateAreaController,
      templateUrl: "../templates/create-area.template.html",
      parent: angular.element(document.body),
      targetEvent: e,
      clickOutsideToClose: true
    })
    .then(function(areas)
    {
      $scope.areas.unshift(area);
    },
    function()
    {

    });
  };

  $scope.openUpdate = function(index, e)
  {
    e.preventDefault();
    e.stopPropagation();

    var area = angular.copy($scope.areas[index]);

    $mdDialog.show(
    {
      controller: UpdateAreaController,
      templateUrl: "../templates/update-area.template.html",
      parent: angular.element(document.body),
      targetEvent: e,
      clickOutsideToClose: true,
      locals:
      {
        area: area
      }
    })
    .then(function(area)
    {
      $scope.areas[index] = area;
    },
    function()
    {

    });
  };

  $scope.delete = function(index, e)
  {
    e.preventDefault();
    e.stopPropagation();

    var area = angular.copy($scope.areas[index]);

    var confirm = $mdDialog.confirm()
      .title("¿Quieres eliminar este catálogo?")
      .textContent("Esta acción es irreversible.")
      .ariaLabel("Eliminar catálogo")
      .targetEvent(e)
      .ok("Eliminar")
      .cancel("Cancelar")

    $mdDialog.show(confirm).then(function()
    {
      AreaService.delete(area)
        .then(function(response)
        {
          $scope.areas.splice(index, 1);
        },
        function(error)
        {

        });
    },
    function()
    {

    });
  };

  function CreateAreaController($scope, $mdDialog, AreaService)
  {
    $scope.area = {};

    $scope.cancel = function()
    {
      $mdDialog.cancel();
    };

    $scope.submit = function()
    {
      AreaService.create($scope.area)
        .then(function(area)
        {
          $mdDialog.hide(area);
        },
        function(error)
        {

        });
    };
  }

  function UpdateAreaController($scope, $mdDialog, CatalogService, area)
  {
    $scope.area = area;

    $scope.cancel = function()
    {
      $mdDialog.cancel();
    };

    $scope.submit = function()
    {
      AreaService.update($scope.area)
        .then(function(area)
        {
          $mdDialog.hide(area);
        },
        function(error)
        {

        });
    };
  }
}]);