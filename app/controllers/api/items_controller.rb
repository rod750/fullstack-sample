class Api::ItemsController < Api::BaseController
  def index
    json_response current_area.items
  end

  def show
    json_response current_item
  end

  def create
    item = current_area.items.create! item_params

    json_response item, :created
  end

  def update
    current_item.update item_params

    json_response current_item, :ok
  end

  def destroy
    current_item.destroy!

    json_response nil, :no_content
  end

  private

  def current_area
    Area.find params[:area_id]
  end

  def current_item
    current_area.items.find params[:id]
  end

  def item_params
    params.permit(:name)
  end
end