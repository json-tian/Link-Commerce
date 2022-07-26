Rails.application.routes.draw do
  resources :orders
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    omniauth_callbacks: 'users/omniauth_callbacks'
  }
  namespace :api do
    namespace :v1 do
      resources :shops do
        resources :products
        resources :orders
      end
      # get 'register', to: 'users/sessions#new'
      # post 'sign_in', to: 'users/sessions#create'
      # post 'sign_out', to: 'users/sessions#destroy'
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
