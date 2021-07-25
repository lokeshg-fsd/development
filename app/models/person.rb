# frozen_string_literal: true

class Person < ApplicationRecord
  belongs_to :blood
  belongs_to :branch

  scope :only_admins, -> { where("userType Like 'Admin%'") }
end
