# frozen_string_literal: true

class AddBloodToPeoples < ActiveRecord::Migration[6.1]
  def change
    add_reference :people, :bloods, index: true, null: false, default: 1
  end
end
