class Api::CatalogsController < Api::BaseController
  def index
    json_response Catalog.all
  end

  def show
    json_response current_catalog
  end

  def create
    catalog = Catalog.create! catalog_params

    json_response catalog, :created
  end

  def update
    current_catalog.update catalog_params

    json_response current_catalog, :ok
  end

  def destroy
    current_catalog.destroy!

    json_response nil, :no_content
  end

  private

  def current_catalog
    Catalog.find params[:id]
  end

  def catalog_params
    params.permit(:name)
  end
end