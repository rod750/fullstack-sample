app.controller("CatalogsController", ["$scope", "$mdDialog", "CatalogService", function($scope, $mdDialog, CatalogService)
{
  $scope.catalogs = [];

  CatalogService.fetchAll().then(function(catalogs)
  {
    $scope.catalogs = catalogs;
  },
  function(error)
  {

  });

  $scope.openCreate = function(e)
  {
    $mdDialog.show(
    {
      controller: CreateCatalogController,
      templateUrl: "../templates/create-catalog.template.html",
      parent: angular.element(document.body),
      targetEvent: e,
      clickOutsideToClose: true
    })
    .then(function(catalog)
    {
      $scope.catalogs.unshift(catalog);
    },
    function()
    {

    });
  };

  $scope.openUpdate = function(index)
  {
    var catalog = angular.copy($scope.catalogs[index]);

    $mdDialog.show(
    {
      controller: UpdateCatalogController,
      templateUrl: "../templates/update-catalog.template.html",
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      locals:
      {
        catalog: catalog
      }
    })
    .then(function(catalog)
    {
      $scope.catalogs[index] = catalog;
    },
    function()
    {

    });
  };

  $scope.delete = function(index)
  {
    var catalog = angular.copy($scope.catalogs[index]);

    var confirm = $mdDialog.confirm()
      .title("¿Quieres eliminar este catálogo?")
      .textContent("Esta acción es irreversible.")
      .ariaLabel("Eliminar catálogo")
      .ok("Eliminar")
      .cancel("Cancelar")

    $mdDialog.show(confirm).then(function()
    {
      CatalogService.delete(catalog)
        .then(function(response)
        {
          $scope.catalogs.splice(index, 1);
        },
        function(error)
        {

        });
    },
    function()
    {

    });
  };

  function CreateCatalogController($scope, $mdDialog, CatalogService)
  {
    $scope.catalog = {};

    $scope.cancel = function()
    {
      $mdDialog.cancel();
    };

    $scope.submit = function()
    {
      CatalogService.create($scope.catalog)
        .then(function(catalog)
        {
          $mdDialog.hide(catalog);
        },
        function(error)
        {

        });
    };
  }

  function UpdateCatalogController($scope, $mdDialog, CatalogService, catalog)
  {
    $scope.catalog = catalog;

    $scope.cancel = function()
    {
      $mdDialog.cancel();
    };

    $scope.submit = function()
    {
      CatalogService.update($scope.catalog)
        .then(function(catalog)
        {
          $mdDialog.hide(catalog);
        },
        function(error)
        {

        });
    };
  }
}]);