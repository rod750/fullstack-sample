app.factory("AreaService", function($http, CatalogService)
{
  service = angular.copy(CatalogService);

  service.setCatalogId = function(id)
  {
    service.catalogId = id;
  };

  service.getApiPath = function()
  {
    return "./api/catalogs/"+this.catalogId+"/areas";
  };

  return service;
});