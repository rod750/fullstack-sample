app.factory("CatalogService", ["$http", "$q", function($http, $q)
{
  service = {};
  service.getApiPath = function()
  {
    return "./api/catalogs";
  };

  service.fetchAll = function()
  {
    return $q(function(resolve, reject)
    {
      $http.get(service.getApiPath())
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

  service.get = function(catalog)
  {
    return $q(function(resolve, reject)
    {
      $http.get(service.getApiPath()+"/"+catalog.id)
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
      $http.post(service.getApiPath(), catalog)
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

  service.update = function(catalog)
  {
    return $q(function(resolve, reject)
    {
      $http.patch(service.getApiPath()+"/"+catalog.id, catalog)
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

  service.delete = function(catalog)
  {
    return $q(function(resolve, reject)
    {
      $http.delete(service.getApiPath()+"/"+catalog.id)
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