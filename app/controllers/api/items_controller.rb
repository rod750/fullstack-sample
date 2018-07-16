class Api::ItemsController < Api::BaseController
  def index
    json_response current_area.items
  end

  def show
    json_response current_area.items.find params[:id]
  end

  def current_area
    Area.find params[:area_id]
  end
end