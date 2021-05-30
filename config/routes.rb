# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#index'

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: 'graphql#execute'
  end
  post '/graphql', to: 'graphql#execute'

  get 'pages', to: 'pages#index'
  get 'persons', to: 'persons#index'
  get 'persons/status', to: 'persons#by_status'
  get 'grouped_persons', to: 'persons#grouped'
  post 'new_employee', to: 'persons#create'
  post 'update_employee', to: 'persons#update'
  get 'remove_employee', to: 'persons#delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
