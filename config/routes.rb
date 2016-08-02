Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only:[:new, :create], defaults: { format: 'json' }
end
