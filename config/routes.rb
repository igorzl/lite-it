Rails.application.routes.draw do
  get 'projects/show'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "dashboard", to: "pages#dashboard"
  resources :projects, only: [:index, :show, :destroy]
end
