class Api::CatalogsController < Api::BaseController
  def index
    json_response Catalog.all
  end

  def show
    json_response Catalog.find(params[:id])
  end
end