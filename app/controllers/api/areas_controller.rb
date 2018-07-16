class Api::AreasController < Api::BaseController
  def index
    json_response current_catalog.areas
  end

  def show
    json_response current_catalog.areas.find params[:id]
  end

  def current_catalog
    Catalog.find params[:catalog_id]
  end
end