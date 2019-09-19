Rails.application.routes.draw do
  devise_for :users
  root to: 'projects#index'
  get "about", to: "pages#about"
  resources :projects, only: [:index, :show, :create, :new, :edit, :update, :destroy] do
    resources :canvases
  end
end
