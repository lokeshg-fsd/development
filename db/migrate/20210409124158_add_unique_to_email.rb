# frozen_string_literal: true

class AddUniqueToEmail < ActiveRecord::Migration[6.1]
  def change
    add_index :branches, [:email], :unique
  end
end
