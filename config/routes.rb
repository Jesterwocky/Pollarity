Rails.application.routes.draw do
  resources :users, only:[:new, :create], defaults: { format: 'json' }
end
