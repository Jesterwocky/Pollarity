Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api do
    resources :users, only:[:new, :create], defaults: { format: 'json' }
    resource :session, only:[:new, :create, :destroy]

    resources :surveys, defaults: { format: 'json' }
  end
end
