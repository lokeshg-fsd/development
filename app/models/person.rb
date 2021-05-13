# frozen_string_literal: true

class Person < ApplicationRecord
  belongs_to :blood
  belongs_to :branch
end
