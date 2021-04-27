Rails.application.routes.draw do
  # get 'root', to: 'application'
  get 'pages', to: 'pages#index'
  get 'persons', to: 'persons#index'
  get 'persons/status', to: 'persons#by_status'
  get 'grouped_persons', to: 'persons#grouped'
  get 'new_employee', to: 'persons#create'
  get 'update_employee', to: 'persons#update'
  get 'remove_employee', to: 'persons#delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
