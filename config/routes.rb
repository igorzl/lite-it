Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get "about", to: "pages#about"
  get "home", to: "pages#home"
  resources :projects, only: [:index, :show, :create, :new, :edit, :update, :destroy] do
    collection do
      patch :sort
    end
    resources :canvases, only: [:new, :create]
  end

  resources :canvases, only: [:edit, :show, :update, :delete] do
    member do
      patch :update_notes
      patch :update_name
      patch :update_photo
    end
  end
end
