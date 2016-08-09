Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: 'json' } do

    resources :users, only:[:new, :create] do
      resources :surveys, only:[:index, :show]
      resources :responses, only:[:index]
    end

    resource :session, only:[:new, :create, :destroy]

    resources :surveys do
      resources :responses, only:[:index]
    end

    resources :responses, except:[:index, :new]
  end
end
