# frozen_string_literal: true

class Person < ApplicationRecord
  belongs_to :blood, foreign_key: 'blood_id'
  belongs_to :branch, foreign_key: 'branch_id'
end
