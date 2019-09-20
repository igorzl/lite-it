Rails.application.routes.draw do
  devise_for :users
  # root to: 'projects#index'
  root to: 'pages#home'
  get "about", to: "pages#about"
  resources :canvases, only: [ :update, :destroy ]
  resources :projects do
    resources :canvases, only: [ :new, :create, :edit, :show ]
  end
end
