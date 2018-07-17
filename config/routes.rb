Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :catalogs do
      resources :areas do
        resources :items do
        end
      end
    end
  end

  resource :admin
end
