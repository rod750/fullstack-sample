module ExceptionHandler
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordNotFound do |e|
      json_response({ error: true, message: e.message }, :not_found)
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      json_response({ error: true, message: e.message }, :unprocessable_entity)
    end

    rescue_from StandardError do
      json_response({ error: true, message: e.message }, :internal_server_error)
    end
  end
end