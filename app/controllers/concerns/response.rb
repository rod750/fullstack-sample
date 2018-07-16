module Response
  def json_response(object, status = :ok)
    render json: { error: false, data: object }, status: status
  end
end