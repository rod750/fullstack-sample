app.factory("ItemService", function($http, CatalogService)
{
  service = angular.copy(CatalogService);

  service.setCatalogId = function(id)
  {
    service.catalogId = id;
  };

  service.setAreaId = function(id)
  {
    service.areaId = id;
  }

  service.getApiPath = function()
  {
    return "./api/catalogs/"+this.catalogId+"/areas/"+this.areaId+"/items";
  };

  return service;
});