# frozen_string_literal: true

Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin-portal', as: 'rails_admin'
  devise_for :users
  # root to: 'pages#index'

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: 'graphql#execute'
  end
  post '/graphql', to: 'graphql#execute'

  devise_scope :user do
    get '/signout', to: 'devise/sessions#destroy', as: :signout
  end

  get '/admin/dashboard', to: 'pages#dashboard'
  get 'pages', to: 'pages#index'
  get 'persons', to: 'persons#index'
  get 'persons/status', to: 'persons#by_status'
  get 'grouped_persons', to: 'persons#grouped'
  post 'new_employee', to: 'persons#create'
  post 'update_employee', to: 'persons#update'
  get 'remove_employee', to: 'persons#delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
