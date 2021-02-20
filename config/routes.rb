Rails.application.routes.draw do
  get 'pages', to: 'pages#index'
  get 'persons', to: 'persons#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
