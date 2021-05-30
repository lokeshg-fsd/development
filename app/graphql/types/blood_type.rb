# frozen_string_literal: true

module Types
  class BloodType < Types::BaseObject
    field :id, ID, null: false
    field :group, String, null: false
    field :value, Integer, null: true
    field :description, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :persons, [Types::PersonType], null: false

    def persons
      Person.where(blood_id: object.id)
    end
  end
end
