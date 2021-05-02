# frozen_string_literal: true

class Blood < ApplicationRecord
  self.table_name = 'bloods'
  self.primary_key = 'id'

  has_one :person
end
