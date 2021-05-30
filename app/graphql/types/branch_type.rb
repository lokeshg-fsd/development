# frozen_string_literal: true

module Types
  class BranchType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :email, String, null: false
    field :address, String, null: true
    field :phone, Integer, null: true
    field :password, String, null: false
    field :dealer, String, null: true
    field :description, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :employees, [Types::PersonType], null: false

    def employees
      Person.where(branch_id: object.id)
    end
  end
end
