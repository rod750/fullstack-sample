app.factory("CatalogService", ["$http", "$q", function($http, $q)
{
  service = {};

  service.fetchAll = function()
  {
    return $q(function(resolve, reject)
    {
      $http.get("api/catalogs")
        .then(function(response)
          {
            resolve(response.data.data);
          },
          function(response)
          {
            reject(response.data.message);
          });
    });
  };

  service.create = function(catalog)
  {
    return $q(function(resolve, reject)
    {
      $http.post("api/catalogs", catalog)
        .then(function(response)
          {
            resolve(response.data.data);
          },
          function(response)
          {
            reject(response.data.message);
          });
    });
  }

  service.update = function(catalog)
  {
    return $q(function(resolve, reject)
    {
      $http.patch("api/catalogs/"+catalog.id, catalog)
        .then(function(response)
          {
            resolve(response.data.data);
          },
          function(response)
          {
            reject(response.data.message);
          });
    });
  }

  service.delete = function(catalog)
  {
    return $q(function(resolve, reject)
    {
      $http.delete("api/catalogs/"+catalog.id)
        .then(function(response)
          {
            resolve(response);
          },
          function(response)
          {
            reject(response.data.message);
          });
    });
  };

  return service;
}]);