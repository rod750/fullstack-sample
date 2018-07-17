app.controller("ItemsController", ["$scope", "$mdDialog", "$routeParams", "$location", "ItemService", function($scope, $mdDialog, $routeParams, $location, ItemService)
{
  $scope.items = [];

  $scope.loadData = function()
  {
    ItemService.setAreaId($routeParams.areaId);
    ItemService.setCatalogId($routeParams.catalogId);

    ItemService.fetchAll().then(function(items)
    {
      $scope.items = items;
    },
    function(error)
    {

    });
  };

  $scope.loadData();

  $scope.goBack = function()
  {
    $location.url("/catalogs/"+ItemService.catalogId+"/areas");
  };

  $scope.openCreate = function(e)
  {
    $mdDialog.show(
    {
      controller: CreateItemController,
      templateUrl: "../templates/create-item.template.html",
      parent: angular.element(document.body),
      targetEvent: e,
      clickOutsideToClose: true
    })
    .then(function(item)
    {
      $scope.items.unshift(item);
    },
    function()
    {

    });
  };

  $scope.openUpdate = function(index)
  {
    var item = angular.copy($scope.items[index]);

    $mdDialog.show(
    {
      controller: UpdateItemController,
      templateUrl: "../templates/update-item.template.html",
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      locals:
      {
        item: item
      }
    })
    .then(function(item)
    {
      $scope.items[index] = item;
    },
    function()
    {

    });
  };

  $scope.delete = function(index)
  {
    var item = angular.copy($scope.items[index]);

    var confirm = $mdDialog.confirm()
      .title("¿Quieres eliminar este catálogo?")
      .textContent("Esta acción es irreversible.")
      .ariaLabel("Eliminar catálogo")
      .ok("Eliminar")
      .cancel("Cancelar")

    $mdDialog.show(confirm).then(function()
    {
      ItemService.delete(item)
        .then(function(response)
        {
          $scope.items.splice(index, 1);
        },
        function(error)
        {

        });
    },
    function()
    {

    });
  };

  function CreateItemController($scope, $mdDialog, ItemService)
  {
    $scope.item = {};

    $scope.cancel = function()
    {
      $mdDialog.cancel();
    };

    $scope.submit = function()
    {
      ItemService.create($scope.item)
        .then(function(item)
        {
          $mdDialog.hide(item);
        },
        function(error)
        {

        });
    };
  }

  function UpdateItemController($scope, $mdDialog, CatalogService, item)
  {
    $scope.item = item;

    $scope.cancel = function()
    {
      $mdDialog.cancel();
    };

    $scope.submit = function()
    {
      ItemService.update($scope.item)
        .then(function(item)
        {
          $mdDialog.hide(item);
        },
        function(error)
        {

        });
    };
  }
}]);