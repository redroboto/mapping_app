Rails.application.routes.draw do
  root 'locations#home'

  get "/map", to: "locations#index"
  get "/report", to: "locations#report"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
