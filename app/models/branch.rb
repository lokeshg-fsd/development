class Branch < ApplicationRecord
  self.table_name = 'branches'
  self.primary_key = 'id'

  has_many :persons, class_name: 'Person'
end
