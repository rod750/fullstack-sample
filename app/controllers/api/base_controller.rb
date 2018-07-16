class Api::BaseController < ActionController::API
  include Response
  include ExceptionHandler
end