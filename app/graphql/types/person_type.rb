# frozen_string_literal: true

module Types
  class PersonType < Types::BaseObject
    field :id, ID, null: false
    field :lastName, String, null: true
    field :firstName, String, null: true
    field :status, Float, null: true
    field :userType, String, null: true
    field :email, String, null: true
    field :address, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :blood_id, Integer, null: false
    field :branch_id, Integer, null: false
    field :branch, Types::BranchType, {
      null: false,
      description: 'Branch or Dept of the Employee related',
    }
    field :blood, Types::BloodType, { null: false, description: 'Persons Blood Details' }
    field :name, String, null: false

    def name
      [object.lastName, object.firstName].compact.join(' ')
    end
  end
end
