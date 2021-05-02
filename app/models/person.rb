# frozen_string_literal: true

class Person < ApplicationRecord
  belongs_to :blood, :inverse_of
  belongs_to :branch, :inverse_of
end
