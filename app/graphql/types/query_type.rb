# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :bloods, [Types::BloodType], {
      null: false,
      description: 'return all Bloods Groups',
    }
    field :employees, [Types::PersonType], {
      null: false,
      description: 'retruns All Employees',
    }
    field :departments, [Types::BranchType], {
      null: false,
      description: 'Branch or Departments Details',
    }
    field :users, [Types::UserType], null: false

    def users
      User.all
    end

    def bloods
      Blood.all
    end

    def employees
      Person.all
    end

    def departments
      Branch.all
    end
  end
end
