Rails.application.routes.draw do
  devise_for :users
  root to: 'projects#index'
  get "about", to: "pages#about"
  resources :projects, only: [:index, :show, :create, :new, :edit, :update, :destroy] do
    collection do
      patch :sort
    end
    resources :canvases, only: [:new, :create]
  end

  resources :canvases, only: [:edit, :show, :update, :delete] do
    member do
      patch :update_notes
    end
  end
end
