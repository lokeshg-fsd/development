# frozen_string_literal: true

class AddNameToBlood < ActiveRecord::Migration[6.1]
  def up
    add_column :bloods, :name, :string

    Blood.all.each do |blood|
      Blood.find(blood.id).update(name: blood.group)
    end
  end

  def down
    remove_column :bloods, :name
  end
end
