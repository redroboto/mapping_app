Rails.application.routes.draw do
  devise_for :users
  
  root 'locations#home'

  resources :locations, only: [:index, :show]

  get "/map", to: "locations#index"
  get "/report", to: "locations#report"
  get "/timeline", to: "locations#timeline"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
