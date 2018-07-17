class Api::AreasController < Api::BaseController
  def index
    json_response current_catalog.areas
  end

  def show
    json_response current_area
  end

  def create
    area = current_catalog.areas.create! area_params

    json_response area, :created
  end

  def update
    current_area.update area_params

    json_response current_area, :ok
  end

  def destroy
    current_area.destroy!

    json_response nil, :no_content
  end

  private

  def area_params
    params.permit(:name)
  end

  def current_area
    current_catalog.areas.find params[:id]
  end

  def current_catalog
    Catalog.find params[:catalog_id]
  end
end